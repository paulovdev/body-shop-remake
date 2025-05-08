import "./globals.css";
import Nav from "@/components/nav/nav";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Body Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ViewTransitions>
        <body>
          <div className="main noise" />
          <Nav />
          {children}
        </body>
      </ViewTransitions>
    </html>
  );
}
