'use client';

export const dynamic = 'force-dynamic';

import { AuthModal } from '@/components/auth/auth-modal';
import { SearchFilters } from '@/components/services/search-filters';
import { ServiceCard } from '@/components/services/service-card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { mockServices } from '@/lib/mock-data';
import { MapPin, Users } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [location, setLocation] = useState('Colonia Roma Norte, CDMX');
  const [radiusKm, setRadiusKm] = useState(10);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortBy, setSortBy] = useState('distance');
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { isAuthenticated } = useAuth();

  const filteredAndSortedServices = useMemo(() => {
    const filtered = mockServices.filter((service) => {
      const matchesSearch =
        !searchQuery ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory ||
        service.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesDistance = service.location.distance <= radiusKm;

      const matchesPrice =
        service.price.min >= minPrice && service.price.max <= maxPrice;

      return (
        matchesSearch && matchesCategory && matchesDistance && matchesPrice
      );
    });

    // Sort results
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.provider.rating - a.provider.rating);
        break;
      case 'price_low':
        filtered.sort((a, b) => a.price.min - b.price.min);
        break;
      case 'price_high':
        filtered.sort((a, b) => b.price.min - a.price.min);
        break;
      case 'reviews':
        filtered.sort(
          (a, b) => b.provider.reviewCount - a.provider.reviewCount
        );
        break;
      case 'distance':
      default:
        filtered.sort((a, b) => a.location.distance - b.location.distance);
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, radiusKm, minPrice, maxPrice, sortBy]);

  const handleContact = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    } else {
      alert('¡Funcionalidad de contacto estará disponible próximamente!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <SearchFilters
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            location={location}
            onLocationChange={setLocation}
            radiusKm={radiusKm}
            onRadiusChange={setRadiusKm}
            minPrice={minPrice}
            onMinPriceChange={setMinPrice}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            sortBy={sortBy}
            onSortByChange={setSortBy}
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Results Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Servicios disponibles
              </h1>
              <p className="mt-2 text-gray-600">
                {filteredAndSortedServices.length} profesionales encontrados
                {location && (
                  <>
                    {' '}
                    cerca de <span className="font-medium">{location}</span>
                  </>
                )}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="mt-4 sm:mt-0 flex space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Radio: {radiusKm} km
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {filteredAndSortedServices.length} servicios
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory || searchQuery) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCategory && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="ml-2 text-blue-600 hover:text-blue-500"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-green-600 hover:text-green-500"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* No Results */}
        {filteredAndSortedServices.length === 0 ? (
          <div className="text-center py-16">
            <div className="mx-auto max-w-md">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <MapPin className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No encontramos servicios
              </h3>
              <p className="mt-2 text-gray-500">
                Intenta expandir el radio de búsqueda o cambiar los filtros.
              </p>
              <div className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => {
                    setRadiusKm(25);
                    setSelectedCategory(null);
                    setSearchQuery('');
                    setMinPrice(0);
                    setMaxPrice(10000);
                  }}
                >
                  Ampliar búsqueda
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Results Grid */
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onContact={handleContact}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {filteredAndSortedServices.length > 6 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Cargar más servicios
            </Button>
          </div>
        )}
      </div>

      <AuthModal
        open={showAuthModal}
        onOpenChange={setShowAuthModal}
        defaultForm="login"
      />
    </div>
  );
}
