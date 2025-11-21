"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-4 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Copyright */}
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Bismi TN</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center space-x-5">
          <Link
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-purple-500 transition-colors"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-purple-500 transition-colors"
          >
            <Github size={18} />
          </Link>
          <Link
            href="mailto:bismitn@gmail.com"
            aria-label="Email"
            className="hover:text-purple-500 transition-colors"
          >
            <Mail size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
