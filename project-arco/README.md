# 프리온보딩 프론트엔드 과제 Week 1

- [프리온보딩 프론트엔드 과제 Week 1](#프리온보딩-프론트엔드-과제-week-1)
  - [**👨‍👩‍👧‍👦 Team 16 팀원 소개**](#-team-16-팀원-소개)
  - [**🕹️ 과제 요구 사항**](#️-과제-요구-사항)
    - [1. 회원가입 / 로그인](#1-회원가입--로그인)
    - [2. TODO LIST](#2-todo-list)
  - [**🚀 프로젝트 개요**](#-프로젝트-개요)
    - [**배포 페이지**](#배포-페이지)
    - [**사용 라이브러리**](#사용-라이브러리)
    - [**팀 사전 토론**](#팀-사전-토론)
    - [**프로젝트 목적**](#프로젝트-목적)
    - [**디렉토리 구조**](#디렉토리-구조)
    - [**주요 기능**](#주요-기능)

<br/>

## **👨‍👩‍👧‍👦 Team 16 팀원 소개**

<table>
  <tbody>
    <tr>
      <td align="center"><a href=""><img src="" width="100px" alt=""/><br /><sub><b>FE 팀원 : 창수 </b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>FE 팀원 : 진호</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>FE 팀원 : 성민</b></sub></a><br /></td>
     <tr/>
      <td align="center"><a href=""><img src="https://github.com/sjerry-kim/Portfolio_Academy_ARCO/assets/112137364/23130bde-b5ff-48c3-bfd9-45a1e8bebe07" width="100px;" alt=""/><br /><sub><b>FE 팀장 : 진혜</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>FE 팀원 : 승호</b></sub></a><br /></td>
      <td align="center"><a href=""><img src="" width="100px;" alt=""/><br /><sub><b>FE 팀원 : 지원</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<br/>

## **🕹️ 과제 요구 사항**

### 1. 회원가입 / 로그인

- 회원가입 page 경로 : /signup
- 로그인 page 경로 : /signin
- 유효성 검사 기능
  - 이메일에 @ 포함
  - 비밀번호 길이는 8글자 이상
  - 입력된 이메일과 비밀번호가 유효성 검사를 통과하지 못할 시 button에 'disabled' 속성 부여
- 회원가입 페이지에서 회원가입 성공 시 signin 페이지로 이동
- 로그인 페이지에서 로그인 성공 시 todo 페이지로 이동
  - 이 때 응답 받은 JWT를 로컬 스토리지에 저장
- 로그인 여부에 따른 리다이렉트 기능 구현
  - 토큰이 있는 채로 signin 혹은 signup 페이지에 진입할 시 todo 페이지로 이동
  - 토큰이 없는 채로 todo 페이지에 진입할 시 signin 페이지로 이동

### 2. TODO LIST

- TODO LIST page 경로: /todo
- todo 경로 진입 시 투두 리스트의 목록 표시
  - TODO는 li 를 이용해 감쌀 것
- 새로운 TODO를 입력할 수 있는 input과 추가 button을 생성
- TODO 우측에 수정 버튼과 삭제 버튼 생성
- 삭제 버튼 클릭 시 해당 TODO 삭제
- 투두 리스트 수정 기능 구현
  - 수정 버튼을 클릭 시 수정 모드 시작
  - TODO의 내용 변경
  - 수정 모드에서는 input의 우측에 제출과 취소 버튼을 표시
  - 제출 버튼 클릭 시 수정된 내용을 업데이트하고, 취소버튼 클릭 시 수정한 내용 초기화 및 수정모드 탈출

<br />

## **🚀 프로젝트 개요**

<br />

### **배포 페이지**

[배포 링크]()

<br />

### **사용 라이브러리**

- Eslint
- Prettier
- Husky
- React Router Dom
- Axios
- Emotion.js

<br />

### **팀 사전 토론**

_**1. `Axios vs Fetch` 각자 어떤 방법을 선택했고 장단점은 무엇인가?**_

> **🔉 창수** <br/>
>
> - 주관적으로 axios가 fetch보다 사용하기 편리했음.
>   <br />
> - fetch의 경우 라이브러리를 설치하지 않고 바로 사용할 수 있다는 장점이 있음.

> **🔉 진호** <br/>
>
> - axios의 장점은 fetch에 비해 간편함, 가독성이 좋음 , 에러처리가 간편하다는 점이 있음.
>   <br />
> - fetch는 javaScript 기능으로만 구현 가능하다는 장점이 있으나, json데이터를 받아오려면 자동 변환이 안되서 따로 await response.json() 처리를 해야한다는 점과 에러 처리시 따로 조건문을 걸어 처리해야한다는 단점이 있음.

> **🔉 성민** <br/>
>
> - axios는 instance를 생성하여 header를 설정하거나 여러가지 기본 옵션을 설정해줄 수 있고, interceptor를 사용하여 api 호출 시 token 검사를 용이하게 할 수 있음. 다만, 별도로 설치해줘야 하는 번거로움 및 프로덕트 사이즈가 커진다는 단점이 있음
>   <br />
> - fetch는 별도의 라이브러리 설치가 필요 없음. fetch의 경우 instance를 별도로 생성하여 header를 설정해줄 수 있는지 모르겠음.

> **🔉 진혜** <br/>
>
> - axios는 라이브러리를 따로 설치해야한다는 단점이 있음. 개인적으로 자주 사용하지 않아 익숙치 않음.
>   <br />
> - fetch는 구현이 간단한 편이나, json 변환 등의 이유로 코드가 복잡해지는 단점이 있음.

> **🔉 승호** <br/>
>
> - axios의 장점은 fetch 사용보다 코드 사용이 쉬움. 개인적으로 fetch를 사용해 본 경험이 적음. 단점은 라이브러리를 따로 설치해야한다는 단점이 있음.
>   <br />
> - fetch는 javascript 내장 기능이어서 바로 사용할 수 있다는 장점이 있는 반면, json 데이터를 직접 변환 시켜야한다는 단점이 있음.

> **🔉 지원** <br/>
>
> - axios는 json 타입으로 바로 사용 가능해서 코드가 간결해진다는 장점이 있고, 개인적으로 사용 경험이 많아 익숙함.
>   <br />
> - fetch json 변환을 따로 해주어야한다는 번거러움이 있음.

<br />

_**2. 팀원들의 `모범사례를 각출`하여 각자 가동되도록 코드 구현을 한 소감은?**_

> **🔉 창수** <br/>
>
> - 어려웠던 점 : 수정 중 완료를 누르지 않고 취소를 누른다음에 체크 박스를 누르면 수정 중에서 작성 중이었던 글 들이 update 됨.
>   <br />
> - 신경 쓴 부분 : 에러 처리에 대한 생각을 하지 못했는데, 에러 처리를 제대로 해주어야 함.
> - 팀원 코드리뷰 후기 : if문으로 수정 모드와 일반 모드를 나눴는데, 삼항 연산자를 사용하니 훨씬 보기 좋았음

> **🔉 진호** <br/>
>
> - 어려웠던 점
>   - todo CRUD에 대한 처리 : 컴포넌트안에 함수 로직을 몰아 넣는것보다 분리해서 구현했으면 하는 아쉬움이 있었음
>   - todo 구현시 컴포넌트 분리 방법 : React.memo, useMemo를 사용하여 렌더링 최적화를 하면 어떗을까 하는 생각
>   - local데이터를 활용한 화면 렌더링 : 사용자에게 더 좋은 경험을 주기 위해 노력
>     <br />
> - 신경 쓴 부분 :
>   - API (에러처리 포함)와 component간의 분리 : api와 컴포넌트를 분리하는게 유지보수 측면에서 더 좋다고 판단
>   - 컴포넌트의 단순화 (edit 버튼) : HTML 파일을 최대한 읽기 편하게 만듦
> - 팀원 코드리뷰 후기 : CRUD 함수 따로 구현, 에러 처리및 토큰처리, 재사용 가능한 컴포넌트와 파일 분리 등에 대한 점이 긍정적으로 평가 됨.

> **🔉 성민** <br/>
>
> - 신경 쓴 부분
>   - 페이지와 컴포넌트의 역할에 대한 고민 : CRUD 함수를 pages가 담당하는 것이 좋을까, 아니면 연관 있는 컴포넌트에서 처리하는 것이 좋을까?
>   - props drilling : 이거 때문에 CRUD 함수를 담당하는 위치가 pages와 각각의 컴포넌트로 분리되었는데, props drilling을 최소화하기 위해 신경을 좀 많이 썼던 것 같음.useReducer를 사용하려는 시도를 해봤지만 아직 사용이 미숙하여 해결하지 못하고 원래 상태로 제출했음
>   - 컴포넌트의 분할 : 강의 때 멘토님께서 컴포넌트를 무작정 물리적으로 분할하는 것이 아니라, 논리적으로 분할해야 한다고 하셨음. 이와 비슷한 고민을 계속해서 했고, 논리적으로 컴포넌트를 분리하려는 노력을 더 해서 컴포넌트간 결합을 최소화 하려는 노력이 필요하다고 생각함

> **🔉 진혜** <br/>
>
> - 어려웠던 점 : 클린코드를 작성하기 위한 코드 재사용에 대한 고민과 api 에러처리에서 어려움을 겪었음.
>   <br />
> - 신경 쓴 부분 : 수정 기능을 사용할 때 서버 통신 시간 때문에 한 템포 늦게 업데이트 되는 점을 수정 싶었으나 잘 안 됨.
> - 팀원 코드리뷰 후기 : 컴포넌트 및 폴더 분리가 잘 되었고, 토큰 처리 및 관리를 효율적으로 하였음. 유지보수나 코드 재사용이 용이한 코드가 좋아 보임.

> **🔉 승호** <br/>
>
> - 어려웠던 점 : 서버 데이터와 동기화 하는 점이 어려웠음.
>   <br />
> - 신경 쓴 부분 : 각각의 에러 처리에 관하여 생각보다 많은 생각을 해야했음. api를 최대한 밖으로 빼둔점, 컴포넌트 분할 이 생각보다 초반에 시작하기에 가장 어려워 보였음.
> - 팀원 코드리뷰 후기 : 개인적으로 함수를 스위치 케이스 문을 써서 사용하는게 인상 깊고 todo에 관한 handler를 그렇게 만들면 유지 보수할때 좋아 보인다는 생각이 들었음. 조금더 개선적인 생각을 하자먄 switch 문 보다는 추후 todo의 데이터가 많거나 , input이 많은 것을 다루는 handler 라면 각각의 함수를 handler로 변환해서 export 해두는것이 어떤가 하는 개선적인 의견이 있음. 하지만 간단한 동기화에 관해서 switch 문이 많은 효율성을 돋보임.

> **🔉 지원** <br/>
>
> - 어려웠던 점 : 컴포넌트를 분리하는 기준, 즉 한 컴포넌트에 코드가 있어서 가독성이 좋지 않음. 체크아웃 상태 보존에 어려움 겪음.
>   <br />
> - 신경 쓴 부분 : 기본 구현을 완벽히 하는 것.
> - 팀원 코드리뷰 후기 : api, 알림창 등 컴포넌트를 분리하여 유지보수가 편하도록 해야할 것. 불필요한 렌더링 방지한 것이 좋아 보였음.

<br />

### **프로젝트 목적**

- `동료학습`을 진행하여 Best Practice, 즉 모범사례를 추출하는 과정을 통해 각 팀원들 간의 상호 코드 교류를 통한 배움 및 성장을 도모함.
- `유지보수 용이성`, `코드 재사용률`을 높여 프로젝트 추후 확장성을 확보하였을 때, `가독성`은 오히려 결여된다는 딜레마에 빠짐. 이에 팀 회의를 진행한 결과 'todo list'라는 미니프로젝트의 규모를 고려하였을 때 유지보수, 코드 재사용에 지나치게 치우치기보다 본 프로젝트 규모에 좀 더 적합하다고 사료되어지는 선택지를 고름.

<br />

### **디렉토리 구조**

- 유지보수 및 협업을 원활히 하기위해 세부적으로 기능을 나누어 가독성이 좋고 수정, 삭제가 용이하게 만듦.
- component와 api의 기능을 분리하여 각각의 역할과 책임을 명확하게 할당하고 재사용성을 향상시킴.

```
├── src
│ ├── apis
│ │ ├── auth.ts
│ │ ├── instance.ts
│ │ └── todo.ts
│ ├── components
│ │ ├── auth
│ │ │ └──AuthForm.tsx
│ │ └── todo
│ │   ├── TodoCreator.tsx
│ │   ├── TodoItem.tsx
│ │   └── TodoList.tsx
│ └── constants
│ │   ├── auth.ts
│ │   ├── messages.ts
│ │   ├── path.ts
│ │   └── validation.ts
│ └── context
│ │   └── TodoContext.tsx
│ └── hooks
│ │   ├── useInput.ts
│ │   └── useTodos.ts
│ └── pages
│ │   ├── signin.tsx
│ │   ├── signup.tsx
│ │   └── todo.tsx
│ └── style
│ │   └── reset.ts
│ └── types
│ │   └── auth.ts
│ └── utils
│ │   ├── validator.ts
│ │   └── token.ts
│ ├── App.tsx
│ ├── index.tsx
│ ├── Router.tsx
└──── react-app-env.d.ts
```

<br />

### **주요 기능**

**1. 리다이렉트**

```
"🔥여기에 해당 코드를 넣어주세용🔥"
```

- PrivateRouter / PublicRouter 컴포넌트를 생성하여, token 검사를 한 뒤 적절한 path로 리다이렉팅. 이 때, react-router-dom/Navigate 컴포넌트의 replace 옵션을 이용하여 history stack이 쌓이지 않도록 하였음.

<br/>

**2. constants**

```
export const SUCCESS_MESSAGE = {
  signin: '로그인애 성공했습니다!',
  signup: '회원가입에 성공했습니다!',
  create: '투두를 생성했어요!',
  update: '투두를 수정했어요!',
  delete: '투두를 삭제했어요!',
};

export const ERROR_MESSAGE = {
  signin: '올바른 정보를 입력해주세요!',
  signup: '다시 시도해주세요!',
  create: '투두 생성에 실패했어요!',
  update: '투두 수정에 실패했어요!',
  delete: '투두 삭제에 실패했어요!',
};
```

- 변하지 않는 값은(ex. 에러 메세지, route 경로, input validator 내용 등) constants 디렉토리에서 별도로 관리

<br/>

**3. Token 관리**

```
export const getToken = (key : string) => localStorage.getItem(key);

export const setToken = (key : string, token : string) => localStorage.setItem(key, token);

export const removeToken = (key: string) => localStorage.removeItem(key);
```

- 토큰을 관리하는 유틸함수를 생성하여 로그인 시 간편하게 쿠키를 설정해줄 수 있음.

<br/>

**4. AuthForm**

```
"🔥여기에 해당 코드를 넣어주세용🔥"
```

- 겹치는 부분이 많은 회원가입과 로그인 페이지를 AuthForm 컴포넌트로 분리하여 관리 용이 및 재사용할 수 있는 컴포넌트를 생성함.

<br />

**5. hooks & utils**

```
"🔥여기에 해당 코드를 넣어주세용🔥"
```

- 로직을 추상화하여 재사용 가능한 한형태로 분리하여 개발 생산성 향상.
- useInput 커스텀 훅을 사용하여 input 상태 관리와 이벤트 핸들러를 간편하게 적용하고 동일한 로직을 중복 없이 재사용함.

<br />

**6. todos 관리**

```
"🔥여기에 해당 코드를 넣어주세용🔥"
```

- useReducer와 useContext를 조합하여 todos 관리함.
- depth가 깊어질 수록 props drilling이 발생하는 문제를 해결하고자 하였음.
- api 핸들링 시 코드가 길어져 가독성을 해치는 문제를 해결하고자 하였음.
  message.txt
  15KB
