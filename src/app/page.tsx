"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Users, Lightbulb, Target } from "lucide-react";

export default function Home() {
  const softSkills = [
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Clear technical communication with stakeholders and team members"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Effective teamwork and knowledge sharing across diverse teams"
    },
    {
      icon: Lightbulb,
      title: "ERP/CRM Development",
      description: "Custom Python/Django ERP & CRM solutions with Oracle CX integration"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Creative solutions to complex enterprise challenges"
    }
  ];

  return (
    <div className="bg-black text-white relative">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

        <motion.div
          className="absolute w-16 h-16"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          style={{ top: "10%", left: "5%", transformOrigin: "center" }}
        >
          <Image src="/react.png" alt="React" fill className="object-contain drop-shadow-2xl opacity-30" />
        </motion.div>

        <motion.div
          className="absolute w-12 h-12"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{ top: "20%", left: "15%", transformOrigin: "center" }}
        >
          <Image src="/js.png" alt="JavaScript" fill className="object-contain drop-shadow-xl opacity-25" />
        </motion.div>


        <motion.div
          className="absolute w-14 h-14"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          style={{ top: "15%", right: "8%", transformOrigin: "center" }}
        >
          <Image src="/py.png" alt="Python" fill className="object-contain drop-shadow-2xl opacity-30" />
        </motion.div>

        <motion.div
          className="absolute w-10 h-10"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
          style={{ top: "25%", right: "18%", transformOrigin: "center" }}
        >
          <Image src="/react.png" alt="React" fill className="object-contain drop-shadow-xl opacity-20" />
        </motion.div>


        <motion.div
          className="absolute w-12 h-12"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 27, ease: "linear" }}
          style={{ top: "45%", left: "3%", transformOrigin: "center" }}
        >
          <Image src="/js.png" alt="JavaScript" fill className="object-contain drop-shadow-2xl opacity-25" />
        </motion.div>

        <motion.div
          className="absolute w-16 h-16"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          style={{ top: "55%", left: "12%", transformOrigin: "center" }}
        >
          <Image src="/py.png" alt="Python" fill className="object-contain drop-shadow-2xl opacity-30" />
        </motion.div>


        <motion.div
          className="absolute w-14 h-14"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 29, ease: "linear" }}
          style={{ top: "50%", right: "5%", transformOrigin: "center" }}
        >
          <Image src="/react.png" alt="React" fill className="object-contain drop-shadow-2xl opacity-28" />
        </motion.div>

        <motion.div
          className="absolute w-10 h-10"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 33, ease: "linear" }}
          style={{ top: "60%", right: "15%", transformOrigin: "center" }}
        >
          <Image src="/js.png" alt="JavaScript" fill className="object-contain drop-shadow-xl opacity-22" />
        </motion.div>


        <motion.div
          className="absolute w-14 h-14"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 31, ease: "linear" }}
          style={{ bottom: "15%", left: "8%", transformOrigin: "center" }}
        >
          <Image src="/py.png" alt="Python" fill className="object-contain drop-shadow-2xl opacity-30" />
        </motion.div>

        <motion.div
          className="absolute w-12 h-12"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          style={{ bottom: "25%", left: "18%", transformOrigin: "center" }}
        >
          <Image src="/react.png" alt="React" fill className="object-contain drop-shadow-xl opacity-25" />
        </motion.div>


        <motion.div
          className="absolute w-16 h-16"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 34, ease: "linear" }}
          style={{ bottom: "10%", right: "10%", transformOrigin: "center" }}
        >
          <Image src="/js.png" alt="JavaScript" fill className="object-contain drop-shadow-2xl opacity-30" />
        </motion.div>

        <motion.div
          className="absolute w-10 h-10"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          style={{ bottom: "20%", right: "20%", transformOrigin: "center" }}
        >
          <Image src="/py.png" alt="Python" fill className="object-contain drop-shadow-xl opacity-20" />
        </motion.div>


        <motion.div
          className="absolute w-8 h-8"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          style={{ top: "35%", left: "25%", transformOrigin: "center" }}
        >
          <Image src="/react.png" alt="React" fill className="object-contain drop-shadow-lg opacity-15" />
        </motion.div>

        <motion.div
          className="absolute w-8 h-8"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
          style={{ top: "40%", right: "30%", transformOrigin: "center" }}
        >
          <Image src="/js.png" alt="JavaScript" fill className="object-contain drop-shadow-lg opacity-18" />
        </motion.div>

        <motion.div
          className="absolute w-8 h-8"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
          style={{ bottom: "35%", left: "35%", transformOrigin: "center" }}
        >
          <Image src="/py.png" alt="Python" fill className="object-contain drop-shadow-lg opacity-15" />
        </motion.div>
      </div>


      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 overflow-hidden z-10">


        <motion.div
          className="flex-1 space-y-6 md:pr-10 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Bismi TN</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-xl sm:text-2xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Software Engineer specializing in <span className="text-purple-400 font-semibold">Python/Django ,ERP & CRM Solutions</span>, <span className="text-purple-400 font-semibold">Automation</span>, and <span className="text-purple-400 font-semibold">Full-Stack Development</span>
          </motion.p>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Expert in building  systems with Django, Oracle CX Cloud consultant, and modern web technologies. Passionate about automation, clean architecture, and delivering scalable enterprise solutions.
          </motion.p>

          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              href="/projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-purple-600 rounded-lg font-semibold hover:bg-purple-600/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>


        <motion.div
          className="flex-1 relative flex justify-center md:justify-end mt-16 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >


          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/profile.png"
              alt="Bismi TN"
              fill
              className="object-cover"
              priority
            />
          </div>

        </motion.div>
      </section>


      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Strong interpersonal skills that drive successful project outcomes and team collaboration
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
