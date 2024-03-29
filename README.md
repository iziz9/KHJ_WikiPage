# Wiki Page

## 💻 로컬 실행 방법

1. 로컬 환경에 프로젝트 복사본 생성

```bash
git clone https://github.com/iziz9/KHJ_WikiPage.git
```

2. 프로젝트 폴더로 이동

```bash
cd wikipage
```

3. 프로젝트 종속성 설치

```bash
npm install
```

4. json서버 및 프로젝트 실행

```bash
//terminal1
npm run db

//terminal2
npm run dev
```

## 🛠️ 기술 스택

- React
- TypeScript
- Zustand
- TailwindCSS
- Json-Server
- DOMPurify
- Vite

## 🔧 주요 기능

- [x] 메인페이지 페이지네이션, 1페이지에 최대 5개의 게시물
- [x] 위키 제목 클릭 시 상세페이지로 이동
- [x] 상세페이지 본문에 다른 위키 제목이 있으면 자동으로 링크 생성, 해당 위키 상세페이지로 이동
- [x] 내용 작성 저장
- [x] 내용 수정 저장
