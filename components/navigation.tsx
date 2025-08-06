"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Radio, Menu, X } from 'lucide-react'
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/recruitment-advertisement", label: "Recruitment advertisement" },
    { href: "/interview-questions", label: "Interview questions" },
    { href: "/interview-role-play-video", label: "Interview role-play video" },
    { href: "/reflection", label: "Reflection" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-electric-blue-500 rounded-full group-hover:bg-electric-blue-600 transition-colors">
              <Radio className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-navy-900">ECHO 97</span>
              <div className="text-xs text-gray-500 -mt-1">Recruitment Portal</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className={
                    pathname === item.href
                      ? "bg-electric-blue-500 hover:bg-electric-blue-600 text-white"
                      : "text-gray-700 hover:text-navy-900 hover:bg-blue-50"
                  }
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      pathname === item.href
                        ? "bg-electric-blue-500 hover:bg-electric-blue-600 text-white"
                        : "text-gray-700 hover:text-navy-900 hover:bg-blue-50"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
