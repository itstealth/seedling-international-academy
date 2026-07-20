'use client';

import { useEffect, useRef } from 'react';

const HLS_SRC = '/video/hero/playlist.m3u8';
const WEBM_SRC = '/video/hero/fallback.webm';
const POSTER = '/video/hero/poster.jpg';

/**
 * Hero background video.
 *
 * The clip is served as HLS: a playlist plus ~4s .ts segments. hls.js pulls
 * segments over MSE, so playback starts once the first segment lands (~950KB)
 * instead of waiting on the whole file, and the rest stream in behind it.
 * Safari plays the same playlist natively. Anything else falls back to the
 * single-file WebM.
 *
 * The poster paints on first frame so the hero is never blank while this runs.
 */
export default function HeroVideo({
  className = 'absolute inset-0 w-full h-full object-cover',
}: {
  className?: string;
}): React.JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay is only permitted while muted; retry once if it's refused.
    const play = () => {
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {
          /* leave the poster up rather than throwing */
        });
      });
    };
    video.addEventListener('loadeddata', play);

    // Safari handles HLS without a library.
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SRC;
      return () => video.removeEventListener('loadeddata', play);
    }

    let hlsInstance: import('hls.js').default | null = null;
    let cancelled = false;

    import('hls.js')
      .then(({ default: Hls }) => {
        if (cancelled) return;
        if (!Hls.isSupported()) {
          // No MSE — use the progressive WebM instead of leaving it blank.
          video.src = WEBM_SRC;
          return;
        }
        hlsInstance = new Hls({
          autoStartLoad: true,
          startLevel: 0,
          // Keep the whole clip buffered; it's only ~3MB and it loops.
          maxBufferLength: 60,
        });
        hlsInstance.loadSource(HLS_SRC);
        hlsInstance.attachMedia(video);
        hlsInstance.on(Hls.Events.ERROR, (_e, data) => {
          if (data.fatal) {
            hlsInstance?.destroy();
            hlsInstance = null;
            video.src = WEBM_SRC;
          }
        });
      })
      .catch(() => {
        if (!cancelled) video.src = WEBM_SRC;
      });

    return () => {
      cancelled = true;
      video.removeEventListener('loadeddata', play);
      hlsInstance?.destroy();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={POSTER}
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
