import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (trigger: boolean = true) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!elementRef.current || !trigger || hasAnimated) return;

    const el = elementRef.current;
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1.2s ease-out, transform 1.2s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    
    setHasAnimated(true);
  }, [trigger, hasAnimated]);

  return elementRef;
};

export const useStaggerAnimation = (trigger: boolean = true, selector: string = '.stagger-item') => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !trigger || hasAnimated) return;

    const items = Array.from(containerRef.current.querySelectorAll(selector));
    
    items.forEach((item: Element, index: number) => {
      const el = item as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
    
    setHasAnimated(true);
  }, [trigger, selector, hasAnimated]);

  return containerRef;
};

export const useTextReveal = (trigger: boolean = true) => {
  const textRef = useRef<any>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!textRef.current || !trigger || hasAnimated) return;

    const text = textRef.current;
    const originalText = text.textContent || '';
    const letters = originalText.split('');
    
    text.innerHTML = letters.map(letter => 
      `<span class="inline-block" style="opacity: 0; transform: translateY(20px);">${letter === ' ' ? '&nbsp;' : letter}</span>`
    ).join('');

    const spans = Array.from(text.querySelectorAll('span'));
    spans.forEach((span: Element, index: number) => {
      const el = span as HTMLElement;
      setTimeout(() => {
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 30);
    });
    
    setHasAnimated(true);
  }, [trigger, hasAnimated]);

  return textRef;
};

export const animateButton = (element: HTMLElement) => {
  element.style.transition = 'transform 0.4s ease-out';
  element.style.transform = 'scale(1.05)';
  
  setTimeout(() => {
    element.style.transform = 'scale(1)';
  }, 200);
};

export const animateCard = (element: HTMLElement) => {
  element.style.transition = 'transform 0.3s ease-out';
  element.style.transform = 'scale(1.02) translateY(-5px)';
};

export const animateCardOut = (element: HTMLElement) => {
  element.style.transition = 'transform 0.3s ease-out';
  element.style.transform = 'scale(1) translateY(0)';
};
