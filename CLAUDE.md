<!-- 프로젝트 루트에 CLAUDE.md가 있으면 매번 컨텍스트를 설명할 필요가 없다. 팀원들과 공유해서 모든 사람이 같은 컨텍스트로 Claude Code를 사용할 수 있다. -->

# 프로젝트 지침 (Next.js & React)

## 1. 기술 스택

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- UI Components: shadcn/ui (기준)

## 2. 코드 구조 및 작성 규칙

- **Server Components 우선:** 모든 컴포넌트는 기본적으로 서버 컴포넌트로 작성한다. 상태 관리나 브라우저 API가 필요한 경우에만 'use client'를 사용한다.
- **데이터 페칭:** `fetch` API를 사용하여 서버 컴포넌트에서 직접 데이터를 가져오며, 가급적 Server Actions를 활용한다.
- **파일 명명:** 컴포넌트는 PascalCase, 일반 함수 및 변수는 camelCase를 사용한다.
- **이미지 최적화:** 모든 이미지는 `next/image`의 <Image /> 컴포넌트를 필수 사용한다.

## 3. 작업 절차 (Claude Code 필독)

- **수정 전 분석:** 코드 수정 전 기존의 `layout.tsx`와 `page.tsx` 구조를 먼저 분석하고 보고할 것.
- **검증:** 코드 수정 후에는 반드시 `npm run build` 또는 `next lint`를 실행해 에러가 없는지 확인할 것.
- **커밋 메시지:** `feat:`, `fix:`, `refactor:` 등의 접두사를 붙여 Conventional Commits 형식을 준수할 것.
