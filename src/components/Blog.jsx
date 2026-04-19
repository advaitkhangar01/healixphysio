import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

import backPain from '../assets/images/articles/back-pain.png'
import physioConsult from '../assets/images/articles/physio-consult.png'
import surgeryRecovery from '../assets/images/articles/surgery-recovery.png'

const posts = [
  {
    id: 'back-pain-exercises',
    title: 'Best Exercises for Back Pain at Home',
    excerpt: 'Simple stretches and movements you can do daily to relieve persistent lower back discomfort.',
    category: 'Home Exercises',
    date: 'Apr 15, 2026',
    image: backPain
  },
  {
    id: 'when-to-see-physio',
    title: 'When Should You See a Physiotherapist?',
    excerpt: 'Recognizing the warning signs of chronic pain and why early intervention is key to recovery.',
    category: 'Expert Advice',
    date: 'Apr 10, 2026',
    image: physioConsult
  },
  {
    id: 'post-surgery-recovery',
    title: 'How to Recover Faster After Surgery',
    excerpt: 'Top tips from orthopedic specialists on post-surgery rehabilitation and mobility training.',
    category: 'Rehab',
    date: 'Mar 28, 2026',
    image: surgeryRecovery
  }
]

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-primary uppercase tracking-[0.2em] mb-4">Recovery Tips</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-medical-slate mb-0">
              Guidance For Your <span className="text-primary">Wellness Journey</span>
            </h3>
          </div>
          <Link to="/blog" className="flex items-center gap-2 text-primary font-bold hover:underline mb-2">
            View All Resources <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Link to={`/article/${post.id}`} key={i} className="group cursor-pointer">
              <div className="aspect-[16/10] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-8 text-center bg-medical-white">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors"></div>
              </div>
              <div className="px-2">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h4 className="text-xl font-heading font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Blog
