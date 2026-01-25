export default function Problem() {
    const problems = [
        {
            title: "Fragmented Information",
            description: "Tasks in apps, events in calendars, ideas in screenshots. Your life is scattered across too many silos.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            )
        },
        {
            title: "Input Friction",
            description: "Typing to-do lists is tedious. You forget things before you can write them down. 50% of tasks are never recorded.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
            )
        },
        {
            title: "Planning Failure",
            description: "Lists don't care about your time. You schedule 10 hours of work into a 2-hour slot, setting yourself up to fail.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )
        }
    ];

    return (
        <section id="problem" className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <h2 className="font-display font-bold text-3xl md:text-5xl">
                    The <span className="text-red-400">Broken Loop</span> of Productivity
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We use smarter devices, but our workflow remains dumb.
                    The gap between capturing an idea and doing it is where most plans die.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {problems.map((item, i) => (
                    <div key={i} className="glass p-8 rounded-2xl group hover:border-primary/50 transition-colors">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold font-display mb-3 text-white">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
