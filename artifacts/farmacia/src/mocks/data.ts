// Mock data for pharmacy presentation — remove src/mocks import in main.tsx to restore real API

export const mockDashboardSummary = {
  dailyRevenue: 2847.50,
  dailySales: 23,
  lowStockCount: 3,
  expiringCount: 2,
  monthlyRevenue: 52840.00,
  pendingPurchases: 2,
  activeCustomers: 8,
  anvisaAlerts: 1,
};

export const mockMonthlySales = [
  { month: "Jun/25", revenue: 41250, salesCount: 187 },
  { month: "Jul/25", revenue: 43890, salesCount: 198 },
  { month: "Ago/25", revenue: 45100, salesCount: 205 },
  { month: "Set/25", revenue: 44780, salesCount: 201 },
  { month: "Out/25", revenue: 47320, salesCount: 214 },
  { month: "Nov/25", revenue: 49850, salesCount: 227 },
  { month: "Dez/25", revenue: 58400, salesCount: 265 },
  { month: "Jan/26", revenue: 46700, salesCount: 211 },
  { month: "Fev/26", revenue: 48930, salesCount: 222 },
  { month: "Mar/26", revenue: 51240, salesCount: 232 },
  { month: "Abr/26", revenue: 53180, salesCount: 241 },
  { month: "Mai/26", revenue: 52840, salesCount: 239 },
];

export const mockTopProducts = [
  { productId: 1,  productName: "Dipirona Sódica 500mg",     quantitySold: 524, revenue: 4663.60 },
  { productId: 2,  productName: "Paracetamol 750mg",          quantitySold: 389, revenue: 3112.00 },
  { productId: 6,  productName: "Losartana Potássica 50mg",   quantitySold: 312, revenue: 3900.00 },
  { productId: 3,  productName: "Ibuprofeno 600mg",           quantitySold: 298, revenue: 3874.00 },
  { productId: 7,  productName: "Metformina 850mg",           quantitySold: 287, revenue: 2870.00 },
  { productId: 5,  productName: "Omeprazol 20mg",             quantitySold: 274, revenue: 3973.00 },
  { productId: 14, productName: "Loratadina 10mg",            quantitySold: 251, revenue: 2008.00 },
  { productId: 13, productName: "Vitamina D3 2000UI",         quantitySold: 223, revenue: 4237.00 },
];

