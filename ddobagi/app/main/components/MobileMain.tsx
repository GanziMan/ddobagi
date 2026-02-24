"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { getMainContent, Locale, SUPPORTED_LOCALES } from "./locales";

type MobileNavId =
  | "tools-mobile"
  | "services-mobile"
  | "proposal-mobile"
  | "faq-mobile"
  | "support-mobile"
  | "request-mobile";

type MobileSectionId =
  | "tools-mobile"
  | "intro-mobile"
  | "services-mobile"
  | "performance-mobile"
  | "responsibility-mobile"
  | "proposal-mobile"
  | "faq-mobile"
  | "support-mobile"
  | "request-mobile"
  | "footer-mobile";

type SectionTone = "light" | "dark";

const MOBILE_SECTION_CONFIG: Array<{
  id: MobileSectionId;
  nav: MobileNavId;
  tone: SectionTone;
}> = [
  { id: "tools-mobile", nav: "tools-mobile", tone: "light" },
  { id: "intro-mobile", nav: "tools-mobile", tone: "dark" },
  { id: "services-mobile", nav: "services-mobile", tone: "light" },
  { id: "performance-mobile", nav: "services-mobile", tone: "dark" },
  { id: "responsibility-mobile", nav: "services-mobile", tone: "light" },
  { id: "proposal-mobile", nav: "proposal-mobile", tone: "dark" },
  { id: "faq-mobile", nav: "faq-mobile", tone: "light" },
  { id: "support-mobile", nav: "support-mobile", tone: "dark" },
  { id: "request-mobile", nav: "request-mobile", tone: "light" },
  { id: "footer-mobile", nav: "request-mobile", tone: "light" },
];

const MOBILE_HEADER_OFFSET = 45;

