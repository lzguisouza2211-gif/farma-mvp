// Intercepts window.fetch so all /api/* calls return mock data.
// To disable: remove `import './mocks'` from main.tsx.

import {
  mockCashflow,
  mockControlledDispensations,
  mockCustomers,
  mockDashboardSummary,
  mockFinancialTransactions,
  mockMonthlySales,
  mockProducts,
  mockPrescriptions,
  mockPurchases,
  mockSales,
  mockStockLots,
  mockStockMovements,
  mockSuppliers,
  mockTopProducts,
  mockUsers,
} from './data';

console.info('[mock] API mock ativo — dados simulados para apresentação');

const _fetch = window.fetch.bind(window);
let _uid = 1000;
const uid = () => ++_uid;

// In-memory store — mutations persist for the duration of the session
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const store: Record<string, any[]> = {
  products:     [...mockProducts],
  customers:    [...mockCustomers],
  suppliers:    [...mockSuppliers],
  sales:        [...mockSales],
  prescriptions:[...mockPrescriptions],
  controlled:   [...mockControlledDispensations],
  purchases:    [...mockPurchases],
  transactions: [...mockFinancialTransactions],
  users:        [...mockUsers],
  stockLots:    [...mockStockLots],
  stockMovements:[...mockStockMovements],
};

