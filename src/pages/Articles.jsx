import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  ArrowRight, 
  Calendar, 
  Tag, 
  ChevronRight,
  TrendingUp,
  Clock,
  BookOpen
} from 'lucide-react'

// Article Images
import backPain from '../assets/images/articles/back-pain.png'
import aclRecovery from '../assets/images/articles/acl-recovery.png'
import ergonomics from '../assets/images/articles/ergonomics.png'
import arthritis from '../assets/images/articles/arthritis.png'

import neuroRehab from '../assets/images/articles/neuro-rehab.png'
import physioConsult from '../assets/images/articles/physio-consult.png'
import surgeryRecovery from '../assets/images/articles/surgery-recovery.png'

const articles = [
  {
    id: 'back-pain-exercises',
    title: 'Modern Approaches to Managing Lower Back Pain',
    excerpt: 'Explore how movement-based therapy is replacing total bed rest as the gold standard for back recovery.',
    category: 'Expert Advice',
    date: 'Apr 15, 2026',
    readTime: '5 min read',
    image: backPain
  },
  {
    id: 'acl-recovery-timeline',
    title: 'ACL Recovery: What to Expect in the First 6 Months',
    excerpt: 'A comprehensive guide to the milestones of post-surgical knee rehabilitation and sports return.',
    category: 'Sports Medicine',
    date: 'Apr 12, 2026',
    readTime: '8 min read',
    image: aclRecovery
  },
  {
    id: 'ergonomics-remote-work',
    title: 'Ergonomics for the Modern Remote Professional',
    excerpt: 'Simple adjustments to your workspace that can prevent chronic neck and shoulder tension.',
    category: 'Wellness',
    date: 'Apr 05, 2026',
    readTime: '4 min read',
    image: ergonomics
  },
  {
    id: 'arthritis-management',
    title: 'How Physiotherapy Helps Manage Chronic Arthritis',
    excerpt: 'Understanding the role of joint lubrication and strength training in reducing arthritic pain.',
    category: 'Geriatric Care',
    date: 'Mar 28, 2026',
    readTime: '6 min read',
    image: arthritis
  },

  {
    id: 'neuroplasticity-rehab',
    title: 'The Power of Neuroplasticity in Stroke Recovery',
    excerpt: 'How repetitive movement and focused therapy rewire the brain after a neurological event.',
    category: 'Neuro Rehab',
    date: 'Mar 15, 2026',
    readTime: '7 min read',
    image: neuroRehab
  },
  {
    id: 'when-to-see-physio',
    title: 'When Should You See a Physiotherapist?',
    excerpt: 'Recognizing the warning signs of chronic pain and why early intervention is key to recovery.',
    category: 'Expert Advice',
    date: 'Apr 10, 2026',
    readTime: '5 min read',
    image: physioConsult
  },
  {
    id: 'post-surgery-recovery',
    title: 'Maximizing Recovery After Major Surgery',
    excerpt: 'Top tips from orthopedic specialists on post-surgery rehabilitation and mobility training.',
    category: 'Rehab',
    date: 'Mar 28, 2026',
    readTime: '8 min read',
    image: surgeryRecovery
  }
]

const categories = ['All', 'Expert Advice', 'Sports Medicine', 'Wellness', 'Geriatric Care', 'Neuro Rehab']

const Articles = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-20">
      {/* Editorial Header */}
      <section className="bg-white py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-medical-slate mb-6">
                Recovery <span className="text-primary italic underline decoration-primary/20 underline-offset-8">Resources</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Expert insights, evidence-based guides, and professional advice to support your recovery 
                journey and long-term musculoskeletal health.
              </p>
            </div>
            <div className="relative w-full md:w-80 group">
              <input 
                type="text" 
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 bg-medical-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm border-b border-gray-50 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="container mx-auto px-4 md:px-6 flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-medical-white text-gray-500 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article (Latest) */}
      {searchQuery === '' && activeCategory === 'All' && (
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <Link to={`/article/${articles[0].id}`} className="group block relative rounded-[2rem] overflow-hidden bg-medical-slate aspect-[21/9] min-h-[400px]">
              <img 
                src={articles[0].image} 
                alt={articles[0].title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-medical-slate via-medical-slate/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">Featured</span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-white/80">
                    <Clock size={14} />
                    {articles[0].readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 group-hover:text-primary transition-colors duration-300">
                  {articles[0].title}
                </h2>
                <p className="text-lg text-white/70 mb-8 max-w-2xl hidden md:block">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-2 font-bold text-primary group/link">
                  Read Full Article <ArrowRight className="group-hover/link:translate-x-2 transition-transform" size={20} />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-white min-h-[400px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, i) => (
                <Link to={`/article/${article.id}`} key={i} className="group flex flex-col">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {article.date}
                    </div>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-1 text-primary font-bold text-sm uppercase tracking-tight group-hover:gap-2 transition-all">
                    Read Article <ChevronRight size={16} />
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="mb-4 text-gray-200 flex justify-center">
                  <BookOpen size={64} />
                </div>
                <h4 className="text-xl font-heading font-bold text-gray-400">No articles found matching your criteria</h4>
                <button 
                  onClick={() => {setActiveCategory('All'); setSearchQuery('')}}
                  className="mt-4 text-primary font-bold underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter / Stay Updated */}
      <section className="py-24 bg-medical-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 relative z-10">
              Stay Informed on Your <span className="text-white/70 italic">Recovery</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10 font-medium">
              Join our weekly newsletter to receive curated recovery tips, home exercise guides, and professional advice directly in your inbox.
            </p>
            <form className="relative z-10 flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-8 py-4 rounded-2xl focus:outline-none shadow-premium text-medical-slate font-medium"
              />
              <button className="bg-medical-slate text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition-colors shadow-xl">
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-white/50 text-xs uppercase tracking-widest font-bold">
              Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Articles
