import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import portfolioData from "../profileData";
import { PRIMARY_BG_GRADIENT, PRIMARY_TEXT_GRADIENT } from "../utils/Constants";

function useTypingEffect(words, typingSpeed = 75, pause = 1500) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (!words?.length) return undefined;

        if (!deleting && subIndex === words[index].length) {
            const pauseTimer = setTimeout(() => setDeleting(true), pause);
            return () => clearTimeout(pauseTimer);
        }

        if (deleting && subIndex === 0) {
            setDeleting(false);
            setIndex((current) => (current + 1) % words.length);
            return undefined;
        }

        const timer = setTimeout(() => {
            setSubIndex((current) => current + (deleting ? -1 : 1));
        }, deleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timer);
    }, [words, index, subIndex, deleting, typingSpeed, pause]);

    return words?.[index]?.substring(0, subIndex) || "";
}

const HeroCard = ({ profile }) => {
    const typedText = useTypingEffect([
        profile.title,
        "Scalable Web Applications",
        "Performance-Focused Solutions",
    ]);

    return (
        <div className="relative overflow-hidden rounded-3xl border border-theme-border bg-theme-card px-5 py-12 shadow-2xl md:px-10 md:py-16">
            <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-[#ff00d4]/10 blur-3xl animate-float-slow" />
            <div className="pointer-events-none absolute -right-20 bottom-8 h-64 w-64 rounded-full bg-[#00ddff]/10 blur-3xl animate-float-slower" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ddff]/70 to-transparent" />

            <div className="relative z-10">
                <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.35em] text-theme-text-muted animate-fade-down">
                    {profile.eyebrow}
                </p>

                <h1 className={`text-center text-4xl font-extrabold md:text-6xl ${PRIMARY_TEXT_GRADIENT} animate-gradient-x`}>
                    {portfolioData.name}
                </h1>

                <div className="mx-auto mt-5 flex min-h-[34px] items-center justify-center text-center text-lg font-semibold text-[#00ddff] md:text-xl">
                    <span>{typedText}</span>
                    <span className="ml-1 inline-block h-6 border-r-2 border-[#00ddff] animate-pulse" />
                </div>

                <p className="mx-auto mt-5 max-w-3xl text-justify    leading-relaxed text-theme-text-muted animate-fade-up">
                    {portfolioData.objective}
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
                    {profile.primarySkills.map((skill, index) => (
                        <span
                            key={skill}
                            className="hero-skill-pill"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-4">
                    <a
                        href={portfolioData.resume}
                        target="_blank"
                        rel="noreferrer"
                        className={`shine-button inline-flex items-center rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 ${PRIMARY_BG_GRADIENT}`}
                    >
                        <FaDownload className="mr-2" /> Get My Resume
                    </a>
                    <a
                        href={portfolioData.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub profile"
                        className="rounded-full border border-theme-border bg-theme-bg p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:text-[#00ddff]"
                    >
                        <FaGithub size={22} />
                    </a>
                    <a
                        href={portfolioData.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn profile"
                        className="rounded-full border border-theme-border bg-theme-bg p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:text-[#00ddff]"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
