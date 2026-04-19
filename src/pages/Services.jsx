import React from 'react'
import { 
  Activity, 
  Dumbbell, 
  Brain, 
  Baby, 
  UserPlus, 
  Wind, 
  Stethoscope, 
  Home, 
  Laptop,
  ChevronRight,
  ShieldCheck,
  Clock,
  MapPin
} from 'lucide-react'
import Contact from '../components/Contact'

const services = [
  {
    icon: <Activity className="text-primary" size={32} />,
    title: "Orthopedic Physiotherapy",
    description: "Specialized care for bone and joint issues, including fractures, ligament tears, and chronic conditions like arthritis.",
    details: ["Post-Surgical Rehab", "Joint Mobilization", "Fracture Recovery"]
  },
  {
    icon: <Dumbbell className="text-primary" size={32} />,
    title: "Sports Injury Rehabilitation",
    description: "Expert recovery programs for athletes to return to their peak performance safely and quickly.",
    details: ["Muscle Strains", "Ligament Injuries", "Performance Training"]
  },
  {
    icon: <Brain className="text-primary" size={32} />,
    title: "Neurological Rehabilitation",
    description: "Comprehensive therapy for conditions affecting the nervous system, improving mobility and independence.",
    details: ["Stroke Recovery", "Parkinson's Care", "MS Management"]
  },
  {
    icon: <Baby className="text-primary" size={32} />,
    title: "Pediatric Physiotherapy",
    description: "Gentle and effective therapy tailored for children to support their growth and developmental milestones.",
    details: ["Developmental Delays", "Postural Correction", "Congenital Issues"]
  },
  {
    icon: <UserPlus className="text-primary" size={32} />,
    title: "Geriatric Physiotherapy",
    description: "Focused care for elderly patients to maintain balance, strength, and prevent falls.",
    details: ["Balance Training", "Mobility Support", "Fall Prevention"]
  },
  {
    icon: <Wind className="text-primary" size={32} />,
    title: "Cardiopulmonary Rehab",
    description: "Assisting patients with heart and lung conditions to improve their endurance and quality of life.",
    details: ["Post-Cardiac Surgery", "Asthma Management", "COPD Care"]
  }
]

const modalities = [
  {
    title: "Clinic Consultation",
    desc: "Visit our state-of-the-art center for personalized care and advanced equipment.",
    icon: <Stethoscope size={24} />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Home Visits",
    desc: "Get professional treatment in the comfort and privacy of your own home.",
    icon: <Home size={24} />,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Online Sessions",
    desc: "Connect with our experts via secure video calls for guidance and exercise plans.",
    icon: <Laptop size={24} />,
    color: "bg-purple-50 text-purple-600"
  }
]

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-medical-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-medical-slate mb-6 leading-tight">
              Comprehensive <span className="text-primary text-italic">Physiotherapy</span> Solutions
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We offer a wide range of specialized treatments designed to help you recover faster, 
              move better, and live a pain-free life. Our expert therapists use evidence-based 
              approaches for every condition.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary py-3 px-8 text-lg">
                Book a Session
              </a>
              <div className="flex items-center gap-2 text-gray-500 font-medium">
                <ShieldCheck className="text-primary" size={20} />
                <span>Certified Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate">
              Specialized Care for Every Need
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-premium group hover:-translate-y-2 transition-all duration-300">
                <div className="bg-medical-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-heading font-bold mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <div className="w-1.5 h-1.5 bg-primary/40 rounded-full"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Modalities */}
      <section className="py-24 bg-medical-slate text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Subtle pattern could go here */}
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white/60 font-bold uppercase tracking-widest text-sm mb-4 font-heading">Flexible Care</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold">How We Deliver Treatment</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {modalities.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className={`${item.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="text-2xl font-heading font-bold mb-4">{item.title}</h4>
                <p className="text-white/70 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section (Mini) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4 text-left">Why Work With Us</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate mb-8 text-left">
                Setting New Standards in <span className="text-primary italic">Rehabilitation</span>
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1 uppercase tracking-tight">Flexible Scheduling</h5>
                    <p className="text-gray-600 text-sm">Appointments that fit your busy life, including weekends.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1 uppercase tracking-tight">Prime Location</h5>
                    <p className="text-gray-600 text-sm">Easily accessible clinic with ample parking and accessibility.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-medical-white p-12 rounded-[2rem] border border-gray-100 shadow-premium relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <blockquote className="text-2xl font-medium text-medical-slate mb-8 leading-relaxed">
                  "The home visits were a game changer for my recovery after knee surgery. Professional care without the commute."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-bold">Rahul Sharma</p>
                    <p className="text-sm text-gray-500 uppercase tracking-tighter">Post-Surgery Patient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact id="contact" />
    </div>
  )
}

export default Services
