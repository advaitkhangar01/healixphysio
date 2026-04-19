import React from 'react'
import { Facebook, Instagram, MessageCircle, Linkedin, MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-medical-slate text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Healix Physio" className="h-10 brightness-0 invert" />
              <div>
                <span className="text-xl font-heading font-bold block leading-none">Healix</span>
                <span className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Physio</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              Nagpur's leading physiotherapy practice specializing in home visits, online recovery programs, and personalized recovery care for 10,000+ happy patients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/919970936454" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-8 h-1 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 transition-all inline-block">Home</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Our Services</Link></li>
              <li><a href="#why-choose" className="hover:text-white hover:translate-x-1 transition-all inline-block">Why Choose Us</a></li>
              <li><a href="#doctors" className="hover:text-white hover:translate-x-1 transition-all inline-block">Expert Team</a></li>
              <li><a href="#conditions" className="hover:text-white hover:translate-x-1 transition-all inline-block">Conditions Treated</a></li>
              <li><Link to="/articles" className="hover:text-white hover:translate-x-1 transition-all inline-block">Blog & Tips</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 relative inline-block">
              Expertise
              <span className="absolute bottom-[-8px] left-0 w-8 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white">Home Physiotherapy</a></li>
              <li><a href="#" className="hover:text-white">Post-Surgery Rehab</a></li>
              <li><a href="#" className="hover:text-white">Sports Injury Treatment</a></li>
              <li><a href="#" className="hover:text-white">Geriatric Transitions</a></li>
              <li><a href="#" className="hover:text-white">Neuro-Rehab Therapy</a></li>
              <li><a href="#" className="hover:text-white">Online Video Consult</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-8 relative inline-block">
              Get In Touch
              <span className="absolute bottom-[-8px] left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-6 text-white/60">
              <li className="flex items-start gap-4">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <span>Nagpur, Maharashtra, India <br/><span className="text-sm opacity-50">Serving major residential hubs</span></span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span>+91 99709 36454</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span>care@healixphysio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 Healix Physio. All Rights Reserved. Designed for Excellence.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
