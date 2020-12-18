# Sass를 사용한 Netflix 개선 프로젝트

<img style="vertical-align: -3px" src="https://img.shields.io/badge/Netflix%20Make%20Better!%20-%20-E50914?style=flat&logo=netflix&logoColor=E50914&labelColor=000&link=https://netflix.com" alt="Netflix 개선 프로젝트" />

<br />

- `Sass`를 사용해서 넷플릭스를 스타일링합니다. 
- `Grid`를 사용해 레이아웃의 최신 기술를 사용합니다.  


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

## 파일 탐색시 상대경로 규칙 
`./` 문구를 반드시 입력해준다. 

```html
<link href="./scss" />
<img src="./src" />
```