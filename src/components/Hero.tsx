import { Button } from "./ui/button";
import { ArrowRight, Mail, Linkedin, Github, Instagram } from "lucide-react";
import profileImage from "../image/ME.png"; 
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0033] via-[#0b0019] to-[#060014]">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 backdrop-blur-sm text-sm">
                <p className="text-purple-300">
                  DevOps Engineer specializing in UI/UX and Front-End Development
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-white text-4xl font-semibold">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  Deina Sophia Ronquillo
                </span>
              </h1>
              <h2 className="text-purple-200 text-lg">
                Crafting Digital Experiences Through Design & Code
              </h2>
            </div>

            <p className="text-slate-300 max-w-xl">
              I design and develop my own <b>UI/UX prototypes</b>, transforming them into fully functional websites and applications. Passionate about creating user-centered interfaces and seamless digital experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-purple-500/30 text-white hover:bg-purple-500/10">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative rounded-3xl overflow-hidden border border-purple-500/20 backdrop-blur-sm">
              <img
                src={profileImage}
                alt="Deina Sophia Ronquillo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-purple-500/20">
          <div className="text-center">
            <div className="text-transparent bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-3xl font-semibold">
              2+
            </div>
            <p className="text-slate-400 mt-2">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-transparent bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-3xl font-semibold">
              10+
            </div>
            <p className="text-slate-400 mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-transparent bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-3xl font-semibold">
              100%
            </div>
            <p className="text-slate-400 mt-2">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-transparent bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-3xl font-semibold">
              24/7
            </div>
            <p className="text-slate-400 mt-2">Dedicated Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
