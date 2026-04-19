import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Laptop, Hospital, ChevronRight } from 'lucide-react'
import homeImg from '../assets/images/hero.png' // Reusing or distinct
import onlineImg from '../assets/images/online.png'
import clinicImg from '../assets/images/clinic.png'

const services = [
  {
    title: 'Home Physiotherapy',
    description: 'Professional rehabilitation in the comfort of your home. Perfect for post-surgery, elderly care, and recovery.',
    image: homeImg,
    icon: <Home className="text-primary" size={24} />,
    tag: 'Popular'
  },
  {
    title: 'Online Consultation',
    description: 'Expert guidance via secure video call. Exercise plans, posture correction, and recovery tracking from anywhere.',
    image: onlineImg,
    icon: <Laptop className="text-secondary" size={24} />,
    tag: 'Quick'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
        <h3 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate mb-16">
          Premium Care For Your Recovery
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="card-premium group overflow-hidden p-0 flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {service.tag}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="bg-medical-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {service.icon}
                </div>
                <h4 className="text-xl font-heading font-bold mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <Link to="/contact" className="flex items-center gap-2 text-primary font-bold group/link">
                  Book Now
                  <ChevronRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
