import { Inter } from "next/font/google";
import "./globals.css";
import './css/bootstrap.css'
import './css/style.css'
import './css/responsive.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Fusion of CSR And SSR Components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
