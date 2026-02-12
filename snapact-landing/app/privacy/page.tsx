import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <main className="flex-1 bg-[#0A0A0A] text-gray-300 font-sans">
            <div className="relative pt-32 pb-24 overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-4xl px-6 relative z-10">
                    <div className="mb-12">
                        <Link
                            href="/"
                            className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2 group mb-8"
                        >
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-500">최근 업데이트: 2026년 2월 5일</p>
                    </div>

                    <div className="prose prose-invert prose-purple max-w-none space-y-12 text-gray-400 leading-relaxed">
                        <section>
                            <p>
                                <strong>주식회사 만월</strong>(이하 “회사”)는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「개인정보 보호법」 등 정보통신서비스 제공자가 준수하여야 할 관련 법령상의 개인정보 보호 규정을 준수하며, 이용자의 권익 보호에 최선을 다하고 있습니다.
                            </p>
                            <p>
                                회사는 관련 법령에 따라 다음과 같이 「개인정보처리방침」을 수립·공개하며, 이용자가 언제든지 열람할 수 있도록 합니다. 본 방침은 관련 법령, 지침 또는 회사의 내부 정책 변경에 따라 개정될 수 있으며, 변경 시에는 SnapAct 서비스 내 공지사항 또는 홈페이지를 통해 사전에 안내드립니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 1장. 개인정보 수집 및 이용목적</h2>
                            <p className="mb-6">
                                회사는 SnapAct 서비스 제공을 위하여 어플리케이션 및 웹페이지를 통해 개인정보를 수집하며, 설문조사, 이벤트, 프로모션 진행 시에도 개인정보 입력을 요청할 수 있습니다.
                            </p>

                            <h3 className="text-xl font-bold text-white mb-4">수집 항목 및 목적</h3>
                            <div className="overflow-x-auto mb-6">
                                <table className="w-full border-collapse border border-white/10 text-sm">
                                    <thead>
                                        <tr className="bg-white/5">
                                            <th className="border border-white/10 px-4 py-3 text-left">구분</th>
                                            <th className="border border-white/10 px-4 py-3 text-left">수집 항목</th>
                                            <th className="border border-white/10 px-4 py-3 text-left">필수/선택</th>
                                            <th className="border border-white/10 px-4 py-3 text-left">처리 목적</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-white/10 px-4 py-3">기본정보</td>
                                            <td className="border border-white/10 px-4 py-3">이메일, 이름(닉네임)</td>
                                            <td className="border border-white/10 px-4 py-3">필수</td>
                                            <td className="border border-white/10 px-4 py-3">회원관리, 본인확인</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/10 px-4 py-3">선택 정보</td>
                                            <td className="border border-white/10 px-4 py-3">사진, 캡처 데이터, 실행 기록(텍스트·이미지), 사용자 입력 정보</td>
                                            <td className="border border-white/10 px-4 py-3">선택</td>
                                            <td className="border border-white/10 px-4 py-3">맞춤 실행 제안, 통계 분석</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/10 px-4 py-3">기기 정보</td>
                                            <td className="border border-white/10 px-4 py-3">기기 식별자, OS, 광고식별자</td>
                                            <td className="border border-white/10 px-4 py-3">필수</td>
                                            <td className="border border-white/10 px-4 py-3">서비스 안정 제공</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/10 px-4 py-3">로그 정보</td>
                                            <td className="border border-white/10 px-4 py-3">서비스 이용 기록, 접속 로그, IP 등</td>
                                            <td className="border border-white/10 px-4 py-3">필수</td>
                                            <td className="border border-white/10 px-4 py-3">서비스 개선, 오류 처리</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="mb-4">회사가 처리하는 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 목적이 변경될 시에는 회원에게 사전 동의를 구할 예정입니다.</p>
                            <p className="mb-4">회사는 수집한 개인정보를 다음 목적 범위 내에서만 이용하며, 목적 변경 시 사전 동의를 받습니다.</p>
                            <ol className="list-decimal pl-6 space-y-2 mb-6">
                                <li>회원 가입 및 본인 확인, 부정 이용 방지 등 회원 관리</li>
                                <li>SnapAct 서비스 제공 및 계약 이행</li>
                                <li>캡처 기반 실행 제안, 알림 제공, 개인화 기능 제공</li>
                                <li>서비스 개선 및 신규 기능 개발</li>
                                <li>서비스 정책 변경, 공지사항 전달</li>
                                <li>이용자 동의에 따른 이벤트, 프로모션, 맞춤형 광고 제공</li>
                                <li>관련 법령에 따른 의무 이행</li>
                            </ol>
                            <p className="text-sm italic text-gray-500">※ 이용자는 개인정보 제공에 동의하지 않을 권리가 있으며, 필수 항목 미동의 시 서비스 이용이 제한될 수 있습니다.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 2장. 개인정보의 보유 및 이용기간</h2>
                            <p className="mb-4">
                                서비스 이용자의 개인정보는 그 수집 및 이용 목적(설문조사, 이벤트 등 일시적인 목적을 포함)이 달성되거나 이용자가 직접 삭제 또는 회원 탈퇴한 경우에 재생할 수 없는 방법으로 파기됩니다. "개인정보 유효기간제"에 따라 1년간 서비스를 이용하지 않은 회원의 개인정보를 별도로 분리 보관하고 있습니다.
                            </p>
                            <p className="mb-4">
                                당사는 이용자의 권리 남용, 악용 방지, 권리침해/명예훼손 분쟁 및 수사협조 등의 요청이 있었을 경우에는 이의 재발에 대비하여 회원의 이용계약 해지 시로부터 1년 동안 회원의 개인정보를 보관할 수 있습니다. 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 당사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 당사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
                            </p>

                            <div className="space-y-6 mt-8">
                                <div>
                                    <h4 className="font-bold text-white mb-2">가. 회사 내부 방침에 의한 정보보유 사유</h4>
                                    <p>회원탈퇴 시 개인정보 보존기간은 아래와 같습니다.</p>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li>보존근거 : 불량 이용자의 재가입 방지, 명예훼손 등 권리침해 분쟁 및 수사협조</li>
                                        <li>보존기간 : 회원탈퇴 후 1년</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2">나. 관련법령에 의한 정보보유 사유</h4>
                                    <p>상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.</p>
                                    <ul className="list-disc pl-6 space-y-4 mt-4">
                                        <li>
                                            <strong>계약 또는 청약철회 등에 관한 기록</strong>
                                            <ul className="pl-4 mt-1 text-sm text-gray-500">
                                                <li>보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률</li>
                                                <li>보존 기간 : 5년</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>대금결제 및 재화 등의 공급에 관한 기록</strong>
                                            <ul className="pl-4 mt-1 text-sm text-gray-500">
                                                <li>보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률</li>
                                                <li>보존 기간 : 5년</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>소비자의 불만 또는 분쟁처리에 관한 기록</strong>
                                            <ul className="pl-4 mt-1 text-sm text-gray-500">
                                                <li>보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률</li>
                                                <li>보존 기간 : 3년</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>본인확인에 관한 기록</strong>
                                            <ul className="pl-4 mt-1 text-sm text-gray-500">
                                                <li>보존 이유 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률</li>
                                                <li>보존 기간 : 6개월</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>방문에 관한 기록</strong>
                                            <ul className="pl-4 mt-1 text-sm text-gray-500">
                                                <li>보존 이유 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률</li>
                                                <li>보존 기간 : 3개월</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 3장. 개인정보의 열람, 수정, 삭제</h2>
                            <p>
                                이용자는 언제든지 본인의 개인정보를 열람·수정·삭제하거나 회원 탈퇴를 요청할 수 있으며, SnapAct 앱 또는 고객센터를 통해 처리할 수 있습니다. 요청 시 회사는 지체 없이 조치합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 4장. 개인정보의 파기절차 및 방법</h2>
                            <p className="mb-4">
                                이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
                            </p>
                            <p>
                                전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 5장. 개인정보 처리의 위탁 및 국외 이전</h2>
                            <p className="mb-4">
                                회사는 개인정보의 처리와 관련하여 아래와 같이 업무를 위탁하고 있으며, 관계법령에 따라 위탁 처리되는 개인정보가 안전하게 관리될 수 있도록 필요한 조치를 다하고 있습니다. 위탁 처리하는 정보는 서비스 제공에 필요한 최소한의 범위에 국한되고, 모두 암호화되어 제공됩니다.
                            </p>
                            <p className="mb-6">
                                회사에서 위탁 처리되고 있는 업무와 수탁 업체는 아래와 같습니다. 서비스 제공 목적 및 이용자 편의 증진을 위하여 국외 업체에 위탁, 보관하고 있으며 서비스 이용 시점에 네트워크를 통해 전송됩니다.
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-white/10 text-sm">
                                    <thead>
                                        <tr className="bg-white/5">
                                            <th className="border border-white/10 px-4 py-3 text-left">이전 받는 자</th>
                                            <th className="border border-white/10 px-4 py-3 text-left">이전되는 국가</th>
                                            <th className="border border-white/10 px-4 py-3 text-left">이용 목적</th>
                                            <th className="border border-white/10 px-4 py-3 text-left">이전되는 개인정보 항목</th>
                                            <th className="border border-white/10 px-4 py-3 text-left">보유 및 이용 기간</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs">
                                        {[
                                            { name: "Google Analytics", country: "미국", purpose: "서비스 이용에 대한 데이터 처리", items: "서비스 이용 기록 또는 수집된 개인정보", period: "회원 탈퇴시까지" },
                                            { name: "Firebase", country: "미국", purpose: "서비스 이용에 대한 데이터 처리", items: "서비스 이용 기록 또는 수집된 개인정보", period: "회원 탈퇴시까지" },
                                            { name: "Amplitude", country: "미국", purpose: "사용자의 서비스 이용에 대한 통계 분석", items: "서비스 이용 기록", period: "회원 탈퇴시까지" },
                                            { name: "appsflyer", country: "미국", purpose: "사용자의 서비스 이용에 대한 통계 분석", items: "서비스 이용 기록", period: "회원 탈퇴시까지" },
                                            { name: "mixpanel", country: "미국", purpose: "사용자의 서비스 이용에 대한 통계 분석", items: "서비스 이용 기록", period: "회원 탈퇴시까지" },
                                            { name: "Facebook", country: "미국", purpose: "타겟 고객군 대상 마케팅", items: "암호화된 개별 UID", period: "회원 탈퇴시까지" },
                                            { name: "Tiktok", country: "미국", purpose: "타겟 고객군 대상 마케팅", items: "암호화된 개별 UID", period: "회원 탈퇴시까지" },
                                            { name: "Google Ads", country: "미국", purpose: "타겟 고객군 대상 마케팅", items: "암호화된 개별 UID", period: "회원 탈퇴시까지" },
                                            { name: "Twitter", country: "미국", purpose: "타겟 고객군 대상 마케팅", items: "암호화된 개별 UID", period: "회원 탈퇴시까지" },
                                            { name: "Amazon Web service", country: "미국", purpose: "데이터 처리 및 저장", items: "서비스 이용 기록 또는 수집된 개인정보", period: "회원 탈퇴시까지" },
                                        ].map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="border border-white/10 px-4 py-3 font-bold">{item.name}</td>
                                                <td className="border border-white/10 px-4 py-3">{item.country}</td>
                                                <td className="border border-white/10 px-4 py-3">{item.purpose}</td>
                                                <td className="border border-white/10 px-4 py-3">{item.items}</td>
                                                <td className="border border-white/10 px-4 py-3">{item.period}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-sm text-gray-500 text-center">위탁사항이 변경되는 경우, 본 개인정보처리방침을 통하여 해당 사실을 알려드리겠습니다.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 6장. 이용자 및 법정대리인의 권리</h2>
                            <p className="mb-4">
                                이용자 및 법정대리인은 언제든지 등록되어 있는 회원의 개인정보를 열람하거나 수정할 수 있으며, 회원탈퇴 절차를 통하여 개인정보 이용에 대한 동의를 철회할 수 있습니다. 혹은 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다. 법정대리인의 경우 개인정보보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하여야 권리를 행사할 수 있습니다.
                            </p>
                            <p className="mb-4">
                                이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리 결과를 제 3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
                            </p>
                            <p>
                                회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 “개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 7장. 개인정보 자동 수집 장치의 설치·운영 및 거부</h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-white mb-2">가. 쿠키(cookie)에 대하여</h4>
                                    <p className="mb-4">회사는 이용자별 맞춤서비스 등을 제공하기 위하여 쿠키(cookie)를 설치 및 운영합니다. 쿠키의 사용 목적과 거부에 관한 사항은 아래와 같습니다.</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>쿠키의 의미:</strong> 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터에 저장되어 운영됩니다.</li>
                                        <li><strong>쿠키의 사용 목적:</strong> 이용자들의 접속관리, 오류 관리, 이용자 별 사용 환경 제공, 이용자 활동정보 파악, a/b test, 이벤트 및 프로모션 통계 확인 등을 파악하여 최적화된 맞춤형 서비스를 제공하기 위해 사용합니다.</li>
                                        <li><strong>쿠키의 설치∙운영 및 거부:</strong> 설비를 이용함에 있어 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 다만 이용자가 쿠키를 거부할 경우, 서비스 제공에 어려움이 있을 수 있습니다.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-2">나. 온라인 맞춤형 광고 서비스에 대하여</h4>
                                    <p className="mb-4">회사는 이용자의 온라인 이용 형태, 접속 기록 등을 분석하여 이용자의 특성을 고려한 서비스를 제공하고자 다음과 같이 온라인 맞춤형 광고 사업자가 행태정보를 수집하도록 허용하고 있습니다.</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>행태정보를 수집 및 처리하는 광고 사업자:</strong> 페이스북, 구글, Amplitude, 네이버, 카카오, 틱톡, appsflyer</li>
                                        <li><strong>행태정보 수집 방법:</strong> 이용자가 회사의 웹사이트를 방문하거나 앱을 실행할 때 자동 수집</li>
                                    </ul>
                                    <p className="mt-4">이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 단, 이용자께서 쿠키 설치를 거부하였을 경우 회사가 제공하는 일부 서비스에 어려움이 있을 수 있습니다.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 8장. 개인정보 보호를 위한 기술적·관리적 대책</h2>
                            <p className="mb-6">회원님의 개인정보는 비밀번호에 의해 보호되고 있습니다.</p>
                            <p className="mb-6">
                                회원님 계정의 비밀번호는 오직 본인만이 알 수 있으며, 개인정보의 확인 및 변경도 비밀번호를 알고 있는 본인에 의해서만 가능합니다. 따라서 회원님의 비밀번호는 누구에게도 알려주면 안됩니다. 본인 명의의 기기 이외에는 사용 후 반드시 로그아웃하시고 완전 종료 하시기를 권장합니다. 이용상 부주의로 인한 개인정보 유출에 대해서 회사는 책임을 지지 않습니다.
                            </p>
                            <p className="mb-6">
                                회사는 이용자의 개인정보에 대한 보안을 매우 중요하게 생각합니다. 회사는 이용자 개인정보의 무단 접근, 공개, 사용 및 수정을 막기 위해 다음과 같은 보안 조치를 구축하고 있습니다.
                            </p>
                            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 space-y-4">
                                <h4 className="font-bold text-white">[개인정보의 암호화]</h4>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>이용자의 개인정보를 암호화된 통신구간을 이용하여 전송</li>
                                    <li>비밀번호 등 중요정보는 암호화하여 보관</li>
                                    <li>해킹 등에 대비한 대책</li>
                                    <li>해킹이나 컴퓨터 바이러스 등에 의해 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해 외부로부터 접근이 통제된 구역에 시스템을 설치</li>
                                    <li>내부관리계획의 수립 및 시행</li>
                                    <li>접근통제장치의 설치 및 운영</li>
                                    <li>접속기록의 위조, 변조 방지를 위한 조치</li>
                                    <li>개인정보에 대한 접근은 해당 업무 수행자, 업무 수행시 개인정보 취급이 불가피한 자로 제한</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 9장. 아동의 개인정보 보호</h2>
                            <p className="mb-6">
                                회사는 원칙적으로 13 세 미만 또는 관할 법률상 이에 상응하는 최소 연령의 어린이로부터 정보를 수집하지 않습니다. 다만 회사가 부득이 서비스 이용을 위하여 13 세 미만 또는 관할 법률상 이에 상응하는 최소 연령의 어린이의 개인정보를 수집할 때에는, 어린이 개인정보 보호를 위해 다음과 같은 절차를 추가적으로 거치게 됩니다.
                            </p>
                            <ol className="list-decimal pl-6 space-y-4">
                                <li>어린이 개인정보 수집 또는 회사의 제품, 서비스 정보를 어린이에게 직접 발송하기 위한 보호자 동의 절차 진행</li>
                                <li>수집한 개인정보 항목, 목적, 공유 여부를 포함한 회사의 어린이 개인정보보호방침에 대해여 보호자에게 통보</li>
                                <li>법정대리인에게 해당 아동의 개인정보에 대한 액세스, 개인정보의 정정 또는 삭제, 개인정보처리의 일시정지, 기존에 제공한 동의의 철회를 요청할 수 있는 권한 부여</li>
                                <li>서비스 활동 참여에 필수적으로 필요한 것 이외의 개인정보수집 범위 제한</li>
                            </ol>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 10장. 광고성 정보 전송 제한</h2>
                            <p className="mb-6">회사는 이용자의 사전 동의 없이 광고성 정보를 전송하지 않으며, 전송 시 관련 법령을 준수합니다.</p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li><strong>전자우편:</strong> 제목란에 ‘(광고)’라는 문구를 처음에 빈칸없이 한글로 표시하고 이어서 전자우편 본문란의 주요내용을 표시합니다.</li>
                                <li><strong>팩스·휴대폰 문자전송 등 전자우편 이외의 방법:</strong> 전송자 명칭을 표기하는 등 필요한 조치를 취합니다.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 11장. 개인정보의 추가 제공·이용 판단 기준</h2>
                            <p className="mb-6">회사는 다음 기준에 따라 추가 제공·이용 여부를 판단합니다.</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>1. 수집 목적과의 관련성</li>
                                <li>2. 이용자의 예측 가능성</li>
                                <li>3. 이용자 권리 침해 여부</li>
                                <li>4. 안전성 확보 조치 여부</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 12장. 개인정보 보호책임자</h2>
                            <p className="mb-6">회사 담당부서 회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 담당자를 지정하고 있습니다. 본 방침에 대하여 의견이 있거나 회사가 보유한 이용자의 정보를 업데이트하고자 하는 경우, 아래 연락처로 연락 바랍니다.</p>
                            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                                <ul className="space-y-4">
                                    <li><span className="text-gray-500 mr-2">성명:</span> <span className="text-white">장영하</span></li>
                                    <li><span className="text-gray-500 mr-2">소속:</span> <span className="text-white">주식회사 만월</span></li>
                                    <li><span className="text-gray-500 mr-2">이메일:</span> <Link href="mailto:official@snapact.ai" className="text-primary hover:underline font-bold">official@snapact.ai</Link></li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-display font-bold text-white mb-6">제 13장. 고지의 의무</h2>
                            <p className="mb-4">본 개인정보처리방침의 내용이 변경될 경우, 변경 사항은 <strong>최소 7일 전</strong> SnapAct 서비스 내 공지를 통해 안내합니다.</p>
                            <p className="mb-8">중대한 변경 사항의 경우 <strong>30일 전</strong> 고지합니다.</p>

                            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center space-y-4">
                                <p>본 개인정보처리방침은 2025년 2월 5일부터 적용되고, 종전의 개인정보처리방침은 본 개인정보처리방침으로 대체됩니다.</p>
                                <div className="grid grid-cols-2 gap-4 text-sm mt-8 border-t border-white/10 pt-8">
                                    <div>
                                        <p className="text-gray-500">공고일자</p>
                                        <p className="text-white font-bold">2026년 2월 5일</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500">시행일자</p>
                                        <p className="text-white font-bold">2026년 2월 5일</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
