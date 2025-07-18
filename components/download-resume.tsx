"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Resume data structure
const resumeData = {
  personalInfo: {
    name: "Muhammad Hammad",
    title: "Full-Stack Software Engineer",
    email: "mohammadhammad302@gmail.com",
    phone: "+92-309-8878186",
    location: "Lahore, Punjab, Pakistan",
    website: "", // Add your portfolio link if available
    linkedin: "https://www.linkedin.com/in/hammadjs/",
    github: "https://github.com/Hypercodding",
  },
  summary:
    "Results-driven Full-Stack Software Engineer with over 2 years of experience specializing in MERN Stack and Next.js development. Skilled in building scalable, high-performance web applications with modern frameworks, RESTful APIs, and cloud infrastructure. Proven ability to lead projects, write clean and maintainable code, and work efficiently in agile environments.",
  experience: [
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
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Virtual University",
      period: "",
      description: "",
    },
  ],
  skills: {
    frontend: ["React", "Next.js", "JavaScript", "TypeScript", "HTML/CSS"],
    styling: ["Tailwind CSS", "SCSS", "Framer Motion"],
    backend: ["Node.js", "Express", "NestJS", "FastAPI", "MongoDB", "PostgreSQL"],
    tools: [
      "Git",
      "Webpack",
      "Docker",
      "CI/CD",
      "AWS (EC2, S3, Amplify)",
      "Netlify",
      "Vercel",
      "Vite",
      "n8n",
      "MindStudio",
    ],
    design: ["Responsive Design", "UI/UX", "Figma"],
  },
  certifications: [
    "Javascript Essentials - Cisco (Credly)",
    "Introduction to CyberSecurity - Cisco (Credly)",
  ],
};


function generatePDFContent(): string {
  const {
    personalInfo,
    summary,
    experience,
    education,
    skills,
    certifications,
  } = resumeData;

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${personalInfo.name} - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; color: #333; }
        .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #6366f1; padding-bottom: 20px; }
        .name { font-size: 28px; font-weight: bold; margin-bottom: 5px; color: #6366f1; }
        .title { font-size: 18px; color: #666; margin-bottom: 10px; }
        .contact { font-size: 14px; }
        .section { margin-bottom: 25px; }
        .section-title { font-size: 20px; font-weight: bold; color: #6366f1; border-bottom: 1px solid #ddd; padding-bottom: 5px; margin-bottom: 15px; }
        .experience-item, .education-item { margin-bottom: 20px; }
        .job-title { font-weight: bold; font-size: 16px; }
        .company { color: #666; font-style: italic; }
        .period { color: #888; font-size: 14px; }
        .description { margin: 8px 0; }
        .technologies { margin-top: 8px; }
        .tech-tag { background: #f0f0f0; padding: 2px 6px; border-radius: 3px; font-size: 12px; margin-right: 5px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .skill-category { margin-bottom: 15px; }
        .skill-category-title { font-weight: bold; margin-bottom: 5px; color: #6366f1; }
        .skill-list { list-style: none; padding: 0; }
        .skill-list li { background: #f8f9fa; padding: 4px 8px; margin: 2px 0; border-radius: 3px; font-size: 14px; }
        ul { padding-left: 20px; }
        li { margin-bottom: 5px; }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">${personalInfo.name}</div>
        <div class="title">${personalInfo.title}</div>
        <div class="contact">
            ${personalInfo.email} | ${personalInfo.phone} | ${
    personalInfo.location
  }<br>
            ${personalInfo.website} | ${personalInfo.linkedin} | ${
    personalInfo.github
  }
        </div>
    </div>

    <div class="section">
        <div class="section-title">Professional Summary</div>
        <p>${summary}</p>
    </div>

    <div class="section">
        <div class="section-title">Work Experience</div>
        ${experience
          .map(
            (exp) => `
            <div class="experience-item">
                <div class="job-title">${exp.title}</div>
                <div class="company">${exp.company}</div>
                <div class="period">${exp.period}</div>
                <div class="description">${exp.description}</div>
                <div class="technologies">
                    ${exp.technologies
                      .map((tech) => `<span class="tech-tag">${tech}</span>`)
                      .join("")}
                </div>
            </div>
        `
          )
          .join("")}
    </div>

    <div class="section">
        <div class="section-title">Education</div>
        ${education
          .map(
            (edu) => `
            <div class="education-item">
                <div class="job-title">${edu.degree}</div>
                <div class="company">${edu.institution}</div>
                <div class="period">${edu.period}</div>
                <div class="description">${edu.description}</div>
            </div>
        `
          )
          .join("")}
    </div>

    <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-grid">
            <div class="skill-category">
                <div class="skill-category-title">Frontend Development</div>
                <ul class="skill-list">
                    ${skills.frontend
                      .map((skill) => `<li>${skill}</li>`)
                      .join("")}
                </ul>
            </div>
            <div class="skill-category">
                <div class="skill-category-title">Styling & Animation</div>
                <ul class="skill-list">
                    ${skills.styling
                      .map((skill) => `<li>${skill}</li>`)
                      .join("")}
                </ul>
            </div>
            <div class="skill-category">
                <div class="skill-category-title">Backend & APIs</div>
                <ul class="skill-list">
                    ${skills.backend
                      .map((skill) => `<li>${skill}</li>`)
                      .join("")}
                </ul>
            </div>
            <div class="skill-category">
                <div class="skill-category-title">Tools & Technologies</div>
                <ul class="skill-list">
                    ${skills.tools.map((skill) => `<li>${skill}</li>`).join("")}
                </ul>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section-title">Certifications</div>
        <ul>
            ${certifications.map((cert) => `<li>${cert}</li>`).join("")}
        </ul>
    </div>
</body>
</html>
  `.trim();
}

export default function DownloadResume() {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadResume = async () => {
    setIsGenerating(true);

    try {
      // Generate HTML content
      const htmlContent = generatePDFContent();

      // Create a blob with the HTML content
      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);

      // Create a temporary link and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = `${resumeData.personalInfo.name.replace(
        " ",
        "_"
      )}_Resume.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(url);

      toast("Resume Downloaded!", {
        description:
          "Your resume has been downloaded as an HTML file. You can open it in any browser and print it as PDF.",
      });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "There was an error downloading your resume. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        onClick={downloadResume}
        disabled={isGenerating}
        className="group relative overflow-hidden"
        size="lg"
      >
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Download className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Download Resume
            </>
          )}
        </motion.div>

        {/* Animated background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-20"
          initial={false}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  );
}
