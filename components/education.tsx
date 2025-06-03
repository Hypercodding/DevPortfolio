"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const educationItems = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2014 - 2016",
    description:
      "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    period: "2010 - 2014",
    description:
      "Focused on Software Engineering and Web Development. Dean's List for all semesters.",
  },
];

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2022",
  },
  {
    name: "Professional Frontend Developer",
    issuer: "Meta",
    date: "2021",
  },
  {
    name: "UI/UX Design Fundamentals",
    issuer: "Google",
    date: "2020",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container">
        <SectionHeading
          title="Education & Certifications"
          subtitle="My academic background and professional certifications"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold">{item.degree}</h4>
                      <p className="mb-2 text-muted-foreground">
                        {item.institution}
                      </p>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {item.period}
                      </p>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold">{cert.name}</h4>
                      <p className="mb-2 text-muted-foreground">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Issued: {cert.date}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
