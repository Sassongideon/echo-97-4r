import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic, Clock, Users, Zap, Heart, Briefcase, GraduationCap, Globe, Lightbulb } from 'lucide-react'

export default function RecruitmentAdvertisementPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Now Hiring: Full-Time Radio Jockey (RJ)
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join Echo 97 and become the voice that connects, entertains, and inspires 
              Singapore's young adults every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16">
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
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Clock className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900">Full-Time</h4>
                    <p className="text-gray-600">Permanent Position</p>
                  </div>
                  <div className="text-center">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Users className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900">Team Player</h4>
                    <p className="text-gray-600">Collaborative Environment</p>
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
                    We're seeking a passionate and dynamic Radio Jockey to join our team at Echo 97. 
                    As our newest voice, you'll be responsible for creating engaging content that 
                    resonates with Singapore's young adults and working professionals.
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
                        <Badge variant="secondary" className="mt-1">Required</Badge>
                        <span>Diploma or relevant experience in mass communications, media, or performing arts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">Required</Badge>
                        <span>Excellent spoken English with strong stage presence and improvisation skills</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">Required</Badge>
                        <span>Tech-savvy and familiar with social platforms (Instagram, TikTok, etc.)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="secondary" className="mt-1">Required</Badge>
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
                        <Badge variant="outline" className="mt-1 border-electric-blue-300 text-electric-blue-600">Bonus</Badge>
                        <span>Bilingual abilities (English and other languages)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1 border-electric-blue-300 text-electric-blue-600">Bonus</Badge>
                        <span>Content creation or podcast experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-1 border-electric-blue-300 text-electric-blue-600">Bonus</Badge>
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
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Creative Autonomy</h4>
                    <p className="text-gray-600 text-sm">Freedom to develop your unique on-air personality with dedicated mentorship</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Growth Opportunities</h4>
                    <p className="text-gray-600 text-sm">Career advancement in media and digital production with industry connections</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg">
                    <div className="p-3 bg-electric-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-8 w-8 text-electric-blue-600" />
                    </div>
                    <h4 className="font-semibold text-navy-900 mb-2">Team Culture</h4>
                    <p className="text-gray-600 text-sm">Join a collaborative, fun-loving team that values diversity and innovation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Apply Section */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-navy-900 to-electric-blue-600 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Be Singapore's Next Voice?</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Join Echo 97 and help shape the sound of Singapore's radio landscape. 
                  We welcome applications from all qualified candidates regardless of background.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Mic className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                <p className="text-sm text-blue-200 mt-4">
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
