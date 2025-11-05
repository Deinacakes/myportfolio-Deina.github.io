import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-950/30 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
              <p className="text-purple-300">Get in Touch</p>
            </div>
            <h2 className="text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-950/50 to-slate-900/50 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <Input 
                    id="name"
                    type="text" 
                    placeholder="Your name"
                    className="bg-slate-900/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/40"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-slate-900/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/40"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-slate-900/50 border-purple-500/20 text-white placeholder:text-slate-500 focus:border-purple-500/40 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white mb-6">
                  Connect With Me
                </h3>
                <p className="text-slate-400 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="mailto:deina@example.com"
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-950/50 to-slate-900/50 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all group"
                >
                  <div className="bg-purple-600/20 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white">Email</p>
                    <p className="text-slate-400">deina@example.com</p>
                  </div>
                </a>
                
                <a 
                  href="#"
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-950/50 to-slate-900/50 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all group"
                >
                  <div className="bg-purple-600/20 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <Linkedin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white">LinkedIn</p>
                    <p className="text-slate-400">Connect with me</p>
                  </div>
                </a>
                
                <a 
                  href="#"
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-950/50 to-slate-900/50 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all group"
                >
                  <div className="bg-purple-600/20 rounded-lg w-12 h-12 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                    <Github className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white">GitHub</p>
                    <p className="text-slate-400">View my repositories</p>
                  </div>
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-purple-950/30 to-slate-900/30 border border-purple-500/20 rounded-xl p-6 mt-8">
                <h4 className="text-white mb-2">
                  Availability
                </h4>
                <p className="text-slate-400">
                  Currently available for freelance projects and full-time opportunities in UI/UX Design and Front-End Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
