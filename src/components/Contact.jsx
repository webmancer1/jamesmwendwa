import React, { useState, useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const scrollRef = useScrollAnimation();
  const form = useRef();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace these with your actual EmailJS IDs or use the .env variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_5fpcsaz";
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_z2gsdou";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "VHmL-Zq8fY2XremgZ";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 5000);
        }
      );
  };

  return (
    <section id="contact" className="section container">
      <h2 className="section-title fade-in" ref={scrollRef}>
        Get In <span>Touch</span>
      </h2>
      <div className="contact-content grid fade-in">
        <div className="contact-info">
          <h3 className="contact-subtitle">Let's connect</h3>
          <p className="text-muted mb-6">
            Whether you have a question, a project idea, or just want to say hi,
            I'll try my best to get back to you!
          </p>
          <div className="contact-methods flex flex-col gap-4">
            <a
              href="mailto:mwendwajames2004@gmail.com"
              className="contact-method flex items-center gap-4 glass"
            >
              <div className="icon-box flex items-center justify-center">
                <Mail size={20} />
              </div>
              <span className="font-semibold">mwendwajames2004@gmail.com</span>
            </a>
            <div className="social-links flex gap-4 mt-4">
              <a
                href="https://github.com/webmancer1"
                className="social-link glass flex items-center justify-center"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/james-m-wambua-05b995264/"
                className="social-link glass flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://x.com/J_Mwendwa1"
                className="social-link glass flex items-center justify-center"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <form
          ref={form}
          className="contact-form glass flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              rows="5"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary mt-4"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>Send Message <Send size={18} /></>
            )}
          </button>
          
          {status === "success" && (
            <p style={{ color: "#10b981", textAlign: "center", marginTop: "0.5rem" }}>
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#ef4444", textAlign: "center", marginTop: "0.5rem" }}>
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