export const mockProducts = [
  { id: 1,  name: "Dipirona Sódica 500mg",    genericName: "Dipirona",                  barcode: "7891058006831", category: "Analgésico",                 manufacturer: "EMS Pharma",                           dosage: "500mg",  unit: "comprimido", costPrice: 3.50,  salePrice: 8.90,  minStock: 50, currentStock: 142, isControlled: false, anvisaCode: null,            requiresPrescription: false, createdAt: "2025-01-10T08:00:00Z" },
  { id: 2,  name: "Paracetamol 750mg",         genericName: "Paracetamol",               barcode: "7891058007852", category: "Analgésico",                 manufacturer: "Medley Farmacêutica",                  dosage: "750mg",  unit: "comprimido", costPrice: 4.00,  salePrice: 8.00,  minStock: 50, currentStock: 89,  isControlled: false, anvisaCode: null,            requiresPrescription: false, createdAt: "2025-01-10T08:00:00Z" },
  { id: 3,  name: "Ibuprofeno 600mg",          genericName: "Ibuprofeno",                barcode: "7891058009510", category: "Anti-inflamatório",           manufacturer: "Aché Laboratórios",                    dosage: "600mg",  unit: "comprimido", costPrice: 6.20,  salePrice: 13.00, minStock: 30, currentStock: 67,  isControlled: false, anvisaCode: null,            requiresPrescription: false, createdAt: "2025-01-15T09:00:00Z" },
  { id: 4,  name: "Amoxicilina 500mg",         genericName: "Amoxicilina",               barcode: "7891058010019", category: "Antibiótico",                 manufacturer: "Eurofarma",                            dosage: "500mg",  unit: "cápsula",    costPrice: 8.80,  salePrice: 22.50, minStock: 30, currentStock: 45,  isControlled: false, anvisaCode: null,            requiresPrescription: true,  createdAt: "2025-01-15T09:00:00Z" },
  { id: 5,  name: "Omeprazol 20mg",            genericName: "Omeprazol",                 barcode: "7891058011213", category: "Antiácido",                   manufacturer: "EMS Pharma",                           dosage: "20mg",   unit: "cápsula",    costPrice: 7.50,  salePrice: 14.50, minStock: 40, currentStock: 23,  isControlled: false, anvisaCode: null,            requiresPrescription: false, createdAt: "2025-01-20T10:00:00Z" },
  { id: 6,  name: "Losartana Potássica 50mg",  genericName: "Losartana",                 barcode: "7891058012507", category: "Anti-hipertensivo",           manufacturer: "Medley Farmacêutica",                  dosage: "50mg",   unit: "comprimido", costPrice: 6.90,  salePrice: 12.50, minStock: 40, currentStock: 78,  isControlled: false, anvisaCode: null,            requiresPrescription: true,  createdAt: "2025-01-25T11:00:00Z" },
  { id: 7,  name: "Metformina 850mg",          genericName: "Metformina",                barcode: "7891058013694", category: "Antidiabético",               manufacturer: "Aché Laboratórios",                    dosage: "850mg",  unit: "comprimido", costPrice: 5.20,  salePrice: 10.00, minStock: 40, currentStock: 56,  isControlled: false, anvisaCode: null,            requiresPrescription: true,  createdAt: "2025-02-01T08:00:00Z" },
  { id: 8,  name: "Atorvastatina 20mg",        genericName: "Atorvastatina",             barcode: "7891058014786", category: "Antilipêmico",                manufacturer: "Eurofarma",                            dosage: "20mg",   unit: "comprimido", costPrice: 12.00, salePrice: 28.90, minStock: 30, currentStock: 34,  isControlled: false, anvisaCode: null,            requiresPrescription: true,  createdAt: "2025-02-05T09:00:00Z" },
  { id: 9,  name: "Enalapril 10mg",            genericName: "Enalapril Maleato",         barcode: "7891058015870", category: "Anti-hipertensivo",           manufacturer: "Medley Farmacêutica",                  dosage: "10mg",   unit: "comprimido", costPrice: 5.80,  salePrice: 11.90, minStock: 30, currentStock: 61,  isControlled: false, anvisaCode: null,            requiresPrescription: true,  createdAt: "2025-02-10T10:00:00Z" },
  { id: 10, name: "Clonazepam 2mg",            genericName: "Clonazepam",                barcode: "7891058016963", category: "Ansiolítico",                 manufacturer: "Roche",                                dosage: "2mg",    unit: "comprimido", costPrice: 22.50, salePrice: 48.90, minStock: 20, currentStock: 15,  isControlled: true,  anvisaCode: "C1/2024-98765", requiresPrescription: true,  createdAt: "2025-02-15T11:00:00Z" },
  { id: 11, name: "Sertralina 50mg",           genericName: "Cloridrato de Sertralina",  barcode: "7891058018058", category: "Antidepressivo",              manufacturer: "EMS Pharma",                           dosage: "50mg",   unit: "comprimido", costPrice: 18.00, salePrice: 42.00, minStock: 20, currentStock: 28,  isControlled: true,  anvisaCode: "C1/2024-12340", requiresPrescription: true,  createdAt: "2025-02-20T08:00:00Z" },
  { id: 12, name: "Levotiroxina 50mcg",        genericName: "Levotiroxina Sódica",       barcode: "7891058019149", category: "Hormônio Tireoidiano",        manufacturer: "Aché Laboratórios",                    dosage: "50mcg",  unit: "comprimido", costPrice: 9.50,  salePrice: 19.90, minStock: 30, currentStock: 42,  isControlled: false, anvisaCode: null,            requiresPrescription: true,  createdAt: "2025-02-25T09:00:00Z" },
  { id: 13, name: "Vitamina D3 2000UI",        genericName: "Colecalciferol",            barcode: "7891058020232", category: "Suplemento",                  manufacturer: "Cimed Indústria de Medicamentos",      dosage: "2000UI", unit: "cápsula",    costPrice: 8.40,  salePrice: 19.00, minStock: 30, currentStock: 110, isControlled: false, anvisaCode: null,            requiresPrescription: false, createdAt: "2025-03-01T10:00:00Z" },
  { id: 14, name: "Loratadina 10mg",           genericName: "Loratadina",                barcode: "7891058021326", category: "Antialérgico",                manufacturer: "Medley Farmacêutica",                  dosage: "10mg",   unit: "comprimido", costPrice: 3.20,  salePrice: 8.00,  minStock: 40, currentStock: 95,  isControlled: false, anvisaCode: null,            requiresPrescription: false, createdAt: "2025-03-05T11:00:00Z" },
  { id: 15, name: "AAS 100mg",                 genericName: "Ácido Acetilsalicílico",    barcode: "7891058022410", category: "Antiagregante Plaquetário",   manufacturer: "Bayer",                                dosage: "100mg",  unit: "comprimido", costPrice: 12.50, salePrice: 26.90, minStock: 20, currentStock: 4,   isControlled: false, anvisaCode: null,            requiresPrescription: false, createdAt: "2025-03-10T08:00:00Z" },
];

