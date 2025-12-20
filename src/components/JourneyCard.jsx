const JourneyCard = ({ isLeft, isEducation, title, company, period, description }) => {
    const glowClass = isEducation
        ? "hover:shadow-[0_0_20px_#ff9d00]"
        : "hover:shadow-[0_0_20px_#ff00d4]";

    const dotGrad = isEducation
        ? "from-[#ff9d00] to-[#fff700]"
        : "from-[#ff00d4] to-[#00ddff]";

    const lineGrad = isLeft
        ? `bg-gradient-to-l ${dotGrad}`
        : `bg-gradient-to-r ${dotGrad}`;

    return (
        <div className="relative w-full md:min-h-[6rem]">
            <div className={`absolute top-1/2 -translate-y-[1px] hidden md:block h-[2px] w-10 ${lineGrad} ${isLeft ? "right-1/2" : "left-1/2"}`} />
            <div className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-gray-900 bg-gradient-to-r ${dotGrad}`} />
            <div className={`md:w-1/2 ${isLeft ? "md:pr-10 md:mr-auto" : "md:pl-10 md:ml-auto"} w-full`} >
                <div className={`bg-gray-800 p-6 rounded-xl shadow-lg transition transform hover:-translate-y-1 ${glowClass}`} >
                    <h3 className={`text-xl font-semibold ${isEducation ? "text-[#ff00d4]" : "text-[#00ddff]"}`}>{title}</h3>
                    <p className="text-white">
                        {company} | {period}
                    </p>
                    <p className="mt-2 text-gray-300 text-sm">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default JourneyCard;