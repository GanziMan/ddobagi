import Header from "./components/Header";
import FaqSection from "./components/FaqSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground max-w-[1920px] mx-auto overflow-x-hidden">
      {/* ===== Header ===== */}
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative bg-white text-[f6f6f6] overflow-hidden">
        <div className="px-5 md:px-0">
          <p className="text-center text-[13vw] md:text-[15vw] font-archivo font-extrabold text-[#f6f6f6] leading-none select-none">
            DDOBAGI
            <br />
            TOOLS
          </p>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
            <p className="font-archivo text-[#B53131] text-[40px] md:text-[80px] lg:text-[120px] leading-[110%] text-center font-extrabold break-keep">
              <span>Korea</span>
              <br />
              <span>Business Setup &</span>
              <br />
              <span>Entry Consulting</span>
            </p>
          </div>
        </div>

        {/* 우측 일러스트 자리 */}
        <CircularText />
      </section>

      {/* ===== CTA Banner ===== */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-10 text-center md:text-left">
          <p className="text-sm md:text-xl lg:text-[28px] opacity-80 text-[#B53131] font-archivo font-extrabold">
            DDOBAGI TOOLS ONE-STOP SOLUTION
          </p>
          <p className="text-xl md:text-2xl lg:text-[30px] opacity-80 mt-4 md:mt-15 font-light break-keep">
            맞춤형 건설팅과 함께
            <br className="hidden md:block" /> 나만의 회사를 설립해보세요
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-extrabold mt-6 md:mt-7.5">
            단 25일 이내 완성!
          </h2>
          <p className="text-lg md:text-2xl lg:text-[30px] opacity-80 mt-6 md:mt-7.5 font-light break-keep">
            한국 법인 설립부터
            <br className="hidden md:block" /> 내가 원하는 플랫폼 어디든 입점 가능
          </p>

          <p className="text-base md:text-lg lg:text-[19px] opacity-80 mt-10 md:mt-19.5 break-keep">
            고객에 공감하고 상황과 니즈에 맞춰
            <br className="hidden md:block" /> 현지 정착 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* ===== Section3 ===== */}
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6.25">
            <div className="mb-8 md:mb-0">
              <p className="font-archivo text-xl md:text-2xl lg:text-[28px] font-extrabold spacing tracking-[-0.7px]">
                DDOBAGI TOOLS
              </p>
              <h2 className="font-archivo text-4xl md:text-5xl lg:text-[65px] font-extrabold mb-4 md:mb-12 tracking-[-1.625px] text-[#B53131] leading-[1.1]">
                What
                <br />
                We DO
              </h2>
            </div>
            {[
              {
                title: "D8 투자비자 발급 대행",
                desc: "서비스 설명을 입력하세요.",
              },
              {
                title: "온라인 유통 마케팅 지원",
                desc: "서비스 설명을 입력하세요.",
              },
              {
                title: "전문 세무 회계 관리",
                desc: "서비스 설명을 입력하세요.",
              },
              {
                title: "한국 법인 설립 대행",
                desc: "서비스 설명을 입력하세요.",
              },
              {
                title: "외국인투자기업(FDI) 등록 지원",
                desc: "서비스 설명을 입력하세요.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f9f9f9] p-8 md:p-12 flex flex-col gap-6 md:gap-10.5 rounded-[18px]"
              >
                <h3 className="font-bold text-lg md:text-lg lg:text-xl">{item.title}</h3>
                <div className="w-full">
                  <Image
                    src={`/images/section3/icon-${i + 1}.png`}
                    width={84}
                    height={84}
                    alt={item.title}
                    className="float-end w-16 h-16 md:w-[84px] md:h-[84px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section4 ===== */}
      <section className="bg-[#141414] py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-10">
          <p className="text-xl md:text-2xl lg:text-[28px] font-archivo traking-[-0.7px] font-extrabold text-white">
            DDOBAGI TOOLS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[65px] font-archivo traking-[-1.625px] font-extrabold mb-6 md:mb-12 text-primary ">
            Our Service
          </h2>
          <p className="text-white text-2xl md:text-3xl lg:text-[48px] font-bold traking-[-1.2px] mb-4">
            수백 건 이상의 외국 법인 설립 실적
          </p>
          <p className="text-base md:text-lg text-white mb-10 md:mb-0">
            이미 수많은 외국인 사업가들이 한국 시장에 진출할 때, 저희를
            선택했습니다.
          </p>

          <div className="h-10 md:h-37.5 w-0 border-l md:border-r border-white/20 md:border-white my-6 md:my-0 ml-0 md:ml-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-full lg:max-w-4xl">
            <div className="bg-white p-8 md:p-12 text-white rounded-[18px] w-full lg:w-[410px] col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-2 ">
                <p className="font-archivo font-extrabold text-primary text-4xl md:text-[45px] tracking-[-3px] leading-11">
                  1000<sup className="text-[22.5px]">+</sup>
                </p>
                <p className="text-black text-lg md:text-[22px] font-bold tracking-[-1px] leading-7">
                  법인 설립 대행
                </p>
              </div>
              <div className="w-full border-t border-primary mt-7" />
              <p className="text-base md:text-lg font-medium text-bk mt-7 text-right">
                누적 수백 건 이상의
                <br />
                <span className="text-primary">외국 법인 설립 대행</span> 경험
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[180px]">
              <span className="text-3xl md:text-4xl font-black text-bk">
                500<sup className="text-lg md:text-xl">+</sup>
              </span>
              <p className="text-sm text-gray-500 mt-3 md:mt-4">설명 텍스트</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[150px] md:min-h-[180px]">
              <span className="text-3xl md:text-4xl font-black text-bk">
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

          <button className="mt-8 md:mt-10 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors w-full md:w-auto">
            지금 바로 문의하기
          </button>
        </div>
      </section>

      {/* ===== Trust / Stats ===== */}
      <section id="about" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-10 text-center">
          <p className="text-sm text-gray-400 mb-2">우리는 A부터 Z까지</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 md:mb-16">
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
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-10">
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
                className="border border-gray-700 rounded-xl p-6 md:p-8 flex flex-col gap-3 md:gap-4 hover:border-gray-500 transition-colors"
              >
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
      <section id="faq" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-10">
          <h2 className="text-xl md:text-3xl font-extrabold mb-8 md:mb-10 text-center">
            자주 하는 질문
          </h2>
          <FaqSection />
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left — Info */}
            <div className="flex flex-col gap-4 md:gap-6">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
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
                  className="w-full bg-foreground text-white py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-white border-t border-gray-100 py-10">
        <div className="container mx-auto px-5 md:px-10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-primary rounded-full" />
            <span className="font-bold text-foreground">또바기</span>
          </div>
          <p className="mt-4 text-sm text-gray-500">&copy; 2025 DDOBAGI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const CircularText = () => {
  return (
    <Image
      className="absolute right-0 bottom-0 w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
      src={"/main/icon-arrow-pc.svg"}
      width={250}
      height={250}
      alt=""
    />
  );
};
