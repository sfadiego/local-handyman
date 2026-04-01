import { useEffect, useRef, useState } from 'react';

export const useHomePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    if (window.innerWidth > 768 && heroRef.current) {
      heroRef.current.style.display = 'block';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.step-card, .service-card');
      cards.forEach((el) => {
        const target = el as HTMLElement;
        target.style.opacity = '0';
        target.style.transform = 'translateY(20px)';
        target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(target);
      });
    }

    return () => observer.disconnect();
  }, []);

  return {
    isMounted,
  };
};
