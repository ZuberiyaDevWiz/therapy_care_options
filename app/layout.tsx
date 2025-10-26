import "./globals.css";
import { Open_Sans, League_Spartan, Poppins } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Options Therapy | Baton Rouge, Louisiana",
  description:
    "Your path to better physical wellness starts here. Providing expert physical therapy and recovery solutions in Baton Rouge.",

  // ✅ Correct favicon setup
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Options Therapy | Baton Rouge, Louisiana",
    description:
      "Your path to better physical wellness starts here. Providing expert physical therapy and recovery solutions in Baton Rouge.",
    url: "https://yourwebsite.com", // ✅ Replace with your actual domain
    siteName: "Options Therapy",
    images: [
      {
        url: "/images/therapy_logo.png", // ✅ OG preview image (not favicon)
        width: 1200,
        height: 630,
        alt: "Options Therapy Clinic preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Options Therapy | Baton Rouge, Louisiana",
    description:
      "Your path to better physical wellness starts here. Providing expert physical therapy and recovery solutions in Baton Rouge.",
    images: ["/images/therapy_logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${leagueSpartan.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
