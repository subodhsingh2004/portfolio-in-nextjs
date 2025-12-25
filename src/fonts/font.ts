import { Geist, Geist_Mono, Roboto_Mono, DM_Sans, Poppins } from "next/font/google";

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const geistSans = Geist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});