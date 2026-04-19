import React from 'react'
import { Star, CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import heroImage from '../assets/images/hero.png'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent rounded-l-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 text-sm font-bold">
              <Star size={16} fill="currentColor" />
              <span>4.8 Google Rating • Same-Day Appointments</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-medical-slate leading-[1.1] mb-6">
              Expert Physiotherapy Care — <span className="text-primary italic">At Your Home</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl">
              Recover faster with personalized treatment from our lead expert. Nagpur's most trusted physical therapist for home visits and rehab.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <a href="#contact" className="btn-primary group w-full sm:w-auto flex items-center justify-center gap-2">
                Book Home Visit 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-outline w-full sm:w-auto">
                View Services
              </a>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-8 opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span className="font-semibold">10,000+ Treated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span className="font-semibold">Certified Specialist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-secondary" />
                <span className="font-semibold">Modern Rehab</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src={heroImage} alt="Professional Physiotherapy" className="w-full h-auto object-cover" />
              
              {/* Floating Badges */}
              <div className="absolute top-6 left-6 bg-white p-3 rounded-xl shadow-lg animate-bounce duration-5000">
                <div className="flex items-center gap-2">
                  <div className="bg-secondary p-1.5 rounded-lg text-white">
                    <CheckCircle size={18} />
                  </div>
                  <span className="font-bold text-sm">Certified Specialist</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white p-3 rounded-xl shadow-lg">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Availability</div>
                <div className="text-primary font-bold">Same-Day Appointment</div>
              </div>
            </div>
            
            {/* Artistic decor */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
