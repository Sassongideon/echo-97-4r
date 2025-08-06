import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Radio, Zap, Users, Headphones, Volume2 } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 via-blue-600 to-electric-blue-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Radio className="h-8 w-8" />
                </div>
                <span className="text-2xl font-bold tracking-wider">ECHO 97</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Welcome to Echo 97 –{" "}
                <span className="text-electric-blue-300">Where Your Voice Matters</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Join Singapore's most dynamic FM radio station where creativity meets culture, 
                and every voice has the power to inspire, entertain, and connect with thousands 
                of listeners across the island.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/recruitment-advertisement">
                  <Button size="lg" className="bg-electric-blue-500 hover:bg-electric-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                    <Zap className="mr-2 h-5 w-5" />
                    Explore Opportunities
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                  <Volume2 className="mr-2 h-5 w-5" />
                  Listen Live
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue-500/30 to-transparent rounded-2xl"></div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Echo 97 radio hosts in studio"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Animated Sound Waves */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <div className="flex items-end justify-center space-x-1 h-full pb-4">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-white/30 rounded-t-full animate-pulse"
                style={{
                  width: '4px',
                  height: `${Math.random() * 60 + 20}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1.5s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              Our Culture is <span className="text-electric-blue-500">Electric</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Echo 97, we believe that the best radio comes from authentic voices, 
              creative minds, and a team that's not afraid to push boundaries. We're more 
              than colleagues – we're a family of storytellers, music lovers, and culture creators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6 p-4 bg-electric-blue-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-electric-blue-500 group-hover:text-white transition-all duration-300">
                  <Zap className="h-10 w-10 text-electric-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Creative Freedom</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your ideas matter here. From show concepts to social content, 
                  we give you the creative space to innovate and express your unique voice.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6 p-4 bg-electric-blue-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-electric-blue-500 group-hover:text-white transition-all duration-300">
                  <Headphones className="h-10 w-10 text-electric-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Fast-Paced Media Culture</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every day brings new challenges, trending topics, and opportunities 
                  to connect with our audience in real-time. It's dynamic, it's exciting, it's us.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8 text-center">
                <div className="mb-6 p-4 bg-electric-blue-100 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-electric-blue-500 group-hover:text-white transition-all duration-300">
                  <Users className="h-10 w-10 text-electric-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">Real Impact Through Broadcast</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your voice reaches thousands daily. Whether it's breaking news, 
                  discovering new music, or sparking conversations – you make a difference.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">Ready to Join Our Frequency?</h3>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for bold voices, fresh perspectives, and the energy 
              that makes great radio happen.
            </p>
            <Link href="/recruitment-advertisement">
              <Button size="lg" className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                <Mic className="mr-2 h-5 w-5" />
                View Current Openings
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