const si = (id: number, productId: number, productName: string, qty: number, price: number, disc = 0) => ({
  id, productId, productName, quantity: qty, unitPrice: price, discount: disc, total: price * qty - disc,
});

export const mockSales = [
  { id: 1,  customerId: 4, customerName: "Roberto Fernandes Lima",    customerCpf: "456.789.012-34", userId: 4, userName: "Bianca Ferreira", items: [si(1,6,"Losartana Potássica 50mg",2,12.50),si(2,9,"Enalapril 10mg",1,11.90),si(3,13,"Vitamina D3 2000UI",1,19.00)], subtotal: 55.90, discount: 0,    total: 55.90, paymentMethod: "cartao_credito", status: "concluida", createdAt: "2026-05-15T09:14:22Z" },
  { id: 2,  customerId: 1, customerName: "Maria Silva Santos",         customerCpf: "123.456.789-01", userId: 4, userName: "Bianca Ferreira", items: [si(4,1,"Dipirona Sódica 500mg",3,8.90),si(5,14,"Loratadina 10mg",2,8.00)],                                     subtotal: 42.70, discount: 2.70, total: 40.00, paymentMethod: "pix",            status: "concluida", createdAt: "2026-05-15T08:47:03Z" },
  { id: 3,  customerId: null, customerName: null,                      customerCpf: null,             userId: 4, userName: "Bianca Ferreira", items: [si(6,2,"Paracetamol 750mg",1,8.00),si(7,3,"Ibuprofeno 600mg",1,13.00)],                                      subtotal: 21.00, discount: 0,    total: 21.00, paymentMethod: "dinheiro",        status: "concluida", createdAt: "2026-05-15T08:22:45Z" },
  { id: 4,  customerId: 2, customerName: "João Carlos Oliveira",       customerCpf: "234.567.890-12", userId: 4, userName: "Bianca Ferreira", items: [si(8,7,"Metformina 850mg",2,10.00),si(9,8,"Atorvastatina 20mg",1,28.90)],                                   subtotal: 48.90, discount: 0,    total: 48.90, paymentMethod: "cartao_debito",   status: "concluida", createdAt: "2026-05-15T07:58:11Z" },
  { id: 5,  customerId: 7, customerName: "Carla Regina Souza",         customerCpf: "789.012.345-67", userId: 4, userName: "Bianca Ferreira", items: [si(10,4,"Amoxicilina 500mg",1,22.50)],                                                                      subtotal: 22.50, discount: 0,    total: 22.50, paymentMethod: "pix",            status: "concluida", createdAt: "2026-05-14T16:33:27Z" },
  { id: 6,  customerId: 3, customerName: "Ana Paula Costa",            customerCpf: "345.678.901-23", userId: 4, userName: "Bianca Ferreira", items: [si(11,5,"Omeprazol 20mg",2,14.50),si(12,12,"Levotiroxina 50mcg",1,19.90)],                                  subtotal: 48.90, discount: 0,    total: 48.90, paymentMethod: "convenio",        status: "concluida", createdAt: "2026-05-14T15:10:44Z" },
  { id: 7,  customerId: 6, customerName: "Pedro Augusto Mendes",       customerCpf: "678.901.234-56", userId: 4, userName: "Bianca Ferreira", items: [si(13,6,"Losartana Potássica 50mg",1,12.50),si(14,2,"Paracetamol 750mg",2,8.00)],                            subtotal: 28.50, discount: 0,    total: 28.50, paymentMethod: "dinheiro",        status: "concluida", createdAt: "2026-05-14T14:22:09Z" },
  { id: 8,  customerId: null, customerName: null,                      customerCpf: null,             userId: 4, userName: "Bianca Ferreira", items: [si(15,13,"Vitamina D3 2000UI",2,19.00)],                                                                    subtotal: 38.00, discount: 0,    total: 38.00, paymentMethod: "cartao_credito",  status: "concluida", createdAt: "2026-05-14T11:45:32Z" },
  { id: 9,  customerId: 8, customerName: "Fernando Dias Pereira",      customerCpf: "890.123.456-78", userId: 4, userName: "Bianca Ferreira", items: [si(16,11,"Sertralina 50mg",1,42.00),si(17,1,"Dipirona Sódica 500mg",2,8.90)],                               subtotal: 59.80, discount: 0,    total: 59.80, paymentMethod: "pix",            status: "concluida", createdAt: "2026-05-13T16:07:55Z" },
  { id: 10, customerId: 5, customerName: "Luciana Barbosa Mendes",     customerCpf: "567.890.123-45", userId: 4, userName: "Bianca Ferreira", items: [si(18,14,"Loratadina 10mg",1,8.00),si(19,2,"Paracetamol 750mg",1,8.00)],                                    subtotal: 16.00, discount: 0,    total: 16.00, paymentMethod: "dinheiro",        status: "concluida", createdAt: "2026-05-13T10:30:18Z" },
  { id: 11, customerId: 1, customerName: "Maria Silva Santos",         customerCpf: "123.456.789-01", userId: 4, userName: "Bianca Ferreira", items: [si(20,1,"Dipirona Sódica 500mg",2,8.90),si(21,5,"Omeprazol 20mg",1,14.50)],                                 subtotal: 32.30, discount: 0,    total: 32.30, paymentMethod: "cartao_credito",  status: "concluida", createdAt: "2026-05-12T14:15:40Z" },
  { id: 12, customerId: 4, customerName: "Roberto Fernandes Lima",     customerCpf: "456.789.012-34", userId: 4, userName: "Bianca Ferreira", items: [si(22,15,"AAS 100mg",1,26.90),si(23,6,"Losartana Potássica 50mg",1,12.50)],                                  subtotal: 39.40, discount: 0,    total: 39.40, paymentMethod: "convenio",        status: "concluida", createdAt: "2026-05-12T09:55:22Z" },
];

