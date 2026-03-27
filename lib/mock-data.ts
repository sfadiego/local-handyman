export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  provider: {
    name: string;
    rating: number;
    reviewCount: number;
    avatar: string;
    verified: boolean;
  };
  price: {
    min: number;
    max: number;
    unit: string;
  };
  location: {
    address: string;
    distance: number; // in kilometers
    lat: number;
    lng: number;
  };
  availability: string[];
  tags: string[];
  images: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  location: {
    address: string;
    lat: number;
    lng: number;
  };
}

export const mockUser: User = {
  id: "user1",
  name: "María González",
  email: "maria@email.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  location: {
    address: "Colonia Roma Norte, CDMX",
    lat: 19.4164,
    lng: -99.1578
  }
};

export const mockServices: Service[] = [
  {
    id: "1",
    title: "Plomería y Reparaciones",
    description: "Servicios completos de plomería: reparación de llaves, destapado de drenajes, instalación de regaderas, y mantenimiento general.",
    category: "Plomería",
    provider: {
      name: "Carlos Jiménez",
      rating: 4.9,
      reviewCount: 127,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      verified: true
    },
    price: {
      min: 300,
      max: 1500,
      unit: "MXN"
    },
    location: {
      address: "Colonia Doctores, CDMX",
      distance: 2.3,
      lat: 19.4236,
      lng: -99.1438
    },
    availability: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    tags: ["Urgencias 24/7", "Garantía", "Materiales incluidos"],
    images: ["https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400"]
  },
  {
    id: "2",
    title: "Electricista Certificado",
    description: "Instalaciones eléctricas, reparación de contactos, instalación de ventiladores, iluminación LED y revisiones de seguridad.",
    category: "Electricidad",
    provider: {
      name: "Ana Rodríguez",
      rating: 4.8,
      reviewCount: 89,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
      verified: true
    },
    price: {
      min: 250,
      max: 2000,
      unit: "MXN"
    },
    location: {
      address: "Colonia Condesa, CDMX",
      distance: 1.8,
      lat: 19.4113,
      lng: -99.1725
    },
    availability: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    tags: ["Certificada CFE", "Seguro incluido", "Materiales de calidad"],
    images: ["https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400"]
  },
  {
    id: "3",
    title: "Carpintería y Muebles",
    description: "Fabricación y reparación de muebles, closets a medida, reparación de puertas y ventanas de madera.",
    category: "Carpintería",
    provider: {
      name: "Roberto Hernández",
      rating: 4.7,
      reviewCount: 156,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto",
      verified: true
    },
    price: {
      min: 500,
      max: 5000,
      unit: "MXN"
    },
    location: {
      address: "Colonia Del Valle, CDMX",
      distance: 3.2,
      lat: 19.3839,
      lng: -99.1635
    },
    availability: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    tags: ["Maderas finas", "Diseños personalizados", "25 años experiencia"],
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400"]
  },
  {
    id: "4",
    title: "Limpieza Profunda",
    description: "Servicio de limpieza para hogar y oficina. Limpieza profunda, mantenimiento regular, limpieza post-construcción.",
    category: "Limpieza",
    provider: {
      name: "Lucía Martínez",
      rating: 4.9,
      reviewCount: 203,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucia",
      verified: true
    },
    price: {
      min: 200,
      max: 800,
      unit: "MXN/hora"
    },
    location: {
      address: "Colonia Polanco, CDMX",
      distance: 4.1,
      lat: 19.4326,
      lng: -99.1915
    },
    availability: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    tags: ["Productos ecológicos", "Personal capacitado", "Seguro de responsabilidad"],
    images: ["https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400"]
  },
  {
    id: "5",
    title: "Pintura y Decoración",
    description: "Servicios de pintura interior y exterior, aplicación de texturas decorativas, restauración de fachadas.",
    category: "Pintura",
    provider: {
      name: "Miguel Torres",
      rating: 4.6,
      reviewCount: 78,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel",
      verified: false
    },
    price: {
      min: 80,
      max: 150,
      unit: "MXN/m²"
    },
    location: {
      address: "Colonia Narvarte, CDMX",
      distance: 2.8,
      lat: 19.3967,
      lng: -99.1581
    },
    availability: ["Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    tags: ["Pinturas de marca", "Trabajo limpio", "Presupuesto gratuito"],
    images: ["https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400"]
  },
  {
    id: "6",
    title: "Jardinería y Paisajismo",
    description: "Diseño y mantenimiento de jardines, poda de árboles, instalación de sistemas de riego, plantas ornamentales.",
    category: "Jardinería",
    provider: {
      name: "Patricia Silva",
      rating: 4.8,
      reviewCount: 94,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Patricia",
      verified: true
    },
    price: {
      min: 400,
      max: 1200,
      unit: "MXN"
    },
    location: {
      address: "Colonia San Rafael, CDMX",
      distance: 3.7,
      lat: 19.4469,
      lng: -99.1598
    },
    availability: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    tags: ["Plantas certificadas", "Diseño sustentable", "Mantenimiento incluido"],
    images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400"]
  }
];

export const categories = [
  { id: "plomeria", name: "Plomería", icon: "🔧", count: 45 },
  { id: "electricidad", name: "Electricidad", icon: "⚡", count: 32 },
  { id: "carpinteria", name: "Carpintería", icon: "🔨", count: 28 },
  { id: "limpieza", name: "Limpieza", icon: "🧽", count: 67 },
  { id: "pintura", name: "Pintura", icon: "🎨", count: 23 },
  { id: "jardineria", name: "Jardinería", icon: "🌱", count: 19 },
  { id: "refrigeracion", name: "Refrigeración", icon: "❄️", count: 15 },
  { id: "cerrajeria", name: "Cerrajería", icon: "🔐", count: 21 }
];