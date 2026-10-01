import { GoogleTagManager } from "@next/third-parties/google";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommandPalette from "./components/command-palette";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import PointerEffects from "./components/motion/pointer-effects";
import SmoothScroll from "./components/motion/smooth-scroll";
import Navbar from "./components/navbar";
import "./css/globals.scss";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const description =
  "Abhinash Kumar: Software Development Engineer at Leucine building AI-driven compliance products with React, Java, PostgreSQL and LLMs. Codeforces Specialist, IIIT Lucknow '25.";

export const metadata = {
  title: "Abhinash Kumar · Software Engineer",
  description,
  openGraph: {
    title: "Abhinash Kumar · Software Engineer",
    description,
    type: "website",
    images: ["/profile.png"],
  },
  twitter: { card: "summary", title: "Abhinash Kumar · Software Engineer", description },
};

export const viewport = { themeColor: "#09090b" };

// Marks the document as JS-enabled before paint so [data-reveal] content can start hidden without a flash.
// If the app never hydrates (script failed to load), the class is dropped so content still shows.
const motionScript = `(function(){var d=document.documentElement;d.classList.add('js-motion');
setTimeout(function(){if(!window.__motionReady)d.classList.remove('js-motion')},3000)})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body className="font-sans">
        <SmoothScroll />
        <PointerEffects />
        <ToastContainer position="bottom-right" theme="dark" hideProgressBar />
        <CommandPalette />
        <Navbar />
        <div className="relative z-10 overflow-x-clip">
          <main className="mx-auto min-h-screen max-w-6xl px-4 sm:px-6">{children}</main>
        </div>
        <ScrollToTop />
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GTM && <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />}
    </html>
  );
}
