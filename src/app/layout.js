import { AOSInit } from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import dayjs from "dayjs";
import "dayjs/locale/vi"; // ES 2015
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import "./globals.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

dayjs.extend(LocalizedFormat);
dayjs.locale("vi"); // use locale globally
dayjs().locale("vi").format(); // use locale in a specific instance

export const metadata = {
  metadataBase: new URL("https://butterycakecafe.com"),
  title: "Buttery Cake & Cafe",
  description: "Buttery Cake & Cafe",
  icons: {
    icon: "/assets/images/logo.jpg",
  },
  openGraph: {
    title: "Buttery Cake & Cafe",
    description: "Buttery Cake & Cafe",
    type: "article",
    publishedTime: "2023-05-20",
    url: "https://butterycakecafe.com",
    images: "https://butterycakecafe.com/assets/images/logo.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buttery Cake & Cafe",
    description: "Buttery Cake & Cafe",
    images: "https://butterycakecafe.com/assets/images/logo.jpg",
  },
  keywords: ["xay dung"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <head>
        <link rel="icon" href="/assets/images/logo.jpg" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Miniver&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Miniver&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-white w-full">
        {/* <Header /> */}
        <div className="">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
