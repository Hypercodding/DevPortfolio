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
                  width={20}
                  height={20}
                  src="/placeholder.svg?height=600&width=600"
                  alt="Ahmad Raza"
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
                  I&apos;m a passionate Frontend Developer with over 5 years of
                  experience creating beautiful, responsive, and user-friendly
                  web applications. I specialize in React, Next.js, and modern
                  frontend technologies.
                </p>
                <p className="mb-4 text-muted-foreground">
                  My journey in web development began during my computer science
                  studies, where I discovered my passion for creating intuitive
                  user interfaces and seamless user experiences. Since then,
                  I&apos;ve worked with various companies and clients to bring
                  their digital visions to life.
                </p>
                <p className="text-muted-foreground">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or
                  enjoying outdoor activities like hiking and photography.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Name</h4>
                    <p className="text-muted-foreground">Ahmad Raza</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">
                      ahmadraza600@gmail.com
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
