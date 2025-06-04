import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

// Dynamically import the 3D background with no SSR
const AnimatedBackground = dynamic(
  () => import("@/components/animated-background")
);

export const metadata: Metadata = {
  title: " Muhammad Hammad | Frontend Developer & UI/UX Specialist",
  description:
    "Portfolio and resume of Muhammad Hammad, Frontend Developer specializing in React, Next.js, Three.js, and interactive web experiences. Download resume and view projects.",
  keywords:
    "frontend developer, react developer, nextjs, typescript, ui/ux, portfolio, resume download",
  openGraph: {
    title: "Muhammad Hammad | Frontend Developer & UI/UX Specialist",
    description:
      "Portfolio and resume of Muhammad Hammad, Frontend Developer specializing in React, Next.js, Three.js, and interactive web experiences. Download resume and view projects.",
    url: "https://ahmadraza.dev",
    siteName: "Muhammad Hammad Portfolio",
    images: [
      {
        url: "/hammad.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Hammad Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hammad | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and interactive web experiences",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <AnimatedBackground />
      <Navigation />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
