"use client";

import { useEffect, useRef, useState } from "react";
import HeroWrapper from "@/components/layout/HeroWrapper";

// --- Custom Styles for Portability ---
const pageStyles = `
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-in-down {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fade-in-right {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .animate-fade-in { animation: fade-in 0.8s ease forwards; }
  .animate-fade-in-up { animation: fade-in-up 1s ease 0.2s both; }
  .animate-fade-in-down { animation: fade-in-down 0.7s ease 0.1s both; }
  .animate-fade-in-right { animation: fade-in-right 0.8s ease 0.3s both; }
  
  .scrollbar-hide::-webkit-scrollbar { display: none; }
  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

// ==========================================
// DATA ARRAYS
// ==========================================

const galleryItems = [
  { id: 1, src: "/assets/ANNUAL FETE/1.webp", title: "Annual Fete", category: "Events", size: "large" },
  { id: 2, src: "/assets/MOTHER_S DAY/2.webp", title: "Mother's Day", category: "Celebrations", size: "small" },
  { id: 3, src: "/assets/img/yoga1.jpg", title: "Yoga & Meditation", category: "Wellness", size: "small" },
  { id: 4, src: "/assets/SPORTS DAY/1.webp", title: "Sports Carnival", category: "Sports", size: "wide" },
  { id: 5, src: "/assets/ANNUAL FUNCTION/2.webp", title: "Cultural Fest", category: "Events", size: "small" },
  { id: 6, src: "/assets/ANNUAL FUNCTION/3.webp", title: "Annual Day", category: "Events", size: "large" },
  { id: 7, src: "/assets/STELLAR SATURDAYS/1.webp", title: "Stellar Saturday", category: "Activities", size: "small" },
  { id: 8, src: "/assets/XMAS CARNIVAL/1.webp", title: "Christmas Celebrations", category: "Festivals", size: "small" },
  { id: 9, src: "/assets/CRICKET FEVER/1.webp", title: "Cricket Fever", category: "Sports", size: "wide" },
  { id: 10, src: "/assets/ANNUAL FUNCTION/4.webp", title: "Farewell Ceremony", category: "Events", size: "small" },
  { id: 11, src: "/assets/ANNUAL FUNCTION/5.webp", title: "Farewell Programme", category: "Events", size: "small" },
  { id: 12, src: "/assets/MOTHER_S DAY/1.webp", title: "Mother's Day", category: "Celebrations", size: "small" },
  { id: 13, src: "/assets/BOOT CAMP/1.webp", title: "Boot Camp", category: "Activities", size: "large" },
  { id: 14, src: "/assets/BOOT CAMP/2.webp", title: "Outdoor Learning", category: "Activities", size: "small" },
  { id: 15, src: "/assets/ANNUAL FUNCTION/1.webp", title: "Annual Day", category: "Events", size: "wide" },
  { id: 16, src: "/assets/SPORTS DAY/2.webp", title: "Sports Day", category: "Sports", size: "small" },
  { id: 17, src: "/assets/STELLAR SATURDAYS/2.webp", title: "Stellar Saturday", category: "Activities", size: "small" },
  { id: 18, src: "/assets/DESIGN CAREER FAIR/1.webp", title: "Career Fair", category: "Events", size: "small" },
  { id: 19, src: "/assets/WHISPERS OF WELLNESS/1.webp", title: "Wellness Week", category: "Wellness", size: "large" },
  { id: 20, src: "/assets/DESIGN CAREER FAIR/4.webp", title: "Career Guidance", category: "Events", size: "small" },
  { id: 21, src: "/assets/XMAS CARNIVAL/2.webp", title: "Christmas Carnival", category: "Festivals", size: "small" },
  { id: 22, src: "/assets/SHOWCASING WONDERLAND/2.webp", title: "Annual Show", category: "Events", size: "wide" },
  { id: 23, src: "/assets/WHISPERS OF WELLNESS/2.webp", title: "Mental Health", category: "Wellness", size: "small" },
  { id: 24, src: "/assets/CRICKET FEVER/2.webp", title: "Cricket Tournament", category: "Sports", size: "small" },
];

const sportBlocks = [
  {
    image: "/assets/SPORTS DAY/2.webp",
    tag: "Athletics",
    title: "Sports at Par with Academics",
    body: "At Seedling Schools, sports remain at par with academics, instilling qualities of confidence, teamwork, responsibility, discipline, and leadership. Our organized sports events span from intra-school to national levels, showcasing tremendous growth in students' techniques and performance.",
    highlights: ["Intra-School Events", "National Level Tournaments", "Dedicated Coaches"],
    reverse: false,
  },
  {
    image: "/assets/SPORTS DAY/3.webp",
    tag: "Sports Day",
    title: "SPS Sports Day",
    body: "With a diverse range of sports activities, including traditional and contemporary options, we cater to every student's interests and needs. Our dedicated coaches shape well-rounded individuals, fostering a passion for sports and achieving notable success in tournaments.",
    highlights: ["Track & Field", "Team Sports", "Individual Events"],
    reverse: true,
  },
  // {
  //   image: "/assets/CRICKET FEVER/2.webp",
  //   tag: "Carnival",
  //   title: "SMHS Sports Carnival",
  //   body: "The SMHS Sports Carnival is a spectacular celebration of physical excellence and team spirit. Students from all grades come together in a festival of friendly competition, showcasing their athletic talents and boundless energy.",
  //   highlights: ["Multi-Sport Format", "House Competitions", "Award Ceremony"],
  //   reverse: false,
  // },
];

const activities = [
  {
    icon: "🎭",
    title: "Annual Day",
    desc: "A grand celebration of student talent with performances spanning music, dance, drama and spoken word.",
    image: "/assets/img/SMHS-Annual-Day.jpg",
    color: "from-navy/80 to-navy-deeper/80",
  },
  {
    icon: "🧘",
    title: "Yoga & Meditation",
    desc: "Integrated wellness programmes that nurture mental clarity, physical balance, and emotional resilience.",
    image: "/assets/img/yoga1.jpg",
    color: "from-mauve/80 to-navy-deeper/80",
  },
  {
    icon: "🎄",
    title: "Festivals & Celebrations",
    desc: "From Christmas to Founders Day, our calendar is rich with cultural celebrations that build community.",
    image: "/assets/img/Christmas.jpeg",
    color: "from-crimson/80 to-crimson-dark/80",
  },
  {
    icon: "🛹",
    title: "Skaters Sunday Bash",
    desc: "Weekend skating events that promote active lifestyles, peer bonding, and a love for movement.",
    image: "/assets/img/skaters.jpg",
    color: "from-navy-dark/80 to-navy-deeper/80",
  },
  {
    icon: "🌺",
    title: "Mother's Day",
    desc: "Heartfelt tributes organised by students to celebrate and honour the most important people in their lives.",
    image: "/assets/img/Mothersday9.jpg",
    color: "from-crimson-dark/80 to-crimson-deeper/80",
  },
  {
    icon: "🏆",
    title: "Celebrating Talent",
    desc: "We celebrate academic excellence with our toppers, honouring their hard work and dedication.",
    image: "/assets/img/Celebrating-Talent.jpeg",
    color: "from-black/60 to-navy-deeper/80",
  },
];

const experiences = [
  {
    name: "Vatan Parnami and Anku Sapra",
    role: "Parents",
    image: "/assets/testimonial/school-life/Vatan Parnami and Anku Sapra.jpeg",
    quote: "Seedling Public School has been a second home for our child. The warmth, care, and attention given to every student is remarkable. We are grateful for the strong foundation SPS provides.",
    school: "Seedling Public School",
    highlight: "Nurturing Environment",
  },
  {
    name: "Jasvinder Singh Wadhawan & Paramjeet Kaur",
    role: "Parents",
    image: "/assets/testimonial/school-life/JASVINDER SINGH WADHAWAN & PARAMJEET KAUR.jpeg",
    quote: "The academic excellence at Seedling Public School is outstanding. The teachers are dedicated, the curriculum is engaging, and the school ensures every child receives individual attention and guidance.",
    school: "Seedling Public School",
    highlight: "Academic Excellence",
  },
  {
    name: "Meghna Manglani",
    role: "Parent",
    image: "/assets/testimonial/school-life/MEGHNA MANGLANI.jpeg",
    quote: "At Seedling Public School, teachers go beyond academics to build character and confidence. Our child has grown not just in knowledge but as a compassionate and curious individual.",
    school: "Seedling Public School",
    highlight: "Holistic Development",
  },
  {
    name: "Deepak Adwani & Varsha Adwani",
    role: "Parents",
    image: "/assets/testimonial/school-life/DEEPAK ADWANI & VARSHA ADWANI.jpeg",
    quote: "We chose Seedling Public School for its clean campus, safe environment, and excellent faculty. The school's focus on both studies and extracurricular activities makes it truly special.",
    school: "Seedling Public School",
    highlight: "Safe & Supportive",
  },
  {
    name: "Divya Soni",
    role: "Parent",
    image: "/assets/testimonial/school-life/Divya-Soni.jpeg",
    quote: "Seedling Public School prepares students for the future with its modern approach to education. The blend of tradition and innovation in teaching methods gives our children an edge in today's world.",
    school: "Seedling Public School",
    highlight: "Future-Ready",
  },
];

const stripImages = [
  { src: "/assets/img/sps-1.jpg", label: "Campus Life" },
  { src: "/assets/img/sps-2.jpg", label: "Classroom Innovation" },
  { src: "/assets/img/sps-3.jpg", label: "Student Community" },
  { src: "/assets/img/feature-1.jpg", label: "NEP Curriculum" },
  { src: "/assets/img/feature-4.jpg", label: "Experiential Learning" },
  { src: "/assets/img/life-at-sps.jpg", label: "Life at Seedling" },
  { src: "/assets/img/feature-2.jpg", label: "State-of-the-Art Facilities" },
  { src: "/assets/img/counselling-1.jpg", label: "Parent Counselling" },
  { src: "/assets/Home/classroom.jpg", label: "Modern Classrooms" },
  { src: "/assets/Home/library.jpg", label: "Library & Learning" },
  { src: "/assets/Home/smart-classroom.jpg", label: "Smart Classrooms" },
  { src: "/assets/img/feature-3.jpg", label: "Science Labs" },
  { src: "/assets/img/feature-5.jpg", label: "Art & Creativity" },
  { src: "/assets/img/Christmas.jpeg", label: "Festive Celebrations" },
  { src: "/assets/img/yoga1.jpg", label: "Yoga & Wellness" },
  { src: "/assets/img/skaters.jpg", label: "Skating Events" },
  { src: "/assets/BOOT CAMP/1.webp", label: "Adventure Camp" },
  { src: "/assets/BOOT CAMP/2.webp", label: "Outdoor Learning" },
  { src: "/assets/SPORTS DAY/1.webp", label: "Sports Day" },
  { src: "/assets/SPORTS DAY/2.webp", label: "Athletics" },
  { src: "/assets/ANNUAL FUNCTION/1.webp", label: "Annual Day" },
  { src: "/assets/ANNUAL FUNCTION/3.webp", label: "Cultural Fest" },
  { src: "/assets/STELLAR SATURDAYS/1.webp", label: "Stellar Saturdays" },
  { src: "/assets/XMAS CARNIVAL/1.webp", label: "Christmas Carnival" },
];

const features = [
  {
    icon: "📚",
    title: "Aligned With NEP",
    desc: "Our curriculum is thoughtfully designed to align with the National Education Policy, ensuring students receive future-ready education.",
    image: "/assets/Home/classroom.jpg",
  },
  {
    icon: "🔬",
    title: "State-of-the-Art Facilities",
    desc: "Modern classrooms, well-equipped science labs, and engaging outdoor spaces create an environment that enhances learning.",
    image: "/assets/Home/library.jpg",
  },
  {
    icon: "💻",
    title: "Technology Integrated Education",
    desc: "Interactive whiteboards, educational apps, and online resources create an engaging and dynamic learning experience.",
    image: "/assets/Home/smart-classroom.jpg",
  },
  {
    icon: "🤝",
    title: "Experiential Learning",
    desc: "Practical experiments, outdoor excursions, and interactive projects foster critical thinking and a love for learning.",
    image: "/assets/BOOT CAMP/2.webp",
  },
  {
    icon: "💬",
    title: "Effective Feedback",
    desc: "Timely and constructive feedback from teachers maintains open communication with parents for continuous growth.",
    image: "/assets/BOOT CAMP/3.webp",
  },
  {
    icon: "🌱",
    title: "Holistic Well-being",
    desc: "We prioritize emotional, social, and physical well-being — nurturing every student, parent, and staff member.",
    image: "/assets/WHISPERS OF WELLNESS/3.webp",
  },
];

// ==========================================
// INTERNAL COMPONENTS
// ==========================================

function MasonryGallery() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <section id="gallery" className="py-16 pb-8 bg-navy-deeper relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D6D1CF 0, #D6D1CF 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-sand text-sm uppercase tracking-[0.3em] font-light">
              Visual Journal
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mt-2">
              Snippets of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand to-white/60">
                Seedling
              </span>
            </h2>
          </div>
          <p className="hidden md:block text-white/40 text-sm max-w-xs text-right leading-relaxed font-dm">
            Every frame tells the story of a vibrant, thriving community
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-1">
          {galleryItems.map((item) => {
            const heightClass =
              item.size === "large"
                ? "h-72 md:h-80"
                : item.size === "wide"
                  ? "h-48 md:h-52"
                  : "h-40 md:h-44";

            return (
              <div
                key={item.id}
                className={`relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer group mb-1 ${heightClass}`}
                onClick={() => setLightbox(item)}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category badge */}
                <div
                  className={`absolute top-3 left-3 bg-sand text-navy-deeper text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-300 ${activeItem === item.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    }`}
                >
                  {item.category}
                </div>
                {/* Title */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${activeItem === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                >
                  <p className="text-white font-semibold text-sm font-dm">{item.title}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-4 h-px bg-sand" />
                    <span className="text-sand text-xs font-dm">View</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-navy-deeper/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-deeper/80 p-6">
              <span className="text-sand text-xs uppercase tracking-widest">{lightbox.category}</span>
              <h3 className="text-white text-2xl font-bold mt-1 font-playfair">{lightbox.title}</h3>
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function SportsSection() {
  return (
    <section className="py-16 pb-8 bg-off-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sand/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-deeper/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="text-sand text-sm uppercase tracking-[0.3em] font-medium">
            Physical Excellence
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper mt-3">
            Sports & Physical
            <span className="text-crimson"> Activities</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-sand" />
        </div>

        {/* Zigzag blocks */}
        <div className="space-y-24">
          {sportBlocks.map((block, i) => (
            <div
              key={i}
              className={`flex flex-col ${block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-[55%] relative group">
                <div
                  className={`absolute -inset-4 rounded-3xl bg-gradient-to-br from-sand/20 to-navy-deeper/10 transition-all duration-500 group-hover:scale-[1.02] ${block.reverse ? "-right-4 left-auto" : "-left-4 right-auto"
                    }`}
                />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/40 to-transparent" />
                  {/* Tag badge */}
                  <div className="absolute top-4 left-4 bg-crimson text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                    {block.tag}
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`w-full lg:w-[45%] ${block.reverse ? "lg:pr-8" : "lg:pl-8"}`}>
                <h3 className="font-playfair text-4xl font-black text-navy-deeper leading-tight mb-6">
                  {block.title}
                </h3>
                <p className="text-text-base leading-relaxed text-lg mb-8 font-dm">{block.body}</p>

                {/* Highlight pills */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {block.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-4 py-2 border border-sand/40 text-navy-deeper text-sm rounded-full hover:bg-sand hover:text-navy-deeper transition-colors duration-200 cursor-default font-dm font-bold"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Decorative line */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-crimson" />
                  <span className="text-crimson text-xs uppercase tracking-widest font-bold font-dm">
                    Excellence in Every Sport
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivitiesGrid() {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const activityFolders: { [key: string]: string[] } = {
    "Annual Day": [
      "/assets/ANNUAL FUNCTION/1.webp",
      "/assets/ANNUAL FUNCTION/2.webp",
      "/assets/ANNUAL FUNCTION/3.webp",
      "/assets/ANNUAL FUNCTION/4.webp",
      "/assets/ANNUAL FUNCTION/5.webp",
      "/assets/ANNUAL FUNCTION/6.webp",
      "/assets/ANNUAL FUNCTION/7.webp",
    ],
    "Yoga & Meditation": [
      "/assets/img/yoga1.jpg",
    ],
    "Festivals & Celebrations": [
      "/assets/XMAS CARNIVAL/1.webp",
      "/assets/XMAS CARNIVAL/2.webp",
      "/assets/XMAS CARNIVAL/3.webp",
      "/assets/XMAS CARNIVAL/christmas 1.webp",
      "/assets/XMAS CARNIVAL/christmas 2.webp",
      "/assets/XMAS CARNIVAL/christmas 3.webp",
      "/assets/XMAS CARNIVAL/christmas 5.webp",
      "/assets/XMAS CARNIVAL/christmas.webp",
    ],
    "Skaters Sunday Bash": ["/assets/img/skaters.jpg"],
    "Mother's Day": [
      "/assets/MOTHER_S DAY/1.webp",
      "/assets/MOTHER_S DAY/2.webp",
    ],
    "Celebrating Talent": ["/assets/img/Celebrating-Talent.jpeg"],
  };

  const currentImages = selectedActivity !== null ? activityFolders[activities[selectedActivity].title] || [activities[selectedActivity].image] : [];

  return (
    <section className="py-8 md:pt-14  pb-8 bg-white relative overflow-hidden">
      {/* Large decorative text */}
      {/* <div className="absolute top-8 left-0 right-0 text-center pointer-events-none select-none">
        <span className="text-[10rem] font-black text-navy-deeper/[0.03] leading-none font-playfair">BEYOND</span>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          {/* <span className="text-gray-800 text-sm uppercase tracking-[0.3em] font-medium">
            Holistic Growth
          </span> */}
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper mt-3">
            Beyond
            <span className="text-crimson"> Academics</span>
          </h2>
          <p className="mt-4 text-text-light max-w-xl mx-auto leading-relaxed font-dm">
            At Seedling, we believe learning extends far beyond the classroom.
            Our diverse extracurricular ecosystem shapes leaders, creators, and changemakers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3]"
              onClick={() => {
                setSelectedActivity(i);
                setSelectedImageIndex(0);
              }}
            >
              {/* Background image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Default gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-70 group-hover:opacity-90 transition-opacity duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="text-4xl mb-3 transform transition-transform duration-300 group-hover:-translate-y-1">
                  {activity.icon}
                </div>
                <h3 className="font-playfair text-2xl font-black text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 font-dm">
                  {activity.desc}
                </p>
                <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <div className="w-6 h-px bg-sand" />
                  <span className="text-sand text-xs uppercase tracking-widest font-bold">
                    Explore
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedActivity !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy-deeper/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedActivity(null)}
        >
          <div
            className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <div className="relative aspect-video bg-black">
              <img
                src={currentImages[selectedImageIndex]}
                alt={activities[selectedActivity!].title}
                className="w-full h-full object-contain"
              />
              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setSelectedActivity(null)}
              >
                ✕
              </button>
              {/* Navigation arrows */}
              {currentImages.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
                    }}
                  >
                    ←
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
                    }}
                  >
                    →
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail strip */}
            {currentImages.length > 1 && (
              <div className="flex gap-2 p-4 bg-navy-deeper overflow-x-auto">
                {currentImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(idx);
                    }}
                    className={`flex-none w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? "border-sand scale-105" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

                      </div>
        </div>
      )}
    </section>
  );
}

function ExperienceSection() {
  const [active, setActive] = useState(0);
  const current = experiences[active];

  return (
    <section className="py-16 pb-8 bg-crimson relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 600 800" className="w-full h-full">
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
            fontSize="300" fill="#D6D1CF" fontFamily="serif" fontWeight="900">
            "
          </text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sand text-sm uppercase tracking-[0.3em] font-medium">
            Voices of Seedling
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mt-3">
            Parent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand to-white/60">
              {" "}Experiences
            </span>
          </h2>
        </div>

        {/* Main testimonial display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sand/20 to-transparent" />
            <div className="relative overflow-hidden rounded-2xl aspect-square max-w-md mx-auto shadow-2xl">
              <img
                key={active}
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover object-top animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-sand text-navy-deeper text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider">
                  {current.highlight}
                </span>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="text-white">
            <div className="text-sand text-8xl font-playfair leading-none mb-4 opacity-40">"</div>
            <blockquote
              key={`quote-${active}`}
              className="text-white/80 text-xl md:text-2xl leading-relaxed mb-8 font-dm font-light animate-fade-in"
            >
              {current.quote}
            </blockquote>
            <div className="border-t border-white/10 pt-6">
              <div className="text-white font-black text-lg font-playfair tracking-tight">{current.name}</div>
              <div className="text-sand text-sm mt-1 font-dm font-bold uppercase tracking-widest">{current.role}</div>
              <div className="text-white/40 text-xs mt-0.5 font-dm">{current.school}</div>
            </div>
          </div>
        </div>

        {/* Thumbnail nav */}
        <div className="flex gap-4 justify-center flex-wrap">
          {experiences.map((exp, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${active === i
                ? "w-14 h-14 ring-2 ring-sand ring-offset-2 ring-offset-navy-deeper"
                : "w-12 h-12 opacity-50 hover:opacity-80"
                }`}
            >
              <img
                src={exp.image}
                alt={exp.name}
                className="w-full h-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -400 : 400, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-6 md:py-12 pb-8 bg-off-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            {/* <span className="text-sand text-sm uppercase tracking-[0.3em] font-medium">
              Highlight Reel
            </span> */}
            <h2 className="font-playfair text-5xl font-black text-navy-deeper mt-2">
              Highlight
              <span className="text-crimson"> Moments</span>
            </h2>
          </div>
          {/* Nav arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border-2 border-navy-deeper/20 hover:border-crimson hover:bg-crimson hover:text-white text-navy-deeper transition-all duration-300 flex items-center justify-center font-black"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border-2 border-navy-deeper/20 hover:border-crimson hover:bg-crimson hover:text-white text-navy-deeper transition-all duration-300 flex items-center justify-center font-black"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 pb-4 scrollbar-hide"
      >
        {stripImages.map((img, i) => (
          <div
            key={i}
            className="flex-none w-[260px] md:w-[300px] h-[200px] md:h-[240px] snap-start relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="text-white font-black text-lg font-playfair">{img.label}</span>
            </div>
            {/* Corner number */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xs font-bold">
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-off-white to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-off-white to-transparent pointer-events-none z-10" />
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="pt-10 pb-8 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sand text-sm uppercase tracking-[0.3em] font-medium">
            Our Difference
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy-deeper mt-3">
            What Makes Us
            <span className="text-crimson"> Special</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-off-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image at top */}
              <div className="h-48 overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-playfair text-xl font-black text-navy-deeper mb-3">{f.title}</h3>
                <p className="text-text-light text-sm leading-relaxed font-dm">{f.desc}</p>
              </div>
              {/* Gold accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sand via-crimson to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/assets/DESIGN CAREER FAIR/5.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deeper/95 via-navy-deeper/85 to-sand/30" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-sand/10" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-sand/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Small tag */}
        <div className="inline-flex items-center gap-2 bg-sand/20 border border-sand/30 rounded-full px-6 py-2 text-sand text-sm uppercase tracking-[0.25em] mb-8 font-dm font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-sand animate-pulse" />
          Admissions Open 2026–27
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
          Join the
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sand via-white/50 to-sand">
            Seedling Family
          </span>
        </h2>

        <p className="text-white/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed font-dm font-light">
          Enrol your child today and give them the gift of a world-class education
          at one of Jaipur's most celebrated schools — prioritising well-being and
          community since 1993.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="/admissions#enquire"
            className="group relative px-12 py-5 bg-crimson text-white font-black text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-crimson/40 hover:scale-105"
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          {/* <a
            href="/admissions#enquire"
            className="group px-12 py-5 border-2 border-white/30 text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-navy-deeper transition-all duration-300"
          >
            Book a Visit
          </a> */}
        </div>

        {/* Contact strip */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/40 text-sm font-dm uppercase tracking-widest">
          <a href="tel:+917413012351" className="hover:text-sand transition-colors">
            SPS: +91 74130 12351
          </a>
          {/* <span className="hidden sm:block text-white/20">|</span> */}
          {/* <a href="tel:+919587772837" className="hover:text-sand transition-colors">
            SMHS: +91 95877 72837
          </a> */}
          <span className="hidden sm:block text-white/20">|</span>
          <a href="mailto:seedlingacademy@hotmail.com" className="hover:text-sand transition-colors font-bold">
            seedlingacademy@hotmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================

/* 
  Note: Exporting metadata from a "use client" component is not allowed in Next.js.
  If you are copying this entire file into another project's page.tsx, you might need 
  to separate out the metadata into a different layout file, or wrap this single component 
  inside a server component that exports metadata.

  export const metadata = {
    title: "School Life | Seedling Group of Schools",
    description:
      "Experience life at Seedling Group of Schools — Jaipur's premier educational institution since 1993. Explore our vibrant campus life, sports, arts, and beyond.",
  };
*/

export default function SchoolLifePage() {
  return (
    <main className="bg-white">
      {/* 
        This style block contains all the custom keyframes and font classes 
        that were originally in tailwind.config.ts, ensuring the file remains 
        100% self-contained when you move it to another project.
      */}
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <HeroWrapper
        backgroundImage="/assets/SHOWCASING WONDERLAND/1.webp"
        title="Life at Seedling"
        subtitle="Where every child discovers, learns, and grows into their brightest self."
        badge="School Life"
        breadcrumbs={[{ label: "School Life" }]}
        height="large"
        overlayOpacity={0.5}
      />
      <MasonryGallery />
      {/* <SportsSection /> */}
      <ActivitiesGrid />
      <GalleryStrip />
      {/* <FeaturesSection /> */}
      {/* <CTASection /> */}
    </main>
  );
}
