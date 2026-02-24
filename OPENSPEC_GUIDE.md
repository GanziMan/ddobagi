# OpenSpec 사용 가이드 (처음 시작용)

이 문서는 이 프로젝트에서 OpenSpec을 처음 사용할 때 빠르게 따라할 수 있는 최소 워크플로우를 정리한 문서입니다.

## 1) OpenSpec이 하는 일

OpenSpec은 기능 변경을 바로 코딩하지 않고, 먼저 변경 단위를 문서로 정의한 뒤 구현하도록 도와줍니다.

- `proposal.md`: 무엇을, 왜 바꾸는지
- `design.md`: 어떻게 구현할지
- `tasks.md`: 구현 체크리스트

## 2) 가장 기본 흐름

1. 변경 제안 생성 (`/opsx:propose`)
2. 생성된 문서 검토 및 보완
3. 구현 시작 (`/opsx:apply`)
4. 상태 확인 (`openspec status`)
5. 완료 후 아카이브 (워크플로우에서 제공하는 archive 명령)

## 3) 제일 먼저 해볼 명령

아래 둘 중 하나로 시작합니다.

```bash
/opsx:propose add-login-page
```

```bash
/opsx:propose 사용자 로그인 기능 추가
```

- 첫 번째: 이미 `kebab-case` 이름이 있는 경우
- 두 번째: 설명만 써도 자동으로 change 이름을 만듭니다

## 4) 생성 위치

변경 제안이 생성되면 아래 경로에 파일이 생깁니다.

```text
openspec/changes/<change-name>/
```

예: `openspec/changes/add-login-page/`

## 5) 구현 시작

문서가 준비되면:

```bash
/opsx:apply
```

`tasks.md` 순서대로 실제 코드 변경을 진행합니다.

## 6) 상태 확인

현재 change 상태:

```bash
openspec status --change "<change-name>"
```

자동화/스크립트용 JSON:

```bash
openspec status --change "<change-name>" --json
```

## 7) 처음 쓸 때 팁

- change는 작게 쪼개기 (한 change = 한 목적)
- `proposal.md`는 배경/목표를 짧고 명확하게
- `tasks.md`는 체크 가능한 단위로 작성
- 구현 전에 문서를 먼저 고쳐두면 되돌림 비용이 줄어듭니다

## 8) 추천 루틴 (실전)

1. `/opsx:propose <설명>`
2. 생성된 `proposal/design/tasks` 확인
3. `/opsx:apply`
4. `openspec status --change "<name>"`로 점검
5. 완료 후 archive

## 9) 자주 묻는 질문

Q. 이름을 꼭 내가 정해야 하나요?  
A. 아니요. 설명만 입력해도 됩니다.

Q. 기존 change와 이름이 같으면?  
A. 보통 이어서 작업할지, 새 change를 만들지 선택합니다.

Q. 어디서 다시 보면 되나요?  
A. 이 파일(`OPENSPEC_GUIDE_KO.md`)과 `openspec/changes/` 폴더를 보면 됩니다.
