export default function Modules() {
    const modules = [
        {
            id: "A",
            title: "Auth & Booting",
            desc: "Instant onboarding with Supabase Auth & Google Profiling.",
            color: "border-blue-500/30 text-blue-400"
        },
        {
            id: "B",
            title: "Sensoring",
            desc: "Background Service & Gemini Vision for automatic capture.",
            color: "border-purple-500/30 text-purple-400"
        },
        {
            id: "C",
            title: "The Brain",
            desc: "Logic engine that calculates availability & prioritization.",
            color: "border-pink-500/30 text-pink-400"
        },
        {
            id: "D",
            title: "Do & Log",
            desc: "Focused execution view with distraction-free UI.",
            color: "border-emerald-500/30 text-emerald-400"
        },
        {
            id: "E",
            title: "Retrieval",
            desc: "Your second brain. Vector search for natural language recall.",
            color: "border-amber-500/30 text-amber-400"
        }
    ];

    return (
        <section id="modules" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-display font-bold text-3xl md:text-5xl">
                        Modular Intelligence
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Built on a robust architecture of specialized agents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((mod, i) => (
                        <div key={i} className={`p-8 rounded-3xl bg-[#0F0F0F] border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1 relative overflow-hidden group`}>
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl select-none font-display">
                                {mod.id}
                            </div>

                            <div className={`w-10 h-10 rounded-full border ${mod.color} flex items-center justify-center font-bold mb-6 bg-white/5`}>
                                {mod.id}
                            </div>

                            <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-primary-300 transition-colors">Module {mod.id}: {mod.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {mod.desc}
                            </p>
                        </div>
                    ))}

                    {/* Tech Stack Mini-Card */}
                    <div className="p-8 rounded-3xl border border-dashed border-white/10 flex flex-col justify-center items-center text-center gap-4">
                        <div className="text-sm font-medium text-gray-500">Powered By</div>
                        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="font-bold text-white">Flutter</span>
                            <span className="font-bold text-emerald-400">Supabase</span>
                            <span className="font-bold text-blue-400">Gemini</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
