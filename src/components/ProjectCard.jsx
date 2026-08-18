import { FaExternalLinkAlt } from "react-icons/fa";
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from "../utils/Constants";
const ProjectCard = ({ title, description, featured, github, demo, techStack, metrics, type }) => {
    return (
        <div
            className={`group relative overflow-hidden rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col h-full bg-theme-card border border-theme-border shadow-theme-border/20 hover:shadow-cyan-500/20`}
        >
            <div className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-2xl transition-transform duration-500 group-hover:scale-150 bg-[#00ddff]/10`} />
            <div className="flex items-start gap-3 mb-3">
                {featured && (
                    <span className="inline-flex rounded-full border border-[#00ddff]/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#00ddff] flex-shrink-0 bg-[#00ddff]/10">
                        Featured
                    </span>
                )}
                {type && (
                    <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest flex-shrink-0 bg-[#ff00d4]/10 text-[#ff00d4] border border-[#ff00d4]/40">
                        {type}
                    </span>
                )}
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${PRIMARY_TEXT_GRADIENT}`}>
                {title}
            </h3>
            <p className="mb-4 text-sm text-theme-text-muted">{description}</p>

            {/* Tech Stack Tags */}
            {techStack && (
                <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded-full border transition-all border-theme-border bg-theme-bg/50 text-theme-text-muted hover:border-[#00ddff]/40">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Metrics */}
            {metrics && (
                <div className="mb-4 pb-4 border-t border-theme-border">
                    <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                        {Object.entries(metrics).map(([key, value]) => (
                            <div key={key} className="text-theme-text-muted">
                                <span className="font-semibold text-theme-text">{value}</span>
                                <div className="text-xs capitalize">{key}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex gap-3 mt-auto">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className={`shine-button px-4 py-2 rounded-lg ${PRIMARY_BG_GRADIENT} text-white font-semibold hover:opacity-90 transition flex-1 text-center`}
                    >
                        GitHub
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full transition-all duration-300 shadow-lg hover:scale-110 flex items-center justify-center bg-theme-bg border border-theme-border hover:bg-theme-card"
                    >
                        <FaExternalLinkAlt size={22} className="text-[#00ddff]" />
                    </a>
                )}
            </div>
        </div>
    )
}
export default ProjectCard;

