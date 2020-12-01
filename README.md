
# 넷플릭스 고정형 UI 디자인 

<img style="vertical-align: -3px" src="https://img.shields.io/badge/Netflix%20Make%20Better!%20-%20-E50914?style=flat&logo=netflix&logoColor=E50914&labelColor=000&link=https://netflix.com" alt="Netflix 개선 프로젝트" />

<br />

- 반응형이 아닌 고정형 디자인으로 페이지 제작 
  - 모바일 버전 (기준)
  - 데스크탑 버전 (`media query`를 사용해서 반응형으로 제작)

## 스타일 구조
`React`의 모듈화 방식을 참고하여 구조를 구성했습니다.   
  - `엔트리`, `앱`, `구성`, `공통`, `컴포넌트`, `컨테이너`, `레이아웃`, `페이지`

```
stylesheets
├── style.css          # 엔트리 파일
├── app.css            # 앱 파일 
├── config.css         # 구성 파일 (Color Scheme,...)
│
├── common/            # 공통 모듈
│   ├── normalize.css  # 브라우저 기본 스타일 일반화
│   ├── base.css       # 기본 스타일 (reset, a11y, ...)
│   └── typography.css # 타이포그래피 스타일
│
├── components/        # 컴포넌트 모듈
│   ├── Container.css  # 콘테이너
│   ├── HomeLink.css   # 홈 링크
│   ├── Link.css       # 링크
│   ├── OurStory.css   # OurStory 컴포넌트
│   └── Promotion.css  # Promotion 컴포넌트
│
├── containers/        # 컨테이너 모듈
│   ├── ourstory.css 
│   ├── watchOnTV.css 
│   ├── downLoadAndWatch.css 
│   ├── watchOnDevice.css  
│   └── netflixFAQ.css  
│
├── layout/            # 레이아웃 모듈 
│   ├── header.css     # 헤더 
│   └── footer.css     # 푸터
│
└── pages/             # 페이지 모듈
    ├── home.css       # 홈
    └── login.css      # 로그인
```

## 네이밍 작성 규칙

스타일을 위한 이름 작성 규칙입니다. 

### 컴포넌트
타이틀케이스(TitleCase) 방식으로 이름을 작성합니다.

```css
.Container { /* ... */ }
.HomeLink { /* ... */ }
.Link { /* ... */ }
.OurStory { /* ... */ }
.Promotion { /* ... */ }
```

### 페이지/레이아웃/공통/기타
카멜케이스(`camelCase`) 방식 + BEM 개발 방법론(`Block__Element--Modifier`)으로 이름을 작성합니다.

```css
.netflixHeader { /* ... */ }
.netflixFooter { /* ... */ }

.ourStory { /* ... */ }
.ourStory__headline { /* ... */ }
.netflixIntro__downLoadAndWatch--reverse { /* ... */ }

.a11yHidden { /* ... */ }
```