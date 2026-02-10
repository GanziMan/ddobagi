import Header from "./components/Header";
import FaqSection from "./components/FaqSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative bg-white text-[f6f6f6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-36 flex flex-col gap-4 md:gap-6">
          <p className="text-5xl sm:text-6xl md:text-8xl lg:text-[15vw] font-archivo font-extrabold text-[#f6f6f6] leading-none select-none">
            DDOBAGI
            <br />
            TOOLS
          </p>
          {/* <Image
            src={"/main/ddobagi-tools.png"}
            width={300}
            height={200}
            alt="ddobagi tools"
          /> */}
          {/* <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight max-w-lg">
            Korea
            <br />
            Business Setup &amp;
            <br />
            Entry Consulting
          </h1> */}
          {/* 우측 일러스트 자리 */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
            {/* <div className="w-28 h-28 bg-primary/20 rounded-full" /> */}
            <CircularText />
          </div>
        </div>
      </section>

      {/* ===== CTA Banner ===== */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 text-center flex flex-col items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm opacity-80">서비스 설명 텍스트</p>
          <p className="text-xs md:text-sm opacity-80">부가 설명 텍스트</p>
          <h2 className="text-2xl md:text-4xl font-extrabold">
            단 29일 이내 완성!
          </h2>
          <p className="text-xs md:text-sm opacity-80 max-w-md">
            하단 설명 텍스트를 입력하세요.
          </p>
        </div>
      </section>

      {/* ===== What We DO ===== */}
      <section id="services" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-28">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
            DDOBAGI TOOLS
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-8 md:mb-12">
            What
            <br />
            We DO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { title: "서비스 1", desc: "서비스 설명을 입력하세요." },
              { title: "서비스 2", desc: "서비스 설명을 입력하세요." },
              { title: "서비스 3", desc: "서비스 설명을 입력하세요." },
              { title: "서비스 4", desc: "서비스 설명을 입력하세요." },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-5 md:p-6 flex flex-col gap-3 md:gap-4 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-50 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-primary rounded" />
                </div>
                <h3 className="font-bold text-base md:text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our Service ===== */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-28">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
            DDOBAGI TOOLS
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-4">
            Our Service
          </h2>
          <p className="text-gray-500 text-sm mb-8 md:mb-12 max-w-md">
            수백 건의 한국 법인 설립 실적
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-2xl">
            <div className="bg-primary text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[180px]">
              <span className="text-3xl md:text-4xl font-black">
                1000<sup className="text-lg md:text-xl">+</sup>
              </span>
              <p className="text-sm opacity-80 mt-3 md:mt-4">설명 텍스트</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[180px]">
              <span className="text-3xl md:text-4xl font-black">
                500<sup className="text-lg md:text-xl">+</sup>
              </span>
              <p className="text-sm text-gray-500 mt-3 md:mt-4">설명 텍스트</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[180px]">
              <span className="text-3xl md:text-4xl font-black">
                20<sup className="text-lg md:text-xl">+</sup>
              </span>
              <p className="text-sm text-gray-500 mt-3 md:mt-4">설명 텍스트</p>
            </div>
            <div className="bg-primary text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[180px]">
              <span className="text-3xl md:text-4xl font-black">
                800<sup className="text-lg md:text-xl">+</sup>
              </span>
              <p className="text-sm opacity-80 mt-3 md:mt-4">설명 텍스트</p>
            </div>
          </div>

          <button className="mt-8 md:mt-10 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors">
            자세히 보기
          </button>
        </div>
      </section>

      {/* ===== Trust / Stats ===== */}
      <section id="about" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-28 text-center">
          <p className="text-sm text-gray-400 mb-2">우리는 A부터 Z까지</p>
          <h2 className="text-xl md:text-3xl font-extrabold mb-10 md:mb-16">
            모든 과정을 책임집니다
          </h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center justify-center">
            <div>
              <p className="text-4xl md:text-6xl font-black">
                1000<span className="text-primary">+</span>
              </p>
              <p className="text-sm text-gray-500 mt-2 md:mt-3">설명 텍스트</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-black">
                100<span className="text-primary">%</span>
              </p>
              <p className="text-sm text-gray-500 mt-2 md:mt-3">설명 텍스트</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-black text-primary">
                &infin;
              </p>
              <p className="text-sm text-gray-500 mt-2 md:mt-3">설명 텍스트</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ONE-STOP SOLUTIONS ===== */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-28">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-2">
            DDOBAGI TOOLS
          </p>
          <h2 className="text-xl md:text-3xl font-extrabold mb-2">
            ONE-STOP SOLUTIONS에 의한
          </h2>
          <p className="text-gray-400 text-sm mb-8 md:mb-12">
            복잡한 비즈니스 과정도 쉽고 빠르게
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { title: "Business Setup", desc: "설명 텍스트를 입력하세요." },
              { title: "Visa Support", desc: "설명 텍스트를 입력하세요." },
              { title: "Continued Support", desc: "설명 텍스트를 입력하세요." },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-700 rounded-xl p-6 md:p-8 flex flex-col gap-3 md:gap-4 hover:border-gray-500 transition-colors">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-primary rounded" />
                </div>
                <h3 className="font-bold text-base md:text-lg">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-28">
          <h2 className="text-xl md:text-3xl font-extrabold mb-8 md:mb-10 text-center">
            자주 하는 질문
          </h2>
          <FaqSection />
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left — Info */}
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase">
                Contact
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">
                언제든지
                <br />
                연락주세요.
              </h2>
              <div className="flex flex-col gap-4 mt-2 md:mt-4 text-sm text-gray-600">
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Our hours
                  </p>
                  <p>월–금 09:00 – 18:00</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    Park Jihyun
                  </p>
                  <p>park@ddobagi.com</p>
                  <p>010-0000-0000</p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-5 md:mb-6">
                상담 문의
              </h3>
              <form className="flex flex-col gap-4 md:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      이름
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      연락처
                    </label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    이메일
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    문의 내용
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-foreground text-white py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                  문의하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-primary rounded-full" />
            <span className="font-bold text-foreground">또바기</span>
          </div>
          <p>&copy; 2025 DDOBAGI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const CircularText = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* 1. 배경 원 및 테두리 */}
        <div className="absolute inset-0 border border-white rounded-full opacity-50" />

        {/* 2. SVG를 이용한 곡선 텍스트 */}
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full animate-spin-slow">
          <defs>
            {/* 텍스트가 따라갈 투명한 원 경로 정의 (반지름 약 80) */}
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text
            fill="white"
            className="text-[14px] font-medium tracking-[0.2em] ">
            <textPath href="#circlePath" startOffset="40%" className="">
              ddobagi tools
            </textPath>
          </text>
        </svg>

        {/* 3. 중앙 요소 (화살표 및 중앙 텍스트) */}
        <div className="flex flex-col items-center text-red-500">
          <span className="text-4xl mb-2">↓</span>
          <span className="text-sm font-bold tracking-widest uppercase rotate-90 leading-none">
            ddobagi tools
          </span>
        </div>
      </div>
    </div>
  );
};

CircularText;
