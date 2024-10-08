import React, { useEffect, useRef } from 'react';
import '../styles/Scroll.css'
type Props = {
    children?: React.ReactNode
  };

const ScrollReveal: React.FC<Props> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  let options = {        
    rootMargin: "0px 0px-200px 0px", 
    // or `0px 0px ${window.innerHeight / 2} 0px` 
    // for detect middle screen height
    threshold: 0
}

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (elementRef.current) {
            elementRef.current.classList.add('visible');
            elementRef.current.classList.remove('not-visible'); // Assure que la classe 'not-visible' est retirée
          }
        } else {
          if (elementRef.current) {
            elementRef.current.classList.remove('visible');
            elementRef.current.classList.add('not-visible'); // Ajoute la classe 'not-visible' quand l'élément n'est pas visible
          }
        }
      },
      {rootMargin:'-100px 0px -100px 0px'}
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className="hidden">
      {children}
    </div>
  );
};

export default ScrollReveal;
