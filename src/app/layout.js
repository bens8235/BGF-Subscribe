import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Board Game Friends",
  description: "Board Game Friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-[100vh] relative lg:overflow-hidden ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
