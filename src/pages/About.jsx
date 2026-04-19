import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Zap, ShieldCheck, HeartPulse, Laptop, Home as HomeIcon, CheckCircle2 } from 'lucide-react'
import Doctors from '../components/Doctors'

const About = () => {
  return (
    <div className="pt-24 md:pt-32">
      {/* Overview Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6 text-sm font-bold">
                  <Target size={16} />
                  <span>Our Mission & Vision</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-medical-slate leading-tight mb-8">
                  Redefining Recovery Through <span className="text-primary italic">Expert Care</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  At Healix Physio, we believe that recovery shouldn't be a burden. By shifting our focus entirely to **Home Visits** and **Online Consultations**, we bring Nagpur's leading expert physiotherapy directly to your most comfortable environment.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                      <ShieldCheck /> Professional Integrity
                    </h3>
                    <p className="text-gray-500 text-sm">Every treatment plan is backed by clinical research and delivered personally by Dr. Anisha.</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                      <Zap /> Faster Results
                    </h3>
                    <p className="text-gray-500 text-sm">Our personalized approach targets the root cause of pain for lasting recovery.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 relative">
              <div className="aspect-square bg-primary/5 rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="text-center space-y-6 relative z-10">
                  <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8">
                    <HeartPulse size={48} className="text-primary" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-medical-slate">Trusted by 10,000+ Patients</h2>
                  <p className="text-gray-500">Transforming lives across Nagpur since 2019.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Doctors />

      {/* Way of Approach Section */}
      <section className="py-24 bg-medical-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Methodology</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate">
              Evidence-Based <span className="text-primary">Manual Therapy</span>
            </h3>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We focus on hands-on manual therapy and movement-based exercises that yield the best results in-home and online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Clinical Assessment',
                desc: 'A thorough 45-minute physical and medical history evaluation to identify the root cause.',
                icon: <Users />
              },
              {
                title: 'Manual Therapy',
                desc: 'Expert joint mobilization, soft tissue release, and hands-on techniques to restore movement.',
                icon: <HeartPulse />
              },
              {
                title: 'Exercise Prescription',
                desc: 'Customized strengthening and flexibility routines tailored to your home environment.',
                icon: <Activity />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-premium hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-primary/20 group">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-heading font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Home & Online Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-1/2 bg-primary/5 -z-10 skew-y-3"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate mb-16">
              Why We Shifted To <span className="text-primary italic">Home & Online Only</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="card-premium h-full">
                <div className="bg-secondary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-secondary mb-6">
                  <HomeIcon size={28} />
                </div>
                <h4 className="text-2xl font-heading font-bold mb-6">Home Physiotherapy</h4>
                <ul className="space-y-4">
                  {[
                    'Therapy in your most comfortable environment',
                    'Zero travel stress or time wasted in traffic',
                    'Direct assessment of post-rehab surroundings',
                    'Dedicated family involvement in recovery'
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <CheckCircle2 size={20} className="text-secondary shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-premium h-full">
                <div className="bg-secondary/10 w-14 h-14 rounded-2xl flex items-center justify-center text-secondary mb-6">
                  <Laptop size={28} />
                </div>
                <h4 className="text-2xl font-heading font-bold mb-6">Online Consultation</h4>
                <ul className="space-y-4">
                  {[
                    'Instant access to Dr. Anisha from anywhere',
                    'Flexible scheduling that fits your work life',
                    'Advanced video assessments & tracking',
                    'Digital exercise plans with 24/7 support'
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-3 text-gray-600">
                      <CheckCircle2 size={20} className="text-secondary shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-16 inline-flex flex-col items-center">
              <p className="text-lg text-gray-500 mb-8 italic">"We believe the best clinic is the one that comes to you."</p>
              <a href="#contact" className="btn-primary">Book Your Session Today</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Activity(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
}

export default About
