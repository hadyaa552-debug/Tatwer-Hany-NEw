"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, CheckCircle2 } from "lucide-react"

interface ProjectSectionProps {
  project: {
    id: string
    title: string
    location: string
    priceFrom: string
    description: string
    image: string
    features: string[]
  }
  index: number
}

export default function ProjectSection({ project, index }: ProjectSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const phoneNumber = "+201024383203"
  const whatsappMessage = encodeURIComponent(
    `مرحباً، أنا مهتم بمشروع ${project.title} وأود الحصول على المزيد من المعلومات`,
  )
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`

  const isReversed = index % 2 !== 0

  return (
    <div id={project.id} className="scroll-mt-32" ref={sectionRef}>
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isReversed ? "lg:direction-rtl" : ""}`}>
        {/* Project Image */}
        <div
          className={`${isReversed ? "lg:order-2" : ""} transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="relative overflow-hidden shadow-2xl group">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-[450px] lg:h-[650px] object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-8 lg:p-10">
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-medium">{project.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div
          className={`${isReversed ? "lg:order-1" : ""} space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">{project.title}</h3>
            <div className="inline-block bg-primary/10 px-6 py-3">
              <p className="text-xl font-semibold text-primary">
                الأسعار تبدأ من <span className="text-2xl">{project.priceFrom}</span> جنيه
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Features */}
          <div className="space-y-5">
            <h4 className="text-xl font-semibold text-foreground">المميزات الرئيسية</h4>
            <div className="space-y-4">
              {project.features.slice(0, 6).map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  style={{ transitionDelay: `${(idx + 3) * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-base text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 transition-all duration-300 hover:shadow-xl"
              asChild
            >
              <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span>اتصل الآن</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8 py-6 bg-transparent transition-all duration-300"
              asChild
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>واتساب</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
