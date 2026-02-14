"use client";

import { useState } from "react";
import Image from "next/image";

const kpis = [
  {
    value: "1000+",
    title: "법인 설립 대행",
    descPrefix: "누적 수백 건 이상의",
    descHighlight: "외국 법인 설립 대행",
    descSuffix: "경험",
  },
  {
    value: "300+",
    title: "비자/행정 지원",
    descPrefix: "시장 진입 단계의",
    descHighlight: "실무 프로세스",
    descSuffix: "지원",
  },
  {
    value: "50+",
    title: "전문 파트너",
    descPrefix: "세무, 노무, 법무",
    descHighlight: "네트워크 기반",
    descSuffix: "대응",
  },
  {
    value: "98%",
    title: "고객 만족도",
    descPrefix: "프로젝트 종료 후",
    descHighlight: "재의뢰 및 추천",
    descSuffix: "중심",
  },
];

const steps = [
  {
    title: "Business Setup",
    desc: "요건 진단, 법인 형태 제안, 설립 절차 실행까지 한 번에 지원합니다.",
  },
  {
    title: "FDI Registration",
    desc: "외국인투자기업 등록, 행정 서류, 필수 신고 절차를 체계적으로 진행합니다.",
  },
  {
    title: "Continued Support",
    desc: "설립 이후 세무, 노무, 운영 이슈까지 안정적으로 이어서 관리합니다.",
  },
];

const faqItems = [
  {
    q: "외국인도 한국에서 법인 설립이 가능한가요?",
    a: "가능합니다. 업종과 체류 자격 요건을 먼저 확인한 뒤, 적합한 설립 경로를 설계해 진행합니다.",
  },
  {
    q: "법인 설립까지 평균 소요 기간은 얼마나 걸리나요?",
    a: "케이스별로 다르지만 일반적으로 서류 준비부터 등록 완료까지 약 3~5주를 기준으로 안내드립니다.",
  },
  {
    q: "비자 발급과 법인 설립을 동시에 진행할 수 있나요?",
    a: "가능합니다. 설립 일정과 비자 일정을 병행할 수 있도록 단계별로 스케줄을 맞춰 진행합니다.",
  },
  {
    q: "설립 후 세무 및 회계 운영도 맡길 수 있나요?",
    a: "네. 설립 이후에도 세무 신고, 기장, 운영 컨설팅까지 연속 지원 가능합니다.",
  },
];

const contacts = [
  {
    en: "Do han",
    ko: "도 한",
    role: "팀장",
    phone: "010-3550-8317",
    wechat: "workacount6688",
    tell: "070-5046-4401",
    kakao: "ddobagikorea",
    photo:
      "https://www.figma.com/api/mcp/asset/98050360-0833-4f6d-b359-386f42e74176",
  },
  {
    en: "Park Jihyun",
    ko: "박지현",
    role: "매니저",
    phone: "010-8127-6115",
    wechat: "ddobagikorea888",
    tell: "070-5046-4407",
    kakao: "dbgkr-piao",
    photo:
      "https://www.figma.com/api/mcp/asset/727da113-b95b-422d-be15-a09132fa6f7d",
  },
];

const inquiryTypes = ["법인 설립", "비자 및 행정", "유통/마케팅", "기타"];

const mobileServices = [
  {
    title: "D8 투자비자 발급 대행",
    badge: "기본구성",
    desc: "아포스티유 공증+D8 비자 신고, 서류 업무 대행",
  },
  {
    title: "온라인 유통 마케팅 지원",
    badge: null,
    desc: "한국 진출 후 판매까지? 오픈마켓 온라인 유통 마케팅 전문 운영진이 함께합니다",
  },
  {
    title: "전문 세무 회계 관리",
    badge: "기본구성",
    desc: "외국인 법인 특화 세무관리, 신고, 연말정산까지 완벽하게 처리",
  },
  {
    title: "한국 법인 설립 대행",
    badge: "기본구성",
    desc: "공증·법인등기·인감·계좌·통신판매업신고까지 원스톱 지원",
  },
  {
    title: "외국인투자기업(FDI) 등록 지원",
    badge: "기본구성",
    desc: "아포스티유 공증+외국인투자기업(FDI) 등록, 세금 감면과 정부 혜택 확보",
  },
];

