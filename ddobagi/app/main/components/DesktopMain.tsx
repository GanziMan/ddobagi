"use client";

import { useState } from "react";
import Image from "next/image";

import {
  contacts,
  desktopServices,
  faqItems,
  inquiryTypes,
  kpis,
  steps,
} from "./constants";

function DesktopSection1() {
  return (
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
  );
}

function DesktopSection2() {
  return (
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
  );
}

function DesktopSection3() {
  return (
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
  );
}

function DesktopSection4() {
  return (
    <section className="bg-bk px-[320px] py-[136px] text-white">
      <p className="text-sm font-archivo text-[#B53131] opacity-80 md:text-xl lg:text-[28px] font-extrabold">
        DDOBAGI TOOLS ONE-STOP SOLUTION
      </p>
      <p className="mt-4 text-xl font-light opacity-80 break-keep md:mt-15 md:text-2xl lg:text-[30px]">
        맞춤형 건설팅과 함께
        <br className="hidden md:block" /> 나만의 회사를 설립해보세요
      </p>
      <h2 className="mt-6 text-3xl font-extrabold md:mt-7.5 md:text-4xl lg:text-[48px]">
        단 25일 이내 완성!
      </h2>
      <p className="mt-6 text-lg font-light opacity-80 break-keep md:mt-7.5 md:text-2xl lg:text-[30px]">
        한국 법인 설립부터
        <br className="hidden md:block" /> 내가 원하는 플랫폼 어디든 입점 가능
      </p>

      <p className="mt-10 text-base opacity-80 break-keep md:mt-19.5 md:text-lg lg:text-[19px]">
        고객에 공감하고 상황과 니즈에 맞춰
        <br className="hidden md:block" /> 현지 정착 솔루션을 제공합니다.
      </p>
    </section>
  );
}

