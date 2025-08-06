import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Play } from 'lucide-react'

export default function InterviewRolePlayVideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 to-electric-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Video className="h-8 w-8" />
              </div>
              <span className="text-2xl font-bold tracking-wider">ROLE-PLAY</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Interview Role-Play Video
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Watch our interactive interview simulation to better understand our hiring process.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-electric-blue-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Play className="h-6 w-6" />
                  Video Content
                </CardTitle>
              </CardHeader>
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="p-6 bg-white rounded-full shadow-lg mx-auto w-24 h-24 flex items-center justify-center">
                        <Video className="h-12 w-12 text-electric-blue-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-700">
                        Video Placeholder
                      </h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        10-13 minute interview role-play video will be embedded here using ivid2
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">
                      Interactive Interview Experience
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      This video will showcase a realistic interview scenario for the Radio Jockey position, 
                      demonstrating the types of questions asked, expected responses, and the overall 
                      interview atmosphere at Echo 97. It will help candidates understand our company 
                      culture and prepare effectively for their actual interview.
                    </p>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    <p>Video content will be added by Sasson Gideon (Ngee Ann Poly, Class: TB07)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
