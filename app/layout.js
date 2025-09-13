export const metadata = {
  title: "Nganya",
  description: "Your ultimate matatu culture app – now on Google Play!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
