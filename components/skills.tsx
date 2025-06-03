"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Layout,
  Database,
  Layers,
  Workflow,
  Lightbulb,
} from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    name: "UI/UX",
    icon: <Lightbulb className="h-6 w-6" />,
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    name: "Backend",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    name: "Tools",
    icon: <Workflow className="h-6 w-6" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Webpack", level: 75 },
      { name: "Jest", level: 80 },
      { name: "CI/CD", level: 70 },
    ],
  },
  {
    name: "3D & Animation",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      { name: "Three.js", level: 75 },
      { name: "GSAP", level: 80 },
      { name: "WebGL", level: 65 },
      { name: "Canvas", level: 70 },
    ],
  },
  {
    name: "Other",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "SEO", level: 75 },
      { name: "Performance Optimization", level: 85 },
      { name: "Accessibility", level: 80 },
      { name: "PWA", level: 70 },
    ],
  },
];

function AnimatedProgress({
  value,
  delay = 0,
}: {
  value: number;
  delay?: number;
}) {
  return (
    <motion.div
      className="h-2 w-full bg-secondary rounded-full overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <motion.div
        className="h-full bg-primary rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
      />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <SectionHeading title="Skills" subtitle="My technical expertise" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.1 }}
                      >
                        <div className="mb-1 flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <AnimatedProgress
                          value={skill.level}
                          delay={index * 0.1 + skillIndex * 0.1}
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
