"use client"

import Image from "next/image"
import { Building2, Calendar, Home, MapPin } from "lucide-react"

export default function BloomfieldsOverview() {
  const highlights = [
    {
      icon: MapPin,
      title: "الموقع",
      description: "جبل الجلالة - العين السخنة - البحر الأحمر",
    },
    {
      icon: Building2,
      title: "عدد الأبراج",
      description: "10 أبراج",
    },
    {
      icon: Home,
      title: "المطور",
      description: "تطوير مصر",
    },
    {
      icon: Calendar,
      title: "موعد التسليم",
      description: "2028",
    },
  ]

  return (
    <section id="project" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Left Column - Image */}
            <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src="/images/ilmonte/payment-towers.jpeg"
                alt="IL Monte Galala - الأبراج الفاخرة على البحر الأحمر"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Column - Text Content */}
            <div className="text-right order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                نبذة عن المشروع
              </h2>
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">IL Monte Galala</span> - مشروع غير مسبوق على البحر الأحمر! أول أبراج سكنية فندقية فاخرة على البحر مباشرة بارتفاع يصل لـ 22 دور على جبل الجلالة.
                </p>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  المشروع يضم فندق تحت إدارة <span className="font-semibold text-foreground">Marriott International</span>، Branded Residences، و Serviced Units بإدارة وخدمات فندقية عالمية.
                </p>
                
                {/* Highlight Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="bg-muted/30 rounded-xl p-4 lg:p-6 text-right hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base lg:text-lg font-bold text-foreground mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
