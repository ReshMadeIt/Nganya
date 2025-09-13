export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", textAlign: "center", padding: "50px" }}>
      <h1>Nganya 🚐</h1>
      <p>Your ultimate matatu culture app – now on Google Play!</p>

      <a
        href="https://play.google.com/store/apps/details?id=com.nganya.mobile" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/google-play-badge.png"
          alt="Get it on Google Play"
          width={200}
        />
      </a>
    </main>
  );
}
