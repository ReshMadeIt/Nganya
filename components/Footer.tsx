import Link from "next/link";
import { FaPhone, FaGlobe } from "react-icons/fa";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid #ccc",
        padding: "1.5rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        {/* CONTACT SECTION */}
        <div>
          <h4>Contact</h4>

          <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaPhone />
            +254 759 183 060
          </p>

          <p style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <FaGlobe />
            <a
              href="https://reshmadeit.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              My website
            </a>
          </p>
        </div>

        {/* SUBSCRIBE FORM */}
        <div>
          <h4>Subscribe</h4>

          <form action="/send-data-here" method="post">
            <label htmlFor="email">Email address:</label>

            <input
              type="email"
              id="email"
              name="email"
              required
              style={{
                display: "block",
                marginTop: 6,
                padding: 6,
                width: "100%",
              }}
            />

            <button
              type="submit"
              style={{
                marginTop: 8,
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* LEGAL LINKS */}
        <div>
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;