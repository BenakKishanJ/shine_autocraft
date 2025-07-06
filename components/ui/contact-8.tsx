import { MapPin } from "lucide-react";

interface Contact8Props {
  title?: string;
  description?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  latitude: number;
  longitude: number;
  mapZoom?: number;
}

export const Contact8 = ({
  title = "Our Location",
  description = "Find us on the map.",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  latitude,
  longitude,
  mapZoom = 15,
}: Contact8Props) => {
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${mapZoom}&output=embed`;

  return (
    <section className="bg-background py-32 px-32">
      <div className="container">
        <div className="mb-14">
          <h1 className="mt-2 mb-3 text-3xl font-semibold text-balance md:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="mb-3 text-muted-foreground">{officeDescription}</p>
            <p className="font-semibold">{officeAddress}</p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src={mapUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
