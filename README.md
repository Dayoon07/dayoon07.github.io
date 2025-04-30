## 목차
[1. 설치하다가 안되는 거](#npm-라이브러리-설치하다가-안되는-거-정리함)

[2. 구글에서 내 웹페이지가 나오는 이유](#구글에-검색해도-내-웹페이지가-나오는-이유)

## npm 라이브러리 설치하다가 안되는 거 정리함

하다가 좀 안되는 게 있어서 빡쳐서 씀

명령어 목록
- npm install --save tailwindcss postcss autoprefixer
- npm install -g tailwindcss
- npx tailwindcss init -p

1. npm Package Vulnerability (무한 굴레) <br>
    tailwind, postcss 설치하는 데 뭔 설명이 나오면서 취약성을
    말하는 것처럼 나오는데 npm audit을 실행하니까 무한 굴레에 빠짐, 
    해결 방법? package.json에서 버전을 orderride 하는 거 추가하셈 
```
{
  "name": "react-popol",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/dom": "^10.4.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@testing-library/user-event": "^13.5.0",
    "autoprefixer": "^10.4.21",
    "postcss": "^8.5.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-popol": "file:",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "overrides": {    /* 이거 */
    "react-scripts": {
      "@svgr/webpack": "8.1.0",
      "postcss": "8.4.38"
    }
  },
  {
    ...
  }
}

```

## 구글에 검색해도 내 웹페이지가 나오는 이유

1. Google Search Console에서 배포한 레포지토리의 도메인을 입력 (정적 페이지면 다 배포됨)
2. 그러면 고유한 키처럼 생긴 거를 주는 데 사실 키보다는 그냥 호스팅해주는 태그라고 생각하면 됨
```
<!-- 대충 이렇게 생김 -->
<meta name="google-site-verification" content="발급받은 키">
``` 
3. 이거를 head 태그 안에 복붙하고 배포하면 끝
4.  배포한 페이지에서 이거 보이면 관련 검색어를 치면 보일 거임. 처음에는 잘 안 나오는 데 자주 검색하다보면 특정 검색어를 잘 검색됨
![](/public/img/검색결과.png)
5. 예시로 내 포폴 웹 페이지 관련 검색어는 

- github dayoon
- github dayoon07
- github 강다윤

6. 가장 좋은 점 무료임, 단점은 딱히 없는 듯