"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function BloomfieldsPayment() {
  const plans = [
    {
      downPayment: "5% مقدم",
      installmentPeriod: "10 سنوات",
      description: "أقساط على 10 سنوات بدون فوائد",
      highlight: true,
    },
  ]

  return (
    <section id="payment" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">أنظمة السداد</h2>
            <p className="text-lg text-muted-foreground mb-8">
              نظام سداد مرن ومميز يناسب جميع العملاء بدون فوائد
            </p>
            <div className="relative w-full max-w-3xl mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/images/ilmonte/payment-plan.jpeg"
                alt="نظام السداد - 5% مقدم و 10 سنوات تقسيط"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>

          <div className="space-y-4">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 px-6 lg:px-8 border-r-4 transition-all duration-300 hover:translate-x-2 ${
                  plan.highlight
                    ? "border-primary bg-primary/5"
                    : "border-muted-foreground/20 hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <CheckCircle2 className={`w-6 h-6 flex-shrink-0 ${plan.highlight ? "text-primary" : "text-muted-foreground"}`} />
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-2xl md:text-3xl font-bold text-primary">{plan.downPayment}</span>
                      <span className="text-lg text-muted-foreground">|</span>
                      <span className="text-lg font-semibold text-foreground">{plan.installmentPeriod}</span>
                      {plan.highlight && (
                        <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          الأكثر طلباً
                        </span>
                      )}
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground">{plan.description}</p>
                  </div>
                </div>
                <button
                  className="self-start md:self-center bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-6 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
                >
                  احجز الآن
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center border-t border-muted-foreground/20 pt-6">
            <p className="text-muted-foreground mb-2">
              <strong className="text-foreground">قيمة الحجز:</strong> 200,000 جنيه (شيك أو تحويل)
            </p>
            <p className="text-muted-foreground">
              <strong className="text-foreground">الأسعار تبدأ من:</strong> 10 مليون جنيه
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
