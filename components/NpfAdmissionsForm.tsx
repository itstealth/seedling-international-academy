'use client';

import { useEffect } from 'react';

const widgetId = '1044b64843af99283fc04912e7ad8bec';
const widgetScriptId = 'npf-cambridge-admissions-widget-script';
const widgetScriptUrl = 'https://ke9zpvp4xn.in4.widgets.nopaperforms.com/vemwgts.js';

export default function NpfAdmissionsForm() {
  useEffect(() => {
    const npfWindow = window as Window & {
      npf_d?: string;
      npf_c?: string;
      npf_m?: string;
    };
    npfWindow.npf_d = 'https://apply.seedlingschools.com';
    npfWindow.npf_c = '7260';
    npfWindow.npf_m = '1';

    if (document.getElementById(widgetScriptId)) return;

    const script = document.createElement('script');
    script.id = widgetScriptId;
    script.src = widgetScriptUrl;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="npf_wgts w-full"
      data-height="700px"
      data-w={widgetId}
      aria-label="Admission enquiry form"
    />
  );
}