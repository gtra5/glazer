import React from 'react'
import { Plus, Facebook, Twitter, Instagram } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Footer Top */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Plus className="w-5 h-5" strokeWidth={2} />
              <span className="text-lg font-bold">GLAZER</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-6 md:gap-8 justify-center text-sm font-medium mb-6 md:mb-0">
              <a href="#" className="hover:opacity-70 transition">
                Sponsorship
              </a>
              <a href="#" className="hover:opacity-70 transition">
                Model
              </a>
              <a href="#" className="hover:opacity-70 transition">
                Seemilly
              </a>
              <a href="#" className="hover:opacity-70 transition">
                Events
              </a>
              <a href="#" className="hover:opacity-70 transition">
                News
              </a>
              <a href="#" className="hover:opacity-70 transition">
                Contact
              </a>
              <a href="#" className="hover:opacity-70 transition">
                Location
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
            <p>Glazer © 2025 All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
