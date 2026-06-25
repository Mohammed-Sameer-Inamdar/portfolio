import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import portfolioData from "../profileData"
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from "../utils/Constants";

const HeroCard = ({ typedText }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-14 shadow-2xl shadow-black/30 md:px-10">
            <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-[#ff00d4]/20 blur-3xl animate-float-slow" />
            <div className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-[#00ddff]/20 blur-3xl animate-float-slower" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ddff] to-transparent" />

            <div className="relative z-10">
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 animate-fade-down">
                Full Stack Portfolio
            </p>
            <h1 className={`text-4xl md:text-6xl font-extrabold ${PRIMARY_TEXT_GRADIENT} text-center drop-shadow-lg animate-gradient-x`}>
                {portfolioData.name}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-[#00ddff] font-semibold text-center min-h-[32px]">
                {typedText}
                <span className="border-r-2 border-[#00ddff] animate-pulse ml-1 inline-block h-6 align-middle"></span>
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300 leading-relaxed animate-fade-up">
                {portfolioData.objective}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                    href={portfolioData.resume}
                    target="_blank"
                    rel="noreferrer"
                    className={`shine-button inline-flex items-center px-6 py-3 rounded-full ${PRIMARY_BG_GRADIENT} text-white font-semibold shadow-lg shadow-[#ff00d4]/20 hover:scale-105 hover:shadow-xl hover:shadow-[#00ddff]/20 transition-all duration-300`}
                >
                    <FaDownload className="mr-2" /> Get My Resume
                </a>
                <a
                    href={portfolioData.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="p-4 rounded-full border border-white/10 bg-gray-800/80 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110 hover:text-[#00ddff]"
                >
                    <FaGithub size={22} />
                </a>
                <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="p-4 rounded-full border border-white/10 bg-gray-800/80 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:scale-110 hover:text-[#00ddff]"
                >
                    <FaLinkedin size={22} />
                </a>
            </div>
            </div>

        </div>
    )
}
export default HeroCard;
