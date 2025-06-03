"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

// Resume data structure
const resumeData = {
  personalInfo: {
    name: "Ahmad Raza",
    title: "Frontend Developer",
    email: "ahmadraza600@gmail.com",
    phone: "+92 (307) 472-2794",
    location: "Lahore, Punjab, Pakistan",
    website: "https://ahmadraza.dev",
    linkedin: "https://www.linkedin.com/in/ahmad-raza-0b134b149",
    github: "https://github.com/Mr-Excel",
  },
  summary:
    "Passionate Frontend Developer with over 5 years of experience creating beautiful, responsive, and user-friendly web applications. Specialized in React, Next.js, and modern frontend technologies with a strong focus on user experience and performance optimization.",
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in creating responsive web applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "GraphQL",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple client websites and web applications. Collaborated with designers to implement pixel-perfect UI components and animations.",
      technologies: ["React", "JavaScript", "SCSS", "Redux", "REST APIs"],
    },
    {
      title: "UI Developer",
      company: "Creative Web Agency",
      period: "2016 - 2018",
      description:
        "Created responsive websites for various clients. Worked closely with the design team to ensure high-quality implementation of UI/UX designs.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    },
  ],
  education: [
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
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "HTML/CSS", "JavaScript"],
    styling: ["Tailwind CSS", "SCSS", "Styled Components", "Framer Motion"],
    backend: ["Node.js", "Express", "MongoDB", "REST APIs"],
    tools: ["Git", "Webpack", "Jest", "CI/CD", "Docker"],
    design: ["Figma", "Adobe XD", "Responsive Design", "UI/UX"],
  },
  certifications: [
    "AWS Certified Developer - Amazon Web Services (2022)",
    "Professional Frontend Developer - Meta (2021)",
    "UI/UX Design Fundamentals - Google (2020)",
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
