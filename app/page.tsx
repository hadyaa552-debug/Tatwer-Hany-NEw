import Header from "@/components/header"
import Hero from "@/components/hero"
import BloomfieldsOverview from "@/components/bloomfields-overview"
import BloomfieldsLocation from "@/components/bloomfields-location"
import BloomfieldsUnits from "@/components/bloomfields-units"
import BloomfieldsAmenities from "@/components/bloomfields-amenities"
import BloomfieldsPayment from "@/components/bloomfields-payment"
import BloomfieldsGallery from "@/components/bloomfields-gallery"
import ContactForm from "@/components/contact-form"
import AboutDeveloper from "@/components/about-developer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BloomfieldsOverview />
      <BloomfieldsLocation />
      <BloomfieldsUnits />
      <BloomfieldsAmenities />
      <BloomfieldsGallery />
      <BloomfieldsPayment />
      <section 
        id="contact" 
        className="py-20 lg:py-32 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/ilmonte/villa-1.webp')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">تواصل معنا</h2>
              <p className="text-lg text-white/90">
                املأ النموذج وسيتواصل معك فريقنا في أقرب وقت للإجابة على جميع استفساراتك حول IL Monte Galala
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <AboutDeveloper />
      <Footer />
      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}
