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
  Bot,
  TestTube,
} from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: [
      { name: "React.js (v16–19)", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    name: "State Management",
    icon: <Lightbulb className="h-6 w-6" />,
    skills: [
      { name: "Redux", level: 88 },
      { name: "Jotai", level: 85 },
      { name: "React Query", level: 85 },
      { name: "Zustand", level: 82 },
    ],
  },
  {
    name: "Backend",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "NestJS", level: 78 },
      { name: "FastAPI", level: 80 },
    ],
  },
  {
    name: "Databases & ORMs",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Supabase", level: 82 },
      { name: "Prisma", level: 78 },
      { name: "TypeORM", level: 75 },
    ],
  },
  {
    name: "DevOps & Deployment",
    icon: <Workflow className="h-6 w-6" />,
    skills: [
      { name: "Docker", level: 78 },
      { name: "GitHub Actions", level: 82 },
      { name: "CI/CD", level: 80 },
      { name: "Netlify", level: 88 },
      { name: "Vercel", level: 90 },
      { name: "AWS (EC2, S3, Amplify)", level: 75 },
    ],
  },
  {
    name: "AI & Automation",
    icon: <Bot className="h-6 w-6" />,
    skills: [
      { name: "n8n", level: 85 },
      { name: "MindStudio", level: 80 },
      { name: "OpenAI APIs (LLMs/SLMs)", level: 82 },
      { name: "LangChain", level: 75 },
    ],
  },
  {
    name: "Testing",
    icon: <TestTube className="h-6 w-6" />,
    skills: [
      { name: "Jest", level: 80 },
      { name: "Cypress", level: 78 },
    ],
  },
  {
    name: "Practices & Tools",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Git", level: 90 },
      { name: "Vite", level: 85 },
      { name: "Webpack", level: 78 },
      { name: "Agile Methodologies", level: 88 },
      { name: "RESTful API Design", level: 90 },
      { name: "ESLint & Prettier", level: 85 },
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
