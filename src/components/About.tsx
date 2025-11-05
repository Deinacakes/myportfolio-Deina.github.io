import { Briefcase, Calendar, Sparkles } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
              <p className="text-purple-300">About Me</p>
            </div>
            <h2 className="text-white mb-4">
              Bridging Design, Development & Operations
            </h2>
          </div>
          
          {/* Bio Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-purple-950/50 to-slate-900/50 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="bg-purple-600/20 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-400" />
              </div>
              <p className="text-slate-400 mb-1">Born</p>
              <p className="text-white">April 8, 2001</p>
              <p className="text-purple-300 mt-2">24 years old</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-950/50 to-slate-900/50 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="bg-purple-600/20 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-purple-400" />
              </div>
              <p className="text-slate-400 mb-1">Career Started</p>
              <p className="text-white">February 19, 2024</p>
              <p className="text-purple-300 mt-2">As a Developer</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-950/50 to-slate-900/50 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <div className="bg-purple-600/20 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-purple-400" />
              </div>
              <p className="text-slate-400 mb-1">Current Role</p>
              <p className="text-white">DevOps Engineer</p>
              <p className="text-purple-300 mt-2">Full-stack focus</p>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              As a <span className="text-purple-400">Development Operations Engineer</span>, my work involves bridging the gap between development, operations, and design. I oversee the end-to-end project lifecycle — from planning and requirement gathering to deployment and maintenance.
            </p>
            
            <p>
              I ensure that development processes run efficiently, systems are reliable and scalable, and that every deliverable aligns with the client's goals and technical standards.
            </p>
            
            <div className="bg-gradient-to-br from-purple-950/30 to-slate-900/30 border border-purple-500/20 rounded-2xl p-8 my-8">
              <h3 className="text-white mb-4">
                My Workflow
              </h3>
              <p className="text-slate-300">
                I serve as the main point of contact for all incoming projects — I handle client communications, scope out requirements, and translate those into interactive UI/UX prototypes. Once the client approves my design and interpretation, I move forward with developing the complete system or application.
              </p>
            </div>
            
            <p>
              Ever since I started, <span className="text-purple-400">UI/UX design and front-end development</span> have been my greatest passions. Whether it's creating user-centered interfaces or building seamless digital experiences, I love combining creativity with functionality.
            </p>
            
            <p>
              Because of that, I see myself continuing to grow in either UI/UX design or front-end development, roles that allow me to fully express both my technical and creative skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
