import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import TopHeader from "./components/top-header";

const InstrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Family Care of Hartford",
  description: "Family Care of Hartford",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${InstrumentSans.variable} antialiased`}
      >
        <TopHeader />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
