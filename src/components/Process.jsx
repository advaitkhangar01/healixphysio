import React from 'react'
import { CalendarCheck, ClipboardList, TrendingUp, HeartPulse, CheckCircle2 } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      title: 'Book Appointment',
      desc: 'Connect via WhatsApp or Call to schedule your personalized home visit.',
      icon: <CalendarCheck size={28} />
    },
    {
      title: 'Doctor Assessment',
      desc: 'Our expert physiotherapist performs a detailed physical diagnosis.',
      icon: <ClipboardList size={28} />
    },
    {
      title: 'Personalized Therapy',
      desc: 'Start your custom treatment plan with advanced tools and exercises.',
      icon: <HeartPulse size={28} />
    },
    {
      title: 'Recovery Tracking',
      desc: 'Regular follow-ups to ensure you are meeting your mobility goals.',
      icon: <TrendingUp size={28} />
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4">Patient Journey</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate">
            How We Get You Moving Again
          </h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-medical-white rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-premium group-hover:bg-primary group-hover:text-white transition-all duration-300 relative">
                  <div className="absolute -top-2 -right-2 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 border-white">
                    0{i+1}
                  </div>
                  {step.icon}
                </div>
                <h4 className="text-xl font-heading font-bold mb-4">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  return (
    <section className="py-24 bg-medical-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 rounded-[3rem] shadow-premium relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-primary/10">
              <TrendingUp size={120} />
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex gap-1 mb-8">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} className="text-orange-400 fill-orange-400" />)}
              </div>
              
              <p className="text-2xl md:text-3xl font-heading italic text-medical-slate mb-10 leading-relaxed">
                "I was struggling with back pain for 3 years. The home visits from Healix Physio changed my life. Dr. Anisha is incredibly patient and effective!"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-primary">
                  SR
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Sanjay Rao</div>
                  <div className="text-gray-500 text-sm italic">Recovery: Post-Surgery Spine Rehab</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-opacity">
              <CheckCircle2 size={24} /> <span className="font-bold">4.8/5 on Google</span>
            </div>
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-opacity">
              <CheckCircle2 size={24} /> <span className="font-bold">10k+ Happy Patients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Star(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export { Process, Testimonials }
