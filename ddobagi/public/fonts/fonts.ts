import localFont from "next/font/local";

export const Pretendard = localFont({
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
