import Link from "next/link";
import { FaPhone, FaGlobe, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid #ccc",
        padding: "1.5rem",
        background: "#f9f9f9",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
          alignItems: "start",
        }}
      >
        {/* CONTACT SECTION */}
        <div>
          <h4>Contact</h4>

          <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <FaPhone />
            +254 759 183 060
          </p>

          <p style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <FaGlobe />
            <a href="https://reshmadeit.vercel.app" target="_blank">
              My Website
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
              style={{
                display: "block",
                marginTop: "6px",
                padding: "6px",
                width: "100%",
              }}
            />

            <button
              type="submit"
              style={{
                marginTop: "8px",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* LINKS */}
        <div>
          <h4>Legal</h4>

          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;