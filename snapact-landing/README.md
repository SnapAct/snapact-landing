# SnapAct - HumanOS 프로젝트 소개서

## 1. 프로젝트 개요 (Overview)

**SnapAct**는 단순한 할 일 관리 앱을 넘어, 사용자의 **"인간 운영체제(HumanOS)"**를 지향하는 차세대 라이프 매니지먼트 플랫폼입니다.
파편화된 정보(할 일, 캘린더, 스크린샷)와 비현실적인 계획 수립의 문제를 해결하기 위해, **AI가 입력(Input)과 맥락(Context)을 통합하여 최적의 행동 계획(Action Plan)을 자동으로 설계**합니다.

### 해결하고자 하는 문제
*   **파편화된 정보:** 투두 앱, 캘린더, 사진첩에 흩어진 정보들.
*   **입력의 귀찮음:** 일일이 타이핑해야 하는 투두 리스트의 한계.
*   **계획의 실패:** 가용 시간(Capacity)을 고려하지 않은 무리한 계획.

## 2. 핵심 솔루션 (Key Solutions)

### ① Zero-Click Input (무자각 입력)
*   사용자가 중요한 정보를 **스크린샷**으로 찍기만 하면, AI가 자동으로 내용을 분석(OCR/Vision)하여 할 일(Task)로 변환합니다.
*   입력의 장벽을 최소화하여 데이터 누락을 방지합니다.

### ② Context-Aware Planning (맥락 기반 계획)
*   **구글 캘린더**와 연동하여 실제 가용 시간(Free Time Slots)을 분석합니다.
*   단순 목록 나열이 아닌, "언제 할 수 있는지"를 고려한 **실행 가능한(Actionable) 계획**을 제안합니다.

### ③ Execution Profile (개인화된 프로필)
*   사용자의 **에너지 피크 시간**, **하루 적정 업무량**, **목표(Goal)** 등을 학습하여, 개인에게 최적화된 스케줄을 제공합니다.

## 3. 주요 기능 모듈 (Modules)

### 🧩 Module A: 인증 및 온보딩 (Auth & Booting)
*   **Supabase Auth** 기반의 구글 원클릭 로그인.
*   **프로파일링**: 사용자 성향(Role, Goal, Energy Pattern)을 파악하여 AI의 페르소나 설정.
*   **WOW 모먼트**: 온보딩 과정에서 즉각적인 AI 분석 경험 제공.

### 📸 Module B: 입력 및 분석 (Sensoring)
*   **스크린샷 감지**: 백그라운드에서 캡처 이벤트를 감지하여 자동 처리 (`screenshot_callback`).
*   **이미지 분석**: **Gemini 1.5 Flash**를 활용하여 이미지에서 텍스트와 의도를 추출.
*   **Task 구조화**: 비정형 데이터를 `Title`, `Time`, `Category`로 구조화하여 **Inbox**에 저장.

### 🧠 Module C: AI 플래닝 (The Brain)
*   **가용 시간 계산**: 수면 시간과 캘린더 일정을 제외한 실제 업무 가능 시간 산출.
*   **Today Plan 생성**: `Inbox(우선순위)` + `가용 시간` + `유저 프로필`을 조합하여 **"오늘의 할 일(1~3개)"** 자동 설계.
*   **플랜 조정**: 채팅 인터페이스(`Chat UI`)를 통해 유동적인 스케줄 변경 지원.

### ✅ Module D: 실행 및 관리 (Do & Log)
*   **Today View**: 오늘 확정된 카드만 보여주는 집중형 UI로 몰입도 향상.
*   **실행 컨트롤**: 완료, 미루기 등의 상태 값을 직관적으로 처리.

### 🔍 Module E: 제2의 뇌 (Brain & Retrieval)
*   **벡터 저장**: 스크린샷 및 태스크 데이터를 임베딩(`text-embedding-004`)하여 저장.
*   **자연어 검색**: "저번에 봤던 레시피 뭐야?"와 같은 질문에 유사도 검색(Vector Search)으로 답변.

## 4. 시스템 아키텍처 및 기술 스택

### Frontend: Mobile App (`apps/`)
*   **Framework**: Flutter (Dart)
*   **State Management**: Riverpod
*   **Native Features**: Background Service, Image Picker

### Backend: Serverless Cloud (`supabase/`)
*   **Core**: Supabase (PostgreSQL, Auth, Storage)
*   **Logics (Edge Functions)**:
    *   `analyze-screenshot`: 비전 AI 분석
    *   `generate-plan`: 일일 계획 생성 로직
    *   `chat-assistant`: 대화형 에이전트
    *   `exchange-google-token`: 외부 서비스 연동
*   **AI Models**:
    *   **Logic/Vision**: Google Gemini 1.5 Flash
    *   **Embedding**: Google Text-Embedding-004 (768 dims)

## 5. 데이터 구조 (ERD 요약)
*   **`users`, `user_metas`**: 사용자 계정 및 프로파일링 데이터.
*   **`tasks`**: 할 일 객체 (Embedding 포함).
*   **`time_blocks`**: 캘린더 일정과 Task가 매핑된 시간 블록.
*   **`document_embeddings`**: 스크린샷 및 문서의 벡터 데이터.

## 6. 시작하기 (Getting Started)

### 환경 설정
*   Flutter SDK
*   Supabase CLI & Docker

### 실행 방법
1.  **Apps**: `apps` 디렉토리에서 `flutter run`
2.  **Backend**: 프로젝트 루트에서 `supabase start`

---
*SnapAct - Your Intelligent Life Operating System*