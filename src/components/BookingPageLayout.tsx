import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BookingPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  youtubeId?: string;
  backgroundImage?: string;
}

const BookingPageLayout = ({
  title,
  subtitle,
  description,
  features,
  youtubeId,
  backgroundImage,
}: BookingPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden"
        style={{
          background: backgroundImage
            ? `linear-gradient(to bottom, hsl(0 0% 4% / 0.3), hsl(0 0% 4% / 0.95)), url(${backgroundImage}) center/cover no-repeat`
            : "linear-gradient(135deg, hsl(0 0% 4%), hsl(0 0% 8%))",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-condensed tracking-wide mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <p className="section-label">{subtitle}</p>
          <h1 className="font-display text-6xl md:text-9xl text-foreground leading-none">
            {title}
          </h1>
          <div className="divider-red" />
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Description + Features */}
          <div>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              {description}
            </p>
            <h3 className="font-condensed font-bold text-xl tracking-widest uppercase text-foreground mb-6">
              What's Included
            </h3>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">—</span>
                  <span className="font-condensed text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/263776275440"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 justify-center pulse-glow"
              >
                <MessageCircle size={16} />
                Book via WhatsApp
              </a>
              <a
                href="mailto:booking@qounfuzed.com"
                className="btn-outline inline-flex items-center gap-2 justify-center"
              >
                Email Inquiry
              </a>
            </div>
          </div>

          {/* Right: Video */}
          <div>
            {youtubeId && (
              <div className="aspect-video w-full border border-border overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <div className="mt-8 p-6 card-surface border-l-2 border-primary">
              <h4 className="font-condensed font-bold text-lg tracking-wide uppercase text-foreground mb-2">
                Ready to book?
              </h4>
              <p className="text-muted-foreground text-sm">
                Contact us via WhatsApp for quick responses and booking confirmations.
              </p>
              <a
                href="https://wa.me/263776275440"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-condensed font-semibold text-sm hover:underline mt-3 inline-block"
              >
                +263 77 627 5440 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPageLayout;
