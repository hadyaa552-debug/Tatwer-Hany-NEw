"use client"

import { Home } from "lucide-react"

export default function BloomfieldsUnits() {
  const units = [
    { type: "ستوديو", area: "60 م²" },
    { type: "غرفة نوم واحدة", area: "90 - 120 م²" },
    { type: "غرفتين نوم", area: "120 - 145 م²" },
    { type: "3 غرف + غرفة مربية", area: "230 م²" },
    { type: "لوفت", area: "105 - 145 م²" },
    { type: "بنتهاوس", area: "415 - 450 م²" },
  ]

  return (
    <section id="units" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              الوحدات المتاحة
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              تنوع في الوحدات السكنية الفندقية الفاخرة بتشطيب كامل
            </p>
            <div className="inline-block bg-primary/10 px-8 py-4 rounded-2xl">
              <p className="text-sm text-muted-foreground mb-1">الأسعار تبدأ من</p>
              <p className="text-3xl lg:text-4xl font-bold text-primary">10,000,000 جنيه</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {units.map((unit, index) => (
              <div
                key={index}
                className="bg-muted/30 rounded-xl p-3 lg:p-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-sm lg:text-base font-bold text-foreground mb-0.5">{unit.type}</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground">{unit.area}</p>
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
