import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans, fontOrbitron, fontPressStart } from "@/config/fonts";
import Template from "./template";
import useDisableMouse from "@/components/disablemouse";
import useKeyboardNavigation from "@/components/keyboardnavigation";
import { Chip } from "@nextui-org/chip";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import BackgroundMusic from "@/components/backgroundmusic";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background container text-foreground antialiased overflow-hidden",
          fontPressStart.className,
          fontSans.variable
        )}
      >
        <BackgroundMusic />
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
