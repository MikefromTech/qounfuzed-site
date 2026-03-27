import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Music,
  ChevronDown,
  Mic2,
  Building2,
  Users,
  Heart,
  Star,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import Q1 from "@/assets/Q1.jpg";
import Q2 from "@/assets/Q2.jpg";
import Q3 from "@/assets/Q3.jpg";
import Q4 from "@/assets/Q4.jpg";
import Q5 from "@/assets/Q5.jpg";
import Q6 from "@/assets/Q6.jpg";
import Q7 from "@/assets/Q7.jpg";
import Q8 from "@/assets/Q8.jpg";
import Q9 from "@/assets/Q9.jpg";
import Q10 from "@/assets/Q10.jpg";


import merch1 from "@/assets/merch1.jpg";
import merch2 from "@/assets/merch2.jpg";
import merch3 from "@/assets/merch3.jpg";
import merch4 from "@/assets/merch4.jpg";
import merch5 from "@/assets/merch5.jpg";
import merch6 from "@/assets/merch6.jpg";


const galleryImages = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10];

const bookingCategories = [
  {
    icon: Mic2,
    title: "Live Shows",
    description: "High-energy club performances, festivals, and live events.",
    href: "/live",
  },
  {
    icon: Building2,
    title: "Corporate",
    description: "Professional entertainment for corporate functions and galas.",
    href: "/corporate",
  },
  {
    icon: Users,
    title: "Private Parties",
    description: "Exclusive DJ sets for private gatherings and house parties.",
    href: "/private",
  },
  {
    icon: Heart,
    title: "Weddings",
    description: "Unforgettable music experiences for your special day.",
    href: "/weddings",
  },
  {
    icon: Star,
    title: "Endorsements",
    description: "Brand collaborations and ambassador partnerships.",
    href: "/endorsements",
  },
];

