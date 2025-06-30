'use client';

import { useState } from 'react';
import { Lock, Shield, CheckCircle, ArrowRight, Mail, User, Phone } from 'lucide-react';

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-8 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1180px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Benefits */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6" style={{ fontWeight: 900 }}>
              Ready to Join the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6039FF] to-[#2726FF]"> AI Revolution?</span>
            </h2>
            
            <p className="text-xl text-[#F0F0FF]/70 mb-8 font-semibold">
              Get instant access to the same AI system that's generating 
              <span className="text-[#F9B233] font-black"> $50K-$200K/month</span> for 237+ creators.
            </p>
            
            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                'Complete AI system deployed in 60 seconds',
                'Personal onboarding call with AI specialist',
                '24/7 priority support for 90 days',
                '100% money-back guarantee',
                'Lifetime updates and improvements'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6039FF] to-[#2726FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#F0F0FF]/80 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-[#F0F0FF]/60">
                <Shield className="w-4 h-4 text-[#28FFB4]" />
                <span className="font-medium">Bank-level encryption</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#F0F0FF]/60">
                <Lock className="w-4 h-4 text-[#28FFB4]" />
                <span className="font-medium">100% secure checkout</span>
              </div>
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-2xl blur-3xl opacity-20" />
            
            {/* Form Container */}
            <div className="relative bg-[#1D1D27] border border-[#2726FF]/30 rounded-2xl p-8 md:p-10">
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2726FF]/10 via-transparent to-[#6039FF]/10" />
              </div>
              
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black mb-2" style={{ fontWeight: 900 }}>Claim Your Spot Now</h3>
                  <p className="text-[#F0F0FF]/60 font-medium">Only 3 spots remaining at this price</p>
                </div>
                
                {/* Name Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="w-5 h-5 text-[#6039FF]/50" />
                  </div>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-[#0A0A0F]/50 border border-[#6039FF]/20 rounded-lg focus:border-[#6039FF]/50 focus:outline-none focus:ring-2 focus:ring-[#6039FF]/20 transition-all duration-300 backdrop-blur-sm font-medium"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    required
                  />
                </div>
                
                {/* Email Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-[#6039FF]/50" />
                  </div>
                  <input
                    type="email"
                    placeholder="Your Best Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-[#0A0A0F]/50 border border-[#6039FF]/20 rounded-lg focus:border-[#6039FF]/50 focus:outline-none focus:ring-2 focus:ring-[#6039FF]/20 transition-all duration-300 backdrop-blur-sm font-medium"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    required
                  />
                </div>
                
                {/* Phone Input */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="w-5 h-5 text-[#6039FF]/50" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 bg-[#0A0A0F]/50 border border-[#6039FF]/20 rounded-lg focus:border-[#6039FF]/50 focus:outline-none focus:ring-2 focus:ring-[#6039FF]/20 transition-all duration-300 backdrop-blur-sm font-medium"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
                  <div className="relative bg-gradient-to-r from-[#6039FF] to-[#2726FF] text-white px-8 py-5 rounded-lg font-black text-lg hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-3" style={{ fontWeight: 900, letterSpacing: '0.05em' }}>
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        GET INSTANT ACCESS
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </div>
                </button>
                
                {/* Security Notice */}
                <div className="flex items-center justify-center gap-2 text-xs text-[#A4FFAF]">
                  <Lock className="w-3 h-3" />
                  <span className="font-medium">Your information is 100% secure and will never be shared</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 