'use client';

import { useEffect, useRef } from 'react';

const HLS_SRC = '/video/hero/playlist.m3u8';
const WEBM_SRC = '/video/hero/fallback.webm';
const POSTER = '/video/hero/poster.jpg';

export default function HeroVideo(): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Safari supports HLS natively
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SRC;
      return;
    }

    // All other browsers: use hls.js (loaded dynamically to avoid SSR issues)
    let hlsInstance: import('hls.js').default | null = null;

    import('hls.js').then(({ default: Hls }) => {
      if (!Hls.isSupported()) return; // fallback.webm already set as <source>

      hlsInstance = new Hls({
        startLevel: 0,         // start at lowest quality for fastest first frame
        autoStartLoad: true,
      });
      hlsInstance.loadSource(HLS_SRC);
      hlsInstance.attachMedia(video);
    });

    return () => {
      hlsInstance?.destroy();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={POSTER}
    >
      {/* Shown only if hls.js is not supported and browser is not Safari */}
      <source src={WEBM_SRC} type="video/webm" />
    </video>
  );
}
