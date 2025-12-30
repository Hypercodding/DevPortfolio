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
                  I&apos;m a results-driven Frontend Engineer with over 3 years of
                  experience specializing in React.js, Next.js, and modern frontend ecosystems. 
                  I excel at developing scalable, high-performance, and visually engaging web 
                  applications with a strong emphasis on UI/UX design, performance optimization, 
                  and component-based architecture.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Experienced in integrating RESTful APIs, implementing AI-driven workflows 
                  using SLMs and LLMs, and automating processes with tools like n8n. Skilled 
                  in building AI-powered interfaces, leveraging modern libraries, and 
                  collaborating in agile environments to deliver innovative, data-driven, 
                  and intelligent user experiences.
                </p>
                <p className="text-muted-foreground">
                  I&apos;ve worked with companies including Rocket Job, Sygnls, 
                  APT Tech Studio, and Netsol Technologies, bringing digital visions 
                  to life through clean, maintainable code and cutting-edge technologies.
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
