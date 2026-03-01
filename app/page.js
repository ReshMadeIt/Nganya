'use client';

import Script from "next/script";
import { useState, useEffect } from "react";
import supabase from "@/lib/supabase";

export default function Home() {
  const [newsCount, setNewsCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsCount = async () => {
      try {
        const { count, error } = await supabase
          .from('news')
          .select('*', { count: 'exact', head: true });

        if (error) {
          console.error('Error fetching news count:', error);
          setNewsCount(0);
        } else {
          setNewsCount(count || 0);
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsCount();
  }, []);

  return (
    <main
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <img
        src="/nganyaa.png"
        alt="Nganya App Icon"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "20%",
          marginBottom: "20px",
          objectFit: "cover",
        }}
      />

      <h1>Nganya</h1>
      <p>Your ultimate matatu culture app – now on Google Play!</p>
      
      {/* News Count Display */}
      <p style={{ marginTop: "20px", fontSize: "16px", color: "#666" }}>
        {loading ? "Loading..." : `Latest News: ${newsCount} articles`}
      </p>

      {/* LinkedIn script */}
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="afterInteractive"
      />
      <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="reshley-atsiaya" data-version="v1">
        <a className="badge-base" href="https://linkedin.com/in/reshley-atsiaya?trk=profile-badge"></a>
      </div>

      <a
        href="https://play.google.com/store/apps/details?id=com.nganya.mobile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          style={{ width: "180px", marginTop: "20px" }}
        />
      </a>
    </main>
  );
}