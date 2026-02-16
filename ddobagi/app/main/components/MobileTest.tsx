export default function MobileTest() {
  return (
    <div className="min-h-screen bg-white py-20 px-5 flex justify-center">
      <div className="w-full max-w-[375px] flex flex-col gap-3">
        {/* Header Section */}
        <header className="pb-[18px] rounded-[10.80px] flex flex-col gap-[18px]">
          <h1 className="text-[#141414] text-[16.80px] font-black font-['Archivo_Semi_Expanded'] tracking-wide">
            DDOBAGI TOOLS
          </h1>
          <h2 className="text-[#b53131] text-[39px] font-black font-['Archivo_Semi_Expanded'] leading-tight">
            What
            <br />
            We DO
          </h2>
        </header>

        {/* Services Section */}
        <div className="flex flex-col gap-8">
          {/* Service 1: D8 투자비자 */}
          <ServiceCard
            title="D8 투자비자"
            subtitle="발급 대행"
            iconSrc="/2231-966.svg"
            description="D8투자비자발급 최고의 행정팀과 함께 준비해드립니다"
            details="아포스티유 공증+D8 비자 신고, 서류 업무 대행"
          />

          {/* Service 2: 온라인 유통 마케팅 */}
          <ServiceCard
            title="온라인 유통"
            subtitle="마케팅 지원"
            iconSrc="/2231-988.svg"
            description="한국 진출 후 판매까지?           오픈마켓 온라인 유통 마케팅 전문 운영진이 함께합니다"
            showDetails={false}
          />

          {/* Service 3: 전문 세무 회계 */}
          <ServiceCard
            title="전문 세무"
            subtitle="회계 관리"
            iconSrc="/2231-1006.svg"
            description="외국인 법인 특화 세무관리, 신고, 연말정산까지 완벽하게 처리"
            showDetails={false}
          />

          {/* Service 4: 한국 법인 설립 */}
          <ServiceCard
            title="한국 법인"
            subtitle="설립 대행"
            iconSrc="/2231-1043.svg"
            description="국내 거소가 없어도 문제 없습니다. 외국인을 위한 맞춤 설립 절차 진행           원하는 업종의 인허가 발급까지 가능"
            details="아포스티유 공증+법인등기+법인인감증명서+법인인감도장+법인인감카드+임대차계약+사업자등록증+핸드폰 개통,유심+계좌 개설+공동인증서 발급+통신판매업신고(제외 요청 가능)까지"
          />

          {/* Service 5: FDI 등록 */}
          <ServiceCard
            title="외국인투자기업(FDI)"
            subtitle="등록 지원"
            iconSrc="/2231-1078.svg"
            description="세금 감면, 정부 혜택 등 외투기업으로 누릴 수 있는 모든 이점을 확보하세요"
            details="아포스티유 공증+외국인투자기업(FDI) 등록"
          />
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  subtitle: string;
  iconSrc: string;
  description: string;
  details?: string;
  showDetails?: boolean;
}

function ServiceCard({
  title,
  subtitle,
  iconSrc,
  description,
  details,
  showDetails = true,
}: ServiceCardProps) {
  return (
    <div className="w-full flex flex-col gap-0">
      {/* Header Card */}
      <div className="w-full p-7 bg-neutral-100 rounded-t-[14.71px] flex justify-between items-center">
        <h3 className="text-[#141414] text-xl font-bold font-['Pretendard'] leading-tight">
          {title}
          <br />
          {subtitle}
        </h3>
        <div className="w-[68.63px] h-[68.63px] relative flex items-center justify-center flex-shrink-0">
          <img
            src={iconSrc}
            alt={`${title} ${subtitle}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Content Card */}
      <div className="w-full p-7 bg-[#b53131] rounded-b-[14.71px] flex flex-col gap-6">
        <p className="text-white text-base font-medium font-['Pretendard'] leading-relaxed">
          {description}
        </p>
        {showDetails && details && (
          <div className="flex flex-col gap-[6.54px]">
            <div className="px-[6.54px] py-[1.63px] bg-[#961d1d] rounded-[81.71px] inline-flex justify-center items-center self-start">
              <span className="text-white text-xs font-semibold font-['Pretendard']">
                기본구성
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
