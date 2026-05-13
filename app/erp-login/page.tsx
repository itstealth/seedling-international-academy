"use client";

import { motion } from "framer-motion";
import { Key, ExternalLink } from "lucide-react";

const erpSchools = [
  {
    name: "Seedling International Academy",
    link: "https://studybase.in/login?q=SeedlingInternationalAcademy-JawaharNagar"
  },
  {
    name: "Seedling Modern High School",
    link: "https://studybase.in/login?q=SeedlingModernHighSchoolDurgapuraJaipur"
  },
  {
    name: "Seedling Modern International Academy",
    link: "https://studybase.in/login?q=SeedlingModernInternationalAcademy-Durgapura"
  },
  {
    name: "Seedling Public School",
    link: "https://studybase.in/login?q=SeedlingPublicSchool-JawaharNagar"
  }
];

export default function ErpLoginPage() {
  return (
    <div className="bg-off-white">
      {/* Hero Banner */}
      <section className="relative h-[55vh] min-h-120 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/Home/MainCampus.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-deeper/90 via-navy-deeper/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-deeper/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-white font-light text-4xl md:text-5xl leading-[1.05] mb-4 inline-block">
              ERP <em className="font-semibold text-crimson">Login</em>
            </h1>
            <p className="text-white/60 text-lg font-dm font-light mt-4">Access your school portal</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-neutral-600 leading-relaxed text-lg font-dm max-w-2xl mx-auto">
              Select your institution below to access the ERP portal. You will be redirected to the StudyBase login page.
            </p>
          </motion.div>

          {/* ERP Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {erpSchools.map((school, index) => (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-navy/10 hover:shadow-2xl hover:shadow-navy/10 hover:-translate-y-2 transition-all duration-500 h-full">
                  {/* Card Header with Icon */}
                  <div className="bg-linear-to-r from-navy to-navy-dark p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Key className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 text-center">
                    <h3 className="font-playfair text-lg font-bold text-navy mb-4 leading-tight">
                      {school.name}
                    </h3>
                    <a
                      href={school.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 w-full group-hover:shadow-lg group-hover:shadow-navy/20"
                    >
                      Click Here
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-md border border-navy/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center flex-shrink-0">
                <Key className="w-5 h-5 text-crimson" />
              </div>
              <div>
                <h4 className="font-playfair text-lg font-bold text-navy mb-2">Portal Credentials</h4>
                <p className="text-neutral-600 leading-relaxed font-dm">
                  Use your assigned username and password provided by the school administration to log in. For any login issues, please contact your school&apos;s IT department or administrative office.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}