export default function MainPage() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [agree, setAgree] = useState(false);

  return (
    <main className="mx-auto w-full max-w-[1920px] overflow-x-hidden bg-white text-[#141414]">
      {/* Desktop */}
      <div className="hidden md:block min-w-[1280px]">
        <header className="flex h-[96px] items-center justify-between border-b border-[#ebebeb] px-[320px]">
          <Image
            src="/main/ddobagi-tools.png"
            width={117}
            height={42}
            alt="ddobagi tools"
          />
          <nav className="flex items-center gap-[44px] text-[18px] font-semibold tracking-[-0.4px] text-[#363636]">
            <a href="#services">서비스</a>
            <a href="#about">소개</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">문의</a>
          </nav>
        </header>

        <section className="relative h-[760px] overflow-hidden bg-white">
          <p className="pointer-events-none absolute left-1/2 top-[40px] -translate-x-1/2 font-archivo text-[170px] font-extrabold leading-[0.88] tracking-[-3px] text-[#f2f2f2]">
            DDOBAGI
            <br />
            TOOLS
          </p>

          <div className="absolute left-1/2 top-[50%] w-full -translate-x-1/2 -translate-y-1/2 px-[160px] text-center">
            <h1 className="font-archivo text-[88px] font-extrabold leading-[0.94] tracking-[-2px] text-[#b53131]">
              Korea
              <br />
              Business Setup &
              <br />
              Entry Consulting
            </h1>
          </div>

          <Image
            className="absolute bottom-[30px] right-[34px]"
            src="/main/icon-arrow-pc.svg"
            width={240}
            height={240}
            alt=""
          />
        </section>

        <section className="bg-white py-[20px]">
          <div className="overflow-hidden">
            <div className="flex w-max items-center gap-[16px]">
              {Array.from({ length: 24 }).map((_, idx) => (
                <Image
                  key={`logo-${idx}`}
                  src="/main/ddobagi-tools.png"
                  width={116}
                  height={42}
                  alt="partner logo"
                  className="h-[54px] w-[150px] object-contain opacity-85"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bk px-[320px] py-[136px] text-white">
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
            <br className="hidden md:block" /> 내가 원하는 플랫폼 어디든 입점
            가능
          </p>

          <p className="text-base md:text-lg lg:text-[19px] opacity-80 mt-10 md:mt-19.5 break-keep">
            고객에 공감하고 상황과 니즈에 맞춰
            <br className="hidden md:block" /> 현지 정착 솔루션을 제공합니다.
          </p>
        </section>

        <section id="services" className="bg-white px-[320px] py-[140px]">
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
                className="bg-[#f9f9f9] p-8 md:p-12 flex flex-col gap-6 md:gap-10.5 rounded-[18px]">
                <h3 className="font-bold text-lg md:text-lg lg:text-xl">
                  {item.title}
                </h3>
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
        </section>

        <section
          id="about"
          className="bg-[#141414] px-[320px] py-[150px] text-white flex flex-col gap-25 items-center">
          <div className="text-center">
            <p className="font-archivo text-[26px] font-extrabold tracking-[-0.6px]">
              DDOBAGI TOOLS
            </p>
            <h2 className="mt-[6px] font-archivo text-[76px] font-extrabold leading-none tracking-[-2px] text-[#b53131]">
              Our Service
            </h2>
            <p className="mt-[36px] text-[46px] font-bold leading-[1.2] tracking-[-1px]">
              수백 건 이상의 외국 법인 설립 실적
            </p>
            <p className="mt-[18px] text-[20px] leading-[1.6] tracking-[-0.4px] text-[#d7d7d7]">
              이미 수많은 외국인 사업가들이 한국 시장에 진출할 때 저희를
              선택했습니다.
            </p>
          </div>

          <div className="border-r h-[150px]"></div>

          <div className="mt-[60px] grid grid-cols-2 gap-5 px-[217.5px] py-[117.5px] bg-[#1e1e1e]">
            {kpis.map((item, idx) => (
              <div
                key={item.title}
                className={`bg-white p-8 md:p-12 text-white rounded-[18px] w-full lg:w-102.5 col-span-1 sm:col-span-2 lg:col-span-1 ${idx === 0 ? "" : "opacity-95"}`}>
                <div className="flex flex-col gap-2 relative">
                  <p className="font-archivo font-extrabold text-primary text-4xl md:text-[45px] tracking-[-3px] leading-11">
                    {item.value.replace(/[+%]$/, "")}
                    {/[+%]$/.test(item.value) && (
                      <sup className="text-lg absolute">
                        {item.value.slice(-1)}
                      </sup>
                    )}
                  </p>
                  <p className="text-black text-lg md:text-[22px] font-bold tracking-[-1px] leading-7">
                    {item.title}
                  </p>
                </div>
                <div className="w-full border-t border-primary mt-7" />
                <p className="text-base font-medium text-bk mt-10 text-right">
                  {item.descPrefix}
                  <br />
                  <span className="text-primary">{item.descHighlight}</span>
                  {item.descSuffix}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 md:mt-10  bg-primary hover:bg-primary-dark text-white text-2xl font-semibold px-12.5 py-6.5 rounded-full transition-colors w-full md:w-auto">
            지금 바로 문의하기
          </button>
        </section>

        <section className="bg-white px-[320px] py-[140px] text-center">
          <p className="text-[48px] text-[30px] font-bold tracking-[-0.75px]">
            우리는 A부터 Z까지
            <br />
            <span className="text-primary">모든 과정을 책임집니다</span>
          </p>

          <div className="mt-[56px] grid grid-cols-3 gap-[20px]">
            <article className="rounded-[18px] px-[30px] py-[34px]">
              <p className="font-archivo text-[4.25rem] font-extrabold leading-none tracking-[-3.8px] relative text-[128px]">
                {"1000"}
                <sup className="text-lg absolute text-[72px] font-bold">+</sup>
              </p>
              <p className="mt-[10px] text-lg text-bk font-light">
                중국 기업의 성공적인 한국 시장 진출을 지원
              </p>
            </article>
            <article className="rounded-[18px] px-[30px] py-[34px]">
              <p className="font-archivo text-[4.25rem] font-extrabold leading-none tracking-[-1.8px] relative text-[128px]">
                {"100"}
                <sup className="text-lg absolute text-[46px] font-bold">%</sup>
              </p>
              <p className="mt-[10px] text-lg text-bk font-light">
                중·한 이중 언어에 능통한 전문 인력 구성
              </p>
            </article>
            <article className="rounded-[18px] px-[30px] py-[34px]">
              <p className="mt-[10px] text-lg text-bk font-light">
                안전한 영주권 설계 및 비자 발급
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[#141414] px-[320px] py-[140px] text-white">
          <p className="font-archivo text-[26px] font-light tracking-[-0.6px]">
            DDOBAGI TOOLS
            <br />
            ONE-STOP SOLUTION{" "}
            <span className="font-pretendard font-extralight">에 대한</span>
          </p>
          <h2 className="mt-[10px] text-[42px] font-bold tracking-[-1px]">
            자세한 내용이 궁금하시다면?
          </h2>
          <p className="mt-[10px] text-[20px] text-[#bfbfbf]">
            복잡한 비즈니스 과정도 쉽고 빠르게
          </p>

          <div className="mt-[42px] grid grid-cols-3 gap-[20px]">
            {steps.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-[18px] border border-[#4f4f4f] bg-[#212121] p-[36px]">
                <p className="text-[18px] font-semibold text-[#b53131]">
                  0{idx + 1}
                </p>
                <h3 className="mt-[18px] font-archivo text-[30px] font-bold leading-[1.1]">
                  {item.title}
                </h3>
                <p className="mt-[18px] text-[18px] leading-[1.5] text-[#d2d2d2]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="bg-white px-[320px] py-[140px]">
          <h2 className="text-center text-[44px] font-bold leading-none tracking-[-1px]">
            자주 묻는 질문
          </h2>

          <div className="mt-[60px] space-y-[16px]">
            {faqItems.map((item, idx) => (
              <article
                key={item.q}
                className="rounded-[20px] bg-[#f5f5f5] px-[48px] py-[34px]">
                <button
                  className="flex w-full items-center justify-between"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
                  <div className="flex items-center gap-[12px] text-[22px] font-semibold tracking-[-0.5px]">
                    <span>Q.</span>
                    <p>{item.q}</p>
                  </div>
                  <span
                    className={`text-[30px] leading-none transition-transform ${faqOpen === idx ? "rotate-180" : ""}`}>
                    ⌄
                  </span>
                </button>
                {faqOpen === idx && (
                  <p className="mt-[18px] pl-[34px] text-[18px] leading-[1.55] text-[#5f5f5f]">
                    {item.a}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="flex items-center justify-between bg-[#141414] px-[320px] py-[140px] text-white">
          <div>
            <p className="font-archivo text-[110px] font-black leading-none tracking-[-2.6px] text-[#2f2e2e]">
              Contact
            </p>
            <h2 className="mt-[-24px] text-[48px] font-bold leading-[1.3] tracking-[-1.2px]">
              또바기툴즈는
              <br />
              항상 준비되어 있습니다.
            </h2>
            <button className="mt-[44px] rounded-[100px] bg-[#b53131] px-[52px] py-[26px] text-[24px] font-semibold tracking-[-0.6px]">
              문의하기
            </button>
          </div>

          <div className="w-[620px] space-y-[24px]">
            {contacts.map((person) => (
              <article
                key={person.en}
                className="rounded-[18px] border border-[#5a5a5a] bg-[#212121] p-[40px]">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-archivo text-[34px] font-black tracking-[-0.8px]">
                      {person.en}
                    </p>
                    <p className="mt-[10px] text-[34px] tracking-[-0.8px]">
                      {person.ko}{" "}
                      <span className="text-[18px]">{person.role}</span>
                    </p>
                  </div>
                  <img
                    src={person.photo}
                    alt={person.en}
                    className="h-[80px] w-[80px] rounded-full object-cover"
                  />
                </div>

                <div className="mt-[26px] grid grid-cols-2 gap-y-[14px] text-[18px] tracking-[-0.45px]">
                  <p>
                    <strong className="font-medium">Phone </strong>
                    {person.phone}
                  </p>
                  <p>
                    <strong className="font-medium">Wechat </strong>
                    {person.wechat}
                  </p>
                  <p>
                    <strong className="font-medium">Tell </strong>
                    {person.tell}
                  </p>
                  <p>
                    <strong className="font-medium">Kakao </strong>
                    {person.kakao}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-[320px] py-[140px]">
          <h2 className="text-center text-[44px] font-bold tracking-[-1px]">
            간편 문의
          </h2>

          <form className="mt-[56px] flex flex-col gap-[34px]">
            <div className="grid grid-cols-2 gap-[32px]">
              <label className="flex flex-col gap-[14px]">
                <span className="text-[20px] font-semibold">문의 종류</span>
                <select
                  className="h-[72px] rounded-[8px] bg-[#f5f5f5] px-[24px] text-[18px] text-[#808080] outline-none"
                  defaultValue="">
                  <option value="" disabled>
                    선택해주세요
                  </option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <div />
            </div>

            <div className="grid grid-cols-2 gap-[32px]">
              <label className="flex flex-col gap-[14px]">
                <span className="text-[20px] font-semibold">이름</span>
                <input
                  className="h-[72px] rounded-[8px] bg-[#f5f5f5] px-[24px] text-[18px] outline-none"
                  placeholder="이름을 입력해주세요"
                />
              </label>
              <label className="flex flex-col gap-[14px]">
                <span className="text-[20px] font-semibold">연락처</span>
                <input
                  className="h-[72px] rounded-[8px] bg-[#f5f5f5] px-[24px] text-[18px] outline-none"
                  placeholder="연락 가능한 이메일 또는 전화번호"
                />
              </label>
            </div>

            <label className="flex flex-col gap-[14px]">
              <span className="text-[22px] font-semibold">문의 내용</span>
              <textarea
                className="h-[348px] resize-none rounded-[8px] bg-[#f5f5f5] px-[24px] py-[20px] text-[18px] outline-none"
                placeholder="궁금한 내용을 자세히 적어주세요"
              />
            </label>

            <button
              type="button"
              onClick={() => setAgree((prev) => !prev)}
              className="flex items-center gap-[10px] text-left text-[16px] text-[#141414]">
              <span
                className={`flex h-[24px] w-[24px] items-center justify-center rounded-[4px] border ${agree ? "border-[#141414] bg-[#141414] text-white" : "border-[#808080] bg-white text-transparent"}`}>
                ✓
              </span>
              개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변
              목적으로만 사용되며, 법정 보유기간 동안 안전하게 보관됩니다.
            </button>

            <button
              type="submit"
              className="mx-auto mt-[8px] rounded-[100px] bg-[#797979] px-[52px] py-[26px] text-[24px] font-semibold tracking-[-0.6px] text-white">
              문의 보내기
            </button>
          </form>
        </section>

        <footer className="bg-[#f5f5f5] px-[320px] pb-[60px] pt-[40px]">
          <div className="flex items-center justify-between border-b border-[#141414] pb-[28px]">
            <Image
              src="/main/ddobagi-tools.png"
              width={117}
              height={42}
              alt="ddobagi tools"
            />
            <div className="flex items-center gap-[40px] text-[16px] font-bold text-[#363636]">
              <span>서비스 이용약관</span>
              <span>개인정보처리방침</span>
            </div>
          </div>

          <div className="mt-[24px] flex items-center gap-[40px] text-[18px] tracking-[-0.4px] text-[#141414]">
            <p>
              <strong>사업자등록번호.</strong> 684-81-03181
            </p>
            <p>
              <strong>주소.</strong> 서울특별시 마포구 양화로 78-7, 3층
            </p>
            <p>
              <strong>이메일.</strong> ddobagitools@naver.com
            </p>
          </div>
        </footer>
      </div>

      {/* Mobile */}
      <div className="mx-auto w-full max-w-[375px] md:hidden">
        <section className="relative h-[667px] overflow-hidden bg-white px-[20px] pt-[210px]">
          <p className="pointer-events-none absolute left-1/2 top-[255px] -translate-x-1/2 text-center font-archivo text-[67px] font-extrabold leading-[1.08] tracking-[-1.6px] text-[#f2f2f2]">
            DDOBAGI
            <br />
            TOOLS
          </p>
          <h1 className="relative z-10 font-archivo text-[54px] font-extrabold leading-[1.05] tracking-[-1px] text-[#b53131]">
            Korea
            <br />
            Business Setup &
            <br />
            Entry Consulting
          </h1>
        </section>

        <section className="bg-[#141414] px-[20px] py-[80px] text-center text-white">
          <p className="font-archivo text-[14px] font-extrabold tracking-[-0.35px] text-[#b53131]">
            DDOBAGI TOOLS ONE-STOP SOLUTION
          </p>
          <p className="mt-[28px] text-[15px] font-light leading-[1.3] tracking-[-0.37px]">
            맞춤형 컨설팅과 함께
            <br />
            나만의 회사를 설립해보세요
          </p>
          <h2 className="mt-[14px] text-[24px] font-bold leading-[1.3] tracking-[-0.6px]">
            단 25일 이내 완성!
          </h2>
          <p className="mt-[14px] text-[15px] font-light leading-[1.3] tracking-[-0.37px]">
            한국 법인 설립부터
            <br />
            내가 원하는 플랫폼 어디든 입점 가능
          </p>
          <p className="mt-[38px] text-[12px] leading-[1.5] tracking-[-0.3px]">
            고객에 공감하고 상황과 니즈에 맞춰
            <br />
            현지 정착 솔루션을 제공합니다.
          </p>
        </section>

        <section className="bg-white px-[20px] py-[80px]">
          <p className="font-archivo text-[17px] font-extrabold leading-[1.1] tracking-[-0.42px]">
            DDOBAGI TOOLS
          </p>
          <h2 className="mt-[18px] font-archivo text-[39px] font-extrabold leading-[1.1] tracking-[-0.97px] text-[#b53131]">
            What
            <br />
            We DO
          </h2>
          <div className="mt-[30px] space-y-[14px]">
            {mobileServices.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-[14px] bg-[#f5f5f5] p-[20px]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[19px] font-bold leading-[1.4] tracking-[-0.49px] text-[#141414]">
                    {item.title}
                  </h3>
                  <div className="h-[46px] w-[46px] rounded-full bg-[#ececec]" />
                </div>
                <div className="mt-[14px] rounded-[12px] bg-[#b53131] p-[16px] text-white">
                  <p className="text-[14px] font-medium leading-[1.5] tracking-[-0.35px]">
                    {item.desc}
                  </p>
                  {item.badge && (
                    <span className="mt-[10px] inline-flex rounded-[100px] bg-[#971e1e] px-[8px] py-[2px] text-[11px] font-semibold tracking-[-0.27px]">
                      {item.badge}
                    </span>
                  )}
                </div>
                {idx < mobileServices.length - 1 && (
                  <div className="pt-[4px]" />
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#141414] px-[20px] py-[80px] text-white">
          <p className="font-archivo text-[20px] font-extrabold tracking-[-0.5px] text-[#b53131]">
            DDOBAGI TOOLS
          </p>
          <h2 className="mt-[8px] font-archivo text-[41px] font-extrabold leading-[1.1] tracking-[-1.03px]">
            Our Service
          </h2>
          <p className="mt-[22px] text-[26px] font-bold leading-[1.2] tracking-[-0.65px]">
            수백 건 이상의 외국 법인 설립 실적
          </p>
          <p className="mt-[14px] text-[14px] leading-[1.5] tracking-[-0.35px] text-[#d7d7d7]">
            이미 수많은 외국인 사업가들이 한국 시장에 진출할 때
            <br />
            저희를 선택했습니다.
          </p>
          <div className="mt-[32px] grid grid-cols-2 gap-[12px]">
            {kpis.map((item, idx) => (
              <article
                key={item.title}
                className={`rounded-[14px] bg-white p-[16px] ${idx === 0 ? "col-span-2" : "col-span-1"}`}>
                <p className="font-archivo text-[32px] font-extrabold tracking-[-2px] text-[#b53131]">
                  {item.value}
                </p>
                <p className="mt-[4px] text-[14px] font-bold tracking-[-0.35px] text-[#141414]">
                  {item.title}
                </p>
                <div className="mt-[10px] border-t border-[#b53131]" />
                <p className="mt-[10px] text-right text-[12px] font-medium leading-[1.45] tracking-[-0.3px] text-[#363636]">
                  {item.descPrefix}
                  <br />
                  <span className="text-[#b53131]">
                    {item.descHighlight}
                  </span>{" "}
                  {item.descSuffix}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-[20px] py-[80px] text-center">
          <p className="text-[48px] text-[30px] font-bold tracking-[-0.75px]">
            우리는 A부터 Z까지
            <br />
            <span className="text-primary">모든 과정을 책임집니다</span>
          </p>
          <div className="mt-[24px] space-y-[12px]">
            <article className="rounded-[14px] bg-[#f5f5f5] px-[20px] py-[18px]">
              <p className="font-archivo text-[48px] font-extrabold leading-none tracking-[-1px] text-[#141414]">
                1000+
              </p>
              <p className="mt-[8px] text-[14px] text-[#5b5b5b]">
                누적 프로젝트
              </p>
            </article>
            <article className="rounded-[14px] bg-[#f5f5f5] px-[20px] py-[18px]">
              <p className="font-archivo text-[48px] font-extrabold leading-none tracking-[-1px] text-[#141414]">
                100%
              </p>
              <p className="mt-[8px] text-[14px] text-[#5b5b5b]">
                맞춤형 운영 전략
              </p>
            </article>
            <article className="rounded-[14px] bg-[#f5f5f5] px-[20px] py-[18px]">
              <p className="font-archivo text-[48px] font-extrabold leading-none tracking-[-1px] text-[#b53131]">
                ∞
              </p>
              <p className="mt-[8px] text-[14px] text-[#5b5b5b]">
                지속 성장 파트너십
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[#141414] px-[20px] py-[80px] text-white">
          <p className="font-archivo text-[20px] font-extrabold tracking-[-0.5px] text-[#b53131]">
            DDOBAGI TOOLS
          </p>
          <h2 className="mt-[8px] text-[30px] font-bold tracking-[-0.75px]">
            ONE-STOP SOLUTIONS에 의한
          </h2>
          <p className="mt-[8px] text-[15px] text-[#bfbfbf]">
            복잡한 비즈니스 과정도 쉽고 빠르게
          </p>
          <div className="mt-[24px] space-y-[12px]">
            {steps.map((item, idx) => (
              <article
                key={item.title}
                className="rounded-[14px] border border-[#4f4f4f] bg-[#212121] p-[20px]">
                <p className="text-[14px] font-semibold text-[#b53131]">
                  0{idx + 1}
                </p>
                <h3 className="mt-[8px] font-archivo text-[24px] font-bold leading-[1.1]">
                  {item.title}
                </h3>
                <p className="mt-[10px] text-[14px] leading-[1.5] text-[#d2d2d2]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq-mobile" className="bg-white px-[20px] py-[80px]">
          <h2 className="text-center text-[30px] font-bold tracking-[-0.75px]">
            자주 묻는 질문
          </h2>
          <div className="mt-[28px] space-y-[10px]">
            {faqItems.map((item, idx) => (
              <article
                key={item.q}
                className="rounded-[14px] bg-[#f5f5f5] px-[16px] py-[14px]">
                <button
                  className="flex w-full items-center justify-between gap-3 text-left"
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}>
                  <div className="flex items-center gap-[8px] text-[14px] font-semibold tracking-[-0.35px]">
                    <span>Q.</span>
                    <p>{item.q}</p>
                  </div>
                  <span
                    className={`text-[20px] transition-transform ${faqOpen === idx ? "rotate-180" : ""}`}>
                    ⌄
                  </span>
                </button>
                {faqOpen === idx && (
                  <p className="mt-[10px] pl-[20px] text-[13px] leading-[1.55] text-[#5f5f5f]">
                    {item.a}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact-mobile"
          className="bg-[#141414] px-[20px] py-[80px] text-white">
          <p className="font-archivo text-[50px] font-black leading-none tracking-[-1.2px] text-[#2f2e2e]">
            Contact
          </p>
          <h2 className="mt-[-10px] text-[24px] font-bold leading-[1.35] tracking-[-0.6px]">
            또바기툴즈는
            <br />
            항상 준비되어 있습니다.
          </h2>
          <button className="mt-[22px] rounded-[100px] bg-[#b53131] px-[26px] py-[12px] text-[13px] font-semibold tracking-[-0.3px]">
            문의하기
          </button>
          <div className="mt-[22px] space-y-[12px]">
            {contacts.map((person) => (
              <article
                key={person.en}
                className="rounded-[14px] border border-[#5a5a5a] bg-[#212121] p-[16px]">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-archivo text-[24px] font-black tracking-[-0.6px]">
                      {person.en}
                    </p>
                    <p className="mt-[4px] text-[22px] tracking-[-0.5px]">
                      {person.ko}{" "}
                      <span className="text-[13px]">{person.role}</span>
                    </p>
                  </div>
                  <img
                    src={person.photo}
                    alt={person.en}
                    className="h-[54px] w-[54px] rounded-full object-cover"
                  />
                </div>
                <div className="mt-[12px] grid grid-cols-2 gap-y-[8px] text-[12px] tracking-[-0.3px]">
                  <p>
                    <strong className="font-medium">Phone </strong>
                    {person.phone}
                  </p>
                  <p>
                    <strong className="font-medium">Wechat </strong>
                    {person.wechat}
                  </p>
                  <p>
                    <strong className="font-medium">Tell </strong>
                    {person.tell}
                  </p>
                  <p>
                    <strong className="font-medium">Kakao </strong>
                    {person.kakao}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white px-[20px] py-[80px]">
          <h2 className="text-center text-[23px] font-bold tracking-[-0.57px]">
            간편 문의
          </h2>
          <form className="mt-[30px] flex flex-col gap-[18px]">
            <label className="flex flex-col gap-[8px]">
              <span className="text-[14px] font-semibold">문의 종류</span>
              <select
                className="h-[44px] rounded-[4px] bg-[#f5f5f5] px-[14px] text-[12px] text-[#808080] outline-none"
                defaultValue="">
                <option value="" disabled>
                  선택해주세요
                </option>
                {inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-[8px]">
              <span className="text-[14px] font-semibold">이름</span>
              <input
                className="h-[44px] rounded-[4px] bg-[#f5f5f5] px-[14px] text-[12px] outline-none"
                placeholder="이름을 입력해주세요"
              />
            </label>
            <label className="flex flex-col gap-[8px]">
              <span className="text-[14px] font-semibold">연락처</span>
              <input
                className="h-[44px] rounded-[4px] bg-[#f5f5f5] px-[14px] text-[12px] outline-none"
                placeholder="연락 가능한 이메일 또는 전화번호"
              />
            </label>
            <label className="flex flex-col gap-[8px]">
              <span className="text-[14px] font-semibold">문의 내용</span>
              <textarea
                className="h-[174px] resize-none rounded-[4px] bg-[#f5f5f5] px-[14px] py-[14px] text-[12px] outline-none"
                placeholder="궁금한 내용을 자세히 적어주세요"
              />
            </label>
            <button
              type="button"
              onClick={() => setAgree((prev) => !prev)}
              className="flex items-start gap-[6px] text-left text-[12px] leading-[1.5] text-[#141414]">
              <span
                className={`mt-[2px] flex h-[12px] w-[12px] items-center justify-center rounded-[2px] border text-[10px] ${agree ? "border-[#141414] bg-[#141414] text-white" : "border-[#808080] bg-white text-transparent"}`}>
                ✓
              </span>
              개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변
              목적으로만 사용되며, 법정 보유기간 동안 안전하게 보관됩니다.
            </button>
            <button
              type="submit"
              className="mx-auto mt-[4px] rounded-[100px] bg-[#797979] px-[26px] py-[13px] text-[12px] font-semibold tracking-[-0.3px] text-white">
              문의 보내기
            </button>
          </form>
        </section>

        <footer className="bg-[#f5f5f5] px-[20px] pb-[40px] pt-[26px]">
          <div className="flex items-center justify-between border-b border-[#141414] pb-[20px]">
            <Image
              src="/main/ddobagi-tools.png"
              width={89}
              height={32}
              alt="ddobagi tools"
            />
            <div className="flex items-center gap-[16px] text-[12px] font-bold text-[#363636]">
              <span>서비스 이용약관</span>
              <span>개인정보처리방침</span>
            </div>
          </div>
          <div className="mt-[12px] space-y-[8px] text-[12px] tracking-[-0.3px] text-[#141414]">
            <p>
              <strong>사업자등록번호.</strong> 684-81-03181
            </p>
            <p>
              <strong>주소.</strong> 서울특별시 마포구 양화로 78-7, 3층
            </p>
            <p>
              <strong>이메일.</strong> ddobagitools@naver.com
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