export const mockCustomers = [
  { id: 1, name: "Maria Silva Santos",         cpf: "123.456.789-01", email: "maria.silva@email.com",       phone: "(11) 98765-4321", birthDate: "1968-03-15", address: "Rua das Flores, 142 — São Paulo, SP",       loyaltyPoints: 1240, totalPurchases: 87,  createdAt: "2025-01-15T10:00:00Z" },
  { id: 2, name: "João Carlos Oliveira",        cpf: "234.567.890-12", email: "joao.oliveira@email.com",     phone: "(11) 97654-3210", birthDate: "1955-07-22", address: "Av. Paulista, 1000, ap 301 — São Paulo, SP", loyaltyPoints: 980,  totalPurchases: 64,  createdAt: "2025-01-20T11:00:00Z" },
  { id: 3, name: "Ana Paula Costa",             cpf: "345.678.901-23", email: "ana.costa@email.com",         phone: "(11) 96543-2109", birthDate: "1982-11-08", address: "Rua Augusta, 567 — São Paulo, SP",           loyaltyPoints: 450,  totalPurchases: 29,  createdAt: "2025-02-01T09:00:00Z" },
  { id: 4, name: "Roberto Fernandes Lima",      cpf: "456.789.012-34", email: "roberto.lima@email.com",      phone: "(11) 95432-1098", birthDate: "1948-01-30", address: "Rua Oscar Freire, 78 — São Paulo, SP",       loyaltyPoints: 1850, totalPurchases: 123, createdAt: "2025-01-10T08:00:00Z" },
  { id: 5, name: "Luciana Barbosa Mendes",      cpf: "567.890.123-45", email: "luciana.barbosa@email.com",   phone: "(11) 94321-0987", birthDate: "1990-06-14", address: "Rua da Consolação, 234 — São Paulo, SP",     loyaltyPoints: 320,  totalPurchases: 21,  createdAt: "2025-02-10T10:00:00Z" },
  { id: 6, name: "Pedro Augusto Mendes",        cpf: "678.901.234-56", email: "pedro.mendes@email.com",      phone: "(11) 93210-9876", birthDate: "1972-09-05", address: "Al. Santos, 890 — São Paulo, SP",            loyaltyPoints: 720,  totalPurchases: 47,  createdAt: "2025-02-15T11:00:00Z" },
  { id: 7, name: "Carla Regina Souza",          cpf: "789.012.345-67", email: "carla.souza@email.com",       phone: "(11) 92109-8765", birthDate: "1985-04-20", address: "Rua Haddock Lobo, 321 — São Paulo, SP",     loyaltyPoints: 560,  totalPurchases: 36,  createdAt: "2025-03-01T09:00:00Z" },
  { id: 8, name: "Fernando Dias Pereira",       cpf: "890.123.456-78", email: "fernando.pereira@email.com",  phone: "(11) 91098-7654", birthDate: "1963-12-11", address: "Rua Pamplona, 456 — São Paulo, SP",          loyaltyPoints: 1120, totalPurchases: 74,  createdAt: "2025-01-25T08:00:00Z" },
];

