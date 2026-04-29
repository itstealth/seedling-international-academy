"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SeedlingPublicSchool() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("campus");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides = [
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80",
  ];

  const goToSlide = (n: number) => {
    setCurrentSlide(n);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("navbar");
      if (nav) {
        nav.style.boxShadow =
          window.scrollY > 10
            ? "0 4px 30px rgba(23,81,144,0.15)"
            : "0 2px 20px rgba(23,81,144,0.10)";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { key: "campus", label: "🏫 Campus" },
    { key: "labs", label: "🔬 Labs & Tech" },
    { key: "sports", label: "⚽ Sports Facilities" },
    { key: "arts", label: "🎨 Arts & Culture" },
  ];

  return (
    <>
      <style>{`
        :root {
          --navy: #175190;
          --crimson: #A41546;
          --mauve: #896B85;
          --sand: #D6D1CF;
          --white: #ffffff;
          --off-white: #f8f7f6;
          --dark: #0e0e0e;
          --text: #2c2c2c;
          --text-light: #5a5a5a;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          background: var(--white);
          overflow-x: hidden;
        }
        .hero {
          position: relative;
          height: 94vh; min-height: 560px;
          overflow: hidden;
          display: flex; align-items: center;
        }
        .hero-slides { position: absolute; inset: 0; }
        .hero-slide {
          position: absolute; inset: 0;
          opacity: 0; transition: opacity 1.2s ease;
          background-size: cover; background-position: center;
        }
        .hero-slide.active { opacity: 1; }
        .hero-slide::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, rgba(23,81,144,0.82) 0%, rgba(23,81,144,0.3) 60%, rgba(164,21,70,0.25) 100%);
        }
        .hero-content {
          position: relative; z-index: 2;
          max-width: 1280px; margin: 0 auto; padding: 0 24px;
          width: 100%;
        }
        .hero-tag {
          display: inline-block;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.35);
          color: var(--white);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 50px;
          margin-bottom: 20px;
        }
        .hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 6vw, 4.6rem);
          color: var(--white);
          line-height: 1.12;
          font-weight: 900;
          max-width: 700px;
          margin-bottom: 22px;
        }
        .hero h1 span { color: #ffcfde; }
        .hero p {
          color: rgba(255,255,255,0.88);
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          max-width: 520px;
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-primary {
          background: var(--crimson);
          color: var(--white);
          padding: 14px 30px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(164,21,70,0.4);
        }
        .btn-primary:hover { background: #8a1239; transform: translateY(-2px); }
        .btn-ghost {
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(255,255,255,0.5);
          color: var(--white);
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.25); }
        .hero-dots {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%);
          display: flex; gap: 8px; z-index: 5;
        }
        .hero-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: rgba(255,255,255,0.4);
          cursor: pointer; transition: all 0.3s;
          border: none;
        }
        .hero-dot.active { background: var(--white); width: 24px; border-radius: 4px; }
        .hero-stats {
          position: absolute; bottom: 0; right: 0;
          z-index: 5;
          display: flex; gap: 0;
        }
        .stat-card {
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(16px);
          border-top: 1px solid rgba(255,255,255,0.25);
          border-left: 1px solid rgba(255,255,255,0.15);
          padding: 20px 28px;
          text-align: center;
          color: var(--white);
        }
        .stat-card strong { display: block; font-size: 1.9rem; font-weight: 700; font-family: 'Playfair Display', serif; }
        .stat-card span { font-size: 0.75rem; font-weight: 500; opacity: 0.8; letter-spacing: 0.5px; }
        section { padding: 80px 0; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .sec-label {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
          color: var(--crimson); margin-bottom: 10px; display: block;
        }
        .sec-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-weight: 700; color: var(--navy); line-height: 1.2;
          margin-bottom: 14px;
        }
        .sec-sub { font-size: 1rem; color: var(--text-light); line-height: 1.7; max-width: 600px; }
        .sec-header { margin-bottom: 50px; }
        .announcement-bar {
          background: var(--navy);
          padding: 12px 0;
          overflow: hidden;
        }
        .marquee-track {
          display: flex; gap: 60px;
          animation: marquee 28s linear infinite;
          white-space: nowrap;
        }
        .marquee-track span {
          color: var(--sand);
          font-size: 0.85rem; font-weight: 500;
          display: flex; align-items: center; gap: 10px;
        }
        .marquee-track span::before { content: '●'; color: var(--crimson); font-size: 0.5rem; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .about-section { background: var(--off-white); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .about-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 220px 220px;
          gap: 14px;
          position: relative;
        }
        .about-img {
          border-radius: 16px; overflow: hidden;
          position: relative;
        }
        .about-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .about-img:first-child { grid-row: 1 / 3; border-radius: 20px; }
        .about-badge {
          position: absolute; bottom: -18px; left: 50%;
          transform: translateX(-50%);
          background: var(--crimson); color: var(--white);
          padding: 12px 22px;
          border-radius: 50px;
          font-size: 0.82rem; font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(164,21,70,0.35);
          letter-spacing: 0.5px;
        }
        .about-text .features { margin-top: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .feature-item {
          display: flex; gap: 12px; align-items: flex-start;
          padding: 14px;
          background: var(--white);
          border-radius: 12px;
          border-left: 3px solid var(--navy);
        }
        .feature-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: #eef4fc; display: flex; align-items: center; justify-content: center;
          font-size: 1rem; flex-shrink: 0;
        }
        .feature-item h4 { font-size: 0.82rem; font-weight: 600; color: var(--navy); margin-bottom: 2px; }
        .feature-item p { font-size: 0.75rem; color: var(--text-light); line-height: 1.5; }
        .about-cta { margin-top: 30px; display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-navy {
          background: var(--navy); color: var(--white);
          padding: 12px 26px; border-radius: 50px; font-weight: 600;
          font-size: 0.9rem; text-decoration: none; transition: all 0.2s;
        }
        .btn-navy:hover { background: #0e3d6e; transform: translateY(-1px); }
        .btn-outline-navy {
          border: 2px solid var(--navy); color: var(--navy);
          padding: 10px 24px; border-radius: 50px; font-weight: 600;
          font-size: 0.9rem; text-decoration: none; transition: all 0.2s;
        }
        .btn-outline-navy:hover { background: var(--navy); color: var(--white); }
        .infra-section { background: var(--white); }
        .tab-bar {
          display: flex; gap: 0; border-radius: 14px; overflow: hidden;
          border: 2px solid var(--sand); margin-bottom: 44px;
          width: fit-content; flex-wrap: wrap;
        }
        .tab-btn {
          padding: 12px 24px;
          border: none; background: var(--white);
          color: var(--text-light); font-size: 0.88rem; font-weight: 600;
          cursor: pointer; transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .tab-btn.active { background: var(--navy); color: var(--white); }
        .tab-btn:hover:not(.active) { background: #eef4fc; color: var(--navy); }
        .tab-panel { display: none; }
        .tab-panel.active { display: block; }
        .infra-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .infra-card {
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 2px 16px rgba(0,0,0,0.07);
          transition: transform 0.3s, box-shadow 0.3s;
          background: var(--white);
        }
        .infra-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(23,81,144,0.14); }
        .infra-card-img {
          height: 200px; overflow: hidden; position: relative;
        }
        .infra-card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .infra-card:hover .infra-card-img img { transform: scale(1.06); }
        .infra-card-body { padding: 18px; }
        .infra-card-body h3 { font-size: 1rem; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
        .infra-card-body p { font-size: 0.82rem; color: var(--text-light); line-height: 1.6; }
        .infra-tag {
          display: inline-block; background: #eef4fc; color: var(--navy);
          font-size: 0.7rem; font-weight: 700; letter-spacing: 1px;
          padding: 3px 10px; border-radius: 50px; margin-bottom: 8px;
          text-transform: uppercase;
        }
        .sports-section { background: var(--navy); position: relative; overflow: hidden; }
        .sports-section::before {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: rgba(164,21,70,0.12);
        }
        .sports-section::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(137,107,133,0.15);
        }
        .sports-section .sec-label { color: #ffcfde; }
        .sports-section .sec-title { color: var(--white); }
        .sports-section .sec-sub { color: rgba(255,255,255,0.75); }
        .sports-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-top: 40px; position: relative; z-index: 2; }
        .sport-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 16px; overflow: hidden;
          transition: all 0.3s;
          backdrop-filter: blur(8px);
        }
        .sport-card:hover { background: rgba(255,255,255,0.15); transform: translateY(-4px); }
        .sport-img { height: 160px; overflow: hidden; }
        .sport-img img { width: 100%; height: 100%; object-fit: cover; }
        .sport-body { padding: 16px; }
        .sport-body h3 { color: var(--white); font-size: 0.95rem; font-weight: 700; margin-bottom: 4px; }
        .sport-body p { color: rgba(255,255,255,0.65); font-size: 0.78rem; line-height: 1.5; }
        .why-section { background: var(--off-white); }
        .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .why-list { display: flex; flex-direction: column; gap: 14px; }
        .why-item {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 18px 20px;
          background: var(--white); border-radius: 14px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          transition: all 0.2s;
        }
        .why-item:hover { transform: translateX(6px); box-shadow: 0 4px 20px rgba(23,81,144,0.10); }
        .why-num {
          width: 40px; height: 40px; border-radius: 10px;
          background: var(--navy); color: var(--white);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 0.9rem;
          flex-shrink: 0;
        }
        .why-item h4 { font-size: 0.95rem; font-weight: 700; color: var(--navy); margin-bottom: 4px; }
        .why-item p { font-size: 0.82rem; color: var(--text-light); line-height: 1.5; }
        .why-visual { position: relative; }
        .why-main-img {
          border-radius: 24px; overflow: hidden; height: 420px;
        }
        .why-main-img img { width: 100%; height: 100%; object-fit: cover; }
        .why-float {
          position: absolute;
          bottom: -20px; left: -20px;
          background: var(--crimson);
          color: var(--white);
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 8px 30px rgba(164,21,70,0.35);
        }
        .why-float strong { font-size: 2rem; font-family: 'Playfair Display', serif; display: block; }
        .why-float span { font-size: 0.78rem; font-weight: 500; opacity: 0.9; }
        .gallery-section { background: var(--white); }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 200px 200px;
          gap: 14px;
        }
        .gallery-item { border-radius: 14px; overflow: hidden; position: relative; }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .gallery-item:hover img { transform: scale(1.07); }
        .gallery-item:first-child { grid-column: 1 / 3; grid-row: 1 / 3; }
        .gallery-item:nth-child(4) { grid-column: 3 / 5; }
        .gallery-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(23,81,144,0.7), transparent);
          opacity: 0; transition: opacity 0.3s;
          display: flex; align-items: flex-end; padding: 14px;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-overlay span { color: var(--white); font-size: 0.82rem; font-weight: 600; }
        .testimonials-section { background: var(--off-white); }
        .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .testi-card {
          background: var(--white);
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          position: relative;
          transition: all 0.3s;
        }
        .testi-card:hover { transform: translateY(-4px); box-shadow: 0 10px 40px rgba(23,81,144,0.12); }
        .testi-quote {
          font-size: 3.5rem;
          line-height: 0.6;
          color: var(--sand);
          font-family: 'Playfair Display', serif;
          margin-bottom: 12px;
          display: block;
        }
        .testi-text { font-size: 0.9rem; color: var(--text-light); line-height: 1.7; margin-bottom: 20px; }
        .testi-author { display: flex; align-items: center; gap: 12px; }
        .testi-avatar {
          width: 46px; height: 46px; border-radius: 50%;
          overflow: hidden; flex-shrink: 0;
          border: 2px solid var(--sand);
        }
        .testi-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .testi-name { font-size: 0.88rem; font-weight: 700; color: var(--navy); }
        .testi-role { font-size: 0.75rem; color: var(--text-light); }
        .stars { color: #f5a623; font-size: 0.8rem; margin-bottom: 2px; }
        .updates-section { background: var(--navy); }
        .updates-section .sec-label { color: #ffcfde; }
        .updates-section .sec-title { color: var(--white); }
        .updates-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 40px; }
        .update-item {
          display: flex; gap: 16px; align-items: flex-start;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 8px;
        }
        .update-date {
          background: var(--crimson);
          color: var(--white);
          padding: 8px 12px; border-radius: 10px;
          text-align: center; flex-shrink: 0;
          min-width: 52px;
        }
        .update-date strong { display: block; font-size: 1.2rem; font-family: 'Playfair Display', serif; line-height: 1; }
        .update-date span { font-size: 0.65rem; letter-spacing: 1px; text-transform: uppercase; }
        .update-body h4 { color: var(--white); font-size: 0.92rem; font-weight: 700; margin-bottom: 4px; }
        .update-body p { color: rgba(255,255,255,0.65); font-size: 0.8rem; line-height: 1.5; }
        .instagram-feed {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 12px;
        }
        .ig-item { border-radius: 10px; overflow: hidden; aspect-ratio: 1; position: relative; }
        .ig-item img { width: 100%; height: 100%; object-fit: cover; }
        .ig-label { color: var(--white); font-size: 0.85rem; font-weight: 600; margin-bottom: 10px; display: flex; align-items: center; gap: 8px; }
        .ig-label svg { fill: white; }
        .admission-section {
          background: linear-gradient(135deg, var(--crimson) 0%, #7a0f35 100%);
          position: relative; overflow: hidden;
        }
        .admission-section::before {
          content: '';
          position: absolute; top: -100px; right: -80px;
          width: 400px; height: 400px; border-radius: 50%;
          background: rgba(255,255,255,0.06);
        }
        .admission-content {
          display: flex; align-items: center; justify-content: space-between;
          gap: 40px; flex-wrap: wrap;
          position: relative; z-index: 2;
        }
        .admission-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          color: var(--white); font-weight: 700; margin-bottom: 10px;
        }
        .admission-text p { color: rgba(255,255,255,0.85); font-size: 1rem; max-width: 500px; line-height: 1.6; }
        .admission-form { background: var(--white); padding: 32px; border-radius: 20px; min-width: 320px; flex-shrink: 0; }
        .admission-form h3 { color: var(--navy); font-size: 1.1rem; font-weight: 700; margin-bottom: 20px; }
        .form-group { margin-bottom: 14px; }
        .form-group input, .form-group select {
          width: 100%;
          padding: 11px 16px;
          border: 1.5px solid var(--sand);
          border-radius: 10px;
          font-size: 0.88rem;
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          transition: border 0.2s;
          background: var(--white);
        }
        .form-group input:focus, .form-group select:focus {
          outline: none; border-color: var(--navy);
        }
        .btn-submit {
          width: 100%; background: var(--navy);
          color: var(--white); border: none;
          padding: 13px; border-radius: 50px;
          font-size: 0.92rem; font-weight: 700;
          cursor: pointer; transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.5px;
        }
        .btn-submit:hover { background: #0e3d6e; }
        footer {
          background: #0a1f3a;
          color: rgba(255,255,255,0.75);
        }
        .footer-top {
          padding: 60px 0 40px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
        .footer-brand .logo-name { color: var(--white); }
        .footer-brand .logo-sub { color: var(--sand); }
        .footer-tagline { font-size: 0.85rem; line-height: 1.7; margin-top: 14px; margin-bottom: 20px; }
        .footer-socials { display: flex; gap: 10px; }
        .social-btn {
          width: 36px; height: 36px; border-radius: 8px;
          background: rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.7);
          text-decoration: none; font-size: 0.85rem;
          transition: all 0.2s;
        }
        .social-btn:hover { background: var(--crimson); color: var(--white); }
        .footer-col h4 { color: var(--white); font-size: 0.88rem; font-weight: 700; margin-bottom: 16px; letter-spacing: 0.5px; }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-col a { color: rgba(255,255,255,0.65); text-decoration: none; font-size: 0.83rem; transition: color 0.2s; }
        .footer-col a:hover { color: var(--sand); }
        .footer-bottom {
          padding: 20px 0;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 10px;
          font-size: 0.78rem;
        }
        .footer-bottom a { color: rgba(255,255,255,0.5); text-decoration: none; }
        .footer-bottom a:hover { color: var(--sand); }
        .contact-info { display: flex; flex-direction: column; gap: 8px; }
        .contact-info a { color: rgba(255,255,255,0.65); text-decoration: none; font-size: 0.83rem; display: flex; align-items: flex-start; gap: 8px; }
        .contact-info a:hover { color: var(--sand); }
        .floating-whatsapp {
          position: fixed; right: 20px; bottom: 90px; z-index: 999;
          background: #25D366;
          width: 52px; height: 52px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.45);
          transition: all 0.3s;
          text-decoration: none;
        }
        .floating-whatsapp:hover { background: #20bd5a; transform: translateY(-3px); }
        .floating-whatsapp svg { width: 28px; height: 28px; fill: #ffffff; }
        .floating-enquire {
          position: fixed; right: 20px; bottom: 30px; z-index: 999;
          background: var(--crimson); color: var(--white);
          padding: 13px 22px; border-radius: 50px;
          font-size: 0.88rem; font-weight: 700;
          text-decoration: none;
          box-shadow: 0 6px 30px rgba(164,21,70,0.45);
          transition: all 0.3s;
          display: flex; align-items: center; gap: 8px;
        }
        .floating-enquire:hover { background: #8a1239; transform: translateY(-3px); }
        .floating-enquire::before { content: '✉'; font-size: 1rem; }
        .mobile-bottom-bar {
          display: none;
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 999;
          background: var(--white);
          box-shadow: 0 -4px 20px rgba(0,0,0,0.12);
          padding: 12px 16px;
          gap: 10px;
        }
        .mobile-bottom-bar a {
          flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 13px 16px; border-radius: 10px;
          font-size: 0.88rem; font-weight: 700;
          text-decoration: none; transition: all 0.2s;
        }
        .mobile-bottom-bar .btn-mobile-enquire {
          background: var(--crimson); color: var(--white);
        }
        .mobile-bottom-bar .btn-mobile-whatsapp {
          background: #25D366; color: var(--white);
        }
        .mobile-bottom-bar .btn-mobile-whatsapp svg { width: 20px; height: 20px; fill: #ffffff; }
        @media (max-width: 1024px) {
          .about-grid, .why-grid, .updates-grid { grid-template-columns: 1fr; }
          .sports-grid { grid-template-columns: repeat(2, 1fr); }
          .testi-grid { grid-template-columns: repeat(2, 1fr); }
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .infra-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-stats { display: none; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          section { padding: 56px 0; }
          .about-images { grid-template-rows: 180px 180px; }
          .testi-grid, .sports-grid { grid-template-columns: 1fr; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: auto; }
          .gallery-item:first-child { grid-column: 1 / 3; grid-row: auto; }
          .gallery-item:nth-child(4) { grid-column: auto; }
          .admission-content { flex-direction: column; }
          .admission-form { min-width: auto; width: 100%; }
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .hero-ctas { flex-direction: column; }
          .tab-bar { width: 100%; }
          .tab-btn { flex: 1; font-size: 0.78rem; padding: 10px 14px; }
          .topbar .inner { justify-content: center; }
          .topbar-right { display: none; }
          .about-text .features { grid-template-columns: 1fr; }
          .infra-grid { grid-template-columns: 1fr; }
          .updates-grid { grid-template-columns: 1fr; }
          .instagram-feed { grid-template-columns: repeat(3, 1fr); }
          .floating-enquire, .floating-whatsapp { display: none; }
          .mobile-bottom-bar { display: flex; }
          body { padding-bottom: 80px; }
        }
        @media (max-width: 480px) {
          .hero { height: 100svh; }
          .floating-enquire, .floating-whatsapp { display: none; }
          .mobile-bottom-bar { display: flex; }
          body { padding-bottom: 80px; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* TOP BAR */}
      <div className="topbar">
        <div className="inner">
          <div className="topbar-left">
            <a href="tel:+917413012351">📞 SPS: +91 74130 12351</a>
            <a href="tel:+918306991636">📞 SMHS: +91 8306991636</a>
          </div>
          <div className="topbar-right">
            <a href="#">ERP Login</a>
            <a href="#">Alumni</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      {/* <nav id="navbar">
        <div className="nav-inner">
          <a href="#" className="logo-wrap">
            <div className="logo-icon">S</div>
            <div className="logo-text">
              <span className="logo-name">Seedling Public School</span>
              <span className="logo-sub">CBSE Affiliated · Est. 1994</span>
            </div>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#">About Us ▾</a>
              <div className="dropdown">
                <a href="#">Introduction</a>
                <a href="#">Seedling Legacy</a>
                <a href="#">Vision &amp; Mission</a>
                <a href="#">Leadership</a>
                <a href="#">Affiliation &amp; Accreditations</a>
              </div>
            </li>
            <li>
              <a href="#">Schools ▾</a>
              <div className="dropdown">
                <a href="#">Seedling Public School (SPS)</a>
                <a href="#">Seedling Modern High School</a>
                <a href="#">Seedling International Academy</a>
                <a href="#">Seedling Modern International Academy</a>
                <a href="#">Seedling Wonderland Kids League</a>
              </div>
            </li>
            <li>
              <a href="#">Academics ▾</a>
              <div className="dropdown">
                <a href="#">Curriculum</a>
                <a href="#">Faculty</a>
                <a href="#">Library</a>
                <a href="#">Results</a>
                <a href="#">School Calendar</a>
              </div>
            </li>
            <li>
              <a href="#">Beyond Academics ▾</a>
              <div className="dropdown">
                <a href="#">Sports</a>
                <a href="#">Arts &amp; Culture</a>
                <a href="#">Student Leadership</a>
                <a href="#">Clubs &amp; Activities</a>
              </div>
            </li>
            <li>
              <a href="#">Admissions ▾</a>
              <div className="dropdown">
                <a href="#">Admission Procedure</a>
                <a href="#">Online Form</a>
                <a href="#">Fee Structure</a>
                <a href="#">Scholarship</a>
              </div>
            </li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Career</a></li>
          </ul>
          <a href="#admission" className="btn-enroll">Enquire Now</a>
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`mobile-menu${mobileMenuOpen ? " open" : ""}`} id="mobileMenu">
          <a href="#">About Us</a>
          <a href="#">Schools</a>
          <a href="#">Academics</a>
          <a href="#">Sports &amp; Activities</a>
          <a href="#">Admissions</a>
          <a href="#">Media</a>
          <a href="#">Career</a>
          <a href="#admission" style={{ color: "var(--crimson)", fontWeight: 700 }}>
            Enquire Now →
          </a>
        </div>
      </nav> */}

      {/* HERO */}
      <section className="hero">
        <div className="hero-slides">
          {slides.map((src, i) => (
            <div
              key={i}
              className={`hero-slide${currentSlide === i ? " active" : ""}`}
              style={{ backgroundImage: `url('${src}')` }}
            ></div>
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-tag">🎓 CBSE Affiliated · Jawahar Nagar, Jaipur</div>
          <h1>
            Where Every Child Finds Their <span>Wings</span>
          </h1>
          <p>
            Seedling Public School nurtures young minds with holistic education,
            world-class infrastructure, and a culture of excellence — shaping
            tomorrow's leaders since 1994.
          </p>
          <div className="hero-ctas">
            <a href="#admission" className="btn-primary">
              Apply for Admission 2025–26
            </a>
            <a href="#about" className="btn-ghost">
              Explore School →
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <strong>30+</strong>
            <span>Years of Excellence</span>
          </div>
          <div className="stat-card">
            <strong>5000+</strong>
            <span>Happy Students</span>
          </div>
          <div className="stat-card">
            <strong>150+</strong>
            <span>Qualified Faculty</span>
          </div>
          <div className="stat-card">
            <strong>100%</strong>
            <span>CBSE Results</span>
          </div>
        </div>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${currentSlide === i ? " active" : ""}`}
              onClick={() => goToSlide(i)}
            ></button>
          ))}
        </div>
      </section>

      {/* ANNOUNCEMENT */}
      <div className="announcement-bar">
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track">
            {[
              "Admissions Open for 2025–26 Academic Session",
              "Early Bird Benefits for Registrations Before March 31",
              "Scholarship Available for Meritorious Students in Academics & Sports",
              "Parent Counselling Available Online & Offline",
              "Results 2024: 100% Pass Rate · Multiple School Toppers",
              "Annual Sports Day – March 2025",
              "Admissions Open for 2025–26 Academic Session",
              "Early Bird Benefits for Registrations Before March 31",
              "Scholarship Available for Meritorious Students in Academics & Sports",
              "Parent Counselling Available Online & Offline",
              "Results 2024: 100% Pass Rate · Multiple School Toppers",
              "Annual Sports Day – March 2025",
            ].map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT SCHOOL */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-images">
              <div className="about-img">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80"
                  alt="School Building"
                />
              </div>
              <div className="about-img">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80"
                  alt="Classroom"
                />
              </div>
              <div className="about-img" style={{ position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80"
                  alt="Students"
                />
                <span className="about-badge">✦ CBSE Affiliated School</span>
              </div>
            </div>
            <div className="about-text">
              <span className="sec-label">About Seedling Public School</span>
              <h2 className="sec-title">Nurturing Excellence Since 1994 in Jaipur</h2>
              <p className="sec-sub">
                Seedling Public School stands as one of Jaipur's most trusted
                CBSE-affiliated institutions. Our student-centric approach blends
                rigorous academics with emotional intelligence, creativity, and
                leadership — raising confident, compassionate, future-ready
                individuals.
              </p>
              <div className="features">
                <div className="feature-item">
                  <div className="feature-icon">📚</div>
                  <div>
                    <h4>CBSE Curriculum</h4>
                    <p>Comprehensive, future-aligned syllabus with critical thinking at core.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🏆</div>
                  <div>
                    <h4>Award-Winning</h4>
                    <p>Recognized among Rajasthan's top CBSE schools for academic outcomes.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🤝</div>
                  <div>
                    <h4>Holistic Growth</h4>
                    <p>Sports, arts, and life skills integrated alongside academics.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🧠</div>
                  <div>
                    <h4>Mental Wellness</h4>
                    <p>Dedicated counsellors ensuring a stress-free, happy learning space.</p>
                  </div>
                </div>
              </div>
              <div className="about-cta">
                <a href="#" className="btn-navy">Our Story</a>
                <a href="#admission" className="btn-outline-navy">Book a School Tour</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE / CAMPUS TABS */}
      <section className="infra-section" id="campus">
        <div className="container">
          <div className="sec-header">
            <span className="sec-label">Our Infrastructure</span>
            <h2 className="sec-title">World-Class Campus &amp; Facilities</h2>
            <p className="sec-sub">
              Every space at Seedling is thoughtfully designed to inspire
              curiosity, collaboration, and growth.
            </p>
          </div>
          <div className="tab-bar">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`tab-btn${activeTab === tab.key ? " active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className={`tab-panel${activeTab === "campus" ? " active" : ""}`} id="tab-campus">
            <div className="infra-grid">
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80" alt="School Campus" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Campus</div>
                  <h3>Sprawling Green Campus</h3>
                  <p>Our 5-acre green campus provides a serene, distraction-free environment ideal for focused learning and outdoor activities.</p>
                </div>
              </div>
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80" alt="Classrooms" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Classrooms</div>
                  <h3>Smart Digital Classrooms</h3>
                  <p>Air-conditioned, tech-enabled classrooms with interactive boards fostering 21st-century learning for every student.</p>
                </div>
              </div>
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80" alt="Library" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Library</div>
                  <h3>Resource-Rich Library</h3>
                  <p>A vast collection of books, e-resources, and periodicals encouraging a love of reading and independent research.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-panel${activeTab === "labs" ? " active" : ""}`} id="tab-labs">
            <div className="infra-grid">
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Science Lab" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Science</div>
                  <h3>Advanced Science Labs</h3>
                  <p>Physics, Chemistry, and Biology labs equipped with latest apparatus enabling hands-on experimental learning.</p>
                </div>
              </div>
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80" alt="Computer Lab" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Technology</div>
                  <h3>AI &amp; Robotics Lab</h3>
                  <p>State-of-the-art computer and robotics lab introducing students to coding, AI tools, and future technologies.</p>
                </div>
              </div>
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Auditorium" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Facilities</div>
                  <h3>Modern Auditorium</h3>
                  <p>A fully equipped 800-seat auditorium for cultural events, seminars, and inter-school competitions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-panel${activeTab === "sports" ? " active" : ""}`} id="tab-sports">
            <div className="infra-grid">
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80" alt="Sports Ground" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Outdoor</div>
                  <h3>Multi-Sport Ground</h3>
                  <p>Dedicated grounds for cricket, football, athletics, and kabaddi — built to national standards.</p>
                </div>
              </div>
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80" alt="Swimming Pool" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Aquatics</div>
                  <h3>Swimming Pool</h3>
                  <p>Olympic-standard swimming pool with qualified coaches for beginner and advanced swimmers from Grade 3 onwards.</p>
                </div>
              </div>
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80" alt="Indoor Sports" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Indoor</div>
                  <h3>Indoor Sports Complex</h3>
                  <p>Badminton, table tennis, chess, and yoga facilities in a fully air-conditioned indoor sports complex.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`tab-panel${activeTab === "arts" ? " active" : ""}`} id="tab-arts">
            <div className="infra-grid">
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=600&q=80" alt="Music Room" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Music</div>
                  <h3>Music &amp; Dance Studio</h3>
                  <p>Fully equipped studios for classical and contemporary music, dance, and performing arts for all grades.</p>
                </div>
              </div>
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80" alt="Art Studio" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Visual Arts</div>
                  <h3>Art &amp; Craft Studio</h3>
                  <p>Creative spaces where students explore painting, sculpture, pottery, and digital design under expert guidance.</p>
                </div>
              </div>
              <div className="infra-card">
                <div className="infra-card-img">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80" alt="Drama" />
                </div>
                <div className="infra-card-body">
                  <div className="infra-tag">Theatre</div>
                  <h3>Drama &amp; Theatre Club</h3>
                  <p>Annual theatre productions, inter-school drama contests, and storytelling workshops for confident self-expression.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPORTS */}
      <section className="sports-section">
        <div className="container">
          <div className="sec-header">
            <span className="sec-label">Sports &amp; Athletics</span>
            <h2 className="sec-title">Champions On &amp; Off the Field</h2>
            <p className="sec-sub">
              At Seedling, sports are as important as academics. We train
              discipline, teamwork, and leadership through every game and
              competition.
            </p>
          </div>
          <div className="sports-grid">
            <div className="sport-card">
              <div className="sport-img">
                <img src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=400&q=80" alt="Cricket" />
              </div>
              <div className="sport-body">
                <h3>🏏 Cricket</h3>
                <p>BCCI-standard cricket ground with professional coaching and inter-school tournament participation.</p>
              </div>
            </div>
            <div className="sport-card">
              <div className="sport-img">
                <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80" alt="Football" />
              </div>
              <div className="sport-body">
                <h3>⚽ Football</h3>
                <p>Full-size football pitch with certified coaches. Students represent Rajasthan at state-level tournaments.</p>
              </div>
            </div>
            <div className="sport-card">
              <div className="sport-img">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80" alt="Athletics" />
              </div>
              <div className="sport-body">
                <h3>🏃 Athletics</h3>
                <p>400m track and field facility. Multiple district and state champions nurtured every year.</p>
              </div>
            </div>
            <div className="sport-card">
              <div className="sport-img">
                <img src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&q=80" alt="Badminton" />
              </div>
              <div className="sport-body">
                <h3>🏸 Badminton</h3>
                <p>Indoor courts for both singles and doubles play. Regular coaching and interschool competitions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SEEDLING */}
      <section className="why-section">
        <div className="container">
          <div className="why-grid">
            <div>
              <span className="sec-label">Why Choose Us</span>
              <h2 className="sec-title">Start Your Child's Joyride at Seedling</h2>
              <p className="sec-sub" style={{ marginBottom: "28px" }}>
                Every decision here is made with one goal — your child's brightest future.
              </p>
              <div className="why-list">
                <div className="why-item">
                  <div className="why-num">01</div>
                  <div>
                    <h4>Personalized Learning Journeys</h4>
                    <p>Tailored teaching approaches catering to each child's learning pace, strengths, and aspirations.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-num">02</div>
                  <div>
                    <h4>Future-Ready Skills</h4>
                    <p>AI literacy, sustainability education, critical thinking, and ethical leadership woven into the curriculum.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-num">03</div>
                  <div>
                    <h4>Global Mindset with Indian Values</h4>
                    <p>International exposure through exchange programs and competitions while staying rooted in cultural values.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-num">04</div>
                  <div>
                    <h4>Career Counselling from Grade 8</h4>
                    <p>Expert guidance for academic and career choices ensuring students are always prepared for tomorrow.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-visual">
              <div className="why-main-img">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80"
                  alt="Students Learning"
                />
              </div>
              <div className="why-float">
                <strong>30+</strong>
                <span>
                  Years of Academic
                  <br />
                  Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDENT GALLERY */}
      <section className="gallery-section">
        <div className="container">
          <div
            className="sec-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span className="sec-label">Campus Life</span>
              <h2 className="sec-title">Life at Seedling — Full of Colour</h2>
            </div>
            <a href="#" className="btn-navy" style={{ flexShrink: 0 }}>
              View All Photos
            </a>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80" alt="School Life" />
              <div className="gallery-overlay"><span>School Campus</span></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80" alt="Classroom" />
              <div className="gallery-overlay"><span>Smart Classrooms</span></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" alt="Sports" />
              <div className="gallery-overlay"><span>Sports &amp; Athletics</span></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1545830790-b1804d18d5ff?w=800&q=80" alt="Group Activity" />
              <div className="gallery-overlay"><span>Group Activities</span></div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=400&q=80" alt="Cultural Events" />
              <div className="gallery-overlay"><span>Cultural Events</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="sec-header" style={{ textAlign: "center" }}>
            <span className="sec-label">Parent Testimonials</span>
            <h2 className="sec-title">Voices from the Seedling Family</h2>
            <p className="sec-sub" style={{ margin: "0 auto" }}>
              Real stories from parents and students who've experienced the Seedling difference.
            </p>
          </div>
          <div className="testi-grid">
            <div className="testi-card">
              <span className="testi-quote">"</span>
              <div className="stars">★★★★★</div>
              <p className="testi-text">
                Seedling transformed my daughter's confidence completely. The teachers
                genuinely care — she went from being shy to performing on stage at the
                Annual Day. The balance of studies and activities is remarkable.
              </p>
              <div className="testi-author">
                <div className="testi-avatar">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Parent" />
                </div>
                <div>
                  <div className="testi-name">Sunita Sharma</div>
                  <div className="testi-role">Parent of Grade 8 student</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <span className="testi-quote">"</span>
              <div className="stars">★★★★★</div>
              <p className="testi-text">
                My son has been at Seedling since Grade 1. Now in Grade 11, he's
                represented Rajasthan in cricket AND secured 94% in his boards. The
                school walks the talk on holistic development.
              </p>
              <div className="testi-author">
                <div className="testi-avatar">
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Parent" />
                </div>
                <div>
                  <div className="testi-name">Rajesh Gupta</div>
                  <div className="testi-role">Parent of Grade 11 student</div>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <span className="testi-quote">"</span>
              <div className="stars">★★★★★</div>
              <p className="testi-text">
                The parent-teacher communication is excellent. I always know how my
                child is progressing. The counselling sessions helped our family
                understand our child's learning style so much better.
              </p>
              <div className="testi-author">
                <div className="testi-avatar">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Parent" />
                </div>
                <div>
                  <div className="testi-name">Priya Mehta</div>
                  <div className="testi-role">Parent of Grade 4 student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING UPDATES + INSTAGRAM */}
      <section className="updates-section">
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: 0,
            }}
          >
            <div>
              <span className="sec-label">Latest at Seedling</span>
              <h2 className="sec-title" style={{ color: "var(--white)" }}>
                Trending Updates &amp; News
              </h2>
            </div>
            <a href="#" className="btn-ghost">
              All Updates →
            </a>
          </div>
          <div className="updates-grid">
            <div>
              {[
                {
                  day: "12",
                  month: "APR",
                  title: "Annual Sports Day 2025 – A Grand Celebration",
                  desc: "Over 2,000 students participated in track & field events, team sports, and the marquee relay championship.",
                },
                {
                  day: "05",
                  month: "APR",
                  title: "Board Results 2024 – 100% Pass, Multiple Merit Ranks",
                  desc: "Seedling students shine yet again with 14 students scoring above 95% in CBSE Class 12 examinations.",
                },
                {
                  day: "28",
                  month: "MAR",
                  title: "Admissions Open – 2025-26 Early Bird Offer",
                  desc: "Register before April 30 and avail exclusive early bird benefits including fee concessions and priority class allocation.",
                },
                {
                  day: "15",
                  month: "MAR",
                  title: "Science Fair Winners – District Level Recognition",
                  desc: "Three Seedling teams won gold at the District Science Exhibition for their projects on sustainable energy.",
                },
              ].map((item, i) => (
                <div className="update-item" key={i}>
                  <div className="update-date">
                    <strong>{item.day}</strong>
                    <span>{item.month}</span>
                  </div>
                  <div className="update-body">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="ig-label">
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow us @seedlingschoolsjaipur
              </div>
              <div className="instagram-feed">
                {[
                  "https://images.unsplash.com/photo-1588072432836-e10032774350?w=300&q=80",
                  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&q=80",
                  "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=300&q=80",
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80",
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80",
                  "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=300&q=80",
                ].map((src, i) => (
                  <div className="ig-item" key={i}>
                    <img src={src} alt={`IG ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION CTA */}
      <section className="admission-section" id="admission">
        <div className="container">
          <div className="admission-content">
            <div className="admission-text">
              <h2>Join the Seedling Family — Enroll Your Child Today!</h2>
              <p>
                Admissions for 2025–26 are now open. Experience the difference of a
                school that truly cares about every child's growth, happiness, and
                future.
              </p>
              <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "Early Bird Benefits for Early Registrations",
                  "Scholarships for Meritorious Students",
                  "Parent Counselling Available Online & Offline",
                  "Flexible Fee Payment Options",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="admission-form">
              <h3>Request a Callback</h3>
              <div className="form-group">
                <input type="text" placeholder="Name of Child" />
              </div>
              <div className="form-group">
                <select defaultValue="">
                  <option value="" disabled>Select Grade / Class</option>
                  <option>Nursery / LKG / UKG</option>
                  <option>Grade 1–5</option>
                  <option>Grade 6–8</option>
                  <option>Grade 9–10</option>
                  <option>Grade 11–12</option>
                </select>
              </div>
              <div className="form-group">
                <input type="email" placeholder="Parent's Email Address" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Contact Number" />
              </div>
              <button className="btn-submit">Submit Enquiry →</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand footer-col">
                <a
                  href="#"
                  className="logo-wrap"
                  style={{ marginBottom: "14px", display: "inline-flex" }}
                >
                  <div className="logo-icon" style={{ background: "var(--crimson)" }}>
                    S
                  </div>
                  <div className="logo-text">
                    <span className="logo-name">Seedling Public School</span>
                    <span className="logo-sub">CBSE Affiliated</span>
                  </div>
                </a>
                <p className="footer-tagline">
                  Nurturing excellence, fostering creativity, and shaping
                  tomorrow's leaders — one student at a time — since 1994.
                </p>
                <div className="footer-socials">
                  <a className="social-btn" href="#" title="Facebook">f</a>
                  <a className="social-btn" href="#" title="Instagram">ig</a>
                  <a className="social-btn" href="#" title="YouTube">▶</a>
                  <a className="social-btn" href="#" title="Twitter">✕</a>
                </div>
              </div>
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Vision &amp; Mission</a></li>
                  <li><a href="#">Leadership</a></li>
                  <li><a href="#">Media Gallery</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Alumni Network</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Our Schools</h4>
                <ul>
                  <li><a href="#">Seedling Public School (SPS)</a></li>
                  <li><a href="#">Seedling Modern High School</a></li>
                  <li><a href="#">Seedling International Academy</a></li>
                  <li><a href="#">SMIA</a></li>
                  <li><a href="#">Seedling Wonderland Kids</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>SPS &amp; SIA Campus</h4>
                <div className="contact-info">
                  <a href="#">📍 Bank St, Sector 4, Jawahar Nagar, Jaipur 302004</a>
                  <a href="tel:01413623000">📞 0141-3623000</a>
                  <a href="tel:+917413012351">📞 +91 74130 12351</a>
                  <a href="mailto:seedlingacademy@hotmail.com">✉ seedlingacademy@hotmail.com</a>
                </div>
                <div style={{ marginTop: "16px" }}>
                  <a href="#" className="btn-navy" style={{ fontSize: "0.8rem", padding: "9px 18px" }}>
                    ERP Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <span>© 2025 Seedling Public School, Jaipur. All rights reserved.</span>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
              <a href="#">Mandatory Disclosure</a>
            </div>
          </div>
        </div>
      </footer> */}

      {/* FLOATING BUTTONS */}
      <a
        href="https://wa.me/917413012351"
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.865-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
      <a href="#admission" className="floating-enquire">
        Enquire Now
      </a>

      {/* MOBILE BOTTOM BAR */}
      <div className="mobile-bottom-bar">
        <a href="#admission" className="btn-mobile-enquire">
          ✉ Enquire Now
        </a>
        <a
          href="https://wa.me/917413012351"
          className="btn-mobile-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.865-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </>
  );
}