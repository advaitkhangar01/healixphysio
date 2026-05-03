import React from 'react'
import teamImg from '../assets/images/team.png'
import { Linkedin, Star } from 'lucide-react'

const doctors = [
  {
    name: 'Dr. Anisha',
    role: 'Lead Physiotherapist',
    desc: 'Specialist in Sports Recovery, Post-Rehab & Certified Pilates Instructor',
    exp: '8+ Years Exp',
    rating: '4.9'
  }
]

const Doctors = () => {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4">Meet Your Expert</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate mb-0">
            Recover With <span className="text-primary text-italic">Dr. Anisha</span>
          </h3>
        </div>

        <div className="flex justify-center">
          <div className="group max-w-sm">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-gray-100 shadow-premium group-hover:shadow-xl transition-all duration-300">
              <img 
                src={teamImg} 
                alt={doctors[0].name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
                <Star size={12} className="text-orange-400 fill-orange-400" />
                <span className="text-xs font-bold">{doctors[0].rating}</span>
              </div>
            </div>
            <h4 className="text-2xl font-heading font-bold mb-1 group-hover:text-primary transition-colors">{doctors[0].name}</h4>
            <p className="text-primary text-sm font-bold mb-2 uppercase tracking-tight">{doctors[0].role}</p>
            <p className="text-sm text-gray-500 mb-2">{doctors[0].desc}</p>
            <div className="text-xs font-bold text-gray-400 flex items-center justify-center gap-2">
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              {doctors[0].exp}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctors

