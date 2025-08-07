import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const font = Roboto({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata = {
  title: "Revisão 2 - Front End ",
  description: "Projeto de Front End com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={font.variable}>
        <Header title="🛒 Loja de Eletrônicos" subtitle="Os melhores produtos com os melhores preços!

" totalProducts="10" />
        {children}
      </body>
    </html>
  );
}