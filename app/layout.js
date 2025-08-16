import localFont from "next/font/local";
import { Bebas_Neue, Francois_One, Poppins, Roboto } from "next/font/google";
import "./globals.css";

// Local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google fonts via next/font to prevent hydration issues
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const francoisOne = Francois_One({ weight: "400", subsets: ["latin"], variable: "--font-francois" });
const poppins = Poppins({ weight: ["100","200","300","400","500","600","700","800","900"], subsets: ["latin"], variable: "--font-poppins" });
const roboto = Roboto({ weight: ["100","300","400","500","700","900"], subsets: ["latin"], variable: "--font-roboto" });

export const metadata = {
  title: "GoatNova – Systems & IT Solutions",
  description: "GoatNova provides modern IT solutions, web development, and digital services with a focus on innovation and simplicity.",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${francoisOne.variable} ${poppins.variable} ${roboto.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
