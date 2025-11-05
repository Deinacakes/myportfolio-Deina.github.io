import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function Projects() {
  const projects = [
    {
      title: "COMCLARK Official Website",
      category: "Corporate Website",
      description: "The main site for ComClark Network and Technology Corp, featuring information, services, and business solutions.",
      image: "https://comclark.com/assets/website-D3-OYjV4.png", 
      link: "https://comclark.com",
      tags: ["UI/UX", "Frontend Development", "Corporate"],
      gradient: "from-blue-600 to-sky-600",
    },
    {
      title: "WAVEX by COMCLARK",
      category: "Product Platform",
      description: "A dedicated platform for ComClark’s WAVEX solutions—offering enterprise internet and connectivity services.",
      image: "https://comclark.com/assets/wavex-C5_W0egu.png", 
      link: "https://wavex.comclark.com",
      tags: ["UI Design", "Responsive", "Brand Identity"],
      gradient: "from-sky-600 to-indigo-600",
    },
    {
      title: "COMCLARK Careers",
      category: "Recruitment Portal",
      description: "A careers website designed to attract top talent, featuring job listings, company culture, and recruitment info.",
      image: "https://comclark.com/assets/careers-T4ybPIRG.png", 
      link: "https://careers.comclark.com",
      tags: ["UI/UX", "Frontend", "Animation"],
      gradient: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
            <p className="text-blue-300">Public Sites</p>
          </div>
          <h2 className="text-white mb-4">My Featured Public Sites</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of live public websites I developed and designed for ComClark Network and Technology Corp.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-blue-500/20 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-300`}
                ></div>
              </div>

              <div className="p-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 inline-block mb-3">
                  <p className="text-sm text-blue-300">{project.category}</p>
                </div>

                <h3 className="text-white mb-2">{project.title}</h3>

                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-slate-800/50 rounded-full px-3 py-1 text-sm text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Site
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