function ok(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function notFound(): Response {
  return new Response(JSON.stringify({ message: 'Not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
}

function noContent(): Response {
  return new Response(null, { status: 204 });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseBody(init?: RequestInit): Record<string, any> | null {
  try { return init?.body ? JSON.parse(init.body as string) : null; }
  catch { return null; }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function route(path: string, method: string, q: URLSearchParams, body: Record<string, any> | null): Response | null {
  // Health
  if (path === '/api/healthz') return ok({ status: 'ok' });

  // ── Dashboard ────────────────────────────────────────────────────────────
  if (path === '/api/dashboard/summary')       return ok(mockDashboardSummary);
  if (path === '/api/dashboard/recent-sales')  return ok(store.sales.slice(0, 10));
  if (path === '/api/dashboard/top-products')  return ok(mockTopProducts);
  if (path === '/api/dashboard/monthly-sales') return ok(mockMonthlySales);
  if (path === '/api/dashboard/low-stock')     return ok(store.products.filter((p) => p.currentStock <= p.minStock));

  // ── Products ─────────────────────────────────────────────────────────────
  if (path === '/api/products' && method === 'GET') {
    let list = [...store.products];
    const sq   = q.get('q');
    const cat  = q.get('category');
    const ctrl = q.get('controlled');
    if (sq)            list = list.filter((p) => p.name.toLowerCase().includes(sq.toLowerCase()) || (p.genericName ?? '').toLowerCase().includes(sq.toLowerCase()));
    if (cat)           list = list.filter((p) => p.category === cat);
    if (ctrl !== null) list = list.filter((p) => p.isControlled === (ctrl === 'true'));
    return ok(list);
  }
  if (path === '/api/products' && method === 'POST' && body) {
    const p = { id: uid(), createdAt: new Date().toISOString(), ...body };
    store.products.push(p);
    return ok(p, 201);
  }

  const barcodeM = path.match(/^\/api\/products\/barcode\/(.+)$/);
  if (barcodeM) {
    const found = store.products.find((p) => p.barcode === barcodeM[1]);
    return found ? ok(found) : notFound();
  }

  const productM = path.match(/^\/api\/products\/(\d+)$/);
  if (productM) {
    const id = Number(productM[1]);
    if (method === 'PUT' && body) {
      const i = store.products.findIndex((p) => p.id === id);
      if (i < 0) return notFound();
      store.products[i] = { ...store.products[i], ...body };
      return ok(store.products[i]);
    }
    if (method === 'DELETE') {
      store.products = store.products.filter((p) => p.id !== id);
      return noContent();
    }
  }

  // ── Stock ─────────────────────────────────────────────────────────────────
  if (path === '/api/stock' && method === 'GET') return ok(store.stockLots);
  if (path === '/api/stock/entry' && method === 'POST' && body) {
    const lot = { id: uid(), receivedAt: new Date().toISOString(), ...body };
    store.stockLots.push(lot);
    return ok(lot, 201);
  }
  if (path === '/api/stock/movements') {
    const pid = q.get('productId');
    return ok(pid ? store.stockMovements.filter((m) => m.productId === Number(pid)) : store.stockMovements);
  }
  if (path === '/api/stock/adjust' && method === 'POST' && body) {
    const mv = { id: uid(), type: 'ajuste', createdAt: new Date().toISOString(), ...body };
    store.stockMovements.unshift(mv);
    return ok(mv, 201);
  }

  // ── Sales ─────────────────────────────────────────────────────────────────
  if (path === '/api/sales' && method === 'GET') {
    let list = [...store.sales];
    const start = q.get('startDate');
    const end   = q.get('endDate');
    if (start) list = list.filter((s) => new Date(s.createdAt) >= new Date(start));
    if (end)   list = list.filter((s) => new Date(s.createdAt) <= new Date(end));
    return ok(list);
  }
  if (path === '/api/sales' && method === 'POST' && body) {
    const items = ((body.items ?? []) as Array<{ productId: number; quantity: number; discount?: number }>).map((i) => {
      const prod = store.products.find((p) => p.id === i.productId);
      const unitPrice = prod?.salePrice ?? 0;
      const discount  = i.discount ?? 0;
      return { id: uid(), productId: i.productId, productName: prod?.name ?? 'Produto', quantity: i.quantity, unitPrice, discount, total: unitPrice * i.quantity - discount };
    });
    const subtotal = items.reduce((s, i) => s + i.total, 0);
    const disc = Number(body.discount ?? 0);
    const sale = { id: uid(), customerId: body.customerId ?? null, customerName: null, customerCpf: body.customerCpf ?? null, userId: 4, userName: 'Bianca Ferreira', items, subtotal, discount: disc, total: subtotal - disc, paymentMethod: body.paymentMethod, status: 'concluida', createdAt: new Date().toISOString() };
    store.sales.unshift(sale);
    return ok(sale, 201);
  }

  // ── Customers — check /sales sub-route before /:id ───────────────────────
  const custSalesM = path.match(/^\/api\/customers\/(\d+)\/sales$/);
  if (custSalesM) return ok(store.sales.filter((s) => s.customerId === Number(custSalesM[1])));

  if (path === '/api/customers' && method === 'GET') {
    const sq = q.get('q');
    let list = [...store.customers];
    if (sq) list = list.filter((c) => c.name.toLowerCase().includes(sq.toLowerCase()) || (c.cpf ?? '').includes(sq));
    return ok(list);
  }
  if (path === '/api/customers' && method === 'POST' && body) {
    const c = { id: uid(), loyaltyPoints: 0, totalPurchases: 0, createdAt: new Date().toISOString(), ...body };
    store.customers.push(c);
    return ok(c, 201);
  }
  const custM = path.match(/^\/api\/customers\/(\d+)$/);
  if (custM) {
    const id = Number(custM[1]);
    if (method === 'PUT' && body) {
      const i = store.customers.findIndex((c) => c.id === id);
      if (i < 0) return notFound();
      store.customers[i] = { ...store.customers[i], ...body };
      return ok(store.customers[i]);
    }
    if (method === 'DELETE') { store.customers = store.customers.filter((c) => c.id !== id); return noContent(); }
  }

  // ── Suppliers ─────────────────────────────────────────────────────────────
  if (path === '/api/suppliers' && method === 'GET') return ok(store.suppliers);
  if (path === '/api/suppliers' && method === 'POST' && body) {
    const s = { id: uid(), createdAt: new Date().toISOString(), ...body };
    store.suppliers.push(s);
    return ok(s, 201);
  }
  const suppM = path.match(/^\/api\/suppliers\/(\d+)$/);
  if (suppM) {
    const id = Number(suppM[1]);
    if (method === 'PUT' && body) {
      const i = store.suppliers.findIndex((s) => s.id === id);
      if (i < 0) return notFound();
      store.suppliers[i] = { ...store.suppliers[i], ...body };
      return ok(store.suppliers[i]);
    }
    if (method === 'DELETE') { store.suppliers = store.suppliers.filter((s) => s.id !== id); return noContent(); }
  }

  // ── Prescriptions ─────────────────────────────────────────────────────────
  if (path === '/api/prescriptions' && method === 'GET') return ok(store.prescriptions);
  if (path === '/api/prescriptions' && method === 'POST' && body) {
    const rx = { id: uid(), status: 'pendente', createdAt: new Date().toISOString(), ...body };
    store.prescriptions.push(rx);
    return ok(rx, 201);
  }

  // ── Controlled ────────────────────────────────────────────────────────────
  if (path === '/api/controlled' && method === 'GET') return ok(store.controlled);
  if (path === '/api/controlled' && method === 'POST' && body) {
    const d = { id: uid(), dispensedBy: 'Dra. Camila Rocha', createdAt: new Date().toISOString(), ...body };
    store.controlled.push(d);
    return ok(d, 201);
  }

  // ── Purchases ─────────────────────────────────────────────────────────────
  if (path === '/api/purchases' && method === 'GET') return ok(store.purchases);
  if (path === '/api/purchases' && method === 'POST' && body) {
    const p = { id: uid(), status: 'pendente', createdAt: new Date().toISOString(), ...body };
    store.purchases.push(p);
    return ok(p, 201);
  }
  const purchM = path.match(/^\/api\/purchases\/(\d+)$/);
  if (purchM) {
    const id = Number(purchM[1]);
    if (method === 'PUT' && body) {
      const i = store.purchases.findIndex((p) => p.id === id);
      if (i < 0) return notFound();
      store.purchases[i] = { ...store.purchases[i], ...body };
      return ok(store.purchases[i]);
    }
  }

  // ── Financial ─────────────────────────────────────────────────────────────
  if (path === '/api/financial/cashflow')                                    return ok(mockCashflow);
  if (path === '/api/financial/transactions' && method === 'GET')            return ok(store.transactions);
  if (path === '/api/financial/transactions' && method === 'POST' && body) {
    const tx = { id: uid(), status: 'pendente', createdAt: new Date().toISOString(), ...body };
    store.transactions.push(tx);
    return ok(tx, 201);
  }
  if (path === '/api/financial/accounts-payable')    return ok(store.transactions.filter((t) => t.type === 'despesa'));
  if (path === '/api/financial/accounts-receivable') return ok(store.transactions.filter((t) => t.type === 'receita'));

  // ── Users ─────────────────────────────────────────────────────────────────
  if (path === '/api/users' && method === 'GET') return ok(store.users);
  if (path === '/api/users' && method === 'POST' && body) {
    const u = { id: uid(), lastLogin: null, createdAt: new Date().toISOString(), ...body };
    store.users.push(u);
    return ok(u, 201);
  }
  const userM = path.match(/^\/api\/users\/(\d+)$/);
  if (userM) {
    const id = Number(userM[1]);
    if (method === 'PUT' && body) {
      const i = store.users.findIndex((u) => u.id === id);
      if (i < 0) return notFound();
      store.users[i] = { ...store.users[i], ...body };
      return ok(store.users[i]);
    }
    if (method === 'DELETE') { store.users = store.users.filter((u) => u.id !== id); return noContent(); }
  }

  return null;
}

window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
  const raw = typeof input === 'string' ? input : input instanceof URL ? input.href : (input as Request).url;
  if (!raw.startsWith('/api/')) return _fetch(input, init);

  await new Promise<void>((r) => setTimeout(r, 80));

  const [rawPath, qs] = raw.split('?');
  const q      = new URLSearchParams(qs ?? '');
  const method = (init?.method ?? (input instanceof Request ? (input as Request).method : 'GET')).toUpperCase();
  const body   = parseBody(init);

  return route(rawPath, method, q, body) ?? _fetch(input, init);
};
