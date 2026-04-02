'use client';
import React from 'react';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/layout/footer';
import Hero from '@/components/landing/Hero';
import ServicesMarquee from '@/components/landing/ServicesMarquee';
import HowItWorks from '@/components/landing/HowItWorks';
import PopularServices from '@/components/landing/PopularServices';
import FeaturedProviders from '@/components/landing/FeaturedProviders';
import UserTypeSection from '@/components/landing/UserTypeSection';

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
      </main>
      <Footer />
    </>
  );
}
