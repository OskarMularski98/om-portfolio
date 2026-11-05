import { Space_Grotesk } from "next/font/google";
import "../styles/variables.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.className} h-full`}>
      <body className="min-h-full flex flex-col bg-bg-primary">{children}</body>
    </html>
  );
}
