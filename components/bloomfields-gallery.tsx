"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export default function BloomfieldsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/images/ilmonte/gallery-main.webp",
      alt: "منظر جوي لـ IL Monte Galala - الأبراج على البحر مباشرة",
    },
    {
      src: "/images/ilmonte/aerial-sunset.webp",
      alt: "منظر غروب الشمس على المونت جلالة",
    },
    {
      src: "/images/ilmonte/villa-1.webp",
      alt: "فيلا فاخرة بإطلالة بحرية مباشرة",
    },
    {
      src: "/images/ilmonte/villa-2.webp",
      alt: "فيلا مع حمام سباحة خاص وإطلالة على البحر",
    },
    {
      src: "/images/ilmonte/amenities.webp",
      alt: "حمامات السباحة والمرافق الفاخرة",
    },
    {
      src: "/images/ilmonte/payment-plan.jpeg",
      alt: "نظام السداد - 5% مقدم و 10 سنوات تقسيط",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">معرض الصور</h2>
            <p className="text-lg text-muted-foreground">
              اكتشف جمال IL Monte Galala من خلال معرض الصور
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 left-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-6xl aspect-[4/3]">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
