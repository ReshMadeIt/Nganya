import { supabase } from "../lib/supabase";

export default async function Home() {
  const { count, error } = await supabase
    .from("matatus")
    .select("*", { count: "exact", head: true });

  if (error) console.error(error);

  return (
    <main style={{ fontFamily: "sans-serif", textAlign: "center", padding: "50px" }}>
      <img
        src="/nganyaa.png"
        alt="Nganya App Icon"
        style={{ width: "150px", height: "150px", borderRadius: "20%", marginBottom: "20px", objectFit: "cover" }}
      />
      <h1>Nganya</h1>
      <p>Your ultimate matatu culture app – now on Google Play!</p>
      <p>{count ?? 0} matatus mapped</p>
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
