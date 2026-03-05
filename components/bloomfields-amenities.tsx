"use client"

import Image from "next/image"
import {
  Trees,
  Waves,
  Dumbbell,
  ShoppingBag,
  Heart,
  Baby,
  Shield,
  PersonStanding,
  Bike,
  School,
} from "lucide-react"

export default function BloomfieldsAmenities() {
  const amenities = [
    {
      icon: Waves,
      title: "إطلالة بحرية مباشرة",
      description: "إطلالات بانورامية على البحر الأحمر من جميع الوحدات",
    },
    {
      icon: PersonStanding,
      title: "ممشى سياحي 1 كم",
      description: "ممشى على البحر مباشرة مع مطاعم وكافيهات عالمية",
    },
    {
      icon: Waves,
      title: "مارينا عالمية",
      description: "IGY Marinas تسع +150 يخت بإدارة أمريكية",
    },
    {
      icon: Heart,
      title: "إدارة Marriott",
      description: "فندق وخدمات فندقية عالمية من Marriott International",
    },
    {
      icon: ShoppingBag,
      title: "مركز معارض ومؤتمرات",
      description: "مركز دولي بإدارة BCI Realty البريطانية",
    },
    {
      icon: Dumbbell,
      title: "حمامات سباحة فاخرة",
      description: "مسابح infinity مطلة على البحر",
    },
    {
      icon: Trees,
      title: "مساحات خضراء",
      description: "حدائق ومناظر طبيعية على الجبل والبحر",
    },
    {
      icon: School,
      title: "مطاعم عالمية",
      description: "مطاعم وكافيهات ومحلات تجارية عالمية",
    },
    {
      icon: Baby,
      title: "تشطيب كامل",
      description: "جميع الوحدات بتشطيب كامل وجاهزة للسكن",
    },
    {
      icon: Shield,
      title: "أمن وحراسة 24/7",
      description: "نظام أمني متطور على مدار الساعة",
    },
  ]

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              المميزات والخدمات
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              تمتع بأسلوب حياة متكامل مع مجموعة واسعة من المرافق والخدمات الحديثة
            </p>
          </div>

          {/* Feature Images Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ilmonte/villa-2.webp"
                alt="فيلات فاخرة مع حمامات سباحة خاصة"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ilmonte/amenities.webp"
                alt="حمامات السباحة والمرافق الفاخرة"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <amenity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{amenity.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{amenity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
