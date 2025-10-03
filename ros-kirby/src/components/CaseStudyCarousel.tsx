import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Nordic Brand Identity",
    category: "Branding",
    year: "2024",
    description: "Complete brand identity system for a Scandinavian lifestyle brand",
    image: "https://images.unsplash.com/photo-1633533448522-26ee3eab7961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1OTM0OTkxMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Artisan Coffee Packaging",
    category: "Packaging",
    year: "2024",
    description: "Sustainable packaging design for premium coffee roasters",
    image: "https://images.unsplash.com/photo-1668686056289-c520e101f6b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBkZXNpZ24lMjBwcm9kdWN0fGVufDF8fHx8MTc1OTQxNTg2MXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Modern Magazine Editorial",
    category: "Editorial",
    year: "2023",
    description: "Contemporary layout design for monthly lifestyle publication",
    image: "https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBtYWdhemluZSUyMGxheW91dHxlbnwxfHx8fDE3NTk0MDY2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Experimental Poster Series",
    category: "Print",
    year: "2023",
    description: "Bold typographic poster series for cultural events",
    image: "https://images.unsplash.com/photo-1739476477643-cb7700017890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0ZXIlMjBkZXNpZ24lMjB0eXBvZ3JhcGh5fGVufDF8fHx8MTc1OTQzMTgyMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Tech Startup Website",
    category: "Digital",
    year: "2023",
    description: "Modern web design and digital experience for SaaS platform",
    image: "https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU5MzkwMjcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function CaseStudyCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-[1648px] relative">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-[30px] md:mb-[50px]">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-none not-italic text-[#333333] text-[20px] md:text-[28px] lg:text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">
          (Selected Work)
        </p>
        <div className="flex gap-[15px] md:gap-[20px]">
          <button
            onClick={() => scroll("left")}
            className="bg-[#333333] size-[40px] md:size-[50px] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft className="text-[#eeeeee]" size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-[#333333] size-[40px] md:size-[50px] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight className="text-[#eeeeee]" size={20} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-[20px] md:gap-[30px] overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-[20px] px-[20px] md:mx-0 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="flex-none w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] snap-start group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] mb-[15px] md:mb-[20px] overflow-hidden bg-[#e5e0d8]">
              <ImageWithFallback
                src={study.image}
                alt={study.title}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#333333] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>

            {/* Project Info */}
            <div className="flex items-start justify-between gap-[15px] md:gap-[20px]">
              <div className="flex-1">
                <h3 className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-none not-italic text-[#333333] text-[20px] md:text-[24px] lg:text-[28px] tracking-[-0.56px] mb-[8px] md:mb-[10px]">
                  {study.title}
                </h3>
                <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.4] not-italic text-[#666666] text-[14px] md:text-[16px] lg:text-[18px]">
                  {study.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-[5px]">
                <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-none not-italic text-[#333333] text-[14px] md:text-[16px] lg:text-[18px]">
                  {study.category}
                </p>
                <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-none not-italic text-[#999999] text-[14px] md:text-[16px] lg:text-[18px]">
                  {study.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
