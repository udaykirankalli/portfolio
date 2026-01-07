"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);


      alert("Message sent successfully! I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:kalliudaykiran@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      kalliudaykiran@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <MapPin size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Hyderabad, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg">
                    <Phone size={24} className="text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">Available on request</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Social Links */}
            <div className="p-8 bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/udaykirankalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-110 transition-all"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/udaykirankalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-110 transition-all"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a
                  href="mailto:kalliudaykiran@gmail.com"
                  className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 hover:scale-110 transition-all"
                >
                  <Mail size={24} className="text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all disabled:opacity-50"
              >
                <Send size={20} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
