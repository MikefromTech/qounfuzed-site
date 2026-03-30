import { Instagram, Facebook, Twitter, Music, MessageCircle } from "lucide-react";

const Footer = () => {
  const socials = [
    { icon: Instagram, href: "https://instagram.com/qounfuzedzw", label: "Instagram" },
    { icon: Facebook, href: "https://m.facebook.com/qounfuzedzw", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/QounfuzedZW", label: "Twitter" },
    { icon: MessageCircle, href: "https://wa.me/263773135457", label: "WhatsApp" },
    { icon: Music, href: "https://open.spotify.com/artist/5G6VUpTcRFfbFFM4Ll30Pn", label: "Spotify" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Ticker */}
      <div className="overflow-hidden border-b border-border py-3 bg-primary">
        <div className="ticker-track whitespace-nowrap flex">
          {Array(10).fill("QOUNFUZED · BOOK NOW · LIVE SHOWS · CORPORATE EVENTS · WEDDINGS · ENDORSEMENTS · ").map((t, i) => (
            <span key={i} className="text-primary-foreground font-condensed font-bold tracking-widest text-sm mr-0">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-display text-5xl neon-text mb-4">QOUNFUZED</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Zimbabwe's premier DJ & Artist. Available for live shows, corporate events, weddings, private parties and brand endorsements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-condensed font-bold text-lg tracking-widest uppercase text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Music", "Videos", "Gallery", "Merch", "Booking", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors font-condensed tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed font-bold text-lg tracking-widest uppercase text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="text-primary font-condensed font-semibold">WhatsApp:</span>{" "}
                <a href="https://wa.me/263776275440" className="hover:text-primary transition-colors">
                  +263 77 627 5440
                </a>
              </p>
              <p>
                <span className="text-primary font-condensed font-semibold">Booking:</span>{" "}
                <a href="https://wa.me/263776275440" className="hover:text-primary transition-colors">
                  Via WhatsApp
                </a>
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-condensed tracking-wide">
            © {new Date().getFullYear()} Qounfuzed. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built by Netinnovix
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
