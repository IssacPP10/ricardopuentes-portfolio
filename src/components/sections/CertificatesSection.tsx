import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Card, CardContent } from "@/components/ui/card";
import { Medal, Calendar, ShieldCheck } from "lucide-react";
import { certificates } from "@/data/certificates";

export function CertificatesSection() {
  return (
    <section className="container py-5">
      <h2 className="section-title flex items-center gap-2 mb-6">
        <Medal className="w-6 h-6" style={{ color: "#818CF8" }} />
        <span style={{ color: "#818CF8" }}>Certificates</span>
      </h2>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={16} // Espaciado entre las tarjetas
        slidesPerView="auto" // Permite ajustar el número de tarjetas visibles
        freeMode // Desplazamiento continuo
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Movimiento automático
        className="w-full"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "420px" }} // Ancho fijo para cada tarjeta
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <div className="flex items-center justify-between text-muted-foreground mt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <a
                    href={cert.credentials}
                    target="_blank"
                    className="flex items-center gap-1 text-end text-[#818CF8] hover:text-[#5462e4] transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Credentials
                  </a>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
