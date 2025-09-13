//import Footer from "../components/Footer";

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
          src="/google-play.png"
          alt="Get it on Google Play"
          width={200}
        />
      </a>
    //        {/* Footer (no need to enclose again) */}
  //    <Footer />
    </main>


  );
}
