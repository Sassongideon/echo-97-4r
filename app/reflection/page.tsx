import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, User } from 'lucide-react'

export default function ReflectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 to-electric-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <BookOpen className="h-8 w-8" />
              </div>
              <span className="text-2xl font-bold tracking-wider">REFLECTION</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Reflection by Sasson Gideon
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ngee Ann Polytechnic, Class: TB07
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
                  <User className="h-6 w-6" />
                  Personal Reflection
                </CardTitle>
              </CardHeader>
              <CardContent className="p-12">
                <div className="space-y-6">
                  <div className="p-8 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">
                      Learning Journey Reflection
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      This section will contain a personal reflection (maximum 800 words) about 
                      the learning experience gained from this recruitment website assignment.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      The reflection will cover insights about web development, recruitment practices, 
                      TAFEP compliance, user experience design, and the overall process of creating 
                      a professional recruitment platform for a media company.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-electric-blue-500 pl-6">
                    <h4 className="font-semibold text-navy-900 mb-2">Assignment Details</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li><strong>Student:</strong> Sasson Gideon</li>
                      <li><strong>Institution:</strong> Ngee Ann Polytechnic</li>
                      <li><strong>Class:</strong> TB07</li>
                      <li><strong>Word Limit:</strong> Maximum 800 words</li>
                    </ul>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500 pt-6 border-t">
                    <p>Reflection content to be added by the student</p>
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
