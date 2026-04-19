import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, ShieldCheck, HeartPulse } from 'lucide-react'
import ContactComponent from '../components/Contact'

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero / Header Section */}
      <section className="bg-medical-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-medical-slate mb-6">
              Get In <span className="text-primary italic">Touch</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Whether you need a home visit in Nagpur or an online consultation from anywhere in the world, 
              our expert team is ready to assist your recovery journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactComponent />

      {/* Additional Info Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-premium flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-heading font-bold mb-4">Patient-First Care</h4>
              <p className="text-gray-500">We prioritize your comfort and recovery goals in every interaction.</p>
            </div>
            
            <div className="card-premium flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                <HeartPulse size={32} />
              </div>
              <h4 className="text-xl font-heading font-bold mb-4">Expert Doctors</h4>
              <p className="text-gray-500">Direct access to certified experts with years of clinical experience.</p>
            </div>

            <div className="card-premium flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Clock size={32} />
              </div>
              <h4 className="text-xl font-heading font-bold mb-4">Quick Response</h4>
              <p className="text-gray-500">Typical response time is less than 15 minutes during operating hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Support Info Section */}
      <section className="py-24 bg-medical-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-[3rem] p-12 shadow-premium text-center">
            <h3 className="text-3xl font-heading font-bold mb-8">Serving All Of Nagpur</h3>
            <div className="flex flex-wrap justify-center gap-4 text-gray-500 font-medium">
              <span className="bg-gray-100 px-4 py-2 rounded-full">Dharampeth</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Manish Nagar</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Ramdaspeth</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Civil Lines</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Jamtha</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Wardha Road</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
