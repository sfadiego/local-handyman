// hourly:  Cobra por hora — el cliente ve $250/hr
// fixed: Cobra tarifa fija por tipo de trabajo — $800 instalación completa
// quote: No tiene precio fijo, manda cotización después de ver el trabajo

type PricingType = 'hourly' | 'fixed' | 'quote';

export interface IProviderProfile {
  id: string;
  user_id: string;
  bio: string;
  category: string;
  pricingType: PricingType;
  hourlyRate: number;
  fixedRate: number;
  experienceYears: number;
  totalReviews: number;
  totalJobs: number;
  verified: boolean;
  available: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
