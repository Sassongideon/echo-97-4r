"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Mic,
  Clock,
  Users,
  Zap,
  Heart,
  Briefcase,
  GraduationCap,
  Globe,
  Lightbulb,
  MapPin,
  DollarSign,
  FileText,
  Upload,
  Send,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function RecruitmentAdvertisementPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
    portfolioLinks: "",
    availability: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your application! We'll be in touch soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 to-electric-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Briefcase className="h-8 w-8" />
              </div>
              <span className="text-2xl font-bold tracking-wider">CAREERS</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Now Hiring: Full-Time Radio Jockey (RJ)</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join Echo 97 and become the voice that connects, entertains, and inspires Singapore's young adults every
              single day.
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment Poster */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">Join Our Team</h2>
                <div className="flex justify-center">
                  <Image
                    src="/images/recruitment-poster.png"
                    alt="Echo 97 Recruitment Poster - Be the Next Voice of Singapore"
                    width={600}
                    height={800}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Echo 97 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-electric-blue-50 to-blue-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-navy-900 mb-4 text-center">About Echo 97</h2>
                <p className="text-gray-700 leading-relaxed text-center text-lg">
                  Echo 97 is Singapore's premier FM radio station, reaching over 500,000 listeners daily with our fresh
                  blend of contemporary music, lifestyle content, and engaging talk shows. We're the voice of
                  Singapore's young professionals and students, known for our innovative programming and authentic
                  connection with our audience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Job Overview */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-electric-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Mic className="h-6 w-6" />
                  About the Role
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Clock className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900">Full-Time</h4>
                    <p className="text-gray-600">Permanent Position</p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <MapPin className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900">Location</h4>
                    <p className="text-gray-600">Singapore CBD</p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <DollarSign className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900">Salary</h4>
                    <p className="text-gray-600">$3,500 - $5,500</p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900">High Energy</h4>
                    <p className="text-gray-600">Dynamic Role</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    We're seeking a passionate and dynamic Radio Jockey to join our team at Echo 97. As our newest
                    voice, you'll be responsible for creating engaging content that resonates with Singapore's young
                    adults and working professionals.
                  </p>

                  <h4 className="text-xl font-semibold text-navy-900 mt-6 mb-4">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-electric-blue-500 rounded-full mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Host daily shows with energy, authenticity, and professional presentation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-electric-blue-500 rounded-full mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Engage with listeners live on-air and across social media platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-electric-blue-500 rounded-full mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Brainstorm and present content that resonates with youth and working adults</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-electric-blue-500 rounded-full mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Collaborate with producers, music curators, and brand sponsors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-electric-blue-500 rounded-full mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Be the voice behind trending segments, contests, and cultural conversations</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-navy-900 to-slate-800 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <GraduationCap className="h-6 w-6" />
                  Job Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-900 mb-4">Essential Qualifications:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          Required
                        </Badge>
                        <span>Diploma or relevant experience in mass communications, media, or performing arts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          Required
                        </Badge>
                        <span>Excellent spoken English with strong stage presence and improvisation skills</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          Required
                        </Badge>
                        <span>Tech-savvy and familiar with social platforms (Instagram, TikTok, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">
                          Required
                        </Badge>
                        <span>Able to work rotating shifts, weekends, and occasional live events</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-electric-blue-500" />
                      Nice-to-Have:
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1 border-electric-blue-300 text-electric-blue-600">
                          Bonus
                        </Badge>
                        <span>Bilingual abilities (English and other languages)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1 border-electric-blue-300 text-electric-blue-600">
                          Bonus
                        </Badge>
                        <span>Content creation or podcast experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1 border-electric-blue-300 text-electric-blue-600">
                          Bonus
                        </Badge>
                        <span>Sense of humour and adaptability on-air</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What We Offer */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-electric-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Heart className="h-6 w-6" />
                  What We Offer
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border-2 border-electric-blue-100">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Creative Autonomy</h4>
                    <p className="text-gray-600 text-sm">
                      Freedom to develop your unique on-air personality with dedicated mentorship
                    </p>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-lg border-2 border-green-100">
                    <div className="p-3 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Growth Opportunities</h4>
                    <p className="text-gray-600 text-sm">
                      Career advancement in media and digital production with industry connections
                    </p>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-lg border-2 border-purple-100">
                    <div className="p-3 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Team Culture</h4>
                    <p className="text-gray-600 text-sm">
                      Join a collaborative, fun-loving team that values diversity and innovation
                    </p>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-lg border-2 border-orange-100">
                    <div className="p-3 bg-orange-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <DollarSign className="h-8 w-8 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Competitive Package</h4>
                    <p className="text-gray-600 text-sm">
                      Attractive salary, performance bonuses, and comprehensive benefits
                    </p>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-lg border-2 border-teal-100">
                    <div className="p-3 bg-teal-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Clock className="h-8 w-8 text-teal-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Work-Life Balance</h4>
                    <p className="text-gray-600 text-sm">Flexible scheduling, annual leave, and wellness programs</p>
                  </div>

                  <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-lg border-2 border-pink-100">
                    <div className="p-3 bg-pink-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-pink-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Learning & Development</h4>
                    <p className="text-gray-600 text-sm">
                      Training workshops, industry conferences, and skill development programs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Application Form */}
            <Card className="mb-8 border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="h-6 w-6" />
                  Apply Now
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 font-medium">
                    Ready to join Singapore's most dynamic radio station? Fill out the application form below:
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+65 9123 4567"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Relevant Experience *</Label>
                      <Textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="Tell us about your experience in broadcasting, media, or related fields..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motivation">Why Echo 97? *</Label>
                      <Textarea
                        id="motivation"
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        placeholder="What motivates you to join our team? What makes you the right fit for Echo 97?"
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="portfolioLinks">Portfolio Links</Label>
                      <Textarea
                        id="portfolioLinks"
                        name="portfolioLinks"
                        value={formData.portfolioLinks}
                        onChange={handleInputChange}
                        placeholder="Share links to your demo reel, social media profiles, previous work, etc."
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability</Label>
                      <Textarea
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        placeholder="When can you start? Any scheduling constraints we should know about?"
                        rows={2}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-navy-900 mb-2 flex items-center gap-2">
                          <Upload className="h-5 w-5" />
                          Required Documents:
                        </h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Resume/CV (PDF format preferred)</li>
                          <li>• Demo reel or voice recording (2-3 minutes max)</li>
                          <li>• Portfolio links (if applicable)</li>
                        </ul>
                        <p className="text-xs text-gray-600 mt-2">
                          Please email these documents to <strong>careers@echo97.sg</strong> with subject line: "RJ
                          Application - [Your Name]"
                        </p>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-electric-blue-500 hover:bg-electric-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-navy-900 to-electric-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Be Singapore's Next Voice?</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Join Echo 97 and help shape the sound of Singapore's radio landscape. We welcome applications from all
                  qualified candidates regardless of background.
                </p>
                <p className="text-sm text-blue-200">
                  Echo 97 is an equal opportunity employer committed to fair and merit-based recruitment practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
