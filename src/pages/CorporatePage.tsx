import BookingPageLayout from "@/components/BookingPageLayout";
import Q6 from "@/assets/Q6.jpg";

const CorporatePage = () => (
  <BookingPageLayout
    title="CORPORATE"
    subtitle="Booking · Corporate Events"
    description="Elevate your corporate function with world-class entertainment. Qounfuzed brings professionalism and flair to company galas, product launches, award ceremonies, team-building events, and annual dinners. The music is perfectly calibrated to match your brand's tone and your guests' tastes — from sophisticated background sets to full dance-floor energy."
    features={[
      "Tailored music selection for corporate audience",
      "Professional setup and sound",
      "Background and main-floor DJ services",
      "Award ceremonies and gala dinners",
      "Product launches and brand activations",
      "Smart casual to black-tie event experience",
      "Fully insured and professional service",
    ]}
    youtubeId="wapWHm3p9HE"
    backgroundImage={Q6}
  />
);

export default CorporatePage;
