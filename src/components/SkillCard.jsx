const SkillCard = ({ title, skills, focus = [] }) => {
    const normalizedFocus = new Set(focus.map((item) => item.toLowerCase()));
    const visibleSkills = focus.length
        ? skills.filter((skill) => normalizedFocus.has(skill.name.toLowerCase()))
        : skills;

    if (!visibleSkills.length) return null;

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-theme-border bg-theme-card p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#00ddff]/40">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ddff]/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="mb-4 text-xl font-semibold text-theme-text transition-colors group-hover:text-[#00ddff]">
                {title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {visibleSkills.map((skill, idx) => (
                    <div
                        key={`${skill.name}-${idx}`}
                        className="flex items-center gap-2 rounded-full border border-theme-border bg-theme-bg px-3 py-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00ddff]/50"
                    >
                        {skill.icon}
                        <span className="text-theme-text-muted">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
