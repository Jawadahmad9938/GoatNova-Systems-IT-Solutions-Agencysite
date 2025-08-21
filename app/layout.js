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

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const francoisOne = Francois_One({ weight: "400", subsets: ["latin"], variable: "--font-francois" });
const poppins = Poppins({ weight: ["100","200","300","400","500","600","700","800","900"], subsets: ["latin"], variable: "--font-poppins" });
const roboto = Roboto({ weight: ["100","300","400","500","700","900"], subsets: ["latin"], variable: "--font-roboto" });

export const metadata = {
  title: "GoatNova – IT Solutions, Web Development & Digital Services",
  description: "GoatNova offers modern IT solutions, custom web development, and digital services to grow your business. We focus on innovation, simplicity, and results.",
  keywords: [
    "GoatNova",
    "IT solutions",
    "web development",
    "software development",
    "digital services",
    "Pakistan IT company",
    "business solutions",
    "GoatNova Systems"
  ],
  openGraph: {
    title: "GoatNova – IT Solutions & Web Development",
    description: "Grow your business with GoatNova’s IT solutions, websites, and digital services.",
    url: "https://goatnova.online",
    siteName: "GoatNova",
    images: [
      {
        url: "/og-image.jpg", // 👉 place a real image in your /public folder
        width: 1200,
        height: 630,
        alt: "GoatNova – IT Solutions & Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoatNova – IT Solutions & Web Development",
    description: "Innovative IT solutions, web development, and digital services for businesses.",
    images: ["/og-image.jpg"], // 👉 same image as Open Graph
  },
  icons: {
    icon: "/icon.png", // keep favicon inside /public
  },
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