export const mockSuppliers = [
  { id: 1, name: "Sanfarma Distribuidora LTDA",                cnpj: "12.345.678/0001-90", email: "compras@sanfarma.com.br",          phone: "(11) 3456-7890", contact: "Carlos Eduardo",  address: "Av. Industrial, 1250 — Guarulhos, SP",              createdAt: "2025-01-05T08:00:00Z" },
  { id: 2, name: "Ação Distribuidora de Medicamentos",         cnpj: "23.456.789/0001-01", email: "pedidos@acaodistribuidora.com.br",  phone: "(11) 2345-6789", contact: "Fernanda Castro", address: "Rua Comercial, 450 — Santo André, SP",               createdAt: "2025-01-08T09:00:00Z" },
  { id: 3, name: "Profarma Distribuidora S.A.",                cnpj: "34.567.890/0001-12", email: "atendimento@profarma.com.br",       phone: "(21) 3456-7891", contact: "Ricardo Alves",   address: "Av. Brasil, 5.200 — Rio de Janeiro, RJ",             createdAt: "2025-01-12T10:00:00Z" },
  { id: 4, name: "União Química Farmacêutica Nacional S.A.",   cnpj: "45.678.901/0001-23", email: "vendas@uniaoquimica.com.br",        phone: "(11) 4567-8902", contact: "Amanda Lopes",    address: "Rod. Anhanguera, km 25 — Pouso Alegre, MG",          createdAt: "2025-01-15T11:00:00Z" },
];

export const mockStockLots = [
  { id: 1,  productId: 1,  productName: "Dipirona Sódica 500mg",    lotNumber: "DIP-2026-001", quantity: 200, expirationDate: "2027-12-31", supplierId: 1, supplierName: "Sanfarma Distribuidora LTDA",              receivedAt: "2026-04-01T08:00:00Z", costPrice: 3.50  },
  { id: 2,  productId: 2,  productName: "Paracetamol 750mg",         lotNumber: "PAR-2026-001", quantity: 150, expirationDate: "2027-10-31", supplierId: 1, supplierName: "Sanfarma Distribuidora LTDA",              receivedAt: "2026-04-02T09:00:00Z", costPrice: 4.00  },
  { id: 3,  productId: 3,  productName: "Ibuprofeno 600mg",          lotNumber: "IBU-2026-001", quantity: 100, expirationDate: "2027-08-31", supplierId: 2, supplierName: "Ação Distribuidora de Medicamentos",       receivedAt: "2026-04-05T10:00:00Z", costPrice: 6.20  },
  { id: 4,  productId: 4,  productName: "Amoxicilina 500mg",         lotNumber: "AMO-2026-001", quantity: 80,  expirationDate: "2027-06-30", supplierId: 2, supplierName: "Ação Distribuidora de Medicamentos",       receivedAt: "2026-04-08T11:00:00Z", costPrice: 8.80  },
  { id: 5,  productId: 5,  productName: "Omeprazol 20mg",            lotNumber: "OME-2026-001", quantity: 60,  expirationDate: "2027-09-30", supplierId: 1, supplierName: "Sanfarma Distribuidora LTDA",              receivedAt: "2026-04-10T08:00:00Z", costPrice: 7.50  },
  { id: 6,  productId: 6,  productName: "Losartana Potássica 50mg",  lotNumber: "LOS-2026-001", quantity: 120, expirationDate: "2028-03-31", supplierId: 3, supplierName: "Profarma Distribuidora S.A.",              receivedAt: "2026-04-12T09:00:00Z", costPrice: 6.90  },
  { id: 7,  productId: 7,  productName: "Metformina 850mg",          lotNumber: "MET-2026-001", quantity: 100, expirationDate: "2028-01-31", supplierId: 3, supplierName: "Profarma Distribuidora S.A.",              receivedAt: "2026-04-15T10:00:00Z", costPrice: 5.20  },
  { id: 8,  productId: 8,  productName: "Atorvastatina 20mg",        lotNumber: "ATO-2026-001", quantity: 80,  expirationDate: "2027-11-30", supplierId: 4, supplierName: "União Química Farmacêutica Nacional S.A.", receivedAt: "2026-04-18T11:00:00Z", costPrice: 12.00 },
  { id: 9,  productId: 10, productName: "Clonazepam 2mg",            lotNumber: "CLO-2026-001", quantity: 40,  expirationDate: "2027-07-31", supplierId: 4, supplierName: "União Química Farmacêutica Nacional S.A.", receivedAt: "2026-04-20T08:00:00Z", costPrice: 22.50 },
  { id: 10, productId: 11, productName: "Sertralina 50mg",           lotNumber: "SER-2026-001", quantity: 60,  expirationDate: "2027-05-31", supplierId: 4, supplierName: "União Química Farmacêutica Nacional S.A.", receivedAt: "2026-04-22T09:00:00Z", costPrice: 18.00 },
  { id: 11, productId: 13, productName: "Vitamina D3 2000UI",        lotNumber: "VIT-2026-001", quantity: 150, expirationDate: "2027-12-31", supplierId: 1, supplierName: "Sanfarma Distribuidora LTDA",              receivedAt: "2026-04-25T10:00:00Z", costPrice: 8.40  },
  { id: 12, productId: 14, productName: "Loratadina 10mg",           lotNumber: "LOR-2026-001", quantity: 120, expirationDate: "2028-02-28", supplierId: 2, supplierName: "Ação Distribuidora de Medicamentos",       receivedAt: "2026-04-28T11:00:00Z", costPrice: 3.20  },
  { id: 13, productId: 15, productName: "AAS 100mg",                 lotNumber: "AAS-2026-001", quantity: 50,  expirationDate: "2026-06-30", supplierId: 1, supplierName: "Sanfarma Distribuidora LTDA",              receivedAt: "2026-05-01T08:00:00Z", costPrice: 12.50 },
  { id: 14, productId: 12, productName: "Levotiroxina 50mcg",        lotNumber: "LEV-2026-001", quantity: 80,  expirationDate: "2026-07-31", supplierId: 3, supplierName: "Profarma Distribuidora S.A.",              receivedAt: "2026-05-05T09:00:00Z", costPrice: 9.50  },
  { id: 15, productId: 9,  productName: "Enalapril 10mg",            lotNumber: "ENA-2026-001", quantity: 100, expirationDate: "2028-04-30", supplierId: 2, supplierName: "Ação Distribuidora de Medicamentos",       receivedAt: "2026-05-08T10:00:00Z", costPrice: 5.80  },
];

