import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing once visible
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentRef = ref.current;
    
    // If ref is attached to a single element
    if (currentRef) {
      if (currentRef instanceof Element) {
        observer.observe(currentRef);
      } else if (currentRef.length) {
        // If ref is an array of elements (like querySelectorAll)
        currentRef.forEach(el => {
          if (el) observer.observe(el);
        });
      }
    }

    // Alternatively, we can just observe all elements with class 'fade-in' globally
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      if (currentRef) {
        if (currentRef instanceof Element) observer.unobserve(currentRef);
        else if (currentRef.length) currentRef.forEach(el => { if(el) observer.unobserve(el) });
      }
    };
  }, []);

  return ref;
}
