"use client"

import { Phone, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileBottomBar() {
  const phoneNumber = "+201515667777"

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" })
      // Focus on the first input field
      setTimeout(() => {
        const firstInput = formElement.querySelector("input")
        firstInput?.focus()
      }, 500)
    }
  }

  return (
    <div className="fixed bottom-0 right-0 left-0 z-40 bg-white border-t border-border md:hidden shadow-2xl">
      <div className="flex gap-3 p-4">
        <Button
          className="flex-1 h-14 gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg"
          variant="outline"
          asChild
        >
          <a href={`tel:${phoneNumber}`}>
            <Phone className="h-5 w-5" />
            <span>اتصل الآن</span>
          </a>
        </Button>
        <Button
          className="flex-1 h-14 gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-lg"
          onClick={scrollToForm}
        >
          <UserPlus className="h-5 w-5" />
          <span>سجل بياناتك</span>
        </Button>
      </div>
    </div>
  )
}
