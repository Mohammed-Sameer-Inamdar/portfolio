import { FaExternalLinkAlt } from "react-icons/fa";
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from "../utils/Constants";

const ProjectCard = ({ title, description, featured, github, demo, techStack, metrics, type, highlighted = false }) => {
    return (
        <div className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-theme-card p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 ${
            highlighted
                ? "border-[#00ddff]/60 shadow-[#00ddff]/10"
                : "border-theme-border shadow-theme-border/20"
        }`}>
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#00ddff]/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

            <div className="relative z-10 flex items-start gap-3 mb-3">
                {featured && (
                    <span className="inline-flex rounded-full border border-[#00ddff]/40 bg-[#00ddff]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#00ddff]">
                        Featured
                    </span>
                )}
                {highlighted && (
                    <span className="inline-flex rounded-full border border-[#ff00d4]/40 bg-[#ff00d4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff00d4]">
                        Relevant
                    </span>
                )}
                {type && (
                    <span className="inline-flex rounded-full border border-[#ff00d4]/40 bg-[#ff00d4]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff00d4]">
                        {type}
                    </span>
                )}
            </div>

            <h3 className={`relative z-10 mb-2 text-xl font-semibold ${PRIMARY_TEXT_GRADIENT}`}>
                {title}
            </h3>
            <p className="relative z-10 mb-4 text-sm text-theme-text-muted">{description}</p>

            {techStack && (
                <div className="relative z-10 mb-4">
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, idx) => (
                            <span key={idx} className="rounded-full border border-theme-border bg-theme-bg/50 px-2 py-1 text-xs text-theme-text-muted transition-all hover:border-[#00ddff]/40">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {metrics && (
                <div className="relative z-10 mb-4 border-t border-theme-border pb-4">
                    <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(metrics).map(([key, value]) => (
                            <div key={key} className="text-theme-text-muted">
                                <span className="font-semibold text-theme-text">{value}</span>
                                <div className="text-xs capitalize">{key}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="relative z-10 mt-auto flex gap-3">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className={`shine-button flex-1 rounded-lg px-4 py-2 text-center font-semibold text-white transition hover:opacity-90 ${PRIMARY_BG_GRADIENT}`}
                    >
                        GitHub
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${title}`}
                        className="flex items-center justify-center rounded-full border border-theme-border bg-theme-bg p-2 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-theme-card"
                    >
                        <FaExternalLinkAlt size={22} className="text-[#00ddff]" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
