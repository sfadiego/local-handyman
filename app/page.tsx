"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockServices, categories, mockUser } from "@/lib/mock-data";
import {
  Search,
  MapPin,
  Star,
  Shield,
  Clock,
  ArrowRight,
  Users,
  Zap,
  Award,
  CheckCircle
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredServices = mockServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Encuentra el mejor
              <span className="block text-black">servicio cerca de ti</span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
              Conectamos personas que necesitan servicios con profesionales verificados en tu área.
              Rápido, confiable y cerca de casa.
            </p>

            {/* Search Section */}
            <div className="mt-12">
              <div className="mx-auto max-w-2xl">
                <div className="flex flex-col sm:flex-row gap-4 p-2 bg-gray-50 rounded-2xl">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="¿Qué servicio necesitas?"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-xl bg-white border border-gray-200 py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    />
                  </div>
                  <div className="relative flex-1">
                    <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Tu ubicación"
                      defaultValue={mockUser.location.address}
                      className="w-full rounded-xl bg-white border border-gray-200 py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
                    />
                  </div>
                  <Link href="/search">
                    <Button
                      size="lg"
                      className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold"
                    >
                      Buscar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8 mx-auto max-w-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-black">500+</div>
                <div className="text-sm text-gray-600 mt-1">Profesionales</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black">10K+</div>
                <div className="text-sm text-gray-600 mt-1">Servicios realizados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-black">4.9</div>
                <div className="text-sm text-gray-600 mt-1">Calificación promedio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              ¿Qué servicio necesitas?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explora nuestras categorías más populares
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )}
                className={`group relative bg-white rounded-2xl p-8 text-center transition-all hover:shadow-lg hover:-translate-y-1 ${
                  selectedCategory === category.name
                    ? 'ring-2 ring-black shadow-lg -translate-y-1'
                    : 'border border-gray-200'
                }`}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} servicios</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">
                Servicios destacados
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                {filteredServices.length} profesionales cerca de ti
              </p>
            </div>
            {selectedCategory && (
              <Button
                variant="outline"
                onClick={() => setSelectedCategory(null)}
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Limpiar filtros
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.slice(0, 6).map((service) => (
              <Card key={service.id} className="border-gray-200 hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="h-48 w-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                      {service.category}
                    </span>
                  </div>
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Provider Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={service.provider.avatar}
                      alt={service.provider.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{service.provider.name}</span>
                        {service.provider.verified && (
                          <CheckCircle className="h-4 w-4 text-gray-900" />
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Star className="h-3 w-3 fill-gray-900 text-gray-900" />
                        <span>{service.provider.rating}</span>
                        <span>({service.provider.reviewCount})</span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Location */}
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-xl font-bold text-gray-900">
                        ${service.price.min} - ${service.price.max}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">{service.price.unit}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      {service.location.distance} km
                    </div>
                  </div>

                  <Button className="w-full bg-black hover:bg-gray-800 text-white">
                    Contactar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/search">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Ver todos los servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              ¿Cómo funciona?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Es muy fácil encontrar y contratar el servicio que necesitas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 mb-6">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Busca</h3>
              <p className="text-gray-600">
                Busca el servicio que necesitas en tu área local
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Compara</h3>
              <p className="text-gray-600">
                Revisa perfiles, calificaciones y precios
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Contrata</h3>
              <p className="text-gray-600">
                Contacta al profesional y agenda tu servicio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">
              ¿Eres un profesional?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Únete a nuestra plataforma y conecta con clientes en tu área
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold"
              >
                Registrar mi servicio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Saber más
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}