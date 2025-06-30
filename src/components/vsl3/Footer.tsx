'use client';

import { Brain, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0F] border-t border-[#6039FF]/10 py-12 px-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-black" style={{ fontWeight: 900 }}>Zephryx Labs</span>
            </div>
            <p className="text-sm text-[#F0F0FF]/60 font-medium">
              Military-grade AI systems for the creator economy.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-[#6039FF] mb-4" style={{ fontWeight: 800, letterSpacing: '0.1em' }}>LEGAL</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#F0F0FF]/60 hover:text-[#6039FF] transition-colors font-medium">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#F0F0FF]/60 hover:text-[#6039FF] transition-colors font-medium">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#F0F0FF]/60 hover:text-[#6039FF] transition-colors font-medium">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-black text-[#6039FF] mb-4" style={{ fontWeight: 800, letterSpacing: '0.1em' }}>SUPPORT</h4>
            <div className="space-y-2">
              <a href="mailto:support@zephryxlabs.com" className="flex items-center gap-2 text-sm text-[#F0F0FF]/60 hover:text-[#6039FF] transition-colors font-medium">
                <Mail className="w-4 h-4" />
                support@zephryxlabs.com
              </a>
              <div className="flex items-center gap-2 text-sm text-[#F0F0FF]/60">
                <Shield className="w-4 h-4 text-[#28FFB4]" />
                <span className="font-medium">SSL Secured & Encrypted</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#6039FF]/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#F0F0FF]/40 font-medium">
              © 2025 Zephryx Labs. All rights reserved.
            </p>
            <p className="text-xs text-[#F0F0FF]/40 font-medium">
              Made with <span className="text-[#6039FF]">🧠</span> by Zephryx Labs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 