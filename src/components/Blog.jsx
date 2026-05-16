import React from "react";
import { ExternalLink, Calendar } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Blog.css";

const blogPosts = [
  {
    title: "Hosting using Cloudflare pages",
    excerpt:
      "Hosting my portfolio website was an important step in turning my skills and projects into something visible and professional.",
    date: "May 08, 2026",
    image: "/cloudflare_banner.png",
    tags: ["Cloudflare Pages", "Github"],
    link: "https://medium.com/@mwendwajames2004/how-i-hosted-my-portfolio-website-for-free-using-github-and-cloudflare-pages-59a7c2770476",
  }
];

const Blog = () => {
  const scrollRef = useScrollAnimation();

  return (
    <section id="blog" className="section container">
      <h2 className="section-title fade-in" ref={scrollRef}>
        Latest <span>Articles</span>
      </h2>
      <div className="blog-grid fade-in">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="blog-card glass">
            <div className="blog-image-wrapper">
              <img src={post.image} alt={post.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <div className="blog-meta flex gap-2 items-center text-sm">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-tags">
                {post.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={post.link} 
                className="blog-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read Article <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
