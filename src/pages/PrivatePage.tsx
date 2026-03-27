import BookingPageLayout from "@/components/BookingPageLayout";
import Q7 from "@/assets/Q7.jpg";

const PrivatePage = () => (
  <BookingPageLayout
    title="PRIVATE PARTIES"
    subtitle="Booking · Private Events"
    description="Take your private party to the next level. Whether it's a birthday bash, a rooftop gathering, a house party, or an exclusive soirée — Qounfuzed creates an electric atmosphere that has your guests talking long after the night ends. Flexible set lengths and music genres tailored exactly to your preferences."
    features={[
      "Birthday parties and milestone celebrations",
      "Rooftop and outdoor gatherings",
      "House parties and private soirées",
      "Flexible set length (1–6 hours)",
      "Custom playlist consultation",
      "Can work with any venue or setup",
      "Discreet and professional service",
    ]}
    youtubeId="wapWHm3p9HE"
    backgroundImage={Q7}
  />
);

export default PrivatePage;
