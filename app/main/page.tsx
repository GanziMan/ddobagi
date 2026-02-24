import DesktopMain from "./components/DesktopMain";
import MobileMain from "./components/MobileMain";

export default function MainPage() {
  return (
    <main className="mx-auto w-full overflow-x-hidden bg-white text-[#141414]">
      <div className="hidden md:block">
        <DesktopMain locale="ko" />
      </div>
      <div className="md:hidden">
        <MobileMain locale="ko" />
      </div>
    </main>
  );
}
