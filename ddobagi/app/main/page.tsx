import DesktopMain from "./components/DesktopMain";
import MobileMain from "./components/MobileMain";

export default function MainPage() {
  return (
    <main className="mx-auto w-full max-w-[1920px] overflow-x-hidden bg-white text-[#141414]">
      <DesktopMain />
      <MobileMain />
    </main>
  );
}
