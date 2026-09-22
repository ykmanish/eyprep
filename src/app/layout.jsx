import { Google_Sans, Google_Sans_Code } from "next/font/google";
import "./globals.css";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PrepEY | Srishti Meena, Associate Consultant Cyber Security",
  description:
    "An interactive preparation studio for the EY Associate Consultant (Cyber Security & Technology Risk) campus drive: 11 service domains, 319 practice questions, flashcards, scenarios, a full mock test and a line by line drill of your own resume.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#131314" },
  ],
};

/* Applies the saved theme before first paint so there is no flash. */
const themeBootstrap = `try{var t=localStorage.getItem("prepey.theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      // themeBootstrap sets data-theme on this element before React hydrates,
      // so the server markup will not match here by design.
      suppressHydrationWarning
      className={`${googleSans.variable} ${googleSansCode.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
