import ProjectSection from "@/components/project-section"

const projects = [
  {
    id: "bloom-fields",
    title: "بلوم فيلدز",
    location: "مدينة المستقبل",
    priceFrom: "10,200,000",
    description:
      "كمبوند سكني متميز على مساحة 415 فدان يقدم حياة راقية ومتكاملة. يتميز بتصميمات معمارية عصرية ومساحات خضراء واسعة ومرافق متنوعة تلبي احتياجات جميع أفراد الأسرة.",
    image: "/projects/bloomfields.webp",
    features: [
      "مساحات خضراء واسعة تغطي 70% من المشروع",
      "شقق تبدأ من 10,200,000 جنيه",
      "بحيرات صناعية خلابة",
      "مول تجاري متكامل",
      "مدارس دولية",
      "نوادي رياضية وصحية",
      "مطاعم ومقاهي عالمية",
      "مناطق ترفيهية للأطفال",
    ],
  },
  {
    id: "scense",
    title: "سينز",
    location: "مدينة المستقبل",
    priceFrom: "16,000,000",
    description:
      "مشروع فيلات فاخر يقدم تجربة معيشية استثنائية مع تصميمات معمارية حديثة. فيلات سينز توفر الخصوصية والرفاهية مع جميع المرافق والخدمات على أعلى مستوى.",
    image: "/projects/scense.webp",
    features: [
      "فيلات فاخرة تبدأ من 16,000,000 جنيه",
      "تصميمات معمارية حديثة ومبتكرة",
      "حدائق خاصة لكل فيلا",
      "مساحات واسعة ومريحة",
      "أنظمة أمن وحراسة متطورة",
      "قرب من جميع الخدمات الأساسية",
      "نظام سداد مرن وميسر",
      "تشطيبات فاخرة بأرقى الخامات",
    ],
  },
]

export default function Projects() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        

        <div className="space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectSection key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
