import { Gallery } from "@/components/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Elite Detailing",
  description: "See our premium detailing work on cars, bikes, and boats",
};

export default function GalleryPage() {
  const gallerySections = [
    {
      title: "Ceramic Coated Cars",
      description: "Showroom-quality finishes with long-lasting protection",
      images: [
        "https://images.unsplash.com/photo-1676856577533-1e8099932f7b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRlc2xhJTIwY2FyfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://media.istockphoto.com/id/1273682054/photo/car-service-worker-applying-nano-coating-on-a-car-detail.webp?a=1&b=1&s=612x612&w=0&k=20&c=PCP3_KIFqTWhCRufrS6xSG_ltgOIBKWF3FI4I7mkyuA=",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      title: "Paint Correction Masters",
      description: "Before and after transformations of damaged paintwork",
      images: [
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80",
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
        "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      title: "Motorcycle Detailing",
      description: "Precision cleaning and protection for bikes",
      images: [
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1515777315835-281b94c9589f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdG9yYmlrZXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ],
    },
    {
      title: "Luxury Interior Detailing",
      description: "Showroom-fresh interiors with ceramic protection",
      images: [
        "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1704932500000-17b8445307d1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bHV4dXJ5JTIwY2FyJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80",
      ],
    },
  ];

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 sm:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Our Detailing Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Witness the transformation - Each vehicle tells a story of
            precision, care, and automotive passion.
          </p>
          <div className="w-full h-1 bg-stone-700 mx-auto"></div>
        </div>
      </section>

      {/* Gallery Component */}
      <Gallery sections={gallerySections} />

      {/* CTA Section */}
      <section className="py-20 px-5 sm:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-muted-foreground mb-8">
            Browse our services or book an appointment to give your car the
            Elite treatment.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Book Your Detailing
          </button>
        </div>
      </section>
    </main>
  );
}
