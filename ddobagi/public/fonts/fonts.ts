import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "./Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const archivo = localFont({
  src: [
    {
      path: "./Archivo_SemiExpanded-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Archivo_SemiExpanded-ExtraBold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-archivo",
  display: "swap",
});

export const archivoblack = localFont({
  src: [
    {
      path: "./Archivo_SemiExpanded-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-archivoblack",
  display: "swap",
});
