export interface Vehicle {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  brand: string;
  model: string;
  year: number;
  passengers: number;
  doors: number;
  transmission: "Manual" | "Automática";
  ac: boolean;
  bags: number;
  fuelType: string;
  pricePerDay: number;
  image: string;
  features: string[];
  available: boolean;
}

export const vehicleCategories = [
  { slug: "compact", name: "Compacto", icon: "car" },
  { slug: "suv-compact", name: "SUV Compacta", icon: "truck" },
  { slug: "sedan", name: "Sedán", icon: "car" },
  { slug: "suv", name: "SUV", icon: "truck" },
  { slug: "van", name: "Van / Camioneta", icon: "bus" },
  { slug: "premium", name: "Premium", icon: "crown" },
];

export const vehicles: Vehicle[] = [
  {
    id: "renault-logan",
    name: "Renault Logan",
    category: "Compacto",
    categorySlug: "compact",
    brand: "Renault",
    model: "Logan",
    year: 2024,
    passengers: 5,
    doors: 4,
    transmission: "Manual",
    ac: true,
    bags: 2,
    fuelType: "Gasolina",
    pricePerDay: 120000,
    image: "/vehicles/compact.jpg",
    features: ["Aire acondicionado", "Dirección hidráulica", "Radio Bluetooth", "USB", "Vidrios eléctricos"],
    available: true,
  },
  {
    id: "renault-sandero",
    name: "Renault Sandero",
    category: "Compacto",
    categorySlug: "compact",
    brand: "Renault",
    model: "Sandero",
    year: 2024,
    passengers: 5,
    doors: 4,
    transmission: "Manual",
    ac: true,
    bags: 2,
    fuelType: "Gasolina",
    pricePerDay: 115000,
    image: "/vehicles/compact2.jpg",
    features: ["Aire acondicionado", "Dirección hidráulica", "Radio Bluetooth", "Vidrios eléctricos"],
    available: true,
  },
  {
    id: "renault-duster",
    name: "Renault Duster",
    category: "SUV Compacta",
    categorySlug: "suv-compact",
    brand: "Renault",
    model: "Duster",
    year: 2024,
    passengers: 5,
    doors: 4,
    transmission: "Manual",
    ac: true,
    bags: 3,
    fuelType: "Gasolina",
    pricePerDay: 180000,
    image: "/vehicles/suv-compact.jpg",
    features: ["Aire acondicionado", "4x2", "Dirección hidráulica", "Radio Bluetooth", "USB", "Vidrios eléctricos", "Cámara de reversa"],
    available: true,
  },
  {
    id: "chevrolet-onix-sedan",
    name: "Chevrolet Onix Sedán",
    category: "Sedán",
    categorySlug: "sedan",
    brand: "Chevrolet",
    model: "Onix Sedán",
    year: 2024,
    passengers: 5,
    doors: 4,
    transmission: "Automática",
    ac: true,
    bags: 3,
    fuelType: "Gasolina",
    pricePerDay: 150000,
    image: "/vehicles/sedan.jpg",
    features: ["Aire acondicionado", "Transmisión automática", "Radio Bluetooth", "USB", "Vidrios eléctricos", "Airbags"],
    available: true,
  },
  {
    id: "kia-sportage",
    name: "Kia Sportage",
    category: "SUV",
    categorySlug: "suv",
    brand: "Kia",
    model: "Sportage",
    year: 2024,
    passengers: 5,
    doors: 4,
    transmission: "Automática",
    ac: true,
    bags: 4,
    fuelType: "Gasolina",
    pricePerDay: 250000,
    image: "/vehicles/suv.jpg",
    features: ["Aire acondicionado", "Automática", "4x2", "Radio pantalla táctil", "Cámara 360°", "Sensores de parqueo", "Techo panorámico"],
    available: true,
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    category: "SUV",
    categorySlug: "suv",
    brand: "Toyota",
    model: "Fortuner",
    year: 2024,
    passengers: 7,
    doors: 4,
    transmission: "Automática",
    ac: true,
    bags: 4,
    fuelType: "Diésel",
    pricePerDay: 350000,
    image: "/vehicles/suv-premium.jpg",
    features: ["Aire acondicionado", "4x4", "Automática", "7 pasajeros", "Pantalla táctil", "Cámara de reversa", "Sensores de parqueo"],
    available: true,
  },
  {
    id: "toyota-hiace",
    name: "Toyota HiAce",
    category: "Van / Camioneta",
    categorySlug: "van",
    brand: "Toyota",
    model: "HiAce",
    year: 2024,
    passengers: 15,
    doors: 4,
    transmission: "Manual",
    ac: true,
    bags: 6,
    fuelType: "Diésel",
    pricePerDay: 400000,
    image: "/vehicles/van.jpg",
    features: ["Aire acondicionado", "15 pasajeros", "Equipaje amplio", "Radio", "Vidrios eléctricos"],
    available: true,
  },
  {
    id: "chevrolet-traverse",
    name: "Chevrolet Traverse",
    category: "Premium",
    categorySlug: "premium",
    brand: "Chevrolet",
    model: "Traverse",
    year: 2024,
    passengers: 7,
    doors: 4,
    transmission: "Automática",
    ac: true,
    bags: 5,
    fuelType: "Gasolina",
    pricePerDay: 450000,
    image: "/vehicles/premium.jpg",
    features: ["Aire acondicionado dual", "7 pasajeros", "Automática", "Pantalla táctil 8\"", "Apple CarPlay", "Android Auto", "Asientos en cuero", "Techo panorámico"],
    available: true,
  },
];

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id);
}

export function getVehiclesByCategory(categorySlug: string): Vehicle[] {
  return vehicles.filter((v) => v.categorySlug === categorySlug);
}

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