function MobileSection1Header({ locale }: { locale: Locale }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const currentPrefix = useMemo(() => {
    const first = pathname?.split("/").filter(Boolean)[0];
    return SUPPORTED_LOCALES.includes(first as Locale)
      ? (first as Locale)
      : null;
  }, [pathname]);

  const localeLabel: Record<Locale, string> = {
    ko: "KO",
    en: "EN",
    cn: "CN",
  };

  const changeLocale = (nextLocale: Locale) => {
    const segments = pathname?.split("/").filter(Boolean) ?? [];

    if (currentPrefix) {
      segments[0] = nextLocale;
      router.push(`/${segments.join("/")}`);
    } else router.push(`/${nextLocale}`);

    setIsLangOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-white">
      <div className="mx-auto flex py-4 w-full max-w-93.75 items-center justify-between px-5">
        <Image src="/icons/logo.svg" width={100} height={36} alt="logo" />

        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2 text-primary"
            onClick={() => setIsLangOpen((prev) => !prev)}>
            <Image
              src="/icons/global.svg"
              width={24}
              height={24}
              alt="language"
            />
            <span className="text-[16px] font-semibold leading-none tracking-[-0.4px]">
              {localeLabel[locale]}
            </span>
            <Image
              src="/icons/arrow-top.svg"
              width={16}
              height={16}
              alt="toggle"
              className={`transition-transform ${isLangOpen ? "" : "rotate-180"}`}
            />
          </button>

          {isLangOpen && (
            <div className="absolute -right-3 top-11 z-20 w-31.5 rounded-[20px] bg-white p-1 shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
              {SUPPORTED_LOCALES.map((item) => {
                const selected = locale === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => changeLocale(item)}
                    className={`flex w-full items-center justify-between rounded-2xl p-4 text-[16px] leading-none text-primary ${
                      selected ? "bg-[#e6d3d3]" : "bg-transparent"
                    }`}>
                    <span>{localeLabel[item]}</span>
                    {selected && <span className="text-[16px]">✓</span>}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function MobileStickyHeader({
  locale,
  activeNav,
  sectionTone,
  onMoveSection,
}: {
  locale: Locale;
  activeNav: MobileNavId;
  sectionTone: SectionTone;
  onMoveSection: (sectionId: MobileNavId) => void;
}) {
  const content = getMainContent(locale);

  const navItems = [
    { id: "tools-mobile", label: content.nav.tools },
    { id: "services-mobile", label: content.nav.service },
    { id: "proposal-mobile", label: content.nav.proposal },
    { id: "faq-mobile", label: content.nav.faq },
    { id: "support-mobile", label: content.nav.support },
    { id: "request-mobile", label: content.nav.request },
  ] as const;

  const sectionBgClass = sectionTone === "dark" ? "bg-[#141414]" : "bg-white";

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${sectionBgClass}`}>
      <div className="mx-auto w-full max-w-[375px]">
        <div className="overflow-x-auto border-b border-[#d86a6a] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onMoveSection(item.id)}
                  className={`h-[45px] shrink-0 px-2.5 font-pretendard text-[12px] font-bold tracking-[-0.3px] ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-transparent text-primary"
                  }`}>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSection1({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section
      id="tools-mobile"
      className="relative h-[667px] overflow-hidden bg-white px-[20px] pt-[210px]">
      <MobileSection1Header locale={locale} />

      <p className="pointer-events-none absolute left-1/2 top-[255px] -translate-x-1/2 text-center font-archivo text-[67px] font-extrabold leading-[1.08] tracking-[-1.6px] text-[#f2f2f2]">
        DDOBAGI
        <br />
        TOOLS
      </p>
      <h1 className="top-14 relative z-10 font-archivo text-[34px] font-extrabold leading-[1.05] tracking-[-1px] text-primary">
        {content.hero.headingTop}
        <br />
        {content.hero.headingMid}
        <br />
        {content.hero.headingBottom}
      </h1>

      <Image
        className="pointer-events-none absolute bottom-[120px] right-[0]"
        src="/icons/mobile-arrow.svg"
        width={128}
        height={128}
        alt="scroll down"
      />

      <button
        type="button"
        aria-label="chat"
        className="absolute bottom-[26px] right-[20px] z-10 flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-primary shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
        <span className="relative flex h-[32px] w-[32px] items-center justify-center">
          <Image src="/icons/balloon.svg" width={32} height={32} alt="" />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-[18px] font-bold leading-none text-primary">
            ?
          </span>
        </span>
      </button>
    </section>
  );
}

function MobileSection2({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section
      id="intro-mobile"
      className="bg-bk px-[20px] py-[80px] text-center text-white">
      <p className="font-archivo text-[14px] font-extrabold tracking-[-0.35px] text-primary">
        {content.oneStop.eyebrow}
      </p>
      <p className="mt-[28px] text-[15px] font-light leading-[1.3] tracking-[-0.37px]">
        {content.oneStop.line1}
        <br />
        {content.oneStop.line2}
      </p>
      <h2 className="mt-[14px] text-[24px] font-bold leading-[1.3] tracking-[-0.6px]">
        {content.oneStop.highlight}
      </h2>
      <p className="mt-[14px] text-[15px] font-light leading-[1.3] tracking-[-0.37px]">
        {content.oneStop.line3}
        <br />
        {content.oneStop.line4}
      </p>
      <p className="mt-[38px] whitespace-pre-line text-[12px] leading-[1.5] tracking-[-0.3px]">
        {content.oneStop.desc}
      </p>
    </section>
  );
}

function MobileSection3({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section
      id="services-mobile"
      className="min-h-screen bg-white px-5 py-20 flex justify-center">
      <div className="w-full max-w-[375px] flex flex-col gap-3">
        <header className="pb-[18px] rounded-[10.8px] flex flex-col gap-[18px]">
          <h1 className="text-[#141414] text-[16.8px] font-black font-['Archivo_Semi_Expanded'] tracking-wide">
            {content.services.eyebrow}
          </h1>
          <h2 className="text-[#b53131] text-[39px] font-black font-['Archivo_Semi_Expanded'] leading-tight">
            {content.services.titleTop}
            <br />
            {content.services.titleBottom}
          </h2>
        </header>

        <div className="flex flex-col gap-8">
          {content.services.mobileCards.map((card) => (
            <ServiceCard
              key={`${card.title}-${card.subtitle}`}
              title={card.title}
              subtitle={card.subtitle}
              iconSrc={card.iconSrc}
              description={card.description}
              details={card.details}
              showDetails={card.showDetails}
              badgeLabel={
                locale === "ko"
                  ? "기본구성"
                  : locale === "en"
                    ? "Base Package"
                    : "基础配置"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceCardProps = {
  title: string;
  subtitle: string;
  iconSrc: string;
  description: string;
  details?: string;
  showDetails?: boolean;
  badgeLabel: string;
};

function ServiceCard({
  title,
  subtitle,
  iconSrc,
  description,
  details,
  showDetails = true,
  badgeLabel,
}: ServiceCardProps) {
  return (
    <div className="w-full flex flex-col gap-0">
      <div className="w-full p-7 bg-neutral-100 rounded-t-[14.71px] flex justify-between items-center">
        <h3 className="text-[#141414] text-xl font-bold font-['Pretendard'] leading-tight">
          {title}
          <br />
          {subtitle}
        </h3>
        <div className="w-[68.63px] h-[68.63px] relative flex items-center justify-center flex-shrink-0">
          <Image
            src={iconSrc}
            alt={`${title} ${subtitle}`}
            width={68.63}
            height={68.63}
            
          />
        </div>
      </div>

      <div className="w-full p-7 bg-[#b53131] rounded-b-[14.71px] flex flex-col gap-6">
        <p className="text-white text-base font-medium font-['Pretendard'] leading-relaxed">
          {description}
        </p>
        {showDetails && details && (
          <div className="flex flex-col gap-[6.54px]">
            <div className="px-[6.54px] py-[1.63px] bg-[#961d1d] rounded-[81.71px] inline-flex justify-center items-center self-start">
              <span className="text-white text-xs font-semibold font-['Pretendard']">
                {badgeLabel}
              </span>
            </div>
            <p className="text-white text-xs font-normal font-['Pretendard'] leading-relaxed">
              {details}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function MobileSection4({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section
      id="performance-mobile"
      className="bg-[#141414] px-[20px] py-[80px] text-white flex flex-col items-center">
      <p className="font-archivo text-[20px] font-extrabold tracking-[-0.5px] text-[#b53131]">
        {content.performance.eyebrow}
      </p>
      <h2 className="font-archivo mt-[8px] text-[41px] font-extrabold leading-[1.1] tracking-[-1.03px]">
        {content.performance.title}
      </h2>
      <p className="mt-[22px] text-[26px] font-bold leading-[1.2] tracking-[-0.65px] whitespace-pre-line text-center">
        {content.performance.subtitle}
      </p>
      <p className="mt-[14px] text-[14px] leading-[1.5] tracking-[-0.35px] text-[#d7d7d7] whitespace-pre-line text-center">
        {content.performance.description}
      </p>
      <div className="h-[75px] border-r mt-8 " />
      <div className="relative bg-[#1e1e1e] w-full mt-8 px-6 rounded-xl py-8">
      <div className="absolute top-[-11.5px] left-1/2 -translate-x-1/2 px-1.5 py-0.75 text-[13px] bg-primary font-pretendard rounded-lg text-white font-medium">결과로 증명합니다.</div>
        <div className="flex flex-col gap-5 w-full">
          {content.performance.kpis.map((item, idx) => (
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
      </div>

      <button className=" mt-8 py-5 px-8 max-w-68 rounded-full bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-dark w-auto">
        {content.performance.cta}
      </button>
    </section>
  );
}

function MobileSection5({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);
  const [item1, item2, item3] = content.responsibility.items;
  const item1Value = item1.value.replace("+", "");
  const item2Value = item2.value.replace("%", "");

  return (
    <section
      id="responsibility-mobile"
      className="bg-white px-[20px] py-[80px] text-center">
      <p className="text-[30px] font-bold tracking-[-0.75px]">
        {content.responsibility.titleTop}
        <br />
        <span className="text-primary">
          {content.responsibility.titleBottom}
        </span>
      </p>
      <div className="mt-[24px] space-y-[12px]">
        <article className="rounded-[14px] px-[20px] py-[18px]">
          <p className="text-[14px] font-bold text-primary">{item1.label}</p>
          <p className="relative mt-4 font-archivo text-[74px] font-extrabold leading-none tracking-[-5px] text-[#141414]">
            {item1Value}
            <sup className="absolute top-[2px] text-[42px] font-bold tracking-normal">
              +
            </sup>
          </p>
          <p className="mt-1 text-[14px] text-[#5b5b5b]">{item1.desc}</p>
        </article>
        <article className="rounded-[14px] px-[20px] py-[18px]">
          <p className="text-[14px] font-bold text-primary">{item2.label}</p>
          <p className="relative mt-4 font-archivo text-[74px] font-extrabold leading-none tracking-[-5px] text-[#141414]">
            {item2Value}
            <sup className="absolute top-[8px] text-[30px] font-bold tracking-normal">
              %
            </sup>
          </p>
          <p className="mt-1 text-[14px] text-[#5b5b5b]">{item2.desc}</p>
        </article>
        <article className=" h-[178px] rounded-[14px] px-[20px] py-[18px]">
          <p className="text-[14px] font-bold text-primary">{item3.label}</p>
          <p className="mt-4 h-18 pb-4 flex items-center justify-center font-archivo text-[165px] font-semibold">
            {item3.value}
          </p>
          <p className="mt-1 text-[14px] text-[#5b5b5b]">{item3.desc}</p>
        </article>
      </div>
    </section>
  );
}

function MobileSection6({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section
      id="proposal-mobile"
      className="bg-bk px-[20px] py-[80px] text-white">
     
      <div className="relative isolate">
        <p className="absolute -top-8 font-archivo text-[50px] font-extrabold text-[#2f2e2e]">
          About
        </p>
        <p className="relative z-10 font-pretendard text-[23px] tracking-tighter font-bold whitespace-pre-line">
        {content.about.mobileHeading}
        </p>
      </div>
      <p className="mt-[8px] text-[15px] text-[#bfbfbf]">
        {content.about.mobileDescription}
      </p>
      <div className="mt-[24px] space-y-[12px]">
        {content.about.steps.map((item, idx) => (
          <article
            key={item.title}
            className="rounded-[14px] border border-[#4f4f4f] bg-[#212121] p-[20px]">
            <p className="text-[14px] font-semibold text-[#b53131]">
              0{idx + 1}
            </p>
            <h3 className="font-archivo mt-[8px] text-[24px] font-bold leading-[1.1]">
              {item.title}
            </h3>
            <p className="mt-[10px] whitespace-pre-line text-[14px] leading-[1.5] text-[#d2d2d2]">
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
  locale,
}: {
  faqOpen: number | null;
  onToggle: (index: number) => void;
  locale: Locale;
}) {
  const content = getMainContent(locale);

  return (
    <section id="faq-mobile" className="bg-white px-[20px] py-[80px]">
      <div className="relative isolate">
        <p className="absolute -top-8.5 font-archivo text-[50px] font-extrabold text-[#F6F6F6]">
          About
        </p>
        <p className="relative z-10 font-pretendard text-[23px] tracking-tighter font-bold whitespace-pre-line">
          {content.faq.title}
        </p>
      </div>
      <div className="mt-10 space-y-3.25">
        {content.faq.items.map((item, idx) => (
          <article key={item.q} className="rounded-[14px] bg-[#f5f5f5] p-7.5">
            <button
              className="flex w-full items-center justify-between gap-3 text-left"
              onClick={() => onToggle(idx)}>
              <div className="flex gap-[7.5px] text-[14px] font-semibold tracking-[-0.35px]">
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

function MobileSection8({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section
      id="support-mobile"
      className="bg-[#141414] px-[20px] py-[80px] text-white">
      <div className="relative isolate mt-39.25">
        <p className="absolute -top-9.5 z-0 font-archivo text-[50px] font-extrabold tracking-[-2px] text-[#2F2E2E]">
          {content.contact.bgTitle}
        </p>

        <p className="relative z-10 whitespace-pre-line font-archivo font-bold text-[20px] font-extraligh">
          {content.contact.heading}
        </p>
      </div>
      <button className="mt-[22px] rounded-[100px] bg-[#b53131] px-[26px] py-[12px] text-[13px] font-semibold tracking-[-0.3px]">
        {content.contact.cta}
      </button>
      <div className="mt-[22px] space-y-[12px]">
        {content.contact.contacts.map((person) => (
          <article
            key={person.en}
            className="rounded-[14px] border border-[#5a5a5a] bg-[#212121] p-[16px]">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-archivo text-[24px] font-black tracking-[-0.6px]">
                  {person.en}
                </p>
                <p className="mt-[4px] text-[22px] tracking-[-0.5px]">
                  {person.localName}{" "}
                  <span className="text-[13px]">{person.role}</span>
                </p>
              </div>
              <Image
                src={person.photo}
                alt={person.en}
                width={40}
                height={40}
                
              />
            </div>
            <div className="mt-[12px] grid grid-cols-2 gap-y-[8px] text-[12px] tracking-[-0.3px]">
              <p>
                <strong className="font-medium">
                  {content.contact.fields.phone}{" "}
                </strong>
                {person.phone}
              </p>
              <p>
                <strong className="font-medium">
                  {content.contact.fields.wechat}{" "}
                </strong>
                {person.wechat}
              </p>
              <p>
                <strong className="font-medium">
                  {content.contact.fields.tell}{" "}
                </strong>
                {person.tell}
              </p>
              <p>
                <strong className="font-medium">
                  {content.contact.fields.kakao}{" "}
                </strong>
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
  locale,
}: {
  agree: boolean;
  onToggleAgree: () => void;
  locale: Locale;
}) {
  const content = getMainContent(locale);

  return (
    <section id="request-mobile" className="bg-white px-[20px] py-[80px]">
      <div className="relative isolate text-center">
        <p className="absolute left-1/2 -translate-x-1/2 -top-7.5 font-archivo text-[50px] font-extrabold text-[#F6F6F6]">
          Call
        </p>
        <p className="relative z-10 font-pretendard text-[23px] tracking-tighter font-bold">
          {content.inquiry.title}
        </p>
      </div>
      <form className="mt-[30px] flex flex-col gap-[18px]">
        <label className="flex flex-col gap-[8px]">
          <span className="text-[14px] font-semibold">
            {content.inquiry.type}
          </span>
          <select
            className="h-[44px] rounded-[4px] bg-[#f5f5f5] px-[14px] text-[12px] text-[#808080] outline-none"
            defaultValue="">
            <option value="" disabled>
              {content.inquiry.typePlaceholder}
            </option>
            {content.inquiry.types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-[8px]">
          <span className="text-[14px] font-semibold">
            {content.inquiry.name}
          </span>
          <input
            className="h-[44px] rounded-[4px] bg-[#f5f5f5] px-[14px] text-[12px] outline-none"
            placeholder={content.inquiry.namePlaceholder}
          />
        </label>
        <label className="flex flex-col gap-[8px]">
          <span className="text-[14px] font-semibold">
            {content.inquiry.contact}
          </span>
          <input
            className="h-[44px] rounded-[4px] bg-[#f5f5f5] px-[14px] text-[12px] outline-none"
            placeholder={content.inquiry.contactPlaceholder}
          />
        </label>
        <label className="flex flex-col gap-[8px]">
          <span className="text-[14px] font-semibold">
            {content.inquiry.message}
          </span>
          <textarea
            className="h-[174px] resize-none rounded-[4px] bg-[#f5f5f5] px-[14px] py-[14px] text-[12px] outline-none"
            placeholder={content.inquiry.messagePlaceholder}
          />
        </label>
        <button
          type="button"
          onClick={onToggleAgree}
          className="flex items-start gap-[6px] text-left text-[12px] leading-[1.5] text-[#141414]">
          <span
            className={`mt-[2px] flex h-[12px] w-[12px] items-center justify-center rounded-[2px] border text-[10px] ${
              agree
                ? "border-[#141414] bg-[#141414] text-white"
                : "border-[#808080] bg-white text-transparent"
            }`}>
            ✓
          </span>
          {content.inquiry.consent}
        </button>
        <button
          type="submit"
          className="mx-auto mt-[4px] rounded-[100px] bg-[#797979] px-[26px] py-[13px] text-[12px] font-semibold tracking-[-0.3px] text-white">
          {content.inquiry.submit}
        </button>
      </form>
    </section>
  );
}

function MobileSection10({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <footer
      id="footer-mobile"
      className="bg-[#f5f5f5] px-[20px] pb-[40px] pt-[26px]">
      <div className="flex items-center justify-between border-b border-[#141414] pb-[20px]">
        <Image
          src="/icons/logo-color.svg"
          width={89}
          height={32}
          alt="ddobagi tools"
        />
        <div className="flex items-center gap-[16px] text-[12px] font-bold text-[#363636]">
          <span>{content.footer.terms}</span>
          <span>{content.footer.privacy}</span>
        </div>
      </div>
      <div className="mt-[12px] space-y-[8px] text-[12px] tracking-[-0.3px] text-[#141414]">
        <p>
          <strong>{content.footer.businessNo}</strong> 684-81-03181
        </p>
        <p>
          <strong>{content.footer.address}</strong> 서울특별시 마포구 양화로
          78-7, 3층
        </p>
        <p>
          <strong>{content.footer.email}</strong> ddobagitools@naver.com
        </p>
      </div>
    </footer>
  );
}

export default function MobileMain({ locale }: { locale: Locale }) {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [agree, setAgree] = useState(false);
  const [activeNav, setActiveNav] = useState<MobileNavId>("tools-mobile");
  const [sectionTone, setSectionTone] = useState<SectionTone>("light");
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  const navSectionIds = useMemo<MobileNavId[]>(
    () => [
      "tools-mobile",
      "services-mobile",
      "proposal-mobile",
      "faq-mobile",
      "support-mobile",
      "request-mobile",
    ],
    [],
  );

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPoint = window.scrollY + MOBILE_HEADER_OFFSET + 20;
      let current = MOBILE_SECTION_CONFIG[0];

      MOBILE_SECTION_CONFIG.forEach((sectionInfo) => {
        const section = document.getElementById(sectionInfo.id);

        if (section && scrollPoint >= section.offsetTop) {
          current = sectionInfo;
        }
      });

      setActiveNav(current.nav);
      setSectionTone(current.tone);

      const introSection = document.getElementById("intro-mobile");
      if (introSection) {
        setShowStickyHeader(window.scrollY >= introSection.offsetTop);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [navSectionIds]);

  const handleMoveSection = (sectionId: MobileNavId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      MOBILE_HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="mx-auto w-full max-w-[375px] md:hidden">
      {showStickyHeader && (
        <MobileStickyHeader
          locale={locale}
          activeNav={activeNav}
          sectionTone={sectionTone}
          onMoveSection={handleMoveSection}
        />
      )}
      <div>
        <MobileSection1 locale={locale} />
        <MobileSection2 locale={locale} />
        <MobileSection3 locale={locale} />
        <MobileSection4 locale={locale} />
        <MobileSection5 locale={locale} />
        <MobileSection6 locale={locale} />
        <MobileSection7
          locale={locale}
          faqOpen={faqOpen}
          onToggle={(idx) => setFaqOpen(faqOpen === idx ? null : idx)}
        />
        <MobileSection8 locale={locale} />
        <MobileSection9
          locale={locale}
          agree={agree}
          onToggleAgree={() => setAgree((prev) => !prev)}
        />
        <MobileSection10 locale={locale} />
      </div>
    </div>
  );
}
