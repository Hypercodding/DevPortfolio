"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  longDescription: string;
}

const projects: Project[] = [
  {
    title: "Belva AI",
    description:
      "An AI-powered international platform developed with a strong focus on code quality, scalability, and performance.",
    image: "/BelvaAI.png?height=400&width=600",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "ESLint",
      "CI/CD",
    ],
    liveUrl: "https://www.belva.ai/", // Replace with the actual live URL if available
    githubUrl: "", // Replace with specific repo URL if public
    longDescription:
      "Belva AI is a scalable international AI platform built using React.js and Node.js with MongoDB. Emphasized high code standards using strict TypeScript typing and ESLint rules. Implemented CI/CD pipelines for efficient development workflows and enhanced production readiness. Delivered a robust, maintainable codebase optimized for collaboration and performance.",
  },
  {
    title: "Dazhboards",
    description:
      "An AI-powered Business Intelligence and Sustainability Software designed for the tours and activities industry, providing insights and recommendations to track progress towards financial and environmental sustainability.",
    image: "/dazhboards.png?height=400&width=600",
    technologies: [
      "React",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
      "AI/ML Integration"
    ],
    liveUrl: "https://dazhboards.com/",
    githubUrl: "",
    longDescription:
      "Dazhboards is an AI-powered Business Intelligence and Sustainability Software tailored for the tours and activities sector. It offers features such as reseller contract management, product profitability insights, and dynamic pricing tools. By leveraging AI, Dazhboards provides actionable insights to optimize reseller relationships, enhance product offerings, and drive profitability, all while ensuring alignment with sustainability goals. "
  },
  {
    title: "Payam e Haq",
    description:
      "An Islamic platform delivering spiritual lectures, health insights, and educational content.",
    image: "/payam-e-haq.png?height=400&width=600",
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
      "Redux",
    ],
    liveUrl: "https://payamehaq.com/",
    githubUrl: "", // Replace with actual repo if available
    longDescription:
      "Payam e Haq is a responsive web platform focused on sharing Islamic teachings, health awareness, and spiritual content through recorded and live lectures by Irfan-ul-Haq. Built with React and Firebase, it features dynamic content updates, clean UI design, and performance-optimized architecture. The site supports video streaming, audio playback, and educational blog posts, aiming to promote spiritual and physical well-being.",
  },
  
  {
    title: "Tendexa HRMS",
    description:
      "An AI-driven Human Resource Management System designed to streamline employee data, attendance, payroll, and performance tracking with advanced automation features.",
    image: "/tendexa.png?height=400&width=600",
    technologies: [
      "React",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
      "AI/ML Integration"
    ],
    liveUrl: "https://tendexa.com",
    githubUrl: "",
    longDescription:
      "Tendexa HRMS is a comprehensive Human Resource Management System that leverages AI to automate routine HR tasks such as attendance monitoring, payroll processing, and employee performance evaluation. The system features a user-friendly dashboard for HR managers to track employee data, generate reports, and manage workflows efficiently. Integration with AI modules allows predictive analytics for workforce planning and personalized employee engagement. Developed with modern technologies like React for the frontend, FastAPI and Node.js for backend services, and PostgreSQL for data management, Tendexa HRMS aims to improve organizational productivity through smart automation."
  },
  
  
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <SectionHeading title="Projects" subtitle="Some of my recent work" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    width={600}
                    height={400}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => setSelectedProject(project)}
                    >
                      Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="aspect-video w-full overflow-hidden rounded-md">
                <Image
                  width={600}
                  height={400}
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {selectedProject.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
