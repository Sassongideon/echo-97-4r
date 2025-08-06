import { Radio, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-electric-blue-500 rounded-full">
                <Radio className="h-6 w-6" />
              </div>
              <div>
                <span className="text-2xl font-bold">ECHO 97</span>
                <div className="text-sm text-blue-200">Singapore's Voice</div>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Where creativity meets culture, and every voice has the power to inspire, 
              entertain, and connect with thousands across Singapore.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-electric-blue-400" />
                <span>careers@echo97.sg</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-electric-blue-400" />
                <span>+65 6123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-electric-blue-400" />
                <span>Singapore Broadcasting Centre</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="space-y-2 text-blue-200">
              <div><a href="#" className="hover:text-white transition-colors">Listen Live</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Show Schedule</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Our DJs</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Contact Us</a></div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; 2024 Echo 97 FM. All rights reserved. | Equal Opportunity Employer</p>
          <p className="text-sm mt-2">
            Created by Sasson Gideon - Ngee Ann Polytechnic, Class: TB07
          </p>
        </div>
      </div>
    </footer>
  )
}
