"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "AI Engineer",
    company: "Rocket Job (U.S.A Remote)",
    period: "2025 - Present",
    description:
      "Developed advanced automation workflows using FastAPI, integrating AI-assisted processes with LLMs/SLMs, reducing manual data processing time by 50%. Built a resume builder application using TypeScript, focusing on clean architecture, interactivity, and seamless user experience. Automated operational pipelines via n8n, improving scalability and reducing repetitive workload across multiple workflows.",
    technologies: [
      "FastAPI",
      "TypeScript",
      "LLMs",
      "SLMs",
      "n8n",
      "OpenAI APIs",
      "LangChain",
      "MindStudio",
      "Python",
    ],
  },
  {
    title: "Software Engineer",
    company: "Sygnls",
    period: "2025 - Present",
    description:
      "Developed the Mayo Clinic web app from the ground up using React, Next.js, and TypeScript, delivering a highly responsive and accessible UI that improved user engagement by 30%. Architected and implemented role-based access control (RBAC) with JWT and Clerk, enhancing data security and reducing authentication errors by 40%. Integrated AI-driven features leveraging SLMs and LLMs, automating workflows through n8n, which improved data efficiency by 35%. Optimized CI/CD pipelines using Docker and GitHub Actions, cutting deployment time by 40%.",
    technologies: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "JWT",
      "Clerk",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "n8n",
      "LLMs",
      "SLMs",
    ],
  },
  {
    title: "Mid-Level Full Stack Software Engineer",
    company: "APT Tech Studio",
    period: "2024 - 2025",
    description:
      "Developed ReactJS boilerplates for rapid MERN Stack project initialization, reducing setup time by 30%. Built KPI Automation System using NextJS (frontend) and NestJS/NodeJS (backend) with MongoDB, enabling real-time performance tracking. Contributed to BelvaAI, an international project, using ReactJS and NodeJS with MongoDB, implementing CI/CD pipelines and strict TypeScript/ESLint checks for enhanced code quality. Designed and deployed high-performance REST APIs using ExpressJS and MongoDB.",
    technologies: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "NodeJS",
      "NestJS",
      "ExpressJS",
      "MongoDB",
      "CI/CD",
      "ESLint",
    ],
  },
  {
    title: "Intern",
    company: "Netsol Technologies",
    period: "2023",
    description:
      "Built and maintained scalable web applications using React.js, Node.js, Express.js, and FastAPI, ensuring seamless frontend-backend integration. Designed and consumed RESTful APIs, optimizing backend performance and secure data flow between services. Gained experience in both relational (PostgreSQL) and non-relational (MongoDB) databases, focusing on schema design and efficient querying.",
    technologies: [
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-border md:left-1/2 md:-ml-0.5" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`md:flex  ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-5 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-ml-2" />

                {/* Date for mobile */}
                <div className="mb-4 ml-6 block md:hidden">
                  <Badge variant="outline" className="text-sm font-normal">
                    {experience.period}
                  </Badge>
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 p-3 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">
                          {experience.title}
                        </h3>
                      </div>
                      <p className="mb-4 text-muted-foreground">
                        {experience.company}
                      </p>

                      {/* Date for desktop */}
                      <div className="mb-4 hidden md:block">
                        <Badge
                          variant="outline"
                          className="text-sm font-normal"
                        >
                          {experience.period}
                        </Badge>
                      </div>

                      <p className="mb-4 text-muted-foreground">
                        {experience.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
