const CoreSkillCard = ({ name, proficiency, icon, highlighted = false }) => {
    return (
        <div
            className={`relative group rounded-2xl border p-4 shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                highlighted
                    ? "border-[#00ddff]/70 shadow-[#00ddff]/10"
                    : "border-theme-border shadow-theme-border/20"
            } bg-theme-card`}
        >
            {highlighted && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#00ddff]/5 opacity-70" />
            )}
            <div className="relative z-10">
                <div className="mb-3 flex items-center gap-3">
                    <div className="text-3xl">{icon}</div>
                    <h4 className="text-sm font-semibold text-theme-text">{name}</h4>
                </div>
                <div className="w-full">
                    <div className="h-1.5 overflow-hidden rounded-full bg-theme-border">
                        <div
                            className="h-full bg-gradient-to-r from-[#00ddff] to-[#ff00d4] transition-all duration-700"
                            style={{ width: `${proficiency}%` }}
                        />
                    </div>
                    <div className="mt-1 text-xs font-semibold text-theme-text-muted">
                        {proficiency}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreSkillCard;
