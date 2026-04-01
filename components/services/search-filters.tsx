'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/lib/mock-data';
import { Filter, MapPin, Search, X } from 'lucide-react';
import { useState } from 'react';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  location: string;
  onLocationChange: (location: string) => void;
  radiusKm: number;
  onRadiusChange: (radius: number) => void;
  minPrice: number;
  onMinPriceChange: (price: number) => void;
  maxPrice: number;
  onMaxPriceChange: (price: number) => void;
  sortBy: string;
  onSortByChange: (sort: string) => void;
}

export function SearchFilters({
  searchQuery,
  onSearchQueryChange,
  selectedCategory,
  onCategoryChange,
  location,
  onLocationChange,
  radiusKm,
  onRadiusChange,
  minPrice,
  onMinPriceChange,
  maxPrice,
  onMaxPriceChange,
  sortBy,
  onSortByChange,
}: SearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const clearFilters = () => {
    onSearchQueryChange('');
    onCategoryChange(null);
    onMinPriceChange(0);
    onMaxPriceChange(10000);
    onRadiusChange(10);
    onSortByChange('distance');
  };

  const hasActiveFilters = searchQuery || selectedCategory || minPrice > 0 || maxPrice < 10000 || radiusKm !== 10;

  return (
    <div className="space-y-4">
      {/* Main Search Bar */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Service Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="¿Qué servicio necesitas? (plomería, electricidad, limpieza...)"
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => onSearchQueryChange(e.target.value)}
              />
            </div>

            {/* Location Search */}
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Tu ubicación (colonia, ciudad)"
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={location}
                onChange={(e) => onLocationChange(e.target.value)}
              />
            </div>

            {/* Search Button */}
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 lg:px-8">
              <Search className="mr-2 h-4 w-4" />
              Buscar
            </Button>

            {/* Filters Toggle */}
            <Button variant="outline" size="lg" onClick={() => setShowFilters(!showFilters)} className="relative">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
              {hasActiveFilters && <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-600"></span>}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Filters */}
      {showFilters && (
        <Card className="shadow-lg">
          <CardContent className="space-y-6 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Filtros avanzados</h3>
              <div className="flex space-x-2">
                {hasActiveFilters && (
                  <Button variant="outline" size="sm" onClick={clearFilters}>
                    <X className="mr-1 h-4 w-4" />
                    Limpiar
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div>
              <label className="mb-3 block text-sm font-medium text-gray-700">Categoría de servicio</label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-4">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.name ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onCategoryChange(selectedCategory === category.name ? null : category.name)}
                    className="justify-start"
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Price Range */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Rango de precio (MXN)</label>
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => onMinPriceChange(Number(e.target.value))}
                      className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => onMaxPriceChange(Number(e.target.value))}
                      className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Distance */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Radio de búsqueda: {radiusKm} km</label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={radiusKm}
                  onChange={(e) => onRadiusChange(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>1 km</span>
                  <span>25 km</span>
                  <span>50+ km</span>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Ordenar por</label>
                <select
                  value={sortBy}
                  onChange={(e) => onSortByChange(e.target.value)}
                  className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="distance">Distancia</option>
                  <option value="rating">Calificación</option>
                  <option value="price_low">Precio: menor a mayor</option>
                  <option value="price_high">Precio: mayor a menor</option>
                  <option value="reviews">Más reseñas</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
