import Footer from "@/components/skeleton/footer/Footer";
import "./globals.scss";
import { Poppins, Space_Grotesk } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
// });

// const space_grotesk = Space_Grotesk({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-space-grotesk",
// });

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <body className={` `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
