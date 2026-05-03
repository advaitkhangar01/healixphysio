import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, User, Clock, Share2, ChevronRight } from 'lucide-react'

// Article Images
import backPain from '../assets/images/articles/back-pain.png'
import aclRecovery from '../assets/images/articles/acl-recovery.png'
import ergonomics from '../assets/images/articles/ergonomics.png'
import arthritis from '../assets/images/articles/arthritis.png'

import neuroRehab from '../assets/images/articles/neuro-rehab.png'
import physioConsult from '../assets/images/articles/physio-consult.png'
import surgeryRecovery from '../assets/images/articles/surgery-recovery.png'

const ARTICLES = {
  'back-pain-exercises': {
    title: 'Modern Approaches to Managing Lower Back Pain',
    category: 'Expert Advice',
    date: 'Apr 15, 2026',
    author: 'Dr. Rahul Sharma',
    readTime: '5 min read',
    image: backPain,
    content: (
      <div className="space-y-8">
        <p className="text-xl leading-relaxed text-gray-700 font-medium">
          Lower back pain affects nearly 80% of adults at some point. Modern physiotherapy has moved away from "total bed rest" toward movement-based recovery.
        </p>
        <h3 className="text-2xl font-heading font-bold text-medical-slate">Movement is Medicine</h3>
        <p className="text-gray-600 leading-relaxed">
          The goal of modern rehab is to restore spinal mobility and build core endurance. By using targeted stretches like the Cat-Cow and stability exercises like the Bird-Dog, patients can decompress their spine and reduce nerve irritation.
        </p>
        <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/10">
          <h4 className="font-bold text-primary mb-4">Key Strategies:</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div> <strong>Regular Walking:</strong> Simple low-impact movement prevents stiffness.</li>
            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div> <strong>Core Stability:</strong> Protecting the spine through abdominal engagement.</li>
            <li className="flex gap-3 items-start"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div> <strong>Postural Variety:</strong> Avoiding any single position for more than 30 minutes.</li>
          </ul>
        </div>
      </div>
    )
  },
  'acl-recovery-timeline': {
    title: 'ACL Recovery: What to Expect in the First 6 Months',
    category: 'Sports Medicine',
    date: 'Apr 12, 2026',
    author: 'Sports Recovery Team',
    readTime: '8 min read',
    image: aclRecovery,
    content: (
      <div className="space-y-8">
        <p className="text-xl leading-relaxed text-gray-700">
          An ACL injury is a major milestone for any athlete. Understanding the rehabilitation timeline is crucial for managing expectations and ensuring a safe return to sport.
        </p>
        <div className="space-y-6">
          <div className="p-6 bg-medical-white rounded-2xl border border-gray-100">
            <h4 className="font-bold text-lg mb-2">Weeks 0-2: Protection</h4>
            <p className="text-gray-600">Focus on reducing swelling, regaining full knee extension, and gentle muscle activation.</p>
          </div>
          <div className="p-6 bg-medical-white rounded-2xl border border-gray-100">
            <h4 className="font-bold text-lg mb-2">Weeks 2-6: Range of Motion</h4>
            <p className="text-gray-600">Improving knee flexion and starting closed-chain exercises like mini-squats.</p>
          </div>
          <div className="p-6 bg-medical-white rounded-2xl border border-gray-100">
            <h4 className="font-bold text-lg mb-2">Months 3-6: Strength & Impact</h4>
            <p className="text-gray-600">Progressing to agility drills, plyometrics, and sport-specific movements under supervision.</p>
          </div>
        </div>
      </div>
    )
  },
  'ergonomics-remote-work': {
    title: 'Ergonomics for the Modern Remote Professional',
    category: 'Wellness',
    date: 'Apr 05, 2026',
    author: 'Workplace Wellness Expert',
    readTime: '4 min read',
    image: ergonomics,
    content: (
      <div className="space-y-8">
        <p className="text-xl leading-relaxed text-gray-700">
          Working from home often means working from less-than-ideal setups. Poor ergonomics can lead to repetitive strain injuries that take weeks to heal.
        </p>
        <h3 className="text-2xl font-heading font-bold">The Ideal Setup</h3>
        <ul className="list-disc list-inside space-y-4 text-gray-600">
          <li><strong>Eye Level:</strong> Your monitor should be positioned so the top third is at eye level.</li>
          <li><strong>90-Degree Rule:</strong> Elbows and knees should ideally be at 90-degree angles.</li>
          <li><strong>Lumbar Support:</strong> A small pillow or specialized chair can maintain the natural curve of your lower back.</li>
        </ul>
        <div className="bg-primary/10 p-6 rounded-2xl text-primary font-bold">
          Tip: Follow the 20-20-20 rule. Every 20 minutes, look at something 20 feet away for 20 seconds.
        </div>
      </div>
    )
  },
  'arthritis-management': {
    title: 'How Physiotherapy Helps Manage Chronic Arthritis',
    category: 'Geriatric Care',
    date: 'Mar 28, 2026',
    author: 'Senior Care Specialist',
    readTime: '6 min read',
    image: arthritis,
    content: (
      <div className="space-y-8">
        <p className="text-xl leading-relaxed text-gray-700">
          Arthritis doesn't have to mean a loss of independence. While it's a chronic condition, physiotherapy provides the tools to manage pain and maintain joint function.
        </p>
        <h3 className="text-2xl font-heading font-bold">Joint Lubrication through Movement</h3>
        <p className="text-gray-600">
          Movement encourages the production of synovial fluid, which acts as a lubricant for your joints. Low-impact exercises like swimming or cycling are excellent for maintaining health without overstressing the cartilage.
        </p>
      </div>
    )
  },

  'neuroplasticity-rehab': {
    title: 'The Power of Neuroplasticity in Stroke Recovery',
    category: 'Neuro Rehab',
    date: 'Mar 15, 2026',
    author: 'Neurological Expert',
    readTime: '7 min read',
    image: neuroRehab,
    content: (
      <div className="space-y-8">
        <p className="text-xl leading-relaxed text-gray-700">
          The brain is remarkably adaptable. Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections throughout life.
        </p>
        <p className="text-gray-600">
          In stroke rehabilitation, we use high-repetition, goal-oriented tasks to "bypass" the damaged areas and train healthy parts of the brain to take over lost functions. Success relies on intensity and early intervention.
        </p>
      </div>
    )
  },
  'when-to-see-physio': {
    title: 'When Should You See a Physiotherapist?',
    category: 'Expert Advice',
    date: 'Apr 10, 2026',
    author: 'Dr. Rahul Sharma',
    readTime: '5 min read',
    image: physioConsult,
    content: (
      <div className="space-y-8">
        <p className="text-xl leading-relaxed text-gray-700">
          Many people wait until their pain becomes unbearable before seeking help. However, early intervention is the secret to a fast and complete recovery.
        </p>
        <h3 className="text-2xl font-heading font-bold text-medical-slate">3 Warning Signs You Shouldn't Ignore</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-premium">
            <h4 className="font-bold text-primary mb-2">1. Persistent Aches</h4>
            <p className="text-gray-600 text-sm">Pain that lasts longer than 3 days or returns frequently during the same activity.</p>
          </div>
          <div className="card-premium">
            <h4 className="font-bold text-primary mb-2">2. Restricted Mobility</h4>
            <p className="text-gray-600 text-sm">Inability to perform basic movements like reaching overhead or bending to tie shoes.</p>
          </div>
        </div>
      </div>
    )
  },
  'post-surgery-recovery': {
    title: 'How to Recover Faster After Surgery',
    category: 'Rehab',
    date: 'Mar 28, 2026',
    author: 'Recovery Specialists',
    readTime: '8 min read',
    image: surgeryRecovery,
    content: (
      <div className="space-y-8">
        <p className="text-xl leading-relaxed text-gray-700">
          The surgery is only half the battle. Your recovery phase determines how well you'll regain function and prevent future complications.
        </p>
        <div className="bg-medical-white p-8 rounded-3xl border border-dashed border-primary">
          <h3 className="text-2xl font-heading font-bold text-medical-slate mb-6">The Phase-Based Approach</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary shrink-0">1</div>
              <div>
                <h4 className="font-bold">Phase 1: Protection & Healing</h4>
                <p className="text-gray-500 text-sm">Focus on reducing swelling and gentle mobilization.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary shrink-0">2</div>
              <div>
                <h4 className="font-bold">Phase 2: Strength Restoration</h4>
                <p className="text-gray-500 text-sm">Targeted muscle strengthening around the surgical site.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Article = () => {
  const { id } = useParams()
  const article = ARTICLES[id]

  if (!article) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
        <Link to="/" className="text-primary hover:underline">Back to Home</Link>
      </div>
    )
  }

  return (
    <article className="pt-32 pb-24">
      {/* Article Header */}
      <div className="bg-medical-white py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/articles" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft size={18} /> Back to Articles
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{article.category}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-medical-slate leading-tight mb-8">
              {article.title}
            </h1>
            <div className="flex items-center justify-between py-6 border-y border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  {article.author.split(' ')[1]?.[0] || 'A'}
                </div>
                <div>
                  <div className="font-bold text-sm">{article.author}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">Certified Expert</div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-primary transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Article Hero Image */}
      <div className="container mx-auto max-w-4xl px-4 -mt-16 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
        >
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-4xl px-4 mt-16 prose prose-lg prose-primary">
        {article.content}
      </div>

      {/* Final CTA */}
      <div className="container mx-auto max-w-4xl px-4 mt-24">
        <div className="bg-primary p-12 rounded-[3rem] text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-heading font-bold mb-6">Ready to Start Your Pain-Free Journey?</h3>
            <p className="text-white/80 mb-10 max-w-xl text-lg">
              Don't let pain hold you back. Our certified experts are ready to assist you via home visit or online consultation today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-primary font-bold py-4 px-8 rounded-2xl hover:bg-gray-100 transition-colors shadow-lg">
                Book Expert Assessment
              </Link>
              <a href="tel:+919970936454" className="bg-white/10 text-white border border-white/20 font-bold py-4 px-8 rounded-2xl hover:bg-white/20 transition-colors">
                Speak to a Doctor
              </a>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </article>
  )
}

export default Article
