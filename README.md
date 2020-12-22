# Sass를 사용한 Netflix 개선 프로젝트

<img style="vertical-align: -3px" src="https://img.shields.io/badge/Netflix%20Make%20Better!%20-%20-E50914?style=flat&logo=netflix&logoColor=E50914&labelColor=000&link=https://netflix.com" alt="Netflix 개선 프로젝트" />
<img style="vertical-align: -3px" src="https://img.shields.io/badge/Project%20Using%20Sass%20-%20-CC6699?style=flat&logo=sass&logoColor=CC6699&labelColor=000&link=https://netflix.com" alt="Netflix 개선 프로젝트" />

<br />

- `Sass`를 사용해서 넷플릭스를 스타일링합니다. 
- `Grid`를 사용해 최신 레이아웃 기술을 사용합니다.  

## 네이밍 작성 규칙

### 커밋 메세지 

```
[구축] 새로운 인터랙션 기능 추가 및 html, styling 구축
[개선] 개선 사항 반영을 위한 코드 수정
[설정] 코드 포맷 변경, 세미 콜론 누락, 코드 수정 없음
[변경] 오타 수정, 설정 파일 변경(예, gitignore), 클래스 변경 등 간단한 수정
[최적화] 최적화를 위한 코드 수정 (Light House 검사를 통한 개선사항)
[문서] TIL 및 README 등 마크다운 파일 생성 및 수정
```

## 파일 탐색 규칙 
상대경로로 파일을 탐색한다. → `./`, `../`

```html
<link href="./scss" />
<img src="../" />
```

## 빈 요소 사용 규칙
마지막에 공백을 두고 태그를 닫는다. 

```html
<input id="" /> 
<br /> 
```