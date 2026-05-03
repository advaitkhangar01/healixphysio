import React from 'react'
import { Phone, Mail, MapPin, MessageSquare, Clock } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-medical-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[3rem] shadow-premium overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left: Contact Info */}
            <div className="lg:w-2/5 bg-primary p-12 lg:p-20 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-heading font-bold mb-8">Start Your <br/>Recovery Today</h3>
                <p className="text-white/80 mb-12 text-lg">
                  Take the first step toward a pain-free life. Contact us for home visits or online consultations.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg"><Phone size={24} /></div>
                    <div>
                      <div className="font-bold text-lg">+91 99709 36454</div>
                      <div className="text-white/60 text-sm">Main Reception</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg"><MessageSquare size={24} /></div>
                    <div>
                      <div className="font-bold text-lg">+91 99709 36454</div>
                      <div className="text-white/60 text-sm">WhatsApp Booking</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg"><Clock size={24} /></div>
                    <div>
                      <div className="font-bold text-lg">08:00 AM - 08:00 PM</div>
                      <div className="text-white/60 text-sm">Mon - Sat (Sun Closed)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/10 p-3 rounded-lg"><MapPin size={24} /></div>
                    <div>
                      <div className="font-bold text-lg text-secondary">Nagpur, India</div>
                      <div className="text-white/60 text-sm">Serving major areas including Sadar, Godhani, Mankapur, Jaripatka, Sitabuldi, etc.</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-4">
                <div className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  Limited slots available today
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="flex-1 p-12 lg:p-20">
              <h4 className="text-2xl font-heading font-bold mb-8 text-medical-slate">Book An Appointment</h4>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-medical-white border-0 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-medical-white border-0 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Service Needed</label>
                    <select className="w-full bg-medical-white border-0 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                      <option>Home Physiotherapy</option>
                      <option>Online Consultation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Location (Nagpur)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Dharampeth"
                      className="w-full bg-medical-white border-0 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">How can we help?</label>
                  <textarea 
                    rows="4"
                    placeholder="Briefly describe your pain or condition..."
                    className="w-full bg-medical-white border-0 p-4 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  ></textarea>
                </div>

                <button type="button" className="btn-primary w-full py-4 text-lg">
                  Submit Request
                </button>
                <p className="text-center text-sm text-gray-400">
                  By submitting, you agree to our privacy policy. We typically respond within 15 minutes.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
