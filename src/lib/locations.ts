export interface Location {
  id: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  mapQuery: string;
  description: string;
  image: string;
}

export const locations: Location[] = [
  {
    id: "bogota",
    city: "Bogotá",
    address: "Zona de aeropuerto El Dorado y zona norte",
    phone: "+57 302 8491534",
    hours: "Lun - Sáb: 8:00 AM - 6:00 PM",
    mapQuery: "Bogota+Colombia",
    description: "Capital de Colombia. Punto de entrega en aeropuerto El Dorado y zona norte de la ciudad.",
    image: "/locations/bogota.jpg",
  },
  {
    id: "medellin",
    city: "Medellín",
    address: "Zona de aeropuerto José María Córdova",
    phone: "+57 302 8491534",
    hours: "Lun - Sáb: 8:00 AM - 6:00 PM",
    mapQuery: "Medellin+Colombia",
    description: "La ciudad de la eterna primavera. Entrega en aeropuerto y zona El Poblado.",
    image: "/locations/medellin.jpg",
  },
  {
    id: "cali",
    city: "Cali",
    address: "Zona de aeropuerto Alfonso Bonilla Aragón",
    phone: "+57 302 8491534",
    hours: "Lun - Sáb: 8:00 AM - 6:00 PM",
    mapQuery: "Cali+Colombia",
    description: "La sucursal del cielo. Capital de la salsa. Entrega en aeropuerto y zona sur.",
    image: "/locations/cali.jpg",
  },
  {
    id: "cartagena",
    city: "Cartagena",
    address: "Zona de aeropuerto Rafael Núñez",
    phone: "+57 302 8491534",
    hours: "Lun - Sáb: 8:00 AM - 6:00 PM",
    mapQuery: "Cartagena+Colombia",
    description: "La ciudad heroica. Recoge tu vehículo en el aeropuerto o en la zona turística de Bocagrande.",
    image: "/locations/cartagena.jpg",
  },
  {
    id: "barranquilla",
    city: "Barranquilla",
    address: "Zona de aeropuerto Ernesto Cortissoz",
    phone: "+57 302 8491534",
    hours: "Lun - Sáb: 8:00 AM - 6:00 PM",
    mapQuery: "Barranquilla+Colombia",
    description: "La puerta de oro de Colombia. Entrega en aeropuerto y zona norte.",
    image: "/locations/barranquilla.jpg",
  },
  {
    id: "pereira",
    city: "Pereira",
    address: "Zona de aeropuerto Matecaña",
    phone: "+57 302 8491534",
    hours: "Lun - Sáb: 8:00 AM - 6:00 PM",
    mapQuery: "Pereira+Colombia",
    description: "Corazón del Eje Cafetero. Ideal para recorrer el paisaje cultural cafetero.",
    image: "/locations/pereira.jpg",
  },
];

export function getLocationById(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}
