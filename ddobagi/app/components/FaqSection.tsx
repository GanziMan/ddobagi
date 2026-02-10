"use client";

import { useState } from "react";

const faqs = [
  { q: "자주 하는 질문 1", a: "답변 내용을 입력하세요." },
  { q: "자주 하는 질문 2", a: "답변 내용을 입력하세요." },
  { q: "자주 하는 질문 3", a: "답변 내용을 입력하세요." },
  { q: "자주 하는 질문 4", a: "답변 내용을 입력하세요." },
  { q: "자주 하는 질문 5", a: "답변 내용을 입력하세요." },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-0">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-gray-200">
          <button
            className="w-full flex items-center justify-between py-5 text-left text-base font-medium text-foreground"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Q.</span>
              {faq.q}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="pb-5 text-sm text-gray-500 leading-relaxed pl-8">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
