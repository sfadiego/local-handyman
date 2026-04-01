'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Service } from '@/lib/mock-data';
import { ArrowRight, Clock, MapPin, Shield, Star } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  onContact: () => void;
}

export function ServiceCard({ service, onContact }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <img src={service.images[0]} alt={service.title} className="h-48 w-full object-cover" />
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">{service.category}</span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
        </div>
        <CardDescription className="line-clamp-2 text-sm">{service.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Provider Info */}
        <div className="flex items-center space-x-3">
          <img src={service.provider.avatar} alt={service.provider.name} className="h-10 w-10 rounded-full border-2 border-gray-100" />
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-900">{service.provider.name}</span>
              {service.provider.verified && <Shield className="h-4 w-4 text-blue-500" title="Verificado" />}
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{service.provider.rating}</span>
              <span>({service.provider.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Price and Distance */}
        <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
          <div>
            <span className="text-lg font-semibold text-green-600">
              ${service.price.min} - ${service.price.max}
            </span>
            <span className="ml-1 text-sm text-gray-500">{service.price.unit}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="mr-1 h-4 w-4" />
            {service.location.distance} km
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="mr-1 h-4 w-4" />
          <span>Disponible: {service.availability.slice(0, 3).join(', ')}</span>
          {service.availability.length > 3 && <span className="text-gray-500"> +{service.availability.length - 3} más</span>}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {service.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="rounded-full border border-blue-100 bg-blue-50 px-2 py-1 text-xs text-blue-700">
              {tag}
            </span>
          ))}
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={onContact}>
          Contactar ahora
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
