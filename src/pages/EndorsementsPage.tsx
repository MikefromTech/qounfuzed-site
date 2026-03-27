import BookingPageLayout from "@/components/BookingPageLayout";
import Q3 from "@/assets/Q3.jpg";

const EndorsementsPage = () => (
  <BookingPageLayout
    title="ENDORSEMENTS"
    subtitle="Partnerships · Brand Collaborations"
    description="Qounfuzed is more than a DJ — he's a brand. With a massive social media following and a loyal fanbase across Southern Africa, partnering with Qounfuzed puts your brand at the intersection of music, culture, and lifestyle. From product placements to brand ambassador roles and sponsored content, let's build something powerful together."
    features={[
      "Brand ambassador partnerships",
      "Social media campaigns and content creation",
      "Product placement in music videos",
      "Event sponsorship and co-branding",
      "Merchandise collaborations",
      "Influencer and promotional appearances",
      "Pan-African reach and audience",
    ]}
    youtubeId="wapWHm3p9HE"
    backgroundImage={Q3}
  />
);

export default EndorsementsPage;