function DesktopSection5() {
  return (
    <section id="services" className="bg-white px-[320px] py-[140px]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6.25 lg:grid-cols-3">
        <div className="mb-8 md:mb-0">
          <p className="font-archivo text-xl font-extrabold spacing tracking-[-0.7px] md:text-2xl lg:text-[28px]">
            DDOBAGI TOOLS
          </p>
          <h2 className="font-archivo mb-4 text-4xl font-extrabold leading-[1.1] tracking-[-1.625px] text-[#B53131] md:mb-12 md:text-5xl lg:text-[65px]">
            What
            <br />
            We DO
          </h2>
        </div>

        {desktopServices.map((item, i) => (
          <div
            key={item.title}
            className="flex flex-col gap-6 rounded-[18px] bg-[#f9f9f9] p-8 md:gap-10.5 md:p-12">
            <h3 className="text-lg font-bold md:text-lg lg:text-xl">
              {item.title}
            </h3>
            <div className="w-full">
              <Image
                src={`/images/section3/icon-${i + 1}.png`}
                width={84}
                height={84}
                alt={item.title}
                className="float-end h-16 w-16 md:h-[84px] md:w-[84px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopSection6() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-25 bg-[#141414] px-[320px] py-[150px] text-white">
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

      <div className="h-[150px] border-r" />

      <div className="mt-[60px] grid grid-cols-2 bg-[#1e1e1e] gap-5">
        {kpis.map((item, idx) => (
          <div
            key={item.title}
            className={`col-span-1 w-full rounded-[18px] bg-white p-8 text-white md:p-12 sm:col-span-2 lg:col-span-1 lg:w-102.5 ${idx === 0 ? "" : "opacity-95"}`}>
            <div className="relative flex flex-col gap-2">
              <p className="font-archivo text-primary text-4xl font-extrabold leading-11 tracking-[-3px] md:text-[45px]">
                {item.value.replace(/[+%]$/, "")}
                {/[+%]$/.test(item.value) && (
                  <sup className="absolute text-lg">{item.value.slice(-1)}</sup>
                )}
              </p>
              <p className="text-bk text-lg font-bold leading-7 tracking-[-1px] md:text-[22px]">
                {item.title}
              </p>
            </div>
            <div className="mt-7 w-full border-t border-primary" />
            <p className="text-bk mt-10 text-right text-base font-medium">
              {item.descPrefix}
              <br />
              <span className="text-primary">{item.descHighlight}</span>
              {item.descSuffix}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-8 w-full rounded-full bg-primary px-12.5 py-6.5 text-2xl font-semibold text-white transition-colors hover:bg-primary-dark md:mt-10 md:w-auto">
        지금 바로 문의하기
      </button>
    </section>
  );
}

function DesktopSection7() {
  return (
    <section className="bg-white py-[140px] text-center">
      <p className="text-[48px] text-[30px] font-bold tracking-[-0.75px]">
        우리는 A부터 Z까지
        <br />
        <span className="text-primary">모든 과정을 책임집니다</span>
      </p>

      <div className="mt-[56px] grid grid-cols-3 gap-[20px]">
        <article className="rounded-[18px] px-[30px] py-[34px]">
          <p className="font-archivo relative text-[4.25rem] text-[128px] font-extrabold leading-none tracking-[-3.8px]">
            {"1000"}
            <sup className="absolute text-lg text-[72px] font-bold">+</sup>
          </p>
          <p className="text-bk mt-[10px] text-lg font-light">
            중국 기업의 성공적인 한국 시장 진출을 지원
          </p>
        </article>
        <article className="rounded-[18px] px-[30px] py-[34px]">
          <p className="font-archivo relative text-[4.25rem] text-[128px] font-extrabold leading-none tracking-[-1.8px]">
            {"100"}
            <sup className="absolute text-lg text-[46px] font-bold">%</sup>
          </p>
          <p className="text-bk mt-[10px] text-lg font-light">
            중·한 이중 언어에 능통한 전문 인력 구성
          </p>
        </article>
        <article className="rounded-[18px] w-full relative rounded-[18px] px-[30px] py-[34px]">
          {/* 가운데 정렬 */}
          <p className="absolute inset-0 flex items-center justify-center bottom-15 text-[300px]  font-archivo font-semibold">
            {"∞"}
          </p>
          <div className="h-32" />
          <p className="text-bk mt-[10px] text-lg font-light">
            안전한 영주권 설계 및 비자 발급
          </p>
        </article>
      </div>
    </section>
  );
}

function DesktopSection8() {
  return (
    <section className="bg-bk py-35 text-white flex justify-center">
      <div className="relative min-w-[1280px] text-left">
        <div className="relative isolate">
          <p className="absolute -top-15.5 z-0 font-archivo text-[100px] font-extrabold text-[#2F2E2E] tracking-[-2px]">
            About
          </p>

          <p className="relative z-10 font-archivo text-[40px] font-extralight">
            DDOBAGI TOOLS
            <br />
            ONE-STOP SOLUTION
            <span className="font-pretendard font-light">에 대한</span>
          </p>
        </div>

        <h2 className="mt-7.5 text-[40px] font-bold tracking-[-1px]">
          자세한 내용이 궁금하시다면?
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-5">
          {steps.map((item, idx) => (
            <article
              key={item.title}
              className="rounded-[18px] border border-[#4f4f4f] bg-[#212121] px-5 py-10 text-center">
              <h3 className="font-archivo text-[34px] font-bold leading-[1.1] text-primary">
                {item.title}
              </h3>
              <p className="mt-5 text-[22px] leading-normal text-[#d2d2d2] font-pretendard font-normal whitespace-pre-line">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopSection9({
  faqOpen,
  onToggle,
}: {
  faqOpen: number | null;
  onToggle: (index: number) => void;
}) {
  return (
    <section
      id="faq"
      className="bg-white py-35 flex gap-54.75 min-w-[1280px] mx-auto ">
      <div className="relative isolate ">
        <p className="absolute -top-15.5 font-archivo text-[100px] font-extrabold text-[#F6F6F6] tracking-[-2px]">
          FAQ
        </p>
        <p className="relative z-10 font-pretendard text-[40px] font-bold">
          자주 묻는 질문
        </p>
      </div>

      <div className="space-y-5 flex-1">
        {faqItems.map((item, idx) => (
          <article
            key={item.q}
            className="rounded-[20px] bg-[#f5f5f5] p-12 w-full">
            <button
              className="flex w-full items-center justify-between"
              onClick={() => onToggle(idx)}>
              <div className="flex items-center text-[22px] font-semibold tracking-[-0.5px] w-full">
                <span>Q.</span>
                <p>{item.q}</p>
              </div>

              <Image
                src={"/icons/arrow-bottom.svg"}
                width={33}
                height={33}
                alt="arrow icon"
                className={`text-[15px] leading-none transition-transform ${faqOpen === idx ? "rotate-180" : ""}`}
              />
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
  );
}

function DesktopSection10() {
  return (
    <section id="contact" className="bg-bk py-27.5 text-white">
      <div className="min-w-[1280px] mx-auto flex justify-betwee gap-55.75">
        <div>
          <div className="relative isolate mt-39.25">
            <p className="absolute -top-15.5 z-0 font-archivo text-[110px] font-extrabold text-[#2F2E2E] tracking-[-2px]">
              Contact
            </p>

            <p className="relative z-10 font-archivo text-[48px] font-extraligh whitespace-pre-line">
              {"또바기툴즈는\n항상 준비되어 있습니다."}
            </p>
          </div>
          <button className="mt-15 rounded-[100px] bg-primary px-13 py-6.5 text-[13px] font-semibold tracking-[-0.3px]">
            문의하기
          </button>
        </div>
        <div className="w-[620px] space-y-[24px] flex-1">
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
      </div>
    </section>
  );
}

function DesktopSection11({
  agree,
  onToggleAgree,
}: {
  agree: boolean;
  onToggleAgree: () => void;
}) {
  return (
    <section className="bg-white px-[320px] py-[140px]">
      <h2 className="text-center text-[44px] font-bold tracking-[-1px]">
        간편 문의
      </h2>

      <form className="mt-[56px] flex flex-col gap-[34px]">
        <div className="grid grid-cols-2 gap-[32px]">
          <label className="flex flex-col gap-[14px]">
            <span className="text-[20px] font-semibold">문의 종류</span>
            {/* arrow icon 안뜨게 하려면? */}
            <select
              className="h-[72px] rounded-[8px] bg-[#f5f5f5] text-[18px] text-[#808080] outline-none appearance-none px-6"
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
          onClick={onToggleAgree}
          className="flex items-center gap-2 text-left text-[16px] text-bk">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full border ${agree && "border-[#808080] bg-white text-transparent"}`}>
            ✓
          </span>
          개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변 목적으로만
          사용되며, 법정 보유기간 동안 안전 하게 보관됩니다.
        </button>

        <button
          type="submit"
          className="mx-auto mt-2 rounded-[100px] bg-[#797979] px-13 py-6.5 text-[24px] font-semibold tracking-[-0.6px] text-white flex items-center gap-3.5">
          <span>문의 보내기</span>
          <Image
            src={"/icons/arrow-right.svg"}
            width={20}
            height={27}
            alt="arrow right"
            className="inline"
          />
        </button>
      </form>
    </section>
  );
}

function DesktopSection12() {
  return (
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
  );
}

export default function DesktopMain() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [agree, setAgree] = useState(false);

  return (
    <div className="hidden min-w-[1280px] md:block overflow-x-scroll">
      <DesktopSection1 />
      <DesktopSection2 />
      <DesktopSection3 />
      <DesktopSection4 />
      <DesktopSection5 />
      <DesktopSection6 />
      <DesktopSection7 />
      <DesktopSection8 />
      <DesktopSection9
        faqOpen={faqOpen}
        onToggle={(idx) => setFaqOpen(faqOpen === idx ? null : idx)}
      />
      <DesktopSection10 />
      <DesktopSection11
        agree={agree}
        onToggleAgree={() => setAgree((prev) => !prev)}
      />
      <DesktopSection12 />
    </div>
  );
}
