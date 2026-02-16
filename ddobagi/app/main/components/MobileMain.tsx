"use client";

import { useState } from "react";
import Image from "next/image";

import {
  contacts,
  faqItems,
  inquiryTypes,
  kpis,
  mobileServices,
  steps,
} from "./constants";
import MobileTest from "./MobileTest";

function MobileSection1() {
  return (
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
  );
}

function MobileSection2() {
  return (
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
  );
}

function MobileSection3() {
  return (
    // <section className="bg-white px-[20px] py-[80px]">
    //   <p className="font-archivo text-[17px] font-extrabold leading-[1.1] tracking-[-0.42px]">
    //     DDOBAGI TOOLS
    //   </p>
    //   <h2 className="font-archivo mt-[18px] text-[39px] font-extrabold leading-[1.1] tracking-[-0.97px] text-[#b53131]">
    //     What
    //     <br />
    //     We DO
    //   </h2>
    //   <div className="mt-[30px] space-y-[14px]">
    //     {mobileServices.map((item, idx) => (
    //       <article key={item.title} className="rounded-[14px] bg-[#f5f5f5] p-[20px]">
    //         <div className="flex items-start justify-between gap-4">
    //           <h3 className="text-[19px] font-bold leading-[1.4] tracking-[-0.49px] text-[#141414]">
    //             {item.title}
    //           </h3>
    //           <div className="h-[46px] w-[46px] rounded-full bg-[#ececec]" />
    //         </div>
    //         <div className="mt-[14px] rounded-[12px] bg-[#b53131] p-[16px] text-white">
    //           <p className="text-[14px] font-medium leading-[1.5] tracking-[-0.35px]">
    //             {item.desc}
    //           </p>
    //           {item.badge && (
    //             <span className="mt-[10px] inline-flex rounded-[100px] bg-[#971e1e] px-[8px] py-[2px] text-[11px] font-semibold tracking-[-0.27px]">
    //               {item.badge}
    //             </span>
    //           )}
    //         </div>
    //         {idx < mobileServices.length - 1 && <div className="pt-[4px]" />}
    //       </article>
    //     ))}
    //   </div>
    // </section>
    <MobileTest />
  );
}

function MobileSection4() {
  return (
    <section className="bg-[#141414] px-[20px] py-[80px] text-white">
      <p className="font-archivo text-[20px] font-extrabold tracking-[-0.5px] text-[#b53131]">
        DDOBAGI TOOLS
      </p>
      <h2 className="font-archivo mt-[8px] text-[41px] font-extrabold leading-[1.1] tracking-[-1.03px]">
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
      <div className="mt-[32px] flex flex-col gap-5">
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
              <span className="text-[#b53131]">{item.descHighlight}</span>{" "}
              {item.descSuffix}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MobileSection5() {
  return (
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
          <p className="mt-[8px] text-[14px] text-[#5b5b5b]">누적 프로젝트</p>
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
  );
}

function MobileSection6() {
  return (
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
            <h3 className="font-archivo mt-[8px] text-[24px] font-bold leading-[1.1]">
              {item.title}
            </h3>
            <p className="mt-[10px] text-[14px] leading-[1.5] text-[#d2d2d2]">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MobileSection7({
  faqOpen,
  onToggle,
}: {
  faqOpen: number | null;
  onToggle: (index: number) => void;
}) {
  return (
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
              onClick={() => onToggle(idx)}>
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
  );
}

function MobileSection8() {
  return (
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
                  {person.ko} <span className="text-[13px]">{person.role}</span>
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
  );
}

function MobileSection9({
  agree,
  onToggleAgree,
}: {
  agree: boolean;
  onToggleAgree: () => void;
}) {
  return (
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
          onClick={onToggleAgree}
          className="flex items-start gap-[6px] text-left text-[12px] leading-[1.5] text-[#141414]">
          <span
            className={`mt-[2px] flex h-[12px] w-[12px] items-center justify-center rounded-[2px] border text-[10px] ${agree ? "border-[#141414] bg-[#141414] text-white" : "border-[#808080] bg-white text-transparent"}`}>
            ✓
          </span>
          개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변 목적으로만
          사용되며, 법정 보유기간 동안 안전하게 보관됩니다.
        </button>
        <button
          type="submit"
          className="mx-auto mt-[4px] rounded-[100px] bg-[#797979] px-[26px] py-[13px] text-[12px] font-semibold tracking-[-0.3px] text-white">
          문의 보내기
        </button>
      </form>
    </section>
  );
}

function MobileSection10() {
  return (
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
  );
}

export default function MobileMain() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [agree, setAgree] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[375px] md:hidden">
      <MobileSection1 />
      <MobileSection2 />
      <MobileSection3 />
      <MobileSection4 />
      <MobileSection5 />
      <MobileSection6 />
      <MobileSection7
        faqOpen={faqOpen}
        onToggle={(idx) => setFaqOpen(faqOpen === idx ? null : idx)}
      />
      <MobileSection8 />
      <MobileSection9
        agree={agree}
        onToggleAgree={() => setAgree((prev) => !prev)}
      />
      <MobileSection10 />
    </div>
  );
}
