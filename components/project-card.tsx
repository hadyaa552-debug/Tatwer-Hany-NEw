import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Home, Check } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    location: string
    description: string
    startingPrice: string
    units: string
    image: string
    features: string[]
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const phoneNumber = "+201024383203"
  const whatsappMessage = encodeURIComponent(
    `مرحباً، أنا مهتم بمشروع ${project.title} في ${project.location}. أود الحصول على المزيد من المعلومات.`,
  )

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {project.units} وحدة متاحة
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{project.location}</span>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>

        <div className="flex items-center gap-2 pt-2">
          <Home className="h-5 w-5 text-primary" />
          <div>
            <div className="text-xs text-muted-foreground">السعر يبدأ من</div>
            <div className="text-xl font-bold text-primary">{project.startingPrice} جنيه</div>
          </div>
        </div>

        <div className="space-y-2 pt-2">
          {project.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button variant="outline" className="flex-1 bg-transparent" asChild>
          <a href={`tel:${phoneNumber}`}>اتصل الآن</a>
        </Button>
        <Button className="flex-1" asChild>
          <a href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
            واتساب
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
