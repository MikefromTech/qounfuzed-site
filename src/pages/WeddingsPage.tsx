import BookingPageLayout from "@/components/BookingPageLayout";
import Q4 from "@/assets/Q4.jpg";

const WeddingsPage = () => (
  <BookingPageLayout
    title="WEDDINGS"
    subtitle="Booking · Wedding Entertainment"
    description="Your wedding day deserves the perfect soundtrack. Qounfuzed specialises in creating memorable musical experiences for every moment of your special day — from the ceremony and cocktail hour to the first dance and late-night reception. Every couple receives a bespoke music consultation to ensure the music reflects your love story perfectly."
    features={[
      "Full wedding day coverage available",
      "Ceremony, cocktail & reception sets",
      "First dance song arrangement",
      "Personalised music consultation",
      "Elegant and romantic atmosphere curation",
      "Works with wedding coordinators",
      "Backup equipment for zero-fail events",
    ]}
    youtubeId="wapWHm3p9HE"
    backgroundImage={Q4}
  />
);

export default WeddingsPage;
