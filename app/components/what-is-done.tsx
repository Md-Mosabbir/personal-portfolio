"use client"

import { Code2, Database, Rocket, Cloud } from "lucide-react"
import { motion } from "motion/react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building fast and scalable modern web applications.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description:
      "Designing APIs and backend services using Node.js and database architecture.",
  },
  {
    icon: Rocket,
    title: "Startup Product Development",
    description:
      "Helping startups turn ideas into working digital platforms.",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    description:
      "Deploying and scaling applications using cloud platforms such as Microsoft Azure and Cloudflare.",
  },
]

export default function WhatIDo() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-4"
        >
          What I Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-center text-gray-600 mb-16"
        >
          A mix of <span className="text-brand font-medium">engineering</span>,{" "}
          <span className="text-brand font-medium">architecture</span>, and{" "}
          <span className="text-brand font-medium">deployment</span>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6">
                <service.icon size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
