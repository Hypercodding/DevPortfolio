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
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "MongoDB",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription:
      "This e-commerce platform provides a seamless shopping experience with features like product search, filtering, user accounts, wishlists, and secure payment processing. The admin dashboard allows for easy product and order management. Built with performance and SEO in mind, it achieves excellent Lighthouse scores.",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription:
      "This task management application helps teams organize their work with features like task assignment, due dates, priority levels, comments, and file attachments. It includes real-time updates using Firebase, drag-and-drop functionality, and customizable workspaces. The app is fully responsive and works offline with data synchronization when back online.",
  },
  {
    title: "Portfolio Website",
    description:
      "A creative portfolio website for a digital artist with 3D elements and smooth animations.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "Three.js",
      "GSAP",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription:
      "This portfolio website showcases a digital artist's work through an immersive experience with 3D elements and smooth animations. It features a custom-built gallery with filtering options, project detail pages, and contact form. The site is fully responsive and optimized for performance despite the rich visual elements.",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard with location-based forecasts, historical data, and interactive charts.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "React",
      "Chart.js",
      "OpenWeather API",
      "Tailwind CSS",
      "Geolocation API",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription:
      "This weather dashboard provides detailed weather information including current conditions, hourly and 7-day forecasts, precipitation maps, and historical data. It uses the browser's geolocation API to automatically detect the user's location and displays interactive charts for temperature, humidity, and wind speed trends. Users can save favorite locations and toggle between metric and imperial units.",
  },
  {
    title: "Fitness Tracker",
    description:
      "A comprehensive fitness tracking application with workout plans, progress charts, and social features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription:
      "This fitness tracking application helps users achieve their health goals by tracking workouts, nutrition, and progress. It includes features like custom workout creation, exercise library with video demonstrations, workout scheduling, progress photos, body measurements tracking, and social sharing. The app uses charts to visualize progress over time and provides personalized recommendations.",
  },
  {
    title: "Recipe Sharing Platform",
    description:
      "A community-driven recipe sharing platform with search, favorites, and user profiles.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Algolia",
      "Cloudinary",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    longDescription:
      "This recipe sharing platform allows users to discover, share, and save recipes from around the world. It features advanced search with filtering by ingredients, cuisine, dietary restrictions, and preparation time. Users can create profiles, follow other users, save favorite recipes, create collections, and leave ratings and reviews. The platform includes a meal planning tool and automatic ingredient scaling.",
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
