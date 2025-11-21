"use client";

import { GraduationCap, Briefcase, Award, Code } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const education = [
    {
      degree: "MCA",
      institute: "APJ Abdul Kalam Technological University",
      year: "2020-2022",
      cgpa: "8.42",
      image: "/Cet_emblem.jpg",
      subjects: [
        "Advanced Database Systems",
        "Software Engineering & Project Management",
        "Cloud Computing & CRM Systems",
        "Data Structures & Algorithms",
        "Web Development with Python & Django",
        "Mobile & Cloud Application Development"
      ]
    },
    {
      degree: "BSc Computer Science",
      institute: "Farook College, Calicut University",
      year: "2017-2020",
      image: "/farook-logo.png",
      subjects: [
        "Programming in C & Java",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Web Development Basics",
        "Software Engineering Principles"
      ]
    },
  ];

  const workExperience = [
    {
      role: "Software Engineer",
      company: "Speridian Technologies",
      duration: "2022-2024",
      description: "Customized SaaS CRM solutions, Oracle Digital Assistant, requirement analysis, documentation, and training new hires.",
      image: "/speridian.png",
    },
    {
      role: "Full Stack Developer Intern",
      company: "Luminar Technolab",
      duration: "Internship",
      description: "Full-stack development: Python, Django, React.js, MySQL; REST APIs with JWT and payment integration.",
      image: "/luminar.jpg",
    },
  ];

  const certifications = [
    { name: "Agile Requirements Foundations", issuer: "LinkedIn", date: "Nov 2025", skills: "Agile Methodologies" },
    { name: "Business Benefits Realization Foundations", issuer: "LinkedIn", date: "Nov 2025", skills: "Benefits Realisation" },
    { name: "Business Development Foundations: Market Research", issuer: "LinkedIn", date: "Nov 2025", skills: "Business Development, Market Research" },
    { name: "Career Essentials in System Administration", issuer: "Microsoft & LinkedIn", date: "Nov 2025", skills: "Network Administration, System Administration" },
    { name: "Lean Six Sigma White Belt", issuer: "Council of Six Sigma", date: "Nov 2025", skills: "Workflow Management, Operational Efficiency" },
    { name: "Marketing Foundations", issuer: "LinkedIn", date: "Nov 2025", skills: "Marketing" },
    { name: "Requirements Elicitation for Business Analysis", issuer: "LinkedIn", date: "Nov 2025", skills: "Stakeholder Engagement" },
    { name: "Technical SEO", issuer: "LinkedIn", date: "Nov 2025", skills: "Search Engine Optimization" },
    { name: "Microsoft 365 Certified: Fundamentals", issuer: "Microsoft", date: "Oct 2025", skills: "Microsoft 365" },
    { name: "Web Development Using Python", issuer: "NCTT", date: "Jun 2025", skills: "HTML, Django, React.js, Python" },
    { name: "UGC NET - Computer Science and Application", issuer: "National Testing Agency", date: "Feb 2025", skills: "Computer Science" },
    { name: "Introduction to Figma", issuer: "Simplilearn", date: "Aug 2024", skills: "UI/UX Design" },
    { name: "Business Analysis Fundamentals - ECBA CCBA CBAP", issuer: "Udemy", date: "Jul 2024", skills: "Business Analysis, Requirements Analysis" },
    { name: "Oracle Cloud Infrastructure 2023 Digital Assistant Professional", issuer: "Oracle", date: "Aug 2023", skills: "Chatbot Development" },
    { name: "Learn Python by Designing a Website", issuer: "ICT Academy of Kerala", date: "Dec 2020", skills: "Flask, MySQL, Python" },
  ];

  const technicalSkills = [
    { category: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "C"], level: 90 },
    { category: "Frontend", skills: ["React.js", "Next.js", "HTML/CSS", "Tailwind CSS"], level: 85 },
    { category: "Backend", skills: ["Django", "Node.js", "REST APIs", "GraphQL"], level: 85 },
    { category: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB", "Sanity CMS"], level: 80 },
    { category: "Cloud & Tools", skills: ["Oracle Cloud", "Git", "Docker", "n8n Automation"], level: 75 },
    { category: "CRM", skills: ["Oracle CX", "Salesforce", "Custom CRM Solutions"], level: 90 },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto space-y-28">

        {/* Technical Skills */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <Code size={26} className="text-purple-500" /> Technical Skills
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500 transition-all duration-300 border border-gray-800 hover:border-purple-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.skills.map((s, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                  />
                </div>
                <p className="text-gray-400 text-sm mt-2 text-right">{skill.level}% Proficiency</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <GraduationCap size={26} className="text-purple-500" /> Education
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500 transition-all duration-300 flex flex-col items-center text-center border border-gray-800 hover:border-purple-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-purple-500">
                  <Image src={edu.image} alt={edu.degree} width={96} height={96} className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-gray-400 mt-1">{edu.institute}</p>
                <p className="text-gray-500">{edu.year} {edu.cgpa ? `| CGPA: ${edu.cgpa}` : ""}</p>

                <ul className="text-gray-300 text-left mt-4 space-y-1 list-disc list-inside">
                  {edu.subjects.map((sub, subIdx) => (
                    <li key={subIdx} className="text-sm">{sub}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <Briefcase size={26} className="text-purple-500" /> Work Experience
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
          <div className="space-y-6">
            {workExperience.map((work, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500 transition-all duration-300 flex md:flex-row flex-col items-center gap-6 border border-gray-800 hover:border-purple-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: idx * 0.3 }}
              >
                <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg border-2 border-purple-500">
                  <Image src={work.image} alt={work.role} width={150} height={150} className="object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-white">{work.role}</h3>
                  <p className="text-purple-400 mt-1">{work.company} | {work.duration}</p>
                  <p className="text-gray-300 mt-2">{work.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <Award size={26} className="text-purple-500" /> Certifications
          </h2>
          <div className="h-1 w-20 bg-purple-500 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{cert.name}</h3>
                    <p className="text-purple-400 text-sm mb-2">{cert.issuer} • {cert.date}</p>
                    <p className="text-gray-400 text-xs">{cert.skills}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
