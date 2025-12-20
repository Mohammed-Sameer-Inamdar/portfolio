import { FaExternalLinkAlt } from "react-icons/fa";
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from "../utils/Constants";

const ProjectCard = ({ title, description, featured, github, demo }) => {
    return (
        <div
            className={`bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-2 ${featured
                ? "border-2 border-[#00ddff] hover:shadow-[#00ddff]/40"
                : "hover:shadow-[#ff00d4]/40"
                }`}
        >
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
                        className={`px-4 py-2 rounded-lg ${PRIMARY_BG_GRADIENT} text-white font-semibold hover:opacity-90 transition`}
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