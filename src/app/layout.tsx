import "./globals.css";
import type { Metadata } from "next";
import { Provider } from "./provider";

export const metadata: Metadata = {
  title: "NASA Picture App",
  description: "Pick a day and see the NASA picture of the day",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider children={children} />
      </body>
    </html>
  );
}
