"use client";

import { useEffect } from "react";

export default function AccordionInitializer() {
  useEffect(() => {
    let cancelled = false;

    const accordions = document.querySelectorAll<HTMLElement>(
      '.sp-eab-regular-accordion,.sp-eab-post-accordion,.sp-eab-product-accordion'
    );
    if (accordions.length === 0) return;

    const PLUGIN = 'https://cambridge.seedlingschools.com/cms/wp-content/plugins/easy-accordion-free';
    const JS_ID = 'sp-eab-accordion-js';

    const getEab = (): (new (el: Element, o: object) => unknown) | null => {
      try {
        return new Function(
          'return typeof EabAccordion !== "undefined" ? EabAccordion : null'
        )() as (new (el: Element, o: object) => unknown) | null;
      } catch {
        return null;
      }
    };

    const initAccordions = () => {
      const Eab = getEab();
      if (cancelled || typeof Eab !== 'function') return;
      accordions.forEach((block) => {
        if (block.dataset.eabReady) return;
        const el = block.querySelector('.sp-eab-accordion');
        if (!el) return;
        let options = {};
        try {
          options = JSON.parse(el.getAttribute('data-accordion-settings') || '{}');
        } catch {
          options = {};
        }
        new Eab(el, options);
        block.dataset.eabReady = '1';
      });
    };

    const existing = document.getElementById(JS_ID);
    if (getEab()) {
      initAccordions();
    } else if (existing) {
      existing.addEventListener('load', initAccordions);
    } else {
      const s = document.createElement('script');
      s.id = JS_ID;
      s.src = `${PLUGIN}/Blocks/assets/js/sp-eap-accordion.js`;
      s.async = true;
      s.onload = initAccordions;
      document.body.appendChild(s);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