export const mockStockMovements = [
  { id: 1, productId: 1,  productName: "Dipirona Sódica 500mg",    type: "entrada", quantity: 200,  reason: "Compra — NF 45678",          userId: 3, userName: "Marcus Vinícius",   createdAt: "2026-04-01T08:00:00Z" },
  { id: 2, productId: 5,  productName: "Omeprazol 20mg",            type: "saida",   quantity: 37,   reason: "Vendas do período",           userId: 4, userName: "Bianca Ferreira",  createdAt: "2026-05-10T14:30:00Z" },
  { id: 3, productId: 15, productName: "AAS 100mg",                 type: "ajuste",  quantity: -46,  reason: "Acerto de inventário",        userId: 3, userName: "Marcus Vinícius",   createdAt: "2026-05-08T09:15:00Z" },
  { id: 4, productId: 10, productName: "Clonazepam 2mg",            type: "saida",   quantity: 25,   reason: "Dispensação controlada",      userId: 2, userName: "Dra. Camila Rocha", createdAt: "2026-05-07T11:00:00Z" },
  { id: 5, productId: 13, productName: "Vitamina D3 2000UI",        type: "entrada", quantity: 150,  reason: "Compra — NF 45701",           userId: 3, userName: "Marcus Vinícius",   createdAt: "2026-04-25T10:00:00Z" },
  { id: 6, productId: 6,  productName: "Losartana Potássica 50mg",  type: "saida",   quantity: 42,   reason: "Vendas do período",           userId: 4, userName: "Bianca Ferreira",  createdAt: "2026-05-12T16:00:00Z" },
  { id: 7, productId: 11, productName: "Sertralina 50mg",           type: "saida",   quantity: 32,   reason: "Dispensação controlada",      userId: 2, userName: "Dra. Camila Rocha", createdAt: "2026-05-09T10:30:00Z" },
  { id: 8, productId: 14, productName: "Loratadina 10mg",           type: "entrada", quantity: 120,  reason: "Compra — NF 45712",           userId: 3, userName: "Marcus Vinícius",   createdAt: "2026-04-28T11:00:00Z" },
];

export const mockPrescriptions = [
  { id: 1, customerId: 2, customerName: "João Carlos Oliveira",  doctorName: "Dr. Marcos Antônio Rezende", doctorCrm: "CRM-SP 98765", prescriptionDate: "2026-05-10", expirationDate: "2026-08-10", items: [{ productId: 7,  productName: "Metformina 850mg",    quantity: 2, dosageInstructions: "1 comprimido 2x ao dia com refeições" }, { productId: 8,  productName: "Atorvastatina 20mg",  quantity: 1, dosageInstructions: "1 comprimido à noite" }],                                                       status: "pendente",   notes: "Paciente diabético tipo 2 em acompanhamento",    createdAt: "2026-05-10T15:30:00Z" },
  { id: 2, customerId: 3, customerName: "Ana Paula Costa",       doctorName: "Dra. Renata Gomes Cardoso",   doctorCrm: "CRM-SP 54321", prescriptionDate: "2026-05-08", expirationDate: "2026-06-08", items: [{ productId: 4,  productName: "Amoxicilina 500mg",   quantity: 1, dosageInstructions: "1 cápsula 3x ao dia por 7 dias" }],                                                                                                                           status: "dispensada", notes: "Infecção bacteriana — tratamento de curta duração", createdAt: "2026-05-08T10:15:00Z" },
  { id: 3, customerId: 8, customerName: "Fernando Dias Pereira", doctorName: "Dr. Paulo Henrique Martins",  doctorCrm: "CRM-SP 11223", prescriptionDate: "2026-05-12", expirationDate: "2026-11-12", items: [{ productId: 11, productName: "Sertralina 50mg",     quantity: 1, dosageInstructions: "1 comprimido pela manhã" },            { productId: 10, productName: "Clonazepam 2mg",     quantity: 1, dosageInstructions: "1/2 comprimido à noite se necessário" }], status: "pendente",   notes: "Transtorno de ansiedade generalizada",           createdAt: "2026-05-12T14:00:00Z" },
];

