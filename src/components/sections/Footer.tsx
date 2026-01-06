"use client";

import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Built with <Heart size={16} className="text-red-500 fill-red-500" /> by Uday Kiran Kalli
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
