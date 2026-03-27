import BookingPageLayout from "@/components/BookingPageLayout";
import Q1 from "@/assets/Q1.jpg";

const LivePage = () => (
  <BookingPageLayout
    title="LIVE SHOWS"
    subtitle="Booking · Live Performances"
    description="Qounfuzed delivers raw, high-energy live performances that transform any venue into a party. From intimate club nights to massive festival stages, every performance is crafted to keep the crowd moving from start to finish. Expect a seamless blend of Afrobeats, Hip-Hop, Dancehall, and Electronic music curated for your crowd."
    features={[
      "High-energy club and festival sets",
      "Custom set tailored to your crowd",
      "Professional DJ equipment (can supply own)",
      "Stage presence & crowd interaction",
      "1–4 hour performance slots",
      "Available for national & international bookings",
    ]}
    youtubeId="wapWHm3p9HE"
    backgroundImage={Q1}
  />
);

export default LivePage;
