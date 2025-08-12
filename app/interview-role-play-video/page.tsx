import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Play } from "lucide-react"

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Interview Role-Play Video</h1>
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
                  Interview Role-Play Video
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Embedded Video */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-navy-900 mb-6">Interview Role-Play Video</h3>
                    <div className="p-6 bg-blue-50 rounded-lg">
                      <p className="text-gray-700 mb-4">
                        Watch the interview role-play video to better understand our hiring process:
                      </p>
                      <a
                        href="https://ivid2.np.edu.sg/media/TB07_Sasson+Gideon+Saminathan_PCUL+IA2+Interview+Role-play+Video/1_va2aul43"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-electric-blue-500 hover:bg-electric-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Video className="h-5 w-5" />
                        Watch Interview Role-Play Video
                      </a>
                    </div>
                  </div>

                  <div className="text-center text-sm text-gray-500 pt-6 border-t">
                    <p>Video created by Sasson Gideon Saminathan (Class: TB07)</p>
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
