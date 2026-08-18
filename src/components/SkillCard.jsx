/* Skill Card */
const SkillCard = ({ title, skills }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 border-theme-border bg-theme-card hover:border-[#00ddff]/40">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ddff]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[#00ddff] transition-colors text-theme-text">
                {title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 rounded-full border px-3 py-2 transition-all duration-300 hover:-translate-y-1 border-theme-border bg-theme-bg hover:border-[#00ddff]/40">
                        {s.icon} <span className="text-theme-text-muted">{s.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillCard;

