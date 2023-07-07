import Footer from "@/components/skeleton/footer/Footer";
import "./globals.scss";
import { Poppins, Space_Grotesk } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "BillerVest ",
  description: "Billervest web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <body className={`${space_grotesk.variable} ${poppins.variable} `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
