export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>

            <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 bg-primary/5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-sm font-medium text-primary-300">New: Zero-Click Input with Gemini</span>
                </div>

                <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight md:leading-tight tracking-tight">
                    Your Intelligent <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient-x">
                        Life Operating System
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    SnapAct transforms your fragmented inputs into actionable plans.
                    Stop managing to-do lists. Start actioning with <span className="text-white font-medium">Context-Aware AI</span>.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a
                        href="https://calendar.google.com"
                        target="_blank"
                        className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-600 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(109,40,217,0.5)] active:scale-95 flex items-center justify-center gap-2"
                    >
                        Get Started Free
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                    </a>
                    <a
                        href="#problem"
                        className="w-full sm:w-auto px-8 py-4 glass text-white rounded-full font-medium text-lg transition-all hover:bg-white/10 active:scale-95"
                    >
                        How it works
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
                    <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
