export default function Solution() {
    const solutions = [
        {
            title: "Zero-Click Input",
            subtitle: "Capture without Friction",
            description: "Just take a screenshot. SnapAct uses Gemini 1.5 Vision to analyze your screen, extract context, and create actionable tasks instantly.",
            image: "bg-gradient-to-br from-purple-500/20 to-blue-500/20", // Placeholder for now
            reverse: false
        },
        {
            title: "Context-Aware Planning",
            subtitle: "Plan with Reality",
            description: "It doesn't just list tasks. It checks your Google Calendar, finds your free slots, and suggests the perfect time to act.",
            image: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
            reverse: true
        },
        {
            title: "Execution Profile",
            subtitle: "Personalized for you",
            description: "SnapAct learns your energy peaks and habits. It builds a schedule that respects your limits and maximizes your flow.",
            image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
            reverse: false
        },
    ];

    return (
        <section id="solution" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full -z-10"></div>

            <div className="max-w-7xl mx-auto space-y-32">
                <div className="text-center space-y-4">
                    <h2 className="font-display font-bold text-3xl md:text-5xl">
                        From Inputs to <span className="text-secondary">Actions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Three core technologies working in harmony to serve your brain.
                    </p>
                </div>

                {solutions.map((item, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${item.reverse ? 'md:flex-row-reverse' : ''}`}>

                        <div className="flex-1 space-y-6">
                            <span className="text-secondary font-medium tracking-wider uppercase text-sm border border-secondary/20 px-3 py-1 rounded-full">{item.subtitle}</span>
                            <h3 className="text-3xl md:text-4xl font-bold font-display">{item.title}</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className={`flex-1 w-full aspect-video rounded-3xl glass flex items-center justify-center p-8 relative overflow-hidden group hover:border-white/20 transition-all cursor-default`}>
                            <div className={`absolute inset-0 ${item.image} opacity-50 group-hover:scale-105 transition-transform duration-700`}></div>
                            <div className="relative text-white/50 text-sm font-mono">
                                [Visual Placeholder: {item.title}]
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
