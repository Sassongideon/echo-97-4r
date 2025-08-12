import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, User } from "lucide-react"

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Reflection by Sasson Gideon Saminathan</h1>
            <p className="text-xl text-blue-100 leading-relaxed">Class: TB07 | Student ID: S10269074D</p>
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
                <div className="space-y-8">
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold text-navy-900 mb-6">Learning Journey Reflection</h3>

                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <div>
                        <h4 className="text-xl font-semibold text-navy-900 mb-3">Learning</h4>
                        <p className="mb-4">
                          Through this assignment, I developed a much deeper understanding of how to design and conduct
                          structured interviews that are both fair and effective. One of the most significant skills I
                          gained was learning how to curate interview questions that balance both behavioural and
                          situational approaches, as taught in Unit 3 of Talent Acquisition. I learned that behavioural
                          questions uncover how a candidate has handled real situations in the past, for example, "Tell
                          me about a time you had to adapt quickly during a live performance or presentation." These
                          questions are valuable because they assess proven competencies based on tangible past
                          behaviours. Situational questions, on the other hand, present hypothetical challenges a
                          candidate may face in the role, for example, "Imagine your guest cancels five minutes before
                          going live. What would you do?" These reveal a candidate's problem-solving style,
                          adaptability, and ability to think under pressure. By incorporating both, I ensured that my
                          interview with Sheena Grace for Echo 97 explored not only her track record but also her
                          readiness for unexpected challenges, resulting in a more well-rounded evaluation.
                        </p>

                        <p className="mb-4">
                          I also applied insights from Unit 2 of Talent Attraction, particularly the importance of
                          fairness and professionalism guided by TAFEP standards. These guidelines emphasise keeping
                          questions strictly job-related, avoiding discriminatory or overly personal topics, and
                          evaluating candidates purely on qualifications, skills, knowledge, and experience. The
                          "www.tal.sg/tafep/employment-practices/recruitment/writing-job-advertisements", resources were
                          especially valuable, as they gave concrete examples of acceptable versus unacceptable
                          questions, allowing me to filter out anything that might unintentionally introduce bias. This
                          helped me ensure the interview was compliant with best practices and reflected respect for the
                          candidate.
                        </p>

                        <p>
                          Another important learning point was the value of flow and structure in interviews. Starting
                          with rapport-building questions created a comfortable atmosphere for the candidate. Gradually
                          transitioning into skill-based and situational inquiries allowed me to uncover specific
                          competencies without overwhelming the candidate. Finally, ending with a reflective self-pitch
                          question, such as "Why should we hire you?", encouraged the candidate to summarise their
                          strengths in their own words. This progression not only made the interview more natural but
                          also ensured that I gathered both qualitative and quantitative insights to support hiring
                          decisions.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-navy-900 mb-3">Application</h4>
                        <p className="mb-4">
                          This knowledge will be directly applicable to my future leadership responsibilities,
                          particularly as Director of TEDxYouth@NP for AY2025/2026. In this role, I will be responsible
                          for recruiting the next organising team, and I now have the tools to conduct more structured,
                          insightful, and fair interviews. In previous recruitment cycles, I relied on unstructured
                          conversations and instinct to make decisions. While this approach worked to some extent, it
                          lacked consistency and made it harder to compare candidates objectively. Moving forward, I
                          will design a framework that blends situational and behavioural questions to assess both
                          capability and cultural fit.
                        </p>

                        <p className="mb-4">
                          For instance, I can introduce situational questions like, "What if a speaker became extremely
                          nervous right before going on stage? How would you help them regain confidence?" or "Imagine
                          one of the event sponsors requests last-minute changes to the program. How would you respond?"
                          These scenarios will test the candidate's crisis management skills and ability to handle
                          pressure. At the same time, I can balance these with behavioural questions such as, "Tell me
                          about a time you had to work with a difficult teammate. How did you manage the relationship?"
                          to assess their resilience.
                        </p>

                        <p>
                          I will also strictly follow fair interview guidelines to ensure every candidate has an equal
                          opportunity to present their strengths. This means adhering to pre-defined selection criteria,
                          avoiding irrelevant personal questions, and maintaining a professional yet approachable
                          demeanour throughout. Beyond TEDx, these skills will also benefit me in any future role that
                          involves recruitment, such as HR, event leadership, or media production. The ability to
                          conduct structured interviews is not only a practical skill but also a reflection of strong
                          leadership, as it signals both professionalism and respect for the candidate's time and
                          effort.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-navy-900 mb-3">Improvement</h4>
                        <p>
                          One key area I could improve is anticipating and preparing for candidate questions. At the end
                          of the interview, Sheena asked, "What's the culture like at Echo 97?" I gave a brief answer
                          but realised I could have offered a more engaging response. This reminded me that interviewers
                          act as ambassadors for the organisation, and well-prepared answers can shape a candidate's
                          perception and interest in the role.
                        </p>

                        <p>
                          In future, I will prepare clear, authentic responses to common questions like "What's the
                          career growth path here?" or "How do teams collaborate?" These answers will not only address
                          the question but also highlight Echo 97's collaborative spirit, creative freedom, and
                          supportive mentorship, illustrated with short stories, such as a team member pitching a unique
                          segment and receiving full backing to execute it. This approach ensures the interview feels
                          like a genuine two-way exchange, leaving candidates with a strong impression of the
                          organisation, even if they are not selected.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-electric-blue-500 pl-6 bg-blue-50 p-6 rounded-r-lg">
                    <h4 className="font-semibold text-navy-900 mb-2">Assignment Details</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>
                        <strong>Student:</strong> Sasson Gideon Saminathan
                      </li>
                      <li>
                        <strong>Student ID:</strong> S10269074D
                      </li>
                      <li>
                        <strong>Class:</strong> TB07
                      </li>
                      <li>
                        <strong>Word Count:</strong> 800 words
                      </li>
                    </ul>
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
