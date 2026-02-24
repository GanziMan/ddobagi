"use client";

import { RefObject, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import { getMainContent, Locale, SUPPORTED_LOCALES } from "./locales";

const BRAND_LOGOS = Array.from(
  { length: 15 },
  (_, index) => `/images/brand-logos/logo-${index + 1}.png`,
);

function DesktopSection1({ locale }: { locale: Locale }) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const content = getMainContent(locale);

  const currentPrefix = useMemo(() => {
    const first = pathname?.split("/").filter(Boolean)[0];
    return SUPPORTED_LOCALES.includes(first as Locale)
      ? (first as Locale)
      : null;
  }, [pathname]);

  const changeLocale = (nextLocale: Locale) => {
    const segments = pathname?.split("/").filter(Boolean) ?? [];

    if (currentPrefix) {
      segments[0] = nextLocale;
      router.push(`/${segments.join("/")}`);
    } else {
      router.push(`/${nextLocale}`);
    }

    setIsLangOpen(false);
  };

  return (
    <header className="h-[96px] border-b border-[#ebebeb]">
      <div className="flex h-full mx-auto max-w-[1280px] items-center justify-between">
        <Image src="/icons/logo.svg" width={139} height={50} alt="logo" />

        <nav className="flex items-center gap-10 font-semibold tracking-[-0.4px] text-primary">
          <a href="#services">{content.nav.tools}</a>
          <a href="#about">{content.nav.service}</a>
          <a href="#services">{content.nav.proposal}</a>
          <a href="#contact">{content.nav.request}</a>
          <a href="#contact">{content.nav.support}</a>
          <a href="#faq">{content.nav.faq}</a>

          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2"
              onClick={() => setIsLangOpen((prev) => !prev)}>
              <Image
                src="/icons/global.svg"
                width={24}
                height={24}
                alt="language"
              />
              <span>{content.langLabel}</span>
              <Image
                src="/icons/arrow-top.svg"
                width={16}
                height={16}
                alt="toggle"
                className={`transition-transform ${isLangOpen ? "" : "rotate-180"}`}
              />
            </button>

            {isLangOpen && (
              <div className="absolute -left-5 top-11 z-20 w-31.5 rounded-[20px] bg-white p-1 shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
                {SUPPORTED_LOCALES.map((item) => {
                  const selected = locale === item;
                  const label = getMainContent(item).langLabel;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => changeLocale(item)}
                      className={`flex w-full items-center justify-between rounded-2xl p-4 text-[16px] leading-none ${
                        selected ? "bg-[#e6d3d3]" : "bg-transparent"
                      }`}>
                      <span>{label}</span>
                      {selected && <span className="text-[16px]">✓</span>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

function DesktopSection2({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section className="relative bg-white text-[#f6f6f6] overflow-hidden py-[120px] flex items-center justify-center">
      <div className="relative px-5 md:px-0">
        <p className="pointer-events-none select-none text-center text-[13vw] md:text-[15vw] font-archivo font-extrabold text-[#f6f6f6] leading-none">
          DDOBAGI
          <br />
          TOOLS
        </p>
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4">
          <p className="font-archivo text-[#B53131] text-[40px] md:text-[80px] lg:text-[120px] leading-[110%] text-center font-extrabold break-keep">
            <span>{content.hero.headingTop}</span>
            <br />
            <span>{content.hero.headingMid}</span>
            <br />
            <span>{content.hero.headingBottom}</span>
          </p>
        </div>
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

function DesktopSection3({
  locale,
  sectionRef,
}: {
  locale: Locale;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const content = getMainContent(locale);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 32,
    mass: 0.45,
  });
  const progress = useTransform(smoothed, [0, 0.03, 1], [0, 0, 1]);
  const whiteFadeOpacity = useTransform(progress, [0, 0.16], [1, 0]);
  const videoOpacity = useTransform(progress, [0.04, 0.45], [0, 1]);
  const videoScale = useTransform(progress, [0.04, 0.62], [1.05, 1]);
  const textOpacity = useTransform(progress, [0.18, 0.66], [0, 1]);
  const textY = useTransform(progress, [0.18, 0.66], [76, 0]);

  return (
    <section ref={sectionRef} className="relative h-[100vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-bk">
        <motion.div
          className="absolute inset-0 bg-white"
          style={{ opacity: whiteFadeOpacity }}
        />
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: videoOpacity, scale: videoScale }}
          src="/videos/wave.mp4"
        />

        <motion.h2
          className="absolute text-primary left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 font-archivo text-[40px] md:text-[80px] lg:text-[120px] font-extrabold leading-[110%] text-center tracking-[-2px] drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]"
          style={{ opacity: textOpacity, y: textY }}>
          {content.hero.headingTop}
          <br />
          {content.hero.headingMid}
          <br />
          {content.hero.headingBottom}
        </motion.h2>
      </div>
    </section>
  );
}

function DesktopSection4({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section className="bg-bk py-[136px] text-center text-white">
      <p className="font-archivo text-[28px] font-extrabold text-[#B53131] opacity-80">
        {content.oneStop.eyebrow}
      </p>
      <p className="mt-15 text-[30px] font-light opacity-80 break-keep">
        {content.oneStop.line1}
        <br /> {content.oneStop.line2}
      </p>
      <h2 className="mt-7.5 text-[48px] font-extrabold">
        {content.oneStop.highlight}
      </h2>
      <p className="mt-7.5 text-[30px] font-light opacity-80 break-keep">
        {content.oneStop.line3}
        <br /> {content.oneStop.line4}
      </p>

      <p className="mt-19.5 text-[19px] opacity-80 break-keep whitespace-pre-line">
        {content.oneStop.desc}
      </p>
    </section>
  );
}

function DesktopSection5({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section id="services" className="bg-white py-[140px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 grid-cols-2 gap-6.25 grid-cols-3">
        <div className="mb-0">
          <p className="font-archivo text-[28px] font-extrabold tracking-[-0.7px]">
            {content.services.eyebrow}
          </p>
          <h2 className="font-archivo mb-12 text-[65px] font-extrabold leading-[1.1] tracking-[-1.625px] text-[#B53131]">
            {content.services.titleTop}
            <br />
            {content.services.titleBottom}
          </h2>
        </div>

        {content.services.desktopItems.map((item, i) => (
          <div
            key={item.title}
            className="flex flex-col gap-10.5 rounded-[18px] bg-[#f9f9f9] p-12">
            <h3 className="text-xl font-bold whitespace-pre-line">{item.title}</h3>
            <div className="w-full">
              <Image
                src={`/images/section3/icon-${i + 1}.png`}
                width={84}
                height={84}
                alt={item.title}
                className="float-end h-[84px] w-[84px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopSection6({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section
      id="about"
      className="flex flex-col items-center gap-25 bg-[#141414] py-[150px] text-white">
      <div className="text-center">
        <p className="font-archivo text-[26px] font-extrabold tracking-[-0.6px]">
          {content.performance.eyebrow}
        </p>
        <h2 className="mt-[6px] font-archivo text-[76px] font-extrabold leading-none tracking-[-2px] text-[#b53131]">
          {content.performance.title}
        </h2>
        <p className="mt-[36px] text-[46px] font-bold leading-[1.2] tracking-[-1px]">
          {content.performance.subtitle}
        </p>
        <p className="mt-[18px] text-[20px] leading-[1.6] tracking-[-0.4px] text-[#d7d7d7]">
          {content.performance.description}
        </p>
      </div>

      <div className="h-[150px] border-r" />

      <div className="bg-[#1e1e1e] relative px-[217.5px] py-[117.5px] max-w-[1280px] w-full flex justify-center items-center">
        
        <div className="absolute top-[-22px] left-1/2 -translate-x-1/2 px-[13px] py-[6px] bg-primary font-pretendard rounded-lg text-white text-[26px] font-medium">결과로 증명합니다.</div>
        <div className="grid w-full grid-cols-2 gap-5 bg-bk justify-center">
          {content.performance.kpis.map((item, idx) => (
            <div
              key={item.title}
              className={`col-span-1 w-[410px] rounded-[18px] bg-white p-12 text-white ${idx === 0 ? "" : "opacity-95"}`}>
              <div className="relative flex flex-col gap-2">
                <p className="font-archivo text-[45px] font-extrabold leading-11 tracking-[-3px] text-primary">
                  {item.value.replace(/[+%]$/, "")}
                  {/[+%]$/.test(item.value) && (
                    <sup className="absolute text-lg">
                      {item.value.slice(-1)}
                    </sup>
                  )}
                </p>
                <p className="text-[22px] font-bold leading-7 tracking-[-1px] text-bk">
                  {item.title}
                </p>
              </div>
              <div className="mt-7 w-full border-t border-primary" />
              <p className="mt-10 text-right text-base font-medium text-bk">
                {item.descPrefix}
                <br />
                <span className="text-primary">{item.descHighlight}</span>
                {item.descSuffix}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-31.5 max-w-68 rounded-full bg-primary px-11 py-6.5 text-2xl font-semibold text-white transition-colors hover:bg-primary-dark w-auto">
        {content.performance.cta}
      </button>
    </section>
  );
}

function DesktopSection7({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);
  const [item1, item2, item3] = content.responsibility.items;

  return (
    <section className="bg-white py-[140px] text-center">
      <p className="text-5xl font-bold tracking-[-0.75px]">
        {content.responsibility.titleTop}
        <br />
        <span className="text-primary">
          {content.responsibility.titleBottom}
        </span>
      </p>

      <p className="text-[22px] font-normal mt-7.5 whitespace-pre-line">
        {content.responsibility.description}
      </p>

      <div className="mx-auto mt-14 flex max-w-[1280px] justify-between">
        <article className="rounded-[18px] px-[30px] py-[34px]">
          <p className="ml-3 text-left text-2xl font-bold text-primary">
            {item1.label}
          </p>
          <p className="relative pt-8 text-left font-archivo text-[128px] font-extrabold leading-none tracking-[-9.8px]">
            {item1.value.replace("+", "")}
            <sup className="font-archivo absolute top-1 text-[72px] font-bold">
              +
            </sup>
          </p>
          <p className="ml-3 mt-[10px] text-left text-lg text-bk">
            {item1.desc}
          </p>
        </article>

        <article className="relative rounded-[18px] px-[30px] py-[34px]">
          <p className="ml-3 text-left text-2xl font-bold text-primary">
            {item2.label}
          </p>
          <p className="relative pt-8 text-left font-archivo text-[128px] font-extrabold leading-none tracking-[-9.8px]">
            {item2.value.replace("%", "")}
            <sup className="absolute top-6 text-[46px] font-bold">%</sup>
          </p>
          <p className="ml-3 mt-2.5 text-left text-lg text-bk">{item2.desc}</p>
        </article>

        <article className="relative rounded-[18px] px-[30px] py-[34px]">
          <p className="ml-3 text-left text-2xl font-bold text-primary">
            {item3.label}
          </p>
          <p className="absolute inset-0 bottom-15 left-6 top-15 flex items-center font-archivo text-[300px] font-semibold">
            {item3.value}
          </p>
          <div className="h-32" />
          <p className="ml-3 mt-10 text-left text-lg text-bk">{item3.desc}</p>
        </article>
      </div>

      <div className="mx-auto mt-[78px] w-full max-w-[1280px] overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-[24px]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          {[...BRAND_LOGOS, ...BRAND_LOGOS].map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="flex h-[74px] w-[115px] shrink-0 items-center justify-center">
              <Image
                src={src}
                width={115}
                height={74}
                alt={`brand logo ${(idx % BRAND_LOGOS.length) + 1}`}
                className="h-[74px] w-[115px] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DesktopSection8({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section className="bg-bk py-35 text-white flex justify-center">
      <div className="relative w-full max-w-[1280px] mx-auto text-left">
        <div className="relative isolate">
          <p className="absolute -top-15.5 z-0 font-archivo text-[100px] font-extrabold tracking-[-2px] text-[#2F2E2E]">
            {content.about.bgTitle}
          </p>

          <p className="relative z-10 font-archivo text-[40px] font-extralight">
            {content.about.titleTop}
            <br />
            {content.about.titleMid}
            <span className="font-pretendard font-light">
              {" "}
              {content.about.titleSuffix}
            </span>
          </p>
        </div>

        <h2 className="mt-7.5 text-[40px] font-bold tracking-[-1px]">
          {content.about.heading}
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-5">
          {content.about.steps.map((item) => (
            <article
              key={item.title}
              className="rounded-[18px] border border-[#4f4f4f] bg-[#212121] px-5 py-10 text-center">
              <h3 className="font-archivo text-[34px] font-bold leading-[1.1] text-primary">
                {item.title}
              </h3>
              <p className="mt-5 whitespace-pre-line font-pretendard text-[22px] font-normal leading-normal text-[#d2d2d2]">
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
  locale,
}: {
  faqOpen: number | null;
  onToggle: (index: number) => void;
  locale: Locale;
}) {
  const content = getMainContent(locale);

  return (
    <section
      id="faq"
      className="bg-white py-35 flex gap-54.75 w-full max-w-[1280px] mx-auto">
      <div className="relative isolate">
        <p className="absolute -top-15.5 font-archivo text-[100px] font-extrabold tracking-[-2px] text-[#F6F6F6]">
          FAQ
        </p>
        <p className="relative z-10 font-pretendard text-[40px] font-bold whitespace-pre-line">
          {content.faq.title}
        </p>
      </div>

      <div className="flex-1 space-y-5">
        {content.faq.items.map((item, idx) => (
          <article
            key={item.q}
            className="w-full rounded-[20px] bg-[#f5f5f5] p-12">
            <button
              className="flex w-full items-start justify-between"
              onClick={() => onToggle(idx)}>
              <div className="flex w-full gap-2 text-[22px] font-semibold tracking-[-0.5px] text-left">
                <span>Q.</span>
                <p>{item.q}</p>
              </div>

              <Image
                src="/icons/arrow-bottom.svg"
                width={33}
                height={33}
                alt="toggle"
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

function DesktopSection10({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <section id="contact" className="bg-bk py-27.5 text-white">
      <div className="w-full max-w-[1280px] mx-auto flex justify-between gap-55.75">
        <div>
          <div className="relative isolate mt-39.25">
            <p className="absolute -top-15.5 z-0 font-archivo text-[110px] font-extrabold tracking-[-2px] text-[#2F2E2E]">
              {content.contact.bgTitle}
            </p>

            <p className="relative z-10 whitespace-pre-line font-archivo text-[48px] font-extraligh">
              {content.contact.heading}
            </p>
          </div>
          <button className="mt-15 flex items-center gap-3.5 rounded-[100px] bg-primary px-12 py-6.5 text-2xl font-semibold tracking-[-0.3px]">
            <span>{content.contact.cta}</span>
            <Image
              src="/icons/arrow-right.svg"
              width={20}
              height={27}
              alt="arrow"
            />
          </button>
        </div>
        <div className="w-[620px] flex-1 space-y-[24px]">
          {content.contact.contacts.map((person) => (
            <article
              key={person.en}
              className="rounded-[18px] border border-[#5a5a5a] bg-[#212121] p-[40px]">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-archivo text-[34px] font-black tracking-[-0.8px]">
                    {person.en}
                  </p>
                  <p className="mt-[10px] text-[34px] tracking-[-0.8px]">
                    {person.localName}{" "}
                    <span className="text-[18px]">{person.role}</span>
                  </p>
                </div>
                <Image
                  src={person.photo}
                  alt={person.en}
                  width={80}
                  height={80}
                />
              </div>

              <div className="mt-[26px] grid grid-cols-2 gap-y-[14px] text-[18px] tracking-[-0.45px]">
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
      </div>
    </section>
  );
}

function DesktopSection11({
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
    <section className="bg-white py-[140px]">
      <h2 className="text-center text-[44px] font-bold tracking-[-1px]">
        {content.inquiry.title}
      </h2>

      <form className="mx-auto mt-[56px] flex max-w-[1280px] flex-col gap-[34px]">
        <div className="grid grid-cols-2 gap-[32px]">
          <label className="flex flex-col gap-[14px]">
            <span className="text-[20px] font-semibold">
              {content.inquiry.type}
            </span>
            <select
              className="h-[72px] rounded-[8px] bg-[#f5f5f5] text-[18px] text-[#808080] outline-none appearance-none px-6"
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
          <div />
        </div>

        <div className="grid grid-cols-2 gap-[32px]">
          <label className="flex flex-col gap-[14px]">
            <span className="text-[20px] font-semibold">
              {content.inquiry.name}
            </span>
            <input
              className="h-[72px] rounded-[8px] bg-[#f5f5f5] px-[24px] text-[18px] outline-none"
              placeholder={content.inquiry.namePlaceholder}
            />
          </label>
          <label className="flex flex-col gap-[14px]">
            <span className="text-[20px] font-semibold">
              {content.inquiry.contact}
            </span>
            <input
              className="h-[72px] rounded-[8px] bg-[#f5f5f5] px-[24px] text-[18px] outline-none"
              placeholder={content.inquiry.contactPlaceholder}
            />
          </label>
        </div>

        <label className="flex flex-col gap-[14px]">
          <span className="text-[22px] font-semibold">
            {content.inquiry.message}
          </span>
          <textarea
            className="h-[348px] resize-none rounded-[8px] bg-[#f5f5f5] px-[24px] py-[20px] text-[18px] outline-none"
            placeholder={content.inquiry.messagePlaceholder}
          />
        </label>

        <button
          type="button"
          onClick={onToggleAgree}
          className="flex items-center gap-2 text-left text-[16px] text-bk">
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full border ${
              agree ? "border-[#808080] bg-white text-transparent" : ""
            }`}>
            ✓
          </span>
          {content.inquiry.consent}
        </button>

        <button
          type="submit"
          className="mx-auto mt-2 flex items-center gap-3.5 rounded-[100px] bg-[#797979] px-13 py-6.5 text-[24px] font-semibold tracking-[-0.6px] text-white">
          <span>{content.inquiry.submit}</span>
          <Image
            src="/icons/arrow-right.svg"
            width={20}
            height={27}
            alt="arrow"
            className="inline"
          />
        </button>
      </form>
    </section>
  );
}

function DesktopSection12({ locale }: { locale: Locale }) {
  const content = getMainContent(locale);

  return (
    <footer className="w-full bg-[#f5f5f5] pb-[54px] pt-[40px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between border-b border-[#141414] pb-[28px]">
        <Image
          src="/icons/logo-color.svg"
          width={117}
          height={42}
          alt="ddobagi tools"
        />
        <div className="flex items-center gap-10 text-[16px] font-bold text-[#363636]">
          <span>{content.footer.terms}</span>
          <span>{content.footer.privacy}</span>
        </div>
      </div>

      <div className="mx-auto mt-[24px] flex max-w-[1280px] items-center gap-[40px] text-[18px] tracking-[-0.4px] text-[#141414]">
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

export default function DesktopMain({ locale }: { locale: Locale }) {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [agree, setAgree] = useState(false);
  const section3Ref = useRef<HTMLElement>(null);

  return (
    <div className="hidden md:block">
      <DesktopSection1 locale={locale} />
      <div className="w-full min-w-[1280px] mx-auto">
        <DesktopSection2 locale={locale} />
        <DesktopSection3 locale={locale} sectionRef={section3Ref} />
        <DesktopSection4 locale={locale} />
        <DesktopSection5 locale={locale} />
        <DesktopSection6 locale={locale} />
        <DesktopSection7 locale={locale} />
        <DesktopSection8 locale={locale} />
        <DesktopSection9
          locale={locale}
          faqOpen={faqOpen}
          onToggle={(idx) => setFaqOpen(faqOpen === idx ? null : idx)}
        />
        <DesktopSection10 locale={locale} />
        <DesktopSection11
          locale={locale}
          agree={agree}
          onToggleAgree={() => setAgree((prev) => !prev)}
        />
        <DesktopSection12 locale={locale} />
      </div>
    </div>
  );
}
