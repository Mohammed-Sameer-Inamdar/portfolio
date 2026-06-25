/* Skill Card */
const SkillCard = ({ title, skills }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/70 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 hover:border-[#00ddff]/40 hover:shadow-[#ff00d4]/30">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ddff]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[#00ddff] transition-colors">{title}</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:border-[#00ddff]/40 hover:bg-[#00ddff]/10">
                        {s.icon} <span className="text-gray-300">{s.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillCard;
