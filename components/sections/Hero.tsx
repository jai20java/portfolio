"use client";

import { motion } from "framer-motion";
import { siteData } from "../../data/portfolio";
import { Button } from "../ui/Button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative lg:min-h-screen flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden starry-bg">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 py-2 sm:py-8 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          <div className="flex flex-col gap-5 sm:gap-6 -mt-2 sm:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark-glass w-max"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Available for Opportunities</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-tight break-words"
            >
              Hi, I&apos;m <span className="text-primary">{siteData.name}</span>
              <br />
              <span className="block">{siteData.role}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed"
            >
              {siteData.hero.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mt-4"
            >
              <Button variant="purple" size="lg" className="gap-2">
                View My Work <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 mt-6"
            >
              <a href={siteData.socials.github} className="text-white/60 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href={siteData.socials.linkedin} className="text-white/60 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={siteData.socials.email} className="text-white/60 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href={siteData.socials.twitter} className="text-white/60 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mt-2 sm:mt-0 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none mx-auto"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:w-[450px] lg:h-[450px] mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 shadow-2xl">
              <Image
                src="/images/jayashivesh-header-current.png"
                alt="Jayashivesh working at a laptop"
                fill
                priority
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 450px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/30 via-transparent to-transparent" />
            </div>

            {/* Code Snippet Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative mt-5 w-full dark-glass-card p-4 sm:p-5 rounded-xl shadow-2xl border border-white/10 lg:absolute lg:-bottom-12 lg:-left-12 lg:mt-0 lg:w-[380px] lg:p-6"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <pre className="text-[11px] sm:text-xs lg:text-sm font-mono text-green-400 overflow-hidden whitespace-pre-wrap">
                <code>
                  <span className="text-pink-400">class</span> <span className="text-blue-400">Developer</span>:<br/>
                  {"    "}<span className="text-pink-400">def</span> <span className="text-yellow-200">__init__</span>(self):<br/>
                  {"        "}self.name = <span className="text-yellow-300">&quot;Jayashivesh&quot;</span><br/>
                  {"        "}self.role = <span className="text-yellow-300">&quot;Full Stack Developer&quot;</span><br/>
                  {"        "}self.language = <span className="text-yellow-300">&quot;Python&quot;</span><br/>
                  {"        "}self.passion = <span className="text-yellow-300">&quot;Building solutions&quot;</span>
                </code>
              </pre>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
