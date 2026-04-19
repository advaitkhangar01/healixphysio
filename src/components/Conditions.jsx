import React from 'react'
import { 
  Activity, 
  Accessibility, 
  Zap, 
  PlusCircle, 
  Move, 
  Flashlight, 
  HeartPulse, 
  UserRound,
  ArrowRight
} from 'lucide-react'

const conditions = [
  { 
    name: 'Back Pain', 
    icon: <Accessibility size={32} />, 
    desc: 'Expert spinal adjustment and core strengthening to eliminate lower and upper back discomfort.' 
  },
  { 
    name: 'Neck Pain', 
    icon: <UserRound size={32} />, 
    desc: 'Specialized therapy for cervical stiffness and recurring neck strain caused by posture.' 
  },
  { 
    name: 'Knee Pain', 
    icon: <Activity size={32} />, 
    desc: 'Advanced biomechanical analysis and targeted exercises to restore knee mobility.' 
  },
  { 
    name: 'Sports Injury', 
    icon: <Zap size={32} />, 
    desc: 'Rapid recovery protocols for athletes to return to their peak performance safely.' 
  },
  { 
    name: 'Post-Surgery Rehab', 
    icon: <PlusCircle size={32} />, 
    desc: 'Structured rehabilitation plans to ensure optimal healing after orthopedic surgeries.' 
  },
  { 
    name: 'Frozen Shoulder', 
    icon: <Move size={32} />, 
    desc: 'Manual therapy and range-of-motion exercises to treat shoulder stiffness and pain.' 
  },
  { 
    name: 'Sciatica', 
    icon: <Flashlight size={32} />, 
    desc: 'Nerve decompression techniques to relieve radiating leg pain and numbness.' 
  },
  { 
    name: 'Arthritis', 
    icon: <HeartPulse size={32} />, 
    desc: 'Pain management and joint protection strategies for osteoarthritis and rheumatoid cases.' 
  },
]

const Conditions = () => {
  return (
    <section id="conditions" className="py-24 bg-medical-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4">What We Treat</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate">
            Specialized Care For Every Pain
          </h3>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our multi-doctor approach ensures you get the right expert for your specific condition with research-backed therapy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {conditions.map((cond, i) => (
            <div 
              key={i} 
              className="group bg-white p-10 rounded-3xl shadow-premium border border-transparent hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                {cond.icon}
              </div>
              <h4 className="font-heading font-bold text-xl mb-4 text-medical-slate group-hover:text-primary transition-colors">
                {cond.name}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {cond.desc}
              </p>
            
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-white/50 rounded-[2rem] border border-dashed border-primary/20">
            <p className="text-gray-500 mb-6 italic">Don't see your condition here? We treat 50+ orthopedic and neurological issues.</p>
            <a href="tel:+91XXXXXXXXXX" className="btn-outline">
              Inquire About Your Condition
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Conditions

