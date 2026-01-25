import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(109,40,217,0.5)]">
                        S
                    </div>
                    <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                        SnapAct
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Problem', 'Solution', 'Modules'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="https://calendar.google.com"
                        target="_blank"
                        className="px-5 py-2.5 rounded-full glass hover:bg-white/10 text-sm font-medium text-white transition-all hover:scale-105 active:scale-95 border border-white/10"
                    >
                        Get Started
                    </Link>
                </nav>
            </div>

            {/* Glass Background using CSS container queries or just absolute if needed contextually, 
          but here we apply it to the header itself if scrolled (logic can be added later),
          or just static glass for now. Let's make it static glass for simplicity and premium feel. */}
            <div className="absolute inset-0 -z-10 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5"></div>
        </header>
    );
}
