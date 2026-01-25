export default function Footer() {
    return (
        <footer className="w-full py-12 border-t border-white/5 bg-[#0A0A0A] relative z-10">
            <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start justify-between gap-12">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <span className="font-display font-bold text-lg text-white">SnapAct</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/5">HumanOS</span>
                        </div>
                        <p className="text-sm text-gray-500 max-w-xs">
                            Your Intelligent Life Operating System.
                            Transforming input into action.
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 text-xs text-gray-600 font-sans leading-relaxed">
                        <p className="font-bold text-gray-500">주식회사 만월</p>
                        <p>상호: 주식회사 만월 | 대표: 손재경</p>
                        <p>사업자 등록번호: 325-86-03628</p>
                        <p>주소: 경기도 파주시 경의로 1092, 808-A157호</p>
                        <p>통신판매신고번호: 제2025-경기파주-1640호</p>
                    </div>
                </div>

                <div className="flex items-center gap-6 self-end md:self-auto">
                    <p className="text-sm text-gray-600">
                        © {new Date().getFullYear()} SnapAct. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
