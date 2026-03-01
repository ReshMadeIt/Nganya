import Script from "next/script";
import supabase from "@/lib/initSupabase";

export default function Home() {
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

      {/* LinkedIn script */}
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="afterInteractive"
      />
          <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="reshley-atsiaya" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ke.linkedin.com/in/reshley-atsiaya?trk=profile-badge">Reshley Atsiaya</a></div>
              

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
