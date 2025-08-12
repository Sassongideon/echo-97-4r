import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MessageSquare,
  Clock,
  User,
  Building,
  Mic,
  AlertTriangle,
  Users,
  TrendingUp,
  Lightbulb,
  Settings,
  Briefcase,
} from "lucide-react"

export default function InterviewQuestionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 to-electric-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <MessageSquare className="h-8 w-8" />
              </div>
              <span className="text-2xl font-bold tracking-wider">INTERVIEW PREP</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Interview Questions</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Prepare for your Echo 97 interview with our comprehensive question bank.
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
                  <Clock className="h-6 w-6" />
                  Coming Soon
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-navy-900 mb-4">Radio Jockey Interview Questions</h3>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                      These questions are designed to assess your communication skills, creativity, technical knowledge,
                      and cultural fit within our dynamic radio environment. Each question focuses on job-related
                      competencies and professional experience.
                    </p>

                    <div className="p-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg mb-8">
                      <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                        <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
                        Role-Play Questions
                      </h4>
                      <p className="text-yellow-700 text-sm">
                        Questions highlighted in yellow were used in the interview role-play video demonstration.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {/* Background & Experience */}
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-electric-blue-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-electric-blue-500" />
                        Background & Experience
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-yellow-400 bg-yellow-50">
                          <p className="font-medium mb-2">
                            1. Tell me about yourself and your background in broadcasting or media.
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: This open-ended question gives insight into the candidate's experience and
                            communication style. It helps evaluate how they present their qualifications and passion for
                            media work.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">2. What inspired you to pursue a role in radio presenting?</p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Assesses motivation and passion for the role, revealing long-term interest and
                            suitability for the industry.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            3. Have you had formal training or education in media, mass comms, or performing arts?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Verifies academic background and subject matter relevance.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Company & Industry Knowledge */}
                    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <Building className="h-5 w-5 text-green-500" />
                        Company & Industry Knowledge
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-yellow-400 bg-yellow-50">
                          <p className="font-medium mb-2">4. Why do you want to join our station, specifically?</p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Evaluates the candidate's research about the station, alignment with brand
                            values, and genuine interest in the role.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-yellow-400 bg-yellow-50">
                          <p className="font-medium mb-2">
                            5. How would you describe our station's tone and target audience?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Determines if the candidate understands and aligns with the station's brand
                            identity and demographics.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            6. What do you think is the future of traditional radio in a digital-first media world?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Tests industry awareness and critical thinking about emerging trends.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Broadcasting Skills */}
                    <div className="p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border-l-4 border-purple-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <Mic className="h-5 w-5 text-purple-500" />
                        Broadcasting Skills
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            7. What do you think makes a great radio show in today's media landscape?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Explores the candidate's understanding of audience engagement and evolving trends
                            in broadcasting.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-yellow-400 bg-yellow-50">
                          <p className="font-medium mb-2">
                            8. Walk me through how you would prepare for a one-hour live radio segment.
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Assesses planning, content curation, time management, and ability to handle live
                            programming.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-yellow-400 bg-yellow-50">
                          <p className="font-medium mb-2">
                            9. How would you make an ordinary topic like "bus delays" exciting for listeners aged 18–25?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Tests creativity and understanding of tone, relatability, and audience targeting.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            10. Have you ever led a segment or show on your own? What challenges did you face?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Evaluates leadership potential and past experience in handling broadcast
                            responsibilities solo.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Crisis Management & Adaptability */}
                    <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                        Crisis Management & Adaptability
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-yellow-400 bg-yellow-50">
                          <p className="font-medium mb-2">
                            11. Tell me about a time you had to adapt quickly during a live performance or presentation.
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Tests resilience, improvisational skills, and calmness under pressure — crucial
                            in broadcasting.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            12. If technical difficulties cut your audio mid-show, what would you do to maintain
                            professionalism?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Situational question assessing poise, crisis management, and on-the-spot
                            thinking.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-yellow-400 bg-yellow-50">
                          <p className="font-medium mb-2">
                            13. Imagine your guest cancels 5 minutes before going live. What would you do?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Evaluates quick-thinking, problem-solving, and professionalism under real-world
                            conditions.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            14. Can you describe how you would handle an inappropriate or offensive live caller?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Evaluates professionalism, diplomacy, and live crisis management.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Interpersonal Skills */}
                    <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border-l-4 border-teal-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-teal-500" />
                        Interpersonal Skills
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            15. Imagine your co-host keeps interrupting you live on air. How would you handle the
                            situation professionally?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Assesses conflict management and professionalism while maintaining broadcast
                            standards.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            16. Describe a time when you worked with a team to produce content. What was your role and
                            contribution?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Evaluates collaboration and communication in a team setting — common in
                            production roles.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            17. Tell me about a time you had to respond to negative feedback from a listener or
                            follower. What did you do?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Behavioural question to assess emotional maturity and audience engagement
                            strategy.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Professional Development */}
                    <div className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border-l-4 border-pink-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-pink-500" />
                        Professional Development
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            18. Describe a situation where you received constructive criticism. How did you apply it?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Evaluates receptiveness to feedback and willingness to grow — key traits in a
                            performance-based field.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            19. Tell me about a time you had to work under a tight deadline. How did you manage your
                            responsibilities?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Explores time management and ability to prioritize under pressure.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            20. How do you stay up to date with current events, music trends, or pop culture?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Assesses consistency in media research and cultural awareness — key to relevance
                            in radio.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Creativity & Content */}
                    <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-500" />
                        Creativity & Content
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            21. Describe a creative idea you contributed to a media project that received positive
                            feedback.
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Highlights creativity and innovation, showcasing their contribution to content
                            success.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            22. What's your approach to balancing entertainment and responsibility when discussing
                            sensitive topics on air?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Assesses content judgment and ethical awareness in broadcasting.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-yellow-400 bg-yellow-50">
                          <p className="font-medium mb-2">
                            23. What values do you think an RJ should represent on-air, especially to a diverse and
                            public audience?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Evaluates inclusivity, self-awareness, and social responsibility — key to a fair
                            and progressive media workplace.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Technical Skills */}
                    <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-indigo-500" />
                        Technical Skills
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            24. What editing tools or design platforms are you comfortable using (e.g. CapCut, Canva,
                            Photoshop)?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Verifies technical competency, which is valuable in a hybrid role involving
                            social media and promo materials.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            25. Have you managed multiple social media channels or campaigns before?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Checks digital fluency and multitasking across content platforms.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            26. Do you have prior experience working with music scheduling or selection tools?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Assesses technical familiarity with radio backend systems or playlists.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Role-Specific Questions */}
                    <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg border-l-4 border-gray-500">
                      <h4 className="text-lg font-semibold text-navy-900 mb-4 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-gray-500" />
                        Role-Specific Questions
                      </h4>
                      <div className="space-y-4 text-gray-700">
                        <div className="p-4 bg-white rounded-lg shadow-sm border-2 border-yellow-400 bg-yellow-50">
                          <p className="font-medium mb-2">
                            27. Are you comfortable appearing on camera or in videos for social media promotions?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Assesses confidence, adaptability to cross-platform branding, and multimedia
                            fluency.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            28. Do you have experience in contest or prize giveaway management, such as handling
                            logistics and winner outreach?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Verifies relevant functional skills aligned to the job scope provided.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            29. Are you available to work on weekends, holidays, or during peak campaigns?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Clarifies availability and scheduling flexibility — common expectations in
                            broadcasting.
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <p className="font-medium mb-2">
                            30. Why should we choose you as the next voice of our station?
                          </p>
                          <p className="text-sm text-gray-600 italic">
                            Rationale: Wrap-up question to assess self-confidence, preparation, and ability to pitch
                            oneself convincingly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12 p-6 bg-electric-blue-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-navy-900 mb-3">Interview Preparation Tips</h4>
                    <p className="text-gray-600 leading-relaxed">
                      These questions are designed to be fair, merit-based, and focused on job-related competencies.
                      Prepare specific examples from your experience and be ready to demonstrate your passion for radio
                      broadcasting and understanding of our station's culture.
                    </p>
                  </div>

                  <div className="text-center text-sm text-gray-500 pt-6 border-t">
                    <p>Questions compiled by Sasson Gideon Saminathan (Class: TB07)</p>
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
