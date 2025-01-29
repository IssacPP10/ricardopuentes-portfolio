import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import CertificateCard from "@/components/certificates-card";
import { certificates } from "@/data/certificates";

export function CertificatesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-5">
      <h2 className="section-title flex items-center gap-2 !mb-4">
        <Trophy className="w-6 h-6" style={{ color: "#818CF8" }} />
        <span style={{ color: "#818CF8" }}>Certificates</span>
      </h2>

      <div className="flex items-center justify-between my-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="rounded-full hover:bg-[#818CF8] hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="rounded-full hover:bg-[#818CF8] hover:text-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Ajuste del contenedor al tamaño del padre */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {certificates.map((cert, index) => (
            <div key={index} className="embla__slide mr-4">
              <CertificateCard
                name={cert.name}
                issuer={cert.issuer}
                date={cert.date}
                credentials={cert.credentials}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
