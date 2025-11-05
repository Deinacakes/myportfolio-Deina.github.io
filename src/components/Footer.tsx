import { Heart, Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                <span className="text-white">D</span>
              </div>
              <span className="text-white">
                Deina Ronquillo
              </span>
            </div>
            <p className="text-slate-400">
              Development Operations Engineer specializing in UI/UX design and front-end development.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-slate-400 hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="block text-slate-400 hover:text-purple-400 transition-colors">About</a>
              <a href="#skills" className="block text-slate-400 hover:text-purple-400 transition-colors">Skills</a>
              <a href="#projects" className="block text-slate-400 hover:text-purple-400 transition-colors">Projects</a>
              <a href="#contact" className="block text-slate-400 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a 
                href="mailto:deina@example.com"
                className="bg-purple-600/20 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-purple-600/30 transition-colors"
              >
                <Mail className="h-5 w-5 text-purple-400" />
              </a>
              <a 
                href="#"
                className="bg-purple-600/20 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-purple-600/30 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-purple-400" />
              </a>
              <a 
                href="#"
                className="bg-purple-600/20 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-purple-600/30 transition-colors"
              >
                <Github className="h-5 w-5 text-purple-400" />
              </a>
            </div>
            <p className="text-slate-400">
              Available for freelance projects and full-time opportunities.
            </p>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center md:text-left">
            © 2024 Deina Sophia Ronquillo. All rights reserved.
          </p>
          <p className="text-slate-400 flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-purple-400 fill-purple-400" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
