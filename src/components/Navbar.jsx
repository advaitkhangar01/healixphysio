import React, { useState, useEffect } from 'react'
import { Phone, Menu, X, MessageSquare } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Healix Physio" className="h-16 md:h-20" />
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary border-b-2 border-primary' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`font-medium hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary border-b-2 border-primary' : ''}`}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className={`font-medium hover:text-primary transition-colors ${location.pathname === '/services' ? 'text-primary border-b-2 border-primary' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/articles" 
            className={`font-medium hover:text-primary transition-colors ${location.pathname === '/articles' ? 'text-primary border-b-2 border-primary' : ''}`}
          >
            Articles
          </Link>
          <a href="tel:+919970936454" className="flex items-center gap-2 text-primary font-bold">
            <Phone size={18} />
            <span>+91 99709 36454</span>
          </a>
          <Link to="/#contact" className="btn-primary py-2 px-6">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link to="/" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/services" className={`text-lg font-medium ${location.pathname === '/services' ? 'text-primary' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/articles" className={`text-lg font-medium ${location.pathname === '/articles' ? 'text-primary' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Articles</Link>
          <div className="h-px bg-gray-100"></div>
          <a href="tel:+919970936454" className="flex items-center gap-3 text-primary font-bold text-lg">
            <Phone size={20} />
            <span>Call Now</span>
          </a>
          <a href="https://wa.me/919970936454" className="flex items-center gap-3 text-support font-bold text-lg">
            <MessageSquare size={20} />
            <span>WhatsApp Us</span>
          </a>
          <Link to="/#contact" className="btn-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  )
}


export default Navbar
