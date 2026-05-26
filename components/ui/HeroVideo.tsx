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

    let hlsInstance: import('hls.js').default | null = null;
    let cancelled = false;

    import('hls.js').then(({ default: Hls }) => {
      if (cancelled || !Hls.isSupported()) return;

      hlsInstance = new Hls({ startLevel: 0, autoStartLoad: true });
      hlsInstance.loadSource(HLS_SRC);
      hlsInstance.attachMedia(video);
    });

    return () => {
      cancelled = true;
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
