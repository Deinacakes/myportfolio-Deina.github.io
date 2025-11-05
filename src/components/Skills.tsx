import { Palette, Code, Server, Users, Layers, Rocket } from "lucide-react";

export function Skills() {
  const skills = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating user-centered interfaces with modern design principles and interactive prototypes",
      tags: ["Figma", "Prototyping", "User Research", "Wireframing"]
    },
    {
      icon: Code,
      title: "Front-End Development",
      description: "Building responsive, accessible, and performant web applications with modern frameworks",
      tags: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: Server,
      title: "Development Operations",
      description: "Ensuring reliable deployments, system scalability, and efficient development workflows",
      tags: ["CI/CD", "DevOps", "System Design", "Deployment"]
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Main point of contact for projects, handling communications and requirement gathering",
      tags: ["Communication", "Project Scoping", "Stakeholder Management"]
    },
    {
      icon: Layers,
      title: "Full-Stack Development",
      description: "End-to-end development from database design to front-end implementation",
      tags: ["API Design", "Database", "Architecture", "Integration"]
    },
    {
      icon: Rocket,
      title: "Project Lifecycle",
      description: "Overseeing projects from planning and development to deployment and maintenance",
      tags: ["Planning", "Development", "Testing", "Maintenance"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-purple-950/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <p className="text-purple-300">Skills & Expertise</p>
          </div>
          <h2 className="text-white mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive skill set combining design thinking, technical expertise, and operational excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-purple-950/50 to-slate-900/50 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="bg-purple-600/20 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors">
                <skill.icon className="h-7 w-7 text-purple-400" />
              </div>
              
              <h3 className="text-white mb-3">
                {skill.title}
              </h3>
              
              <p className="text-slate-400 mb-4">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1 text-sm text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
