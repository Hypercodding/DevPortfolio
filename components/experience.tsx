"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Mid-Level Full Stack Software Engineer",
    company: "APT Tech Studio",
    period: "2024 - Present",
    description:
      "Built and maintained scalable web applications using React.js, Node.js, Express.js, and FastAPI. Designed RESTful APIs and implemented database schemas in PostgreSQL and MongoDB. Contributed to CI/CD automation and cross-functional agile teams.",
    technologies: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "NodeJS",
      "NestJS",
      "ExpressJS",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "AWS",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Intern",
    company: "Netsol Technologies",
    period: "2024",
    description:
      "Worked in an Agile environment with professional developers, using Git, Jira, and Trello. Gained hands-on experience with collaborative software engineering practices.",
    technologies: ["Git", "Agile", "Jira", "Trello"],
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
