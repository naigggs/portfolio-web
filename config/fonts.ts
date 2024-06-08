import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Orbitron,
  Press_Start_2P,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontOrbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const fontPressStart = Press_Start_2P({
  subsets: ["cyrillic"],
  variable: "--font-press-start",
  weight: "400"
});