export const mockControlledDispensations = [
  { id: 1, customerId: 8, customerName: "Fernando Dias Pereira", customerCpf: "890.123.456-78", productId: 11, productName: "Sertralina 50mg",  prescriptionId: 3, quantity: 1, anvisaClass: "C1", notificationNumber: "NOTIF-2026-SP-00041", retentionRequired: true, retained: true, dispensedBy: "Dra. Camila Rocha", createdAt: "2026-05-13T16:07:55Z" },
  { id: 2, customerId: 8, customerName: "Fernando Dias Pereira", customerCpf: "890.123.456-78", productId: 10, productName: "Clonazepam 2mg",    prescriptionId: 3, quantity: 1, anvisaClass: "C1", notificationNumber: "NOTIF-2026-SP-00042", retentionRequired: true, retained: true, dispensedBy: "Dra. Camila Rocha", createdAt: "2026-05-13T16:08:30Z" },
  { id: 3, customerId: 6, customerName: "Pedro Augusto Mendes",  customerCpf: "678.901.234-56", productId: 11, productName: "Sertralina 50mg",  prescriptionId: null, quantity: 1, anvisaClass: "C1", notificationNumber: "NOTIF-2026-SP-00038", retentionRequired: true, retained: true, dispensedBy: "Dra. Camila Rocha", createdAt: "2026-05-05T09:30:00Z" },
];

export const mockPurchases = [
  { id: 1, supplierId: 1, supplierName: "Sanfarma Distribuidora LTDA",              items: [{ productId: 5,  productName: "Omeprazol 20mg",            quantity: 100, unitCost: 7.50,  total: 750.00  }, { productId: 15, productName: "AAS 100mg",                 quantity: 100, unitCost: 12.50, total: 1250.00 }],                                                                          total: 2000.00, status: "pendente", expectedDate: "2026-05-20", receivedDate: null,                   notes: "Urgente — produtos com estoque crítico",           createdAt: "2026-05-14T09:00:00Z" },
  { id: 2, supplierId: 4, supplierName: "União Química Farmacêutica Nacional S.A.", items: [{ productId: 10, productName: "Clonazepam 2mg",            quantity: 50,  unitCost: 22.50, total: 1125.00 }],                                                                                                                                                                           total: 1125.00, status: "pendente", expectedDate: "2026-05-22", receivedDate: null,                   notes: "Controlado — aguardar autorização ANVISA",         createdAt: "2026-05-13T14:30:00Z" },
  { id: 3, supplierId: 2, supplierName: "Ação Distribuidora de Medicamentos",       items: [{ productId: 9,  productName: "Enalapril 10mg",            quantity: 100, unitCost: 5.80,  total: 580.00  }, { productId: 3,  productName: "Ibuprofeno 600mg",          quantity: 80,  unitCost: 6.20,  total: 496.00  }],                                                                  total: 1076.00, status: "recebido", expectedDate: "2026-05-08", receivedDate: "2026-05-08T11:00:00Z", notes: null,                                               createdAt: "2026-05-05T10:00:00Z" },
  { id: 4, supplierId: 3, supplierName: "Profarma Distribuidora S.A.",              items: [{ productId: 6,  productName: "Losartana Potássica 50mg",  quantity: 120, unitCost: 6.90,  total: 828.00  }, { productId: 7,  productName: "Metformina 850mg",          quantity: 100, unitCost: 5.20,  total: 520.00  }],                                                                  total: 1348.00, status: "recebido", expectedDate: "2026-04-15", receivedDate: "2026-04-15T09:00:00Z", notes: null,                                               createdAt: "2026-04-10T08:00:00Z" },
  { id: 5, supplierId: 1, supplierName: "Sanfarma Distribuidora LTDA",              items: [{ productId: 1,  productName: "Dipirona Sódica 500mg",    quantity: 200, unitCost: 3.50,  total: 700.00  }, { productId: 2,  productName: "Paracetamol 750mg",         quantity: 150, unitCost: 4.00,  total: 600.00  }, { productId: 13, productName: "Vitamina D3 2000UI", quantity: 150, unitCost: 8.40, total: 1260.00 }], total: 2560.00, status: "recebido", expectedDate: "2026-04-01", receivedDate: "2026-04-01T08:00:00Z", notes: "Pedido mensal de reposição",                        createdAt: "2026-03-28T09:00:00Z" },
];

