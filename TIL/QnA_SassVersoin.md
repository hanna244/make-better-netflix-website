# 질문과 답변

## Q6. 질문

`Figma`에서 사용하는 `font` 다운받는 법(Mac)

<details>
  <summary>A6. 답변</summary>
  <br/>
  
  `SpoqaHanSans`를 `OTF`버전을 다운받아 맥에 설치를 했습니다. 하지만 `Figma`에는 적용되지 않는다고 나옵니다. `figma`에 사용되는 `SpoqaHanSans` 폰트는 따로 있는 건가요? 
</details>

<br/>

## Q5. 질문

`fsp` `mixin`을 사용할 때 `padding`에 `소수점px`을 입력해도 괜찮나요? 

<details>
  <summary>A5. 답변</summary>
  <br/>
  
  매번 스타일링 할 때마다 고민하지만 `em`단위로 바꿔서 사용할 것이라면 상관없다. 왜냐하면 `em`단위를 사용할 때는 소수점이 허용된다. (단, 브라우저 마다 소수점이 다르게 적용된다는 것만 기억하기)
</details>

<br/>

## Q4. 질문

`Container` 컴포넌트를 만들 때 `row`, `column`을 `Grid`로 설정하는 방법이 어떤게 있을까요? 

<details>
  <summary>A4. 답변</summary>
  <br/>
  
  `Flex`를 사용했을 때 처럼 `grid-template-columns`, `grid-template-rows`속성을 사용해서 클래스로 `row`, `column`를 적용하고 싶은데 어떻게 해야할지 모르겠습니다. 결국해결하지 못한 이유는 해당 속성을 사용하려면 `row`, `column`의 개수나 최소/ 최대값 등을 입력해야 하는데요. 재사용할 수 있는 컴포넌트로 만들려면 고정된 값을 입력해주면 안된다는 생각 때문에 해당 속성을 사용하지 못했습니다. 
</details>

<br/>

## Q3. 질문

`px-rem` mixin 사용방법

<details>
  <summary>A3. 답변</summary>
  <br/>
  
  ```scss
  min-width: {
    @include px-rem(px, 338);
  }
  ```
  위와 같이 속성 안에 값을 사용하는 방법이 있을까요?

</details>

<br/>

## Q2. 질문

reset 스타일링 코드에 mixin을 사용해도 괜찮나요? 

<details>
  <summary>A2. 답변</summary>
  <br/>
  
  답변 내용을 작성합니다.
</details>

<br/>

## Q1. 질문

주석을 모두 삭제하는 방법을 어떻게 찾나요? 

<details>
  <summary>A1. 답변</summary>
  <br/>
  
  단축키가 기억이 나지 않아서 `remove comment`라는 키워드로 검색을 하고 검색 결과를 적용했지만 잘 되지 않습니다. 해당 기능은 확장인가요? 

</details>

<br/>