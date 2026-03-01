import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: "Nganya",
  description: "Your ultimate matatu culture app – now on Google Play!",
  icons: {
    icon: "/nganyaa.png",
    shortcut: "/nganyaa.png",
    apple: "/nganyaa.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

