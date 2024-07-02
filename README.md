# 📒 가계부 작성 및 일기 기록 웹서비스 Salog

<div align="center">
<img width="1082" alt="main" src="https://github.com/kimtjrgus/salog/assets/120611048/f4391ed8-e8ad-41db-9e4e-ac3f8878e385">
</div>

  ![Component 70](https://github.com/kimtjrgus/salog/assets/120611048/52114883-7a5f-43b0-8a3a-a26072be37a3)

<div align="center">

  ### 프로젝트 기간 : 2023.11.17 ~ ing

  ### 배포 링크 : <a href="http://www.salog.kro.kr" target="_blank">Salog</a>

  ### 테스트용 계정
    - id : salogtest123@gmail.com
    - pw : salogtest123!@#

  </div>

<br>

### 주의사항
  - 주요 변경 내역은 dev/be 브랜치에 있습니다.
  - main 브랜치는 배포용 브랜치로 사용 중이기 때문에 Sync fork 하지 않습니다.

<br>
<br>
<br>

## ✔ 목차
- [📄 기획서](#-기획서)
- [💡 브랜치 전략](#-브랜치-전략)
- [🔧 기술 스택](#-기술-스택)
- [🛠 아키텍처 다이어그램](#-아키텍처-다이어그램)
- [👥 팀원 구성](#-팀원-구성)
- [👨‍💻 개인 역할](#-개인-역할)
- [💻 모니터링](#-모니터링)
- [🖥️ 페이지 별 기능](#️-페이지-별-기능)
- [🎆 개선 목표](#-개선-목표)
- [🎉 프로젝트 후기](#-프로젝트-후기)

<br>
<br>
<br>

## 📄 기획서

<a href="https://docs.google.com/spreadsheets/d/1_bI9UAymfg1Typ5DVZzbXZe_OQ08q-AZO9Ve1Ph1SL8/edit#gid=0" target="_blank">사용자 요구사항 정의서</a>
<br />
<br />
<a href="https://docs.google.com/spreadsheets/d/1_bI9UAymfg1Typ5DVZzbXZe_OQ08q-AZO9Ve1Ph1SL8/edit#gid=256906179" target="_blank">기능 명세서</a>
<br />
<br />
<a href="https://docs.google.com/spreadsheets/d/1_bI9UAymfg1Typ5DVZzbXZe_OQ08q-AZO9Ve1Ph1SL8/edit#gid=89922257" target="_blank">API 명세서</a>
<br />
<br />
<a href="https://docs.google.com/spreadsheets/d/1_bI9UAymfg1Typ5DVZzbXZe_OQ08q-AZO9Ve1Ph1SL8/edit#gid=1572238774" target="_blank">테이블 명세서</a>
<br />
<br />
<a href="https://docs.google.com/spreadsheets/d/1_bI9UAymfg1Typ5DVZzbXZe_OQ08q-AZO9Ve1Ph1SL8/edit#gid=1829469387" target="_blank">코드 컨벤션</a>

<br>
<br>
<br>
  
## 💡 브랜치 전략

- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
  - main 브랜치는 배포 단계에서만 사용하는 브랜치입니다.
  - develop 브랜치는 개발 단계에서 git-flow의 master 역할을 하는 브랜치입니다.
  - Feat 브랜치는 기능 단위로 독립적인 개발 환경을 위하여 사용하고 merge 후 각 브랜치를 삭제해주었습니다.

<br>
<br>
<br>

## 🔧 기술 스택

### Common
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### Front-end
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/amazon s3-569A31?style=for-the-badge&logo=amazon s3&logoColor=white">


   
### Back-end
<img src="https://img.shields.io/badge/java-1E8CBE?style=for-the-badge&logo=java&logoColor=white"> <img src="https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white">
<img src="https://img.shields.io/badge/spring boot-6DB33F?style=for-the-badge&logo=spring boot&logoColor=white">
<img src="https://img.shields.io/badge/spring security-6DB33F?style=for-the-badge&logo=spring security&logoColor=white">
<img src="https://img.shields.io/badge/JPA-007396?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/mySQL-4479A1?style=for-the-badge&logo=mySQL&logoColor=white">
<img src="https://img.shields.io/badge/JWT-d63aff?style=for-the-badge&logo=JWT&logoColor=white">
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

<br>
<br>
<br>

## 🛠 아키텍처 다이어그램

![샐로그 아키텍처 다이어그램](https://github.com/kimtjrgus/Salog/assets/120611048/300386c0-c927-48b5-b327-a55a60825886)

<br>
<br>
<br>
    
## 👥 팀원 구성

<div align="center">

  |<img src="https://github.com/codestates-seb/seb43_main_004/assets/120611048/fd4b071f-c773-4a17-b27f-ec9656290fa5" width="130px" />|<img src="https://github.com/codestates-seb/seb43_main_004/assets/120611048/1c7f47bc-6dba-4d67-b189-5ac3148256fd" width="130px" />|<img src="https://github.com/codestates-seb/seb43_main_004/assets/120611048/c194e140-fb6b-4bec-8b60-5b8398258e86" width="130px" />
|:---:|:---:|:---:|
|[이용석](https://github.com/021Skyfall)|[김석현](https://github.com/kimtjrgus)|[선유준](https://github.com/YujunSun0)
|BE (팀장)|BE|FE|

</div>

<br>
<br>
<br>

## 👨‍💻 개인 역할

### 1. 인증 기능
#### a. 회원가입
- **자체**
  - 연락이 가능한 email 주소와 password, 알람에 대한 설정을 입력해 가입할 수 있습니다.
  - 서비스에서 연락 가능한 email 주소가 회원의 키포인트이기 때문에 가입 시 중복 여부를 검사합니다.
  - 가입 일자는 시스템 현재 시각을 표현한 Auditable 클래스를 상속받아 시스템 현재 시각이 등록됩니다.
  - 회원의 인가 처리에 필요한 role의 경우, 최초 가입 시에 CustomAuthorityUtils를 통해 "USER" 라는 역할이 등록됩니다.
- **소셜**
  - 서버에서 Oauth2를 구현하여 Google Oauth 서비스와 연동, 구글 계정을 사용하여 가입할 수 있습니다.
  - 최초 Oauth 로그인 시 해당 회원의 이메일 주소를 [구글 서버](https://www.googleapis.com/oauth2/v3/userinfo)에서 액세스 토큰을 활용하여 받아오고, 이 이메일을 DB에 save함으로써 해당 회원에 대한 식별자를 생성합니다.
  - 이후 해당 회원의 정보를 DB에서 조회하여 JWT를 생성한 다음 리턴합니다.
  - 서비스 사용 시 JWT 페이로드에 포함된 회원의 PK를 바탕으로 회원을 구분하기 때문에 이 방식을 사용했습니다.

#### b. 회원 RUD

#### c. 로그인
- **자체**
  - 가입한 email과 password를 사용하여 로그인할 수 있습니다.
  - 로그인 시 DB와 통신하여 해당 회원이 존재하는지 찾고, 해당 회원의 정보를 바탕으로 JWT를 생성하여 리턴합니다.
  - 이후 서비스 사용 시 요청 헤더로 액세스 토큰을 입력 받아 해당 회원을 구분, 인가 처리합니다.
  - JWT 페이로드에는 회원의 식별자, 이메일 주소 (username), 이메일 주소 (subject), 생성 시간, 만료 시간이 담겨있습니다.
- **소셜**
  - 만약 DB에 현재 소셜 로그인한 회원의 이메일이 존재한다면 해당 회원을 DB에서 조회하여 JWT를 발급한 후 리턴합니다.

#### d. 로그아웃
- 로그아웃 요청 시 요청 헤더에 담긴 JWT 액세스 토큰을 블랙리스트라는 List 자료구조에 삽입합니다.
- 이후 모든 서비스 요청 시 요청 헤더에 담긴 토큰을 이 블랙리스트에 담겨 있는지 조회한 다음 있다면 로그아웃 에러를 리턴하고, 없다면 정상적인 서비스 접근이 가능합니다.

#### e. 토큰 재발급
  - "/refresh" API로 바디에 리프레쉬 토큰을 담아 요청을 보내면 해당 리프레쉬 토큰을 활용하여 JWT를 재발급합니다.
  - 리프레쉬 토큰을 바탕으로 역할, 식별자, 이메일을 담은 클레임을 재생성하고, 새로운 액세스 토큰과 리프레쉬 토큰을 생성합니다.
  - 이후 해당 토큰을 Map 자료구조에 담아 클라이언트에게 응답합니다.
  - 기존에 사용된 토큰은 보안을 위해 블랙리스트에 추가합니다.
  - 다만, 리프레쉬 토큰을 사용한 토큰 재발급의 경우 처리를 아예 안하는 방식이 주류인 것으로 알게되어 삭제할지 고민 중입니다.

#### f. 이메일 인증
- **회원 가입**
  - 이메일은 회원의 키포인트이기 때문에 회원 가입 시 이메일 주소 남용을 막기 위해, 가상의 이메일 주소를 사용할 수 없도록 연락 가능한 이메일 주소인지 체크합니다.
  - 중복된 이메일인지를 먼저 체크하고, 아니라면 해당 주소로 가입 시 필요한 인증 번호를 전송합니다.
  - 인증코드는 알파뱃과 숫자를 포함한 4자의 랜덤한 문자열입니다.
  - 이메일 전송을 위해 EmailSender 클래스를 구현하였으며, 이 클래스는 구글 메일 서버를 활용하여 587 포트로 통신, 이메일을 전송합니다.
  - 구글 메일 서버와의 통신을 위해 애플리케이션 설정에 프로젝트 공용 이메일 주소와 구글 메일에서 2차 인증을 거쳐 발급 받은 앱 비밀번호를 정의했습니다.
- **비번 찾기**
  - 비밀번호 찾기는 회원의 중요한 정보를 담고 있기 때문에 보안을 위해 회원 가입 시와 마찬가지로 이메일을 전송하여 인증을 거칩니다.

<br>

### 2. 가계부 기능
#### a. 수입
- **수입 CUD**
- **월별 수입 조회**
  - Param으로 페이지와 사이즈를 전달 받아 페이지네이션을 구현했습니다.
  - 마찬가지로 date를 전달받고 date에 담긴 day가 00인 경우 해당 월 전체를 조회하고, 일반적인 일자인 경우 해당 일자의 수입을 상세 조회합니다.
  - 이를 위해 date는 String으로 받아오며, 배열을 사용하여 year, month, day로 나누어 각 조건에 맞게 조회합니다.
- **월별 수입 합계 조회**
  - 분석 페이지를 위한 합계 조회입니다.
  - 태그 별, 월별로 각 수입의 합계를 계산하여 리턴합니다.
- **수입 태그**
  - 태그는 기본적으로 별개의 테이블로 구성했으며, 수입과 일대다 관계입니다.
  - 기존에 존재하는 중복된 태그가 있다면 해당 태그와 연결하도록 하였으며, 중복되는 태그가 없다면 태그를 새로 post 한 뒤 수입과 연결됩니다.
  - 만약 수입을 삭제하는 경우, 같은 태그가 연결된 수입이 존재한다면 연결을 끊고 수입만 삭제합니다.
  - 반대의 경우 수입과 태그 둘 다 삭제합니다.

#### b. 고정 수입
- **고정 수입 CRUD**
  - 조회의 경우 Param으로 년,월을 전달 받아 특정 달의 예산을 리턴합니다.

#### c. 예산
- **월별 예산 CRUD**
  - 조회의 경우 Param으로 년,월을 전달 받아 특정 달의 예산을 리턴합니다.
  - 해당 달의 전체 일수와 시스템의 현재 시간을 빼주어 남은 일자를 계산 후 리턴합니다.

<br>

### 3. 기타 기능 및 역할
#### a. 유효성 검사
- 클라이언트에서 요청 시 기존에 상의된 데이터 구조를 바탕으로 각 DTO에 정규표현식으로 Validation을 처리했습니다.
- 다른 대규모 웹사이트를 참고하여 상식적으로 허용 가능한 선으로 정의했습니다.

#### b. 배포
- **도메인**
  - 무료 도메인 사이트인 [내도메인.한국](https://xn--220b31d95hq8o.xn--3e0b707e/)을 사용했습니다.
  - www.salog.kro.kr 을 CNAME으로, value는 클라우드 프론트 주소를 할당했습니다.
  - server.salog.kro.kr 을 CNAME으로, value는 서버가 배포된 aws ec2의 퍼블릭 DNS 주소를 할당했습니다.
- **플로우**
  - 깃헙 액션을 통해 자동 CI/CD를 구축했습니다.
  - 프로젝트 메인 레포지터리의 메인 브랜치에 변경 사항을 머지하면 깃헙 액션이 실행됩니다.
  - 깃헙 액션이 실행되면 gradle.yml 에 정의해둔 스크립트대로 프로젝트를 jar 빌드합니다.
  - 이후 도커 허브에 로그인한 뒤 정의해둔 dockerfile 을 기반으로 도커 이미지를 빌드합니다.
  - 빌드된 이미지를 로그인한 도커 계정의 허브로 push합니다.
  - aws ec2에서 해당 이미지를 도커 허브에서 pull 받고 컨테이너에서 실행시켜 서버가 배포됩니다.
  - 필요한 환경 변수는 깃헙 액션 시크릿에 정의해두어 jar 빌드시에 한 번, 도커 컨테이너에서 이미지를 실행시킬 때 한 번씩 주입됩니다.
  - 도커에 대한 내용을 학습하기 위해 [블로깅](https://021skyfall.github.io/posts/salog_project_deploy1/)했습니다.
- **데이터 베이스**
  - 데이터 베이스는 AWS RDS를 사용합니다.
  - 프리티어에 맞는 사용량으로 구축하였으며 프로젝트 설정 파일(application-deploy.yml)에 url과 username, password와 driver class를 정의해 각 내용을 깃헙 액션 시크릿으로 부터 환경변수로 주입 받습니다.

#### c. 서버 통신 https 프로토콜로 변경
  - 2024.2.29 AWS 정책 변경으로 인해 ec2를 제외한 퍼블릭 ipv4 주소 사용 시 과금이 되어 로드밸런서 사용을 중지하게 됨으로 직접 종단간 https 프로토콜로 통신할 수 있도록 구현했습니다.
  - aws ec2 내부에서 certbot을 설치한 다음 Let's Encrypt를 통해 SSL/TLS 통신을 위한 무료 인증서를 발급 받았습니다.
  - 발급 시 사용된 도메인은 server.salog.kro.kr 입니다.
  - PEM 형식의 인증서를 java에서 직접 사용할 수 있도록 openssl 명령어를 사용하여 KeyStore 형식으로 변환했습니다.
  - 이후 /home/ec2-user 디렉토리에 저장된 KeyStore.p12 파일을 컨테이너 내부로 불러들일 수 없는 문제가 발생하여 컨테이너 실행 시 -v 옵션을 사용하여 호스트 시스템의 파일을 컨테이너 내부의 /app 디렉토리에 마운트했습니다.
  - 환경변수를 통해 애플리케이션 설정 파일(application.yml)에 위치, PW 등을 추가해 인증서를 연결했습니다.
  - 추가적으로 SecurityConfig 클래스를 구현하여 http 프로토콜로 요청을 받은 경우 https 프로토콜로 리다이렉션할 수 있도록 구현했습니다.

#### d. 에러 핸들링
  - GlobalExceptionAdvice AOP를 통해 고정적으로 발생할 수 있는 에러를 6개로 분기하여 처리했습니다.
  - 이외에도 Business 로직 중 나타나는 특정한 에러들을 상세히 응답하기 위해 Runtime Exception을 상속 받은 BusinessLogicException 클래스를 구현했습니다.
  - 이 클래스를 통해 서비스 로직 중 발생하는 에러는 커스텀 ExceptionCode 클래스를 활용하여 20개 이상으로 분기, 상세히 응답합니다.

#### e. 보안 설정
  - 클라이언트 측과 협업 중 CORS 에러를 피하기 위해 CorsConfigurationSource를 구현한 CustomCorsConfiguration 클래스를 구현했습니다.
  - 프론트엔드 개발 URL과 클라우트 프론트 URL을 바탕으로 오리진을 허용합니다.
  - WebMvcConfigurer을 구현한 SecurityConfiguration 클래스에서 각 URL에 대한 접근을 처리합니다.

<br>

### 4. 테스트
  - 전체 테스트 완료 후 로컬에서 깃헙 레포로 push 시 전체 테스트 실행, 통과하지 않으면 push가 실패하도록 스크립트를 작성했습니다.

#### a. 담당 도메인 전체 테스트
  - 컨트롤러에 대한 슬라이스 테스트를 진행하여 정상적인 API 통신이 가능한지 확인했습니다.
  - DB 연산이 예상대로 동작하는 지 확인하기 위해 레이어를 분리하여 슬라이스 테스트를 진행하여 검증했습니다.
  - 서비스 레이어의 모든 메서드가 정상적으로 동작하는 지 확인하기 위해 간접적인 private 메서드 테스트를 포함하여 전 메서드에 대한 유닛 테스트를 진행했습니다.
  - 각 도메인에 맞춰 전체적인 통합 테스트를 완료 했으며 IntelliJ의 테스트 커버리지 검사 기능을 활용하여 전 항목에 대해 85% 이상 커버하도록 테스트 케이스를 구현했습니다.

### b. 통합 테스트 성능 향상
  - 테스트 진행 시 beforeEach 로 목업 데이터를 생성함에도 불구하고 DB 식별자 생성 전략이 우선 시 되어 id가 중첩해서 증가하는 문제를 @DirtiesContext(methodMode = DirtiesContext.MethodMode.BEFORE_METHOD) 어노테이션으로 테스트 메서드 시작 전에 컨텍스트를 리로드하는 방식으로 해결했었습니다.
  - 이후 단순히 jdbcTemplate 라이브러리를 활용하여 직접적으로 쿼리를 입력해 매 메서드 시작 전 id가 1부터 시작하도록 변경하였습니다.
  - 해당 방법으로 수정 후 전체 테스트 시간이 10초 -> 3초로 크게 단축할 수 있었습니다.

#### c. 통합 테스트 후 API 문서화
  - 담당한 도메인들에 대한 통합 테스트를 진행한 후 보다 원활한 협업을 위해 API 문서 작성을 자동화 했습니다.
  - Asciidoctor 를 사용하여 전체 테스트 빌드 시 자동적으로 각 도메인에 맞는 디렉토리로 스니펫을 생성, 저장하여 문서를 자동적으로 생성할 수 있도록 구성했습니다.

<br>

### 5. 모니터링
#### a. 부하 테스트와 모니터링
  - JMeter 를 활용하여 로컬 환경에서 5분 이내로 100000 번의 조회 요청을 모의하여 부하 테스트를 진행했습니다.
  - 원활한 모니터링을 위해 프로메테우스를 사용하여 메트릭을 수집하고, 원활한 협업과 유지보수를 위해 그라파나로 수집된 메트릭을 시각화 했습니다.

<br>
<br>
<br>

## 💻 모니터링
  - 각종 테스트, 특히 대규모 트래픽 상황을 가정한 스트레스 테스트 시 원활한 확인을 위해 모니터링 도구를 사용했습니다.
  - 대규모 트래픽 시나리오는 JMeter 를 활용하여 모의했습니다.
  - 모든 내용은 로컬 테스트 환경에서 진행되었습니다.
  - JMeter 사용과 관련된 자세한 내용은 제 [블로그](https://021skyfall.github.io/posts/salog_project_test9/)에 기록되어 있습니다.
  - 프로메테우스와 그라파나의 적용 과정은 제 [블로그](https://021skyfall.github.io/posts/salog_project_test10/)에 기록되어 있습니다.

### 1. 프로메테우스 적용
  - 메트릭 수집을 위해 프로메테우스를 사용했습니다.
  - 애플리케이션의 빌드 파일과 설정 파일을 수정하여 프로메테우스와 연결, actuator로 메트릭을 수집하고 수집된 메트릭을 특정 api로 보낼 수 있도록 설정하였습니다.

![](https://private-user-images.githubusercontent.com/119563406/344874223-b7f6474a-edfe-4110-9e6d-40b329ad7d79.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4OTQxMTMsIm5iZiI6MTcxOTg5MzgxMywicGF0aCI6Ii8xMTk1NjM0MDYvMzQ0ODc0MjIzLWI3ZjY0NzRhLWVkZmUtNDExMC05ZTZkLTQwYjMyOWFkN2Q3OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwMlQwNDE2NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wOTQ0NTRkOTdiMjZjYThmMTE4N2Y4Zjk4OTdhOTZiYzk0NGFiZmExMzlkYjEzYTg1MjliZTIzMmY0NGNkZGJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.DP2qM1rplHKlAZLso1FYyKG7x7n_REU-X6RyehenVcg)

<br>

### 2. 시각화를 위해 그라파나 적용
  - 텍스트로 수집된 메트릭을 모니터링하는 것은 불편하다고 생각되며, 협업을 위해 시각화를 결정했습니다.
  - 도구는 그라파나를 사용했으며 프로메테우스와 연결하여 주요 지표를 시각화 했습니다.
  - 생성된 패널은 아래와 같습니다.

![](https://private-user-images.githubusercontent.com/119563406/344874225-3cf05487-3dfc-420d-8e08-cb42b048b8d1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTk4OTQxMTMsIm5iZiI6MTcxOTg5MzgxMywicGF0aCI6Ii8xMTk1NjM0MDYvMzQ0ODc0MjI1LTNjZjA1NDg3LTNkZmMtNDIwZC04ZTA4LWNiNDJiMDQ4YjhkMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcwMlQwNDE2NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ZmRmYzI1M2RiYjZkMWU3NWVmN2I4MjUxMzQ4MDZhNWM1NGI3OWRhMmIzNmJkMDA1MDI0ZTk3ODgzNDlkMzA5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.ZL1RXN64NpLafKVcFZwkPI1lWAi94RVy1DdlphqsXbY)

<br>
<br>
<br>

## 🖥️ 페이지 별 기능 

### [초기화면]
- 웹서비스 접속 초기화면으로 AOS(Animate on scroll)가 적용 되어있습니다.
    - 로그인이 되어 있지 않은 경우에만 접근 가능합니다.

| 초기화면 |
|----------|
|![2024-03-023 37 14-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/b623fcf4-24ba-46b5-a755-bb665b288802)|

<br>

### [회원가입]
- 이메일 주소와 비밀번호를 입력할 때, 입력창에서 벗어나면 유효성 검사가 진행되고 통과하지 못한 경우 각 경고 문구가 입력창 하단에 표시됩니다.
- 이메일 주소의 형식이 유효하지 않으면 인증 버튼이 활성화되지 않으며, 이미 가입된 이메일일 경우 인증 버튼 클릭 시 입력창 하단에 경구 문구가 나타납니다.
- 작성한 이메일을 통하여 인증번호를 받아 입력하는 검증 과정을 거쳐야합니다.
- 작성이 완료된 후, 유효성 검사가 모두 통과되면 회원가입 버튼이 활성화되며, 버튼을 클릭하면 회원가입이 완료되어 로그인 페이지로 이동됩니다.

| 유효성 검사 | 이메일 인증 |
|:---:|:---:|
|![2024-03-024 04 19-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/69b4fd70-7ff5-4c92-b7e1-873d57e36f10)|![2024-03-024 12 35-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/bcca3976-0b0e-4019-9ea7-5ccef39445f9)|

| 회원가입 |
|----------|
|![2024-03-024 17 18-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/8c23808e-1636-435c-a717-4c2aeab5eb9b)|

<br>

### [로그인]
- 이메일과 비밀번호를 입력하여 로그인을 진행합니다.
   - 로그인 버튼 클릭 시 입력값이 일치하지 않을 경우에는 경구 문구가 나타나며,
로그인에 성공하면 홈 대시보드 화면으로 이동합니다.
- 소셜 로그인(카카오, 구글, 네이버)을 통한 서비스 이용이 가능합니다. (현재는 구글만 가능)

| 일반 로그인 | 소셜 로그인(구글) |
|:---:|:---:|
|![2024-03-024 22 24-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/b735f71a-3ed7-41b6-85e6-e500254a6b0a)|![2024-03-024 41 20-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/a9751450-1431-4c6a-9c2a-42a1188bb80e)|

<br>

### [비밀번호 찾기]
- 비밀번호를 잊어버렸을 때, 로그인 페이지에서 하단에 있는 비밀번호를 찾기를 진행합니다.
- 이메일을 입력하여 인증번호를 받고, 인증이 완료되면 비밀번호를 재설정할 수 있습니다.

| 비밀번호 찾기 |
|----------|
|![2024-03-024 56 25-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/9e4d40b6-c4cd-4058-a8f4-46b9050bcfbb)|

<br>

### [로그아웃]
- 좌측의 sidebar에 있는 로그아웃을 클릭 후 나타나는 모달창의 확인 버튼을 클릭하면 로그아웃이 됩니다.
- 로그아웃시 로컬 저장소 및 쿠키의 토큰 값을 삭제하고 로그인 화면으로 이동합니다.

| 로그아웃 |
|----------|
|![2024-03-025 06 34-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/8942f28e-8bb8-4594-9953-13d88d10a77c)|

<br>

### [대시보드]
- 이번 달 지출 · 수입 · 낭비리스트 · 예산을 그래프와 함께 확인할 수 있습니다.
- 하단의 캘린더는 타일마다 해당 일의 지출과 수입의 합계를 보여주며, 타일을 클릭하면 작성 된 가계부를 조회할 수 있습니다.
- 타일에 마우스를 올리면 작성 아이콘이 보여지며, 클릭 시 가계부를 작성할 수 있습니다.

| 대시보드 |
|:---:|
|![2024-03-026 01 12-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/38793435-ea5c-4a8c-b66d-3ef08c33d218)|

<br>

### [지출 · 수입]
#### 1. 지출 · 수입 조회
- 상단의 탭을 통하여 지출과 수입을 따로 볼수 있으며, 낭비리스트를 확인할 수 있습니다.
- 낭비리스트는 지출내역 중 추가할 수 있으며, 항목을 체크하면 나오는 탭에서 낭비리스트 버튼으로 추가 가능합니다.
- 날짜 오름차순 / 내림차순 정렬이 가능하고 카테고리 필터링 및 특정 날짜 필터링 조회 기능이 추가 될 예정입니다.

| 지출 · 수입 조회 |
|:---:|
|![2024-03-026 24 43-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/dcadff14-9e9f-40d4-a4da-b531949eaea2)|

<br>

#### 2. 지출 · 수입 작성
- 가계부 작성하기 버튼을 클릭하면 작성 모달이 나옵니다.
- 주어진 항목들을 입력하면 작성 버튼이 활성화되어 가계부 작성이 가능합니다. (항목 중 메모는 작성하지 않아도 됩니다)
- 하단의 행 추가를 눌러 여러 개의 내역을 작성할 수 있습니다.

| 지출 · 수입 작성 |
|:---:|
|![2024-03-026 28 34-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/7ff77e6c-a7b5-4f28-8b50-2202c0bff827)|

<br>

#### 3. 지출 · 수입 수정 & 삭제
- 항목들을 체크하여 나오는 탭에서 수정 또는 삭제를 클릭합니다.
- 수정 및 삭제로 인해 내용이 변경되면 페이지에 바로 반영됩니다.

| 지출 · 수입 수정 & 삭제 |
|:---:|
|![2024-03-026 49 33-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/1248e98c-d420-4aed-84ec-c3771c413197)|

<br>

### [분석]
- 이번 달 지출을 차트 및 그래프를 통해 분석을 보여주는 페이지입니다.
- 최근 3개월 지출 합계, 주간 별 분석, 분류 별 지출, 예산 소진율, 낭비 리스트를 확인할 수 있습니다.

| 분석 |
|:---:|
|<img width="610" height="310" alt="스크린샷 2024-03-02 오후 8 28 25" src="https://github.com/kimtjrgus/salog/assets/120611048/e14c09c8-120f-435c-bf03-3bd931445433">|

<br>

### [예산]
- 이번 달 예산을 설정하고 남은 예산 및 하루 예산을 볼 수 있습니다.

| 예산 |
|:---:|
|![2024-03-027 08 26-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/fbfce4be-6114-4fdb-974a-129a9ea04b18)|

<br>

### [고정 지출 · 수입]

#### 1. 고정 지출 · 수입 조회
- 달마다 고정으로 발생하는 지출 및 수입을 관리하는 페이지입니다.
- 고정 지출은 지출 일을 기준으로 3일 미만 남았다면 빨간색, 일주일 미만이면 노란색, 일주일 이상은 초록색으로 표시됩니다.

| 고정 지출 · 수입 조회 |
|:---:|
|<img width="610" height="312" alt="스크린샷 2024-03-02 오후 8 36 56" src="https://github.com/kimtjrgus/salog/assets/120611048/7c6fd232-8df7-4d39-ad63-8ccc45d9fc8b">|

<br>

#### 2. 고정 지출 · 수입 작성
- 항목들을 작성하면 일정 추가하기 버튼이 활성화됩니다.

| 고정 지출 · 수입 작성 |
|:---:|
|![2024-03-027 21 07-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/e77aff03-a61f-4569-acef-a557f7fbdaf0)|

<br>

#### 3. 고정 지출 · 수입 수정 & 삭제
- 상단의 탭을 통하여 일정 수정 탭으로 이동하면 수정 및 삭제가 가능합니다.
- 금융 일정 목록에서 수정하고 싶은 항목을 선택하여 내용 수정을 할 수 있습니다.
- 목록 하단의 삭제하기를 클릭하여 내용 삭제를 할 수 있습니다.

| 고정 지출 · 수입 수정 & 삭제 |
|:---:|
|![2024-03-027 26 13-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/0b2fb1ed-64b8-4148-95ca-52449ff7b031)|

<br>

### [알림]
- 웹 알림, 이메일 알림이 있습니다.
  - 웹 알림은 헤더의 알림 아이콘을 클릭하여 확인 가능하며, 알람을 확인 후 삭제하면 로컬 저장소에 저장되어 알림이 다시 발송되지 않습니다. 
- 고정 지출 및 수입에서 일정이 3일 미만인 항목들만 알림을 발송하며, 일정 당일날에는 해당 목록들을 가계부에 추가하는 것을 묻는 모달을 보여줍니다.
- 알림 설정은 회원 가입 시 가능하며, 헤더의 알림 아이콘을 클릭하면 하단의 스위치를 통하여 on/off 가능합니다.

| 알림 |
|:---:|
|![2024-03-027 54 16-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/70567a95-d9fe-403d-8795-58aa2adbe727)|

<br>

### [일기]
#### 1. 일기 전체 조회
- 작성한 모든 일기를 조회하는 페이지입니다.
- 제목으로 검색, 태그 필더링 및 날짜 필터링 조회가 가능합니다.

| 일기 전체 조회 |
|:---:|
|![2024-03-028 53 52-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/344b9303-2ab5-44ad-bc57-aa28d9f142bd)|

<br>

#### 2. 일기 상세 조회
- 전체 조회 페이지에서 일기를 선택하여 조회합니다.
- 텍스트 에디터로 작성 된 일기가 그대로 보여지며, 우측에는 일기를 작성한 당일의 가계부를 확인할 수 있습니다.

| 일기 상세 조회 |
|:---:|
|<img width="610" height="312" alt="스크린샷 2024-03-02 오후 9 25 27" src="https://github.com/kimtjrgus/salog/assets/120611048/d0a29a8e-b285-4e7c-98b5-26f0d9ae7b97">|

<br>

#### 3. 일기 작성
- 텍스트 에디터를 통하여 본문에 이미지를 첨부할 수 있습니다.
- 우측에는 작성 당일의 가계부가 표시되어 내역을 볼 수 있습니다.
- 작성 버튼을 누르면 유효성 검사가 진행되고 통과하지 못하면 토스트 창으로 경고 문구가 나타납니다.
- 작성이 완료되면 전체 조회 페이지로 이동합니다. 또한 본문의 이미지를 올렸다면 썸네일로 지정하며,
  이미지가 여러개라면 첫 번째를 썸네일로 지정하여 전체 조회에 보여집니다.

| 일기 작성 |
|:---:|
|![2024-03-029 12 21-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/6c72940c-248a-4384-b209-cc17fd4b9fd4)|

<br>

#### 4. 일기 수정 & 삭제
- 일기 상세 조회시 상단의 수정 및 삭제 버튼을 클릭합니다.
- 수정 또는 삭제가 완료되면 전체 조회 페이지로 이동합니다.

| 일기 수정 & 삭제 |
|:---:|
|![2024-03-029 21 13-ezgif com-video-to-gif-converter](https://github.com/kimtjrgus/salog/assets/120611048/c3cb819c-f062-4670-9b25-f5c555604c06)|
 
<br>
<br>
<br>

## 🎆 개선 목표

### 1. 테스트 케이스 - 완료
- 단위 테스트로 진행
- 테스트 케이스 작성 완료 후 API 문서화

<br>

### 2. 리팩터링
- 모든 컨트롤러 핸들러 메서드에 포함된 jwt 블랙리스트 확인 메서드를 상속이나 필터로 구조 변경
- 수입, 지출 태그 중복 시 제거 후 기존 태그와 연결시키는 로직을 각 수입, 지출 서비스 클래스에서 태그 서비스 클래스로 이동
- 회원 이메일 전송(회원가입/비밀번호 찾기) 로직을 컨트롤러에서 서비스로 구조 변경

<br>

### 3. 보안 - 완료
- 이메일이 연락 가능한지 체크가 안된 상태로 가입 시도 시 에러 처리
- 리프레쉬 토큰을 활용한 jwt 재발급 삭제 후 토큰 만료시간 짧게 설정 및 토큰 자동 갱신 방식 사용

<br>

### 4. 성능 최적화 - 테스트, 모니터링 완료
- JMeter 부하 테스트 시도 후 최적화
- 그라파나 모니터링 시도 후 최적화

<br>

### 5. 클린코드
- Prettier를 활용하여 일관된 스타일의 코드로 변경
- PMD를 활용하여 불필요한 요소 제거

<br>
<br>
<br>
 
## 🎉 프로젝트 후기

### 이용석
이번 프로젝트는 이전에 진행했던 경험을 바탕으로 팀을 구성하여 더욱 발전된 결과물을 만들어낼 수 있었습니다. 
개개인의 시간을 활용하여 진행된 프로젝트였기에 일정은 예상보다 조금 늘어났지만, 그만큼 더 깊고 세밀한 부분까지 고려할 수 있었습니다.

특히, 보안과 배포 환경에 대한 깊은 고찰을 할 수 있던 시간은 매우 값진 경험이었습니다. 
이런 과정에서 Oauth와 Docker 같은 새로운 기술을 접하면서 통신 프로토콜과 배포 방법에 대한 이해도 깊어졌습니다. 
이 과정에서는 어려움도 많았지만, 그 어려움을 극복하며 새로운 기술을 습득한 것은 큰 성취감을 주었습니다.

에러 로그 분석 방법 등, 제 자신의 성장을 체감할 수 있는 순간도 있었습니다. 
프로젝트에 참여한 팀원들에게 감사의 마음을 전하며, 앞으로 리펙토링을 통해 이 프로젝트를 완벽에 더 가까이 가져가고자 합니다.

### 김석현
부트캠프 때 배웠던 것을 복습하는 느낌으로 팀원과 다 같이 설계부터 
프로젝트 끝까지 다시 구현해본 뜻 깊은 시간이었습니다.
지난 프로젝트때를 기억하며, 이번 프로젝트를 시작했었고 어떤 부분이 부족했는지,
더 채워나갈 부분은 무엇인지 알고 협업하며 공부하는 것이 재밌었습니다.

저는 백엔드로써 AWS를 다루고 배포하는 것에 대해 부족하다고 느꼈는데,
좀더 익숙해지고 Docker, Clova Api 등을 다루며, 이전에는 못 해보았던 것들을 경험하고 한 층 더 성장한 것 같습니다. 
트러블슈팅의 순간순간을 기록하지 못해 조금 아쉬운 점이 있으나, 일부 기록하고 차후에 블로깅을 하며 되새기는 것도 
하나의 재미일 것 같아 두근거립니다.
그리고 앞으로도 해당 프로젝트에 새로 배운 기술들의 추가나 좀 더 클린한 코드, 클린한 아키텍처로 
리팩토링하며 더 좋은 프로젝트가 되도록 가다듬어 보려합니다.

함께 협업한 코드마우스팀, 용석님 유준님 감사합니다.

### 선유준
많은 것을 배울 수 있었던 프로젝트였습니다. 
프론트엔드를 혼자 담당하게 되어 기획한 모든 기능들을 구현 해내기 위해 노력하였으며, 점차 완성되어 가는 웹을 보며 뿌듯함을 느꼈습니다.

기능적 부분으로는 Redux-toolkit을 사용하면서 리덕스 상태를 지속적으로 저장 및 복원하기 위한 Redux-persist를 사용하면서 전역상태를 사용해보는 경험을 해본 점이 좋았습니다.
추가로, 텍스트 에디터를 사용하여 이미지를 올릴 때 base64 형식으로 인코딩되어 저장되는 것을 firebase storage를 사용하여 url로 변환하여 사용하는 과정으로 최적화도 이뤄냈고, 가독성 문제도
해결한 뿌듯한 성과를 이뤄내며 성장할 수 있었습니다.

아쉬운 점으로는 React의 상태를 관리하면서 서버와 통신 할 때 최신화하는 것을 위해 React-Query를 사용해보고 싶었지만, 기능을 구현하는 것에 초점을 두어 학습하지 못한 점이 아쉬웠습니다.

모두 고생하셨고 리팩토링을 통하여 더 나은 프로젝트 완성까지 화이팅해봅시다!
