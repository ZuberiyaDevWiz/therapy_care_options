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
  weight: ["400", "500", "600", "700"], // add weights you’ll use
});

export const metadata = {
  title: "Options Therapy | Baton Rouge, Louisiana",
  description: "Your App Description",
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
