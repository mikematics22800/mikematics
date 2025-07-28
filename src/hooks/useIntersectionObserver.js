import { useEffect, useRef } from 'react';

const useIntersectionObserver = (animationClass) => {
  const elementRef = useRef(null);

  useEffect(() => {
    // Add initial off-screen position class
    if (elementRef.current) {
      elementRef.current.classList.add('pre-animation');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('pre-animation');
            entry.target.classList.add('animate__animated', animationClass);
            observer.unobserve(entry.target); // Stop observing once animation is triggered
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px', // No margin
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationClass]);

  return elementRef;
};

export default useIntersectionObserver; 