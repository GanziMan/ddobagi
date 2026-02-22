export const SUPPORTED_LOCALES = ["ko", "en", "cn"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

type Kpi = {
  value: string;
  title: string;
  descPrefix: string;
  descHighlight: string;
  descSuffix: string;
};

type Step = {
  title: string;
  desc: string;
};

type FaqItem = {
  q: string;
  a: string;
};

type Contact = {
  en: string;
  localName: string;
  role: string;
  phone: string;
  wechat: string;
  tell: string;
  kakao: string;
  photo: string;
};

type ServiceItem = {
  title: string;
  desc: string;
  badge: string | null;
};

type ProofItem = {
  label: string;
  value: string;
  desc: string;
};

type MobileServiceCard = {
  title: string;
  subtitle: string;
  iconSrc: string;
  description: string;
  details?: string;
  showDetails?: boolean;
};

export type MainContent = {
  langLabel: string;
  nav: {
    tools: string;
    service: string;
    proposal: string;
    request: string;
    support: string;
    faq: string;
  };
  hero: {
    headingTop: string;
    headingMid: string;
    headingBottom: string;
  };
  oneStop: {
    eyebrow: string;
    line1: string;
    line2: string;
    highlight: string;
    line3: string;
    line4: string;
    desc: string;
  };
  services: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    desktopItems: ServiceItem[];
    mobileCards: MobileServiceCard[];
  };
  performance: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    kpis: Kpi[];
  };
  responsibility: {
    titleTop: string;
    titleBottom: string;
    description: string;
    items: ProofItem[];
  };
  about: {
    bgTitle: string;
    titleTop: string;
    titleMid: string;
    titleSuffix: string;
    heading: string;
    mobileHeading: string;
    mobileDescription: string;
    steps: Step[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  contact: {
    bgTitle: string;
    heading: string;
    cta: string;
    contacts: Contact[];
    fields: {
      phone: string;
      wechat: string;
      tell: string;
      kakao: string;
    };
  };
  inquiry: {
    title: string;
    type: string;
    name: string;
    contact: string;
    message: string;
    typePlaceholder: string;
    namePlaceholder: string;
    contactPlaceholder: string;
    messagePlaceholder: string;
    consent: string;
    submit: string;
    types: string[];
  };
  footer: {
    terms: string;
    privacy: string;
    businessNo: string;
    address: string;
    email: string;
  };
};

const baseContacts: Omit<Contact, "role">[] = [
  {
    en: "Do han",
    localName: "도 한",
    phone: "010-3550-8317",
    wechat: "workacount6688",
    tell: "070-5046-4401",
    kakao: "ddobagikorea",
    photo:
      "https://www.figma.com/api/mcp/asset/98050360-0833-4f6d-b359-386f42e74176",
  },
  {
    en: "Park Jihyun",
    localName: "박지현",
    phone: "010-8127-6115",
    wechat: "ddobagikorea888",
    tell: "070-5046-4407",
    kakao: "dbgkr-piao",
    photo:
      "https://www.figma.com/api/mcp/asset/727da113-b95b-422d-be15-a09132fa6f7d",
  },
];

const MAIN_CONTENT: Record<Locale, MainContent> = {
  ko: {
    langLabel: "KR",
    nav: {
      tools: "또바기툴즈",
      service: "서비스",
      proposal: "자사 제안서",
      request: "작업 의뢰",
      support: "고객센터",
      faq: "FAQ",
    },
    hero: {
      headingTop: "Korea",
      headingMid: "Business Setup &",
      headingBottom: "Entry Consulting",
    },
    oneStop: {
      eyebrow: "DDOBAGI TOOLS ONE-STOP SOLUTION",
      line1: "맞춤형 컨설팅과 함께",
      line2: "나만의 회사를 설립해보세요",
      highlight: "단 25일 이내 완성!",
      line3: "한국 법인 설립부터",
      line4: "내가 원하는 플랫폼 어디든 입점 가능",
      desc: "고객에 공감하고 상황과 니즈에 맞춰\n현지 정착 솔루션을 제공합니다.",
    },
    services: {
      eyebrow: "DDOBAGI TOOLS",
      titleTop: "What",
      titleBottom: "We DO",
      desktopItems: [
        {
          title: "D8 투자비자 발급 대행",
          desc: "서비스 설명을 입력하세요.",
          badge: null,
        },
        {
          title: "온라인 유통 마케팅 지원",
          desc: "서비스 설명을 입력하세요.",
          badge: null,
        },
        {
          title: "전문 세무 회계 관리",
          desc: "서비스 설명을 입력하세요.",
          badge: null,
        },
        {
          title: "한국 법인 설립 대행",
          desc: "서비스 설명을 입력하세요.",
          badge: null,
        },
        {
          title: "외국인투자기업(FDI) 등록 지원",
          desc: "서비스 설명을 입력하세요.",
          badge: null,
        },
      ],
      mobileCards: [
        {
          title: "D8 투자비자",
          subtitle: "발급 대행",
          iconSrc: "/2231-966.svg",
          description: "D8 투자비자 발급을 최고의 행정팀과 함께 준비해드립니다",
          details: "아포스티유 공증 + D8 비자 신고, 서류 업무 대행",
          showDetails: true,
        },
        {
          title: "온라인 유통",
          subtitle: "마케팅 지원",
          iconSrc: "/2231-988.svg",
          description:
            "한국 진출 후 판매까지 오픈마켓 온라인 유통 마케팅 전문 운영진이 함께합니다",
          showDetails: false,
        },
        {
          title: "전문 세무",
          subtitle: "회계 관리",
          iconSrc: "/2231-1006.svg",
          description:
            "외국인 법인 특화 세무관리, 신고, 연말정산까지 완벽하게 처리",
          showDetails: false,
        },
        {
          title: "한국 법인",
          subtitle: "설립 대행",
          iconSrc: "/2231-1043.svg",
          description:
            "국내 거소가 없어도 문제 없습니다. 외국인을 위한 맞춤 설립 절차 진행",
          details:
            "아포스티유 공증 + 법인등기 + 법인인감증명서 + 사업자등록증 + 계좌 개설 + 통신판매업신고까지",
          showDetails: true,
        },
        {
          title: "외국인투자기업(FDI)",
          subtitle: "등록 지원",
          iconSrc: "/2231-1078.svg",
          description:
            "세금 감면, 정부 혜택 등 외투기업으로 누릴 수 있는 이점을 확보하세요",
          details: "아포스티유 공증 + 외국인투자기업(FDI) 등록",
          showDetails: true,
        },
      ],
    },
    performance: {
      eyebrow: "DDOBAGI TOOLS",
      title: "Our Service",
      subtitle: "수백 건 이상의 외국 법인 설립 실적",
      description:
        "이미 수많은 외국인 사업가들이 한국 시장에 진출할 때 저희를 선택했습니다.",
      cta: "지금 바로 문의하기",
      kpis: [
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
      ],
    },
    responsibility: {
      titleTop: "우리는 A부터 Z까지",
      titleBottom: "모든 과정을 책임집니다",
      description:
        "DDOBAGI TOOLS는 나의 회사라는 마음가짐으로\n모든 프로젝트를 책임집니다.",
      items: [
        {
          label: "성공 사례",
          value: "1000+",
          desc: "중국 기업의 성공적인 한국 시장 진출을 지원",
        },
        {
          label: "로컬 전문팀 보유",
          value: "100%",
          desc: "중·한 이중 언어에 능통한 전문 인력 구성",
        },
        {
          label: "인허가 원스톱 솔루션",
          value: "∞",
          desc: "안전한 영주권 설계 및 비자 발급",
        },
      ],
    },
    about: {
      bgTitle: "About",
      titleTop: "DDOBAGI TOOLS",
      titleMid: "ONE-STOP SOLUTION",
      titleSuffix: "에 대한",
      heading: "자세한 내용이 궁금하시다면?",
      mobileHeading: "ONE-STOP SOLUTIONS에 의한",
      mobileDescription: "복잡한 비즈니스 과정도 쉽고 빠르게",
      steps: [
        {
          title: "Service",
          desc: "‘언제나 한결같이 꼭 그렇게’\n또바기가 고객님과 함께 만들어가겠습니다.",
        },
        {
          title: "FAQ",
          desc: "각 종 법인설립과 관련된\n궁금하신 부분을 안내 드립니다.",
        },
        {
          title: "Contact",
          desc: "또바기와 법인설립에\n관련된 문의사항을 남겨주세요.",
        },
      ],
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        {
          q: "한국에 지인이 있어야만 법인 설립이 가능한가요?",
          a: "가능합니다. 업종과 체류 자격 요건을 먼저 확인한 뒤, 적합한 설립 경로를 설계해 진행합니다.",
        },
        {
          q: "법인 설립과 비자 발급을 동시에 할 수 있나요?",
          a: "케이스별로 다르지만 일반적으로 서류 준비부터 등록 완료까지 약 3~5주를 기준으로 안내드립니다.",
        },
        {
          q: "한국에 사무실이 꼭 있어야 하나요?",
          a: "가능합니다. 설립 일정과 비자 일정을 병행할 수 있도록 단계별로 스케줄을 맞춰 진행합니다.",
        },
        {
          q: "절차는 얼마나 걸리나요?",
          a: "네. 설립 이후에도 세무 신고, 기장, 운영 컨설팅까지 연속 지원 가능합니다.",
        },
      ],
    },
    contact: {
      bgTitle: "Contact",
      heading: "또바기툴즈는\n항상 준비되어 있습니다.",
      cta: "문의하기",
      contacts: [
        { ...baseContacts[0], role: "팀장" },
        { ...baseContacts[1], role: "매니저" },
      ],
      fields: {
        phone: "Phone",
        wechat: "Wechat",
        tell: "Tell",
        kakao: "Kakao",
      },
    },
    inquiry: {
      title: "간편 문의",
      type: "문의 종류",
      name: "이름",
      contact: "연락처",
      message: "문의 내용",
      typePlaceholder: "선택해주세요",
      namePlaceholder: "이름을 입력해주세요",
      contactPlaceholder: "연락 가능한 이메일 또는 전화번호",
      messagePlaceholder: "궁금한 내용을 자세히 적어주세요",
      consent:
        "개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변 목적으로만 사용되며, 법정 보유기간 동안 안전하게 보관됩니다.",
      submit: "문의 보내기",
      types: ["법인 설립", "비자 및 행정", "유통/마케팅", "기타"],
    },
    footer: {
      terms: "서비스 이용약관",
      privacy: "개인정보처리방침",
      businessNo: "사업자등록번호.",
      address: "주소.",
      email: "이메일.",
    },
  },
  en: {
    langLabel: "EN",
    nav: {
      tools: "Ddobagi Tools",
      service: "Services",
      proposal: "Company Deck",
      request: "Project Request",
      support: "Support",
      faq: "FAQ",
    },
    hero: {
      headingTop: "Korea",
      headingMid: "Business Setup &",
      headingBottom: "Entry Consulting",
    },
    oneStop: {
      eyebrow: "DDOBAGI TOOLS ONE-STOP SOLUTION",
      line1: "Launch your company",
      line2: "with tailored consulting",
      highlight: "Completed within 25 days!",
      line3: "From incorporation in Korea",
      line4: "to listing on your target platforms",
      desc: "We align with your business needs\nand provide practical local settlement solutions.",
    },
    services: {
      eyebrow: "DDOBAGI TOOLS",
      titleTop: "What",
      titleBottom: "We Do",
      desktopItems: [
        {
          title: "D-8 Investor Visa Support",
          desc: "Service details will be added.",
          badge: null,
        },
        {
          title: "Online Distribution & Marketing",
          desc: "Service details will be added.",
          badge: null,
        },
        {
          title: "Professional Tax & Accounting",
          desc: "Service details will be added.",
          badge: null,
        },
        {
          title: "Korean Corporation Setup",
          desc: "Service details will be added.",
          badge: null,
        },
        {
          title: "FDI Registration Support",
          desc: "Service details will be added.",
          badge: null,
        },
      ],
      mobileCards: [
        {
          title: "D-8 Investor Visa",
          subtitle: "Support",
          iconSrc: "/2231-966.svg",
          description:
            "Prepare your D-8 visa with our specialized administration team.",
          details: "Apostille notarization + D-8 filing + document processing",
          showDetails: true,
        },
        {
          title: "Online Distribution",
          subtitle: "Marketing",
          iconSrc: "/2231-988.svg",
          description:
            "From market entry to sales, our e-commerce specialists support your growth.",
          showDetails: false,
        },
        {
          title: "Tax",
          subtitle: "Accounting",
          iconSrc: "/2231-1006.svg",
          description:
            "Foreign-invested business tax management, reporting, and closing support.",
          showDetails: false,
        },
        {
          title: "Korean Entity",
          subtitle: "Setup",
          iconSrc: "/2231-1043.svg",
          description:
            "No local residence in Korea? We still guide you through a tailored process.",
          details:
            "Apostille + registration + business license + bank account + e-commerce filing",
          showDetails: true,
        },
        {
          title: "FDI",
          subtitle: "Registration",
          iconSrc: "/2231-1078.svg",
          description:
            "Secure tax benefits and policy incentives available to FDI companies.",
          details: "Apostille notarization + FDI registration",
          showDetails: true,
        },
      ],
    },
    performance: {
      eyebrow: "DDOBAGI TOOLS",
      title: "Our Service",
      subtitle: "Proven track record in foreign corporation setup",
      description:
        "Entrepreneurs entering Korea continue to choose Ddobagi for reliable execution.",
      cta: "Contact Us Now",
      kpis: [
        {
          value: "1000+",
          title: "Incorporation Projects",
          descPrefix: "Hundreds of completed",
          descHighlight: "foreign entity setups",
          descSuffix: "delivered",
        },
        {
          value: "300+",
          title: "Visa / Admin Cases",
          descPrefix: "Hands-on",
          descHighlight: "market-entry operations",
          descSuffix: "supported",
        },
        {
          value: "50+",
          title: "Expert Partners",
          descPrefix: "Tax, labor, and legal",
          descHighlight: "network-based",
          descSuffix: "response",
        },
        {
          value: "98%",
          title: "Client Satisfaction",
          descPrefix: "Driven by repeat projects",
          descHighlight: "and referrals",
          descSuffix: "after delivery",
        },
      ],
    },
    responsibility: {
      titleTop: "From A to Z,",
      titleBottom: "we own the full process",
      description:
        "At DDOBAGI TOOLS, we take ownership of every project\nas if it were our own company.",
      items: [
        {
          label: "Success Cases",
          value: "1000+",
          desc: "Helped Chinese companies enter the Korean market successfully",
        },
        {
          label: "Local Expert Team",
          value: "100%",
          desc: "Professionals fluent in both Korean and Chinese",
        },
        {
          label: "One-stop Licensing",
          value: "∞",
          desc: "Residency planning and visa issuance support",
        },
      ],
    },
    about: {
      bgTitle: "About",
      titleTop: "DDOBAGI TOOLS",
      titleMid: "ONE-STOP SOLUTION",
      titleSuffix: "overview",
      heading: "Want to know more details?",
      mobileHeading: "Powered by ONE-STOP SOLUTIONS",
      mobileDescription: "Make complex business processes simple and fast",
      steps: [
        {
          title: "Service",
          desc: "Consistent and practical support.\nWe build your setup plan together.",
        },
        {
          title: "FAQ",
          desc: "Guidance for frequently asked\nquestions on company setup.",
        },
        {
          title: "Contact",
          desc: "Leave your inquiry about\ncorporation setup with Ddobagi.",
        },
      ],
    },
    faq: {
      title: "Frequently\nAsked Questions\n(FAQ)",
      items: [
        {
          q: "Do I need a local acquaintance in Korea to incorporate?",
          a: "No. We review your business type and visa eligibility first, then design the right setup route.",
        },
        {
          q: "Can incorporation and visa issuance be done together?",
          a: "It depends on the case, but we usually guide clients with a 3 to 5 week timeline from prep to completion.",
        },
        {
          q: "Is a physical office in Korea mandatory?",
          a: "Not always. We can coordinate setup and visa schedules step by step based on your case.",
        },
        {
          q: "How long does the overall process take?",
          a: "After incorporation, we can continue with tax filing, bookkeeping, and operational consulting.",
        },
      ],
    },
    contact: {
      bgTitle: "Contact",
      heading: "Ddobagi Tools is\nalways ready to help.",
      cta: "Contact",
      contacts: [
        { ...baseContacts[0], role: "Team Lead" },
        { ...baseContacts[1], role: "Manager" },
      ],
      fields: {
        phone: "Phone",
        wechat: "Wechat",
        tell: "Tel",
        kakao: "Kakao",
      },
    },
    inquiry: {
      title: "Quick Inquiry",
      type: "Inquiry Type",
      name: "Name",
      contact: "Contact",
      message: "Message",
      typePlaceholder: "Please select",
      namePlaceholder: "Enter your name",
      contactPlaceholder: "Email or phone number",
      messagePlaceholder: "Please describe your request in detail",
      consent:
        "I agree to the collection and use of personal information. Data is used only for inquiry responses and retained securely for the legal retention period.",
      submit: "Send Inquiry",
      types: [
        "Incorporation",
        "Visa & Administration",
        "Distribution/Marketing",
        "Other",
      ],
    },
    footer: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      businessNo: "Business Reg. No.",
      address: "Address.",
      email: "Email.",
    },
  },
  cn: {
    langLabel: "CN",
    nav: {
      tools: "DDOBAGI TOOLS",
      service: "服务",
      proposal: "公司提案书",
      request: "业务委托",
      support: "客服中心",
      faq: "FAQ",
    },
    hero: {
      headingTop: "Korea",
      headingMid: "Business Setup &",
      headingBottom: "Entry Consulting",
    },
    oneStop: {
      eyebrow: "DDOBAGI TOOLS ONE-STOP SOLUTION",
      line1: "通过定制化咨询",
      line2: "建立属于您的公司",
      highlight: "最快 25 天内完成！",
      line3: "从韩国法人设立开始",
      line4: "到入驻您希望的平台",
      desc: "我们理解客户需求，\n提供符合实际情况的本地落地方案。",
    },
    services: {
      eyebrow: "DDOBAGI TOOLS",
      titleTop: "What",
      titleBottom: "We Do",
      desktopItems: [
        { title: "D-8 投资签证办理", desc: "服务说明即将更新。", badge: null },
        {
          title: "线上流通与营销支持",
          desc: "服务说明即将更新。",
          badge: null,
        },
        { title: "专业税务会计管理", desc: "服务说明即将更新。", badge: null },
        { title: "韩国法人设立代办", desc: "服务说明即将更新。", badge: null },
        {
          title: "外商投资企业(FDI)登记",
          desc: "服务说明即将更新。",
          badge: null,
        },
      ],
      mobileCards: [
        {
          title: "D-8 投资签证",
          subtitle: "办理支持",
          iconSrc: "/2231-966.svg",
          description: "由专业行政团队协助您完成 D-8 签证准备。",
          details: "海牙认证 + D-8 申报 + 材料代办",
          showDetails: true,
        },
        {
          title: "线上流通",
          subtitle: "营销支持",
          iconSrc: "/2231-988.svg",
          description: "从进入韩国市场到销售转化，电商团队全程协作。",
          showDetails: false,
        },
        {
          title: "专业税务",
          subtitle: "会计管理",
          iconSrc: "/2231-1006.svg",
          description: "面向外资法人的税务管理、申报与年终结算支持。",
          showDetails: false,
        },
        {
          title: "韩国法人",
          subtitle: "设立代办",
          iconSrc: "/2231-1043.svg",
          description: "即使在韩无居所，也可按您的业务进行定制化设立流程。",
          details: "海牙认证 + 法人登记 + 营业执照 + 开户 + 通信销售备案",
          showDetails: true,
        },
        {
          title: "FDI",
          subtitle: "登记支持",
          iconSrc: "/2231-1078.svg",
          description: "确保享受外资企业可获得的税收减免和政策支持。",
          details: "海牙认证 + 外商投资企业登记",
          showDetails: true,
        },
      ],
    },
    performance: {
      eyebrow: "DDOBAGI TOOLS",
      title: "Our Service",
      subtitle: "拥有大量外资法人设立实绩",
      description: "许多海外企业家进入韩国市场时都选择了我们。",
      cta: "立即咨询",
      kpis: [
        {
          value: "1000+",
          title: "法人设立代办",
          descPrefix: "累计完成大量",
          descHighlight: "外资法人设立项目",
          descSuffix: "经验",
        },
        {
          value: "300+",
          title: "签证/行政支持",
          descPrefix: "在市场进入阶段",
          descHighlight: "实务流程",
          descSuffix: "支持",
        },
        {
          value: "50+",
          title: "专业合作伙伴",
          descPrefix: "税务、人事、法务",
          descHighlight: "网络协作",
          descSuffix: "响应",
        },
        {
          value: "98%",
          title: "客户满意度",
          descPrefix: "项目结束后",
          descHighlight: "再次委托与推荐",
          descSuffix: "为主",
        },
      ],
    },
    responsibility: {
      titleTop: "从 A 到 Z，",
      titleBottom: "全流程由我们负责",
      description:
        "DDOBAGI TOOLS 以把客户公司当作自己公司的心态，\n对每个项目负责到底。",
      items: [
        {
          label: "成功案例",
          value: "1000+",
          desc: "助力中国企业成功进入韩国市场",
        },
        {
          label: "本地专业团队",
          value: "100%",
          desc: "配备中韩双语专业人员",
        },
        {
          label: "许可一站式方案",
          value: "∞",
          desc: "长期居留规划与签证办理支持",
        },
      ],
    },
    about: {
      bgTitle: "About",
      titleTop: "DDOBAGI TOOLS",
      titleMid: "ONE-STOP SOLUTION",
      titleSuffix: "相关",
      heading: "想了解更详细的内容吗？",
      mobileHeading: "基于 ONE-STOP SOLUTIONS",
      mobileDescription: "让复杂的业务流程更简单更高效",
      steps: [
        {
          title: "Service",
          desc: "始终如一的支持。\n与客户共同推进落地。",
        },
        {
          title: "FAQ",
          desc: "提供法人设立相关\n常见问题说明。",
        },
        {
          title: "Contact",
          desc: "欢迎留下与法人设立\n相关的咨询内容。",
        },
      ],
    },
    faq: {
      title: "常见问题",
      items: [
        {
          q: "在韩国设立公司必须有熟人吗？",
          a: "可以办理。我们会先确认行业与居留资格条件，再制定适合的设立路径。",
        },
        {
          q: "公司设立和签证申请可以同时进行吗？",
          a: "视个案而定，一般从资料准备到登记完成约需 3~5 周。",
        },
        {
          q: "在韩国一定要有办公室吗？",
          a: "并非必须。我们可按阶段统筹公司设立与签证日程。",
        },
        {
          q: "整体流程大约需要多久？",
          a: "设立后也可继续提供税务申报、记账与运营咨询支持。",
        },
      ],
    },
    contact: {
      bgTitle: "Contact",
      heading: "DDOBAGI TOOLS\n始终为您准备就绪。",
      cta: "咨询",
      contacts: [
        { ...baseContacts[0], role: "组长" },
        { ...baseContacts[1], role: "经理" },
      ],
      fields: {
        phone: "Phone",
        wechat: "Wechat",
        tell: "Tel",
        kakao: "Kakao",
      },
    },
    inquiry: {
      title: "快速咨询",
      type: "咨询类型",
      name: "姓名",
      contact: "联系方式",
      message: "咨询内容",
      typePlaceholder: "请选择",
      namePlaceholder: "请输入姓名",
      contactPlaceholder: "可联系的邮箱或电话",
      messagePlaceholder: "请详细描述您的问题",
      consent:
        "我同意个人信息的收集与使用。收集的信息仅用于咨询回复，并将在法定保管期限内安全保存。",
      submit: "发送咨询",
      types: ["法人设立", "签证与行政", "流通/营销", "其他"],
    },
    footer: {
      terms: "服务条款",
      privacy: "隐私政策",
      businessNo: "营业执照号.",
      address: "地址.",
      email: "邮箱.",
    },
  },
};

export function getMainContent(locale: Locale): MainContent {
  return MAIN_CONTENT[locale];
}