export const mockFinancialTransactions = [
  { id: 1,  type: "receita", category: "Vendas Balcão",     description: "Faturamento do dia 14/05/2026",           amount: 2847.50, dueDate: "2026-05-14", paidDate: "2026-05-14", status: "pago",    createdAt: "2026-05-14T18:00:00Z" },
  { id: 2,  type: "receita", category: "Convênio",          description: "Repasse Unimed — competência Abr/26",     amount: 4520.00, dueDate: "2026-05-15", paidDate: null,          status: "pendente", createdAt: "2026-05-01T09:00:00Z" },
  { id: 3,  type: "receita", category: "Vendas Balcão",     description: "Faturamento do dia 13/05/2026",           amount: 3125.80, dueDate: "2026-05-13", paidDate: "2026-05-13", status: "pago",    createdAt: "2026-05-13T18:00:00Z" },
  { id: 4,  type: "despesa", category: "Fornecedores",      description: "NF 45678 — Sanfarma Distribuidora",       amount: 2000.00, dueDate: "2026-05-20", paidDate: null,          status: "pendente", createdAt: "2026-05-14T09:00:00Z" },
  { id: 5,  type: "despesa", category: "Fornecedores",      description: "NF 45645 — União Química Farmacêutica",   amount: 1125.00, dueDate: "2026-05-22", paidDate: null,          status: "pendente", createdAt: "2026-05-13T14:30:00Z" },
  { id: 6,  type: "despesa", category: "Folha de Pagamento",description: "Salários — Maio/2026",                    amount: 12800.00,dueDate: "2026-05-30", paidDate: null,          status: "pendente", createdAt: "2026-05-01T08:00:00Z" },
  { id: 7,  type: "despesa", category: "Aluguel",           description: "Aluguel do ponto comercial — Maio/2026",  amount: 4500.00, dueDate: "2026-05-10", paidDate: "2026-05-10", status: "pago",    createdAt: "2026-05-01T08:00:00Z" },
  { id: 8,  type: "despesa", category: "Utilidades",        description: "Energia elétrica — Abr/26",               amount: 780.00,  dueDate: "2026-05-12", paidDate: "2026-05-12", status: "pago",    createdAt: "2026-05-05T08:00:00Z" },
  { id: 9,  type: "receita", category: "Vendas Balcão",     description: "Faturamento do dia 12/05/2026",           amount: 2950.40, dueDate: "2026-05-12", paidDate: "2026-05-12", status: "pago",    createdAt: "2026-05-12T18:00:00Z" },
  { id: 10, type: "despesa", category: "Marketing",         description: "Flyers e material gráfico — Maio/26",     amount: 320.00,  dueDate: "2026-05-15", paidDate: "2026-05-15", status: "pago",    createdAt: "2026-05-10T10:00:00Z" },
];

export const mockCashflow = {
  totalReceivable: 4520.00,
  totalPayable:    15925.00,
  balance:         23400.50,
  overdueReceivable: 0,
  overduePayable:    0,
};

export const mockUsers = [
  { id: 1, name: "Gustavo Mendes",       email: "gustavo@farmasystem.com.br",        role: "admin",        active: true, lastLogin: "2026-05-15T08:00:00Z", createdAt: "2025-01-01T00:00:00Z" },
  { id: 2, name: "Dra. Camila Rocha",    email: "camila.rocha@farmasystem.com.br",   role: "farmaceutico", active: true, lastLogin: "2026-05-15T07:45:00Z", createdAt: "2025-01-05T08:00:00Z" },
  { id: 3, name: "Marcus Vinícius",      email: "marcus.vinicius@farmasystem.com.br",role: "gerente",      active: true, lastLogin: "2026-05-14T17:30:00Z", createdAt: "2025-01-10T09:00:00Z" },
  { id: 4, name: "Bianca Ferreira",      email: "bianca.ferreira@farmasystem.com.br",role: "atendente",    active: true, lastLogin: "2026-05-15T09:00:00Z", createdAt: "2025-02-01T10:00:00Z" },
];
