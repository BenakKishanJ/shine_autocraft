import {
  ContainerAnimated,
  ContainerStagger,
  GalleryGrid,
  GalleryGridCell,
} from "@/components/blocks/cta-section-with-gallery";
import { Button } from "@/components/ui/button";

const IMAGES = [
  "https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1554294314-80a5fb7e6bd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1589750602846-60028879da9b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1618642542397-ef97a739f1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxjYXJ8ZW58MHx8MHx8fDA%3D",
];

export const GalleryDemo = () => {
  return (
    <section>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-8 py-12 md:grid-cols-2">
        <ContainerStagger>
          <ContainerAnimated className="mb-4 block text-xs font-medium text-white -500 md:text-sm">
            Paint. Correct. Protect.
          </ContainerAnimated>
          <ContainerAnimated className="text-4xl font-semibold md:text-[2.4rem] tracking-tight">
            Experience the ShineAutoCraft Transformation
          </ContainerAnimated>
          <ContainerAnimated className="my-4 text-base text-muted-foreground md:my-6 md:text-lg">
            Our expert paint correction, ceramic coating, and detailing services
            turbocharge your vehicle’s look—whether you're at home in Surrey or
            drop it off with us.
          </ContainerAnimated>
          <ContainerAnimated>
            <Button className=" bg-white">Book Your Shine Today</Button>
          </ContainerAnimated>
        </ContainerStagger>

        <GalleryGrid>
          {IMAGES.map((imageUrl, index) => (
            <GalleryGridCell index={index} key={index}>
              <img
                className="size-full object-cover object-center"
                width="100%"
                height="100%"
                src={imageUrl}
                alt="ShineAutoCraft showcased vehicle"
              />
            </GalleryGridCell>
          ))}
        </GalleryGrid>
      </div>
    </section>
  );
};