const merch = [
  { image: merch1, name: " Hoodies", msg: "Hi, I'd like to order the Qounfuzed Hoodie" },
  { image: merch2, name: "Caps & Bucket Hats",msg: "Hi, I'd like to order the Qounfuzed Snapback Cap" },
  { image: merch3, name: "Graphic Tees", msg: "Hi, I'd like to order the Qounfuzed Graphic Tee" },
  { images: [merch4, merch5, merch6], 
    name: "Up coming", 
    msg: "Hi, I'd like to be on the waiting listfor the new merch" 
   
  },
];
const Slideshow = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500); // change speed here

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="aspect-square overflow-hidden relative">
      <img
        src={images[current]}
        alt="slide"
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
  );
};

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [particleCount] = useState(20);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        id="hero"
      >
      {/* Hero Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(1.1) contrast(1.1) saturate(1.15)" }}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          {/* Light overlay — just enough to read text, video stays vibrant */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Subtle gradient only at very top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="section-label text-center mb-4 animate-fade-in">
            Zimbabwe's Premier DJ & Artist
          </p>
          <h1
            className="font-display text-[12vw] md:text-[10rem] leading-none text-foreground mb-2"
            style={{ animationDelay: "0.2s" }}
          >
            QOUN
            <span className="neon-text">FUZED</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-condensed font-light tracking-widest uppercase mb-12 animate-fade-in">
            Live Shows · Corporate · Weddings · Private Events
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a
              href="https://wa.me/263773135457"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 justify-center text-base pulse-glow"
            >
              <MessageCircle size={18} />
              Book Now
            </a>
            <a
              href="#videos"
              className="btn-outline inline-flex items-center gap-2 justify-center text-base"
            >
              <Play size={18} />
              Watch
            </a>
          </div>
        </div>

        {/* Scroll Down */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="font-condensed text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 blur-xl rounded-full" />
                <img
                  src={Q3}
                  alt="Qounfuzed"
                  className="relative w-full max-w-md mx-auto object-cover aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ clipPath: "polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)" }}
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="section-label">About</p>
              <h2 className="section-title mb-4">
                THE SOUND<br />
                OF <span className="neon-text">ZIMBABWE</span>
              </h2>
              <div className="divider-red" />
              <p className="text-muted-foreground leading-relaxed mt-6 mb-6">
                Qounfuzed is Zimbabwe's most electrifying DJ and music artist, known for blending Afrobeats, Hip-Hop, and Electronic music into unforgettable live experiences. With years of rocking stages from intimate clubs to massive festivals, Qounfuzed brings raw energy and elite musicianship to every performance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From releasing critically acclaimed projects like "The Duos Mixtape" to gracing the biggest stages in Southern Africa, Qounfuzed's reputation speaks volumes. Available for bookings across all event types.
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                {[["10+", "Years Active"], ["500+", "Shows Played"], ["5", "Projects Released"]].map(([num, label]) => (
                  <div key={label}>
                    <div className="font-display text-4xl neon-text">{num}</div>
                    <div className="font-condensed text-sm text-muted-foreground tracking-wide uppercase">{label}</div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="https://open.spotify.com/artist/5G6VUpTcRFfbFFM4Ll30Pn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs inline-flex items-center gap-2"
                >
                  <Music size={14} />
                  Spotify
                </a>
                <a
                  href="https://music.apple.com/us/artist/qounfuzed/879143490"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs inline-flex items-center gap-2"
                >
                  Apple Music
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== MUSIC ===== */}
      <section id="music" className="py-24 bg-surface-raised">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label text-center">Stream Now</p>
              <h2 className="section-title">
                THE <span className="neon-text">MUSIC</span>
              </h2>
              <div className="divider-red mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="card-surface p-4">
                <p className="section-label mb-3">Spotify</p>
                <iframe
                  src="https://open.spotify.com/embed/artist/5G6VUpTcRFfbFFM4Ll30Pn?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="border-0"
                  title="Qounfuzed on Spotify"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card-surface p-4">
                <p className="section-label mb-3">SoundCloud</p>
               <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                className="border-0"
                style={{ borderRadius: "12px" }}
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/152168851&color=%23ff004c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Apple Music link */}
          <ScrollReveal delay={300}>
            <div className="mt-8 text-center">
              <a
                href="https://music.apple.com/us/artist/qounfuzed/879143490"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 text-xs"
              >
                <ExternalLink size={14} />
                Listen on Apple Music
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== VIDEOS ===== */}
      <section id="videos" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label text-center">Watch</p>
              <h2 className="section-title">
                LIVE <span className="neon-text">VIDEOS</span>
              </h2>
              <div className="divider-red mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {[
  { id: "8QSQDCxzj9E", title: "Stupid I Like It" },
  { id: "65iRBG4mhJ0", title: "Qounfuzed – XYZ Feature" },
].map((video, i) => (
              <ScrollReveal key={video.id} delay={i * 150}>
                <div className="card-surface overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-condensed font-semibold tracking-wide text-foreground">{video.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY (Auto-Scroll) ===== */}
      <section id="gallery" className="py-24 bg-surface-raised overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <ScrollReveal>
            <div className="text-center">
              <p className="section-label text-center">Gallery</p>
              <h2 className="section-title">
                THE <span className="neon-text">MOMENTS</span>
              </h2>
              <div className="divider-red mx-auto" />
            </div>
          </ScrollReveal>
        </div>

        <div className="overflow-hidden">
          <div className="gallery-track">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-80 mx-2 overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MERCH ===== */}
      <section id="merch" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label text-center">Official Store</p>
              <h2 className="section-title">
                THE <span className="neon-text">MERCH</span>
              </h2>
              <div className="divider-red mx-auto" />
              <p className="text-muted-foreground mt-4 text-sm font-condensed">
                Order via WhatsApp · Limited Drops
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {merch.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 100}>
                <div className="card-surface group overflow-hidden">
  {item.images ? (
  <Slideshow images={item.images} />
) : (
  <div className="aspect-square overflow-hidden">
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
    />
  </div>
)}
                  <div className="p-4">
                    <p className="font-condensed font-bold text-foreground tracking-wide">{item.name}</p>
                    
                    <a
                      href={`https://wa.me/263773135457?text=${encodeURIComponent(item.msg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 btn-primary text-xs w-full text-center block"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOOKING CATEGORIES ===== */}
      <section id="booking" className="py-24 bg-surface-raised">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label text-center">Available For</p>
              <h2 className="section-title">
                BOOK <span className="neon-text">QOUNFUZED</span>
              </h2>
              <div className="divider-red mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {bookingCategories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 100}>
                <Link
                  to={cat.href}
                  className="card-surface p-6 flex flex-col gap-4 group h-full hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <cat.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-condensed font-bold text-xl tracking-wide text-foreground group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1 font-condensed leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-primary text-sm font-condensed font-bold mt-auto group-hover:translate-x-1 transition-transform inline-block">
                    Enquire →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label text-center">Get In Touch</p>
              <h2 className="section-title">
                CONTACT <span className="neon-text">US</span>
              </h2>
              <div className="divider-red mx-auto" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h3 className="font-condensed font-bold text-2xl tracking-wide text-foreground mb-6 uppercase">
                    Book Qounfuzed
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Interested in booking Qounfuzed for your next event? Reach out via WhatsApp for the fastest response, or send an email for formal inquiries.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/263773135457"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 card-surface group hover:border-primary transition-all"
                  >
                    <MessageCircle className="text-primary" size={24} />
                    <div>
                      <p className="font-condensed font-bold text-foreground tracking-wide">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">+263 773 135 457</p>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>

                {/* Socials */}
                <div>
                  <p className="font-condensed font-bold text-sm tracking-widest uppercase text-muted-foreground mb-4">Follow</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Instagram, href: "https://instagram.com/qounfuzedzw", label: "Instagram" },
                      { icon: Facebook, href: "https://m.facebook.com/qounfuzedzw", label: "Facebook" },
                      { icon: Twitter, href: "https://twitter.com/QounfuzedZW", label: "Twitter" },
                      { icon: Music, href: "https://open.spotify.com/artist/5G6VUpTcRFfbFFM4Ll30Pn", label: "Spotify" },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Image */}
            <ScrollReveal delay={200}>
              <div className="relative h-full min-h-80">
                <img
                  src={Q4}
                  alt="Qounfuzed"
                  className="w-full h-full object-cover object-top"
                  style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div
                  className="absolute bottom-6 left-6 right-6 p-4 card-surface border-l-2 border-primary"
                >
                  <p className="font-display text-2xl text-foreground">Ready to book?</p>
                  <a
                    href="https://wa.me/263773135457"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-3 inline-flex items-center gap-2 text-xs pulse-glow"
                  >
                    <MessageCircle size={14} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;