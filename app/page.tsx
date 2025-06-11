import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Justus Love</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Justus Love"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Hello, I'm <span className="text-blue-600">Justus Love</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Full-stack developer passionate about creating beautiful, functional web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View My Work
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-slate-600 mb-4">
                I'm a passionate full-stack developer with over 5 years of experience building web applications. I love
                turning complex problems into simple, beautiful designs.
              </p>
              <p className="text-slate-600 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or enjoying the great outdoors.
              </p>
              <div className="flex items-center gap-2 text-slate-600 mb-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="h-4 w-4" />
                <span>Available for new opportunities</span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-commerce Platform",
                description: "A full-stack e-commerce solution built with Next.js and Stripe integration.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Task Management App",
                description: "A collaborative task management application with real-time updates.",
                tech: ["React", "Node.js", "Socket.io", "MongoDB"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Weather Dashboard",
                description: "A beautiful weather dashboard with location-based forecasts.",
                tech: ["Vue.js", "Express", "Weather API", "Chart.js"],
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-100">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                    <Button size="sm">Live Demo</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">Let's Work Together</h3>
          <p className="text-slate-600 mb-8">
            I'm always interested in new opportunities and exciting projects. Let's connect and see how we can create
            something amazing together.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-4 w-4" />
              justus@example.com
            </Button>
            <Button size="lg" variant="outline">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-slate-600">
          <p>&copy; 2024 Justus Love. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
