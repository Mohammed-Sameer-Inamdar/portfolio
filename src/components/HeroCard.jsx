import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import portfolioData from "../profileData"
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from "../utils/Constants";
import PortfolioData from "../profileData";
import { useEffect, useState } from "react";


/* Typing Animation Hook */
function useTypingEffect(words, typingSpeed = 100, pause = 1500) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (index === words.length) setIndex(0);

    if (subIndex === words[index]?.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(words[index]?.substring(0, subIndex));
    }, deleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, pause]);

  return text;
}


const HeroCard = () => {
      const typedText = useTypingEffect(PortfolioData.titles);
    return (
        <div className="relative overflow-hidden rounded-3xl px-5 py-14 shadow-2xl md:px-10 border border-theme-border bg-theme-card shadow-theme-border/30">
            <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full blur-3xl animate-float-slow bg-[#ff00d4]/10" />
            <div className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full blur-3xl animate-float-slower bg-[#00ddff]/10" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ddff]/50 to-transparent" />

            <div className="relative z-10">
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.3em] animate-fade-down text-theme-text-muted">
                Full Stack Portfolio
            </p>
            <h1 className={`text-4xl md:text-6xl font-extrabold ${PRIMARY_TEXT_GRADIENT} text-center drop-shadow-lg animate-gradient-x`}>
                {portfolioData.name}
            </h1>
            <p className="mt-3 text-lg md:text-xl text-[#00ddff] font-semibold text-center min-h-[32px]">
                {typedText}
                <span className="border-r-2 border-[#00ddff] animate-pulse ml-1 inline-block h-6 align-middle"></span>
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-center leading-relaxed animate-fade-up text-theme-text-muted">
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
                    className="p-4 rounded-full border transition-all duration-300 shadow-lg hover:scale-110 hover:text-[#00ddff] border-theme-border bg-theme-bg hover:bg-theme-card"
                >
                    <FaGithub size={22} />
                </a>
                <a
                    href={portfolioData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                    className="p-4 rounded-full border transition-all duration-300 shadow-lg hover:scale-110 hover:text-[#00ddff] border-theme-border bg-theme-bg hover:bg-theme-card"
                >
                    <FaLinkedin size={22} />
                </a>
            </div>
            </div>

        </div>
    )
}
export default HeroCard;
