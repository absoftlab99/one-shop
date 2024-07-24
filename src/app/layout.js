import { Raleway } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/contexts/GlobalContext";
import Header from "@/components/Shared/Header";
import HeaderTop from "@/components/Shared/HeaderTop";
const raleway = Raleway({subsets: ["latin"], weight: ["200", "300", "400", "600", "700", "900"]})

export const metadata = {
  title: "One Shop",
  description: "One Shop Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={raleway.className}>
          <HeaderTop></HeaderTop>
          <Header></Header>
          <div className="grid place-content-center">
            <div className="min-h-[90vh] lg:w-[1440px]">
              {children}
            </div>
          </div>
        </body>
      </GlobalContextProvider>
    </html>
  );
}
