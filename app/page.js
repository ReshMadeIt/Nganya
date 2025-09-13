import { useEffect } from "react";

export default function Home() {

 useEffect(() => {
    // Dynamically add Google Fonts link
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  
  return (
    <main style={{
        fontFamily: "'Open Sans', sans-serif",
        textAlign: "center",
        padding: "50px",
      }}>

<img
        src="/nganyaa.png" // keep your app icon in /public/nganya.png
        alt="Nganya App Icon"
        style={{
          width: "150px",         // bigger size
          height: "150px",
          borderRadius: "20%",    // makes it perfectly round
          marginBottom: "20px",
          objectFit: "cover",     // keeps aspect ratio nice inside circle
        }}
      />
  
      <h1>Nganya</h1>
      <p>Your ultimate matatu culture app – now on Google Play!</p>

      <a
        href="https://play.google.com/store/apps/details?id=com.nganya.mobile" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
    alt="Google Play"
    className="w-6 h-6"
  />
      </a>
    </main>


  );
}
