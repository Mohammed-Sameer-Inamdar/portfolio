const CoreSkillCard = ({ name, proficiency, icon }) => {
    return (
        <div className="relative group p-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 border-theme-border bg-theme-card hover:border-[#00ddff]/40 shadow-lg shadow-theme-border/20 border">
            {/* Glow effect on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[#00ddff]/5" />
            <div className="relative z-10">
                {/* Icon and Name */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{icon}</div>
                    <h4 className="font-semibold text-sm text-theme-text">
                        {name}
                    </h4>
                </div>
                
                {/* Proficiency Bar */}
                <div className="w-full">
                    <div className="h-1.5 rounded-full overflow-hidden bg-theme-border">
                        <div
                            className="h-full bg-gradient-to-r from-[#00ddff] to-[#ff00d4] transition-all duration-500"
                            style={{ width: `${proficiency}%` }}
                        />
                    </div>
                    <div className="text-xs font-semibold mt-1 text-theme-text-muted">
                        {proficiency}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreSkillCard;

