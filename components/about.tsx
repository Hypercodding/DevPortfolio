"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src="/hammad.png"
                  alt="Muhammad Hammad"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-bold">Who am I?</h3>
                <p className="mb-4 text-muted-foreground">
                  I&apos;m a Full-Stack Software Engineer with over 2 years of
                  experience specializing in MERN Stack and Next.js development. I excel at
                  building scalable, high-performance web applications with modern frameworks,
                  RESTful APIs, and cloud infrastructure.
                </p>
                <p className="mb-4 text-muted-foreground">
                  My journey in software development began during my computer science
                  studies at Virtual University, where I discovered my passion for creating
                  intuitive user interfaces and seamless user experiences. I&apos;ve worked
                  with various companies including Tendexa and Netsol Technologies, bringing
                  digital visions to life through clean, maintainable code.
                </p>
                <p className="text-muted-foreground">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enhancing my skills through continuous learning and certifications.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Name</h4>
                    <p className="text-muted-foreground">Muhammad Hammad</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">
                      mohammadhammad302@gmail.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Lahore, Punjab, Pakistan
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Availability</h4>
                    <p className="text-muted-foreground">
                      Open to opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
