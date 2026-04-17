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

// Wolf Rent a Car opera únicamente en Bogotá. Se añadirán más ciudades en el futuro.
export const locations: Location[] = [
  {
    id: "bogota",
    city: "Bogotá",
    address: "Aeropuerto El Dorado y zona norte",
    phone: "+57 302 849 1534",
    hours: "Lun – Sáb: 8:00 AM – 6:00 PM",
    mapQuery: "Bogota+Colombia",
    description:
      "Entrega y devolución en el aeropuerto El Dorado o en la zona norte de la ciudad. Te coordinamos el punto que mejor te quede.",
    image: "/locations/bogota.jpg",
  },
];

export function getLocationById(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}
