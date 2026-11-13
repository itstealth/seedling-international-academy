'use client';

import { useEffect, useRef } from 'react';

const widgetId = '1044b64843af99283fc04912e7ad8bec';
const widgetScriptId = 'npf-cambridge-admissions-widget-script';
const widgetScriptUrl = 'https://ke9zpvp4xn.in4.widgets.nopaperforms.com/vemwgts.js';

export default function NpfAdmissionsForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let loaded = false;

    const loadWidget = () => {
      if (loaded) return;
      loaded = true;

      const npfWindow = window as Window & {
        npf_d?: string;
        npf_c?: string;
        npf_m?: string;
      };
      npfWindow.npf_d = 'https://apply.seedlingschools.com';
      npfWindow.npf_c = '7260';
      npfWindow.npf_m = '1';

      if (!document.getElementById(widgetScriptId)) {
        const script = document.createElement('script');
        script.id = widgetScriptId;
        script.src = widgetScriptUrl;
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Ensure the injected iframe receives an accessible title & aria-label
    const mutationObserver = new MutationObserver(() => {
      const iframe = container.querySelector('iframe');
      if (iframe && !iframe.getAttribute('title')) {
        iframe.setAttribute('title', 'Admission enquiry form');
        iframe.setAttribute('aria-label', 'Admission enquiry form');
      }
    });
    mutationObserver.observe(container, { childList: true, subtree: true });

    // Defer widget injection until user approaches the enquiry section or interacts
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            loadWidget();
            io.disconnect();
          }
        },
        { rootMargin: '400px' }
      );
      io.observe(container);

      if (window.location.hash.includes('enquiry')) {
        loadWidget();
      }

      return () => {
        io.disconnect();
        mutationObserver.disconnect();
      };
    } else {
      loadWidget();
      return () => mutationObserver.disconnect();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      role="region"
      className="npf_wgts w-full min-h-[500px]"
      data-height="700px"
      data-w={widgetId}
      aria-label="Admission enquiry form"
    />
  );
}
