import { FaExternalLinkAlt } from "react-icons/fa";
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from "../utils/Constants";

const ProjectCard = ({ title, description, featured, github, demo }) => {
    return (
        <div
            className={`group relative overflow-hidden rounded-2xl bg-gray-900/75 p-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2 ${featured
                ? "border border-[#00ddff]/70 hover:shadow-[#00ddff]/30"
                : "border border-white/10 hover:border-[#ff00d4]/40 hover:shadow-[#ff00d4]/30"
                }`}
        >
            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#00ddff]/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
            {featured && (
                <span className="mb-4 inline-flex rounded-full border border-[#00ddff]/40 bg-[#00ddff]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#00ddff]">
                    Featured
                </span>
            )}
            <h3 className={`text-xl font-semibold mb-2 ${PRIMARY_TEXT_GRADIENT}`}>
                {title}
            </h3>
            <p className="text-gray-300 mb-4">{description}</p>

            <div className="flex gap-3">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className={`shine-button px-4 py-2 rounded-lg ${PRIMARY_BG_GRADIENT} text-white font-semibold hover:opacity-90 transition`}
                    >
                        GitHub
                    </a>
                )}
                {demo && (
                    <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110 flex items-center justify-center"
                    >
                        <FaExternalLinkAlt size={22} className="text-[#00ddff]" />
                    </a>
                )}
            </div>
        </div>
    )
}
export default ProjectCard;
