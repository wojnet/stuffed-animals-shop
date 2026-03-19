import ThemeProvider from "@/components/ui/ThemeProvider";
import { Geist, Londrina_Sketch, Londrina_Solid } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const londrinaSketch = Londrina_Sketch({
  variable: "--font-londrina-sketch",
  weight: "400",
});

const londrinaSolid = Londrina_Solid({
  variable: "--font-londrina-solid",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html
        suppressHydrationWarning
        lang="en"
        className={`${geistSans.variable} ${londrinaSketch.variable} ${londrinaSolid.variable}`}
      >
        <body>
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
