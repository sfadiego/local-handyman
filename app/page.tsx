'use client';
import CTASection from '@/components/landing/CTASection';
import FeaturedProviders from '@/components/landing/FeaturedProviders';
import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import Navbar from '@/components/landing/navbar';
import PopularServices from '@/components/landing/PopularServices';
import ServicesMarquee from '@/components/landing/ServicesMarquee';
import UserTypeSection from '@/components/landing/UserTypeSection';
import Footer from '@/components/layout/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesMarquee />
        <HowItWorks />
        <PopularServices />
        <FeaturedProviders />
        <UserTypeSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
