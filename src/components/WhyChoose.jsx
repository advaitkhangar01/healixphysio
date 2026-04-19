import React from 'react'
import { Users, Calendar, Award, UserCheck, Clock, CreditCard, Zap, ShieldCheck, Hospital } from 'lucide-react'

const TrustStats = () => {
  const stats = [
    { value: '10k+', label: 'Patients Treated', icon: <Users size={24} /> },
    { value: '5+', label: 'Years Experience', icon: <Award size={24} /> },
    { value: '4.8', label: 'Google Rating', icon: <Clock size={24} /> },
    { value: 'Lead', label: 'Specialist', icon: <UserCheck size={24} /> },
  ]

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white/10 p-4 rounded-xl mb-4 border border-white/20">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-1">{stat.value}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhyChoose = () => {
  const reasons = [
    {
      title: 'Expert Physiotherapists',
      desc: 'Our team consists of certified specialists with years of clinical experience.',
      icon: <Users className="text-primary" />
    },
    {
      title: 'Personalized Recovery',
      desc: 'No generic plans. We create recovery paths tailored to your lifestyle.',
      icon: <Zap className="text-primary" />
    },
    {
      title: 'Transparent Pricing',
      desc: 'Affordable rates with no hidden charges. Premium care for all.',
      icon: <CreditCard className="text-primary" />
    },
    {
      title: 'Home Convenience',
      desc: 'Skip the traffic. We bring expert recovery to your doorstep in Nagpur.',
      icon: <Home className="text-primary" />
    }
  ]

  return (
    <section id="why-choose" className="py-24 bg-medical-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4 text-center lg:text-left">The Healix Edge</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate mb-8 text-center lg:text-left">
              Why 10,000+ Patients <br className="hidden md:block"/>Trust Us Daily
            </h3>
            <p className="text-gray-600 mb-12 text-center lg:text-left text-lg">
              We don't just treat symptoms; we target the root cause of your pain to ensure long-term wellness and faster recovery.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors duration-300 border border-transparent hover:border-gray-100">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{r.title}</h4>
                    <p className="text-sm text-gray-600">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="bg-primary aspect-square rounded-[3rem] p-12 flex flex-col justify-center text-white overflow-hidden relative">
              {/* Trust Badge Background */}
              <ShieldCheck className="absolute -bottom-10 -right-10 text-white/10 w-80 h-80" />
              
              <div className="relative z-10">
                <div className="text-6xl font-heading font-bold mb-4">98%</div>
                <div className="text-2xl font-heading mb-8">Patient Satisfaction</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-secondary" size={20} />
                    <span>Evidence-Based Practice</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-secondary" size={20} />
                    <span>Nagpur's Leading Medical Team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-secondary" size={20} />
                    <span>Advanced Mobility Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Home(props) { return <Hospital {...props} /> } // Helper
function CheckCircle(props) { return <ShieldCheck {...props} /> } // Helper

export { TrustStats, WhyChoose }
