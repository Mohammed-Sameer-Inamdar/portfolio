import { FaEye } from "react-icons/fa";
import { PRIMARY_BG_GRADIENT } from "../utils/Constants";

const CertificateCard = ({featured,title,issuer,date,description,pdf, openPdf }) => {
    return (
        <div
            className={`group relative rounded-2xl p-[1.5px] transition-all duration-300
                                ${featured
                    ? "bg-gradient-to-r from-[#ff00d4] to-[#00ddff] scale-105 shadow-2xl"
                    : "bg-gradient-to-r from-white/10 to-white/5 hover:from-[#00ddff]/40 hover:to-[#ff00d4]/40"
                }`}
        >
            <div
                className={`h-full rounded-2xl p-6 transition-all duration-300 flex flex-col flex-1 justify-between
                                ${featured
                        ? "bg-gray-900"
                        : "bg-gray-800 group-hover:bg-gray-850"
                    }`}
            >
                {featured && (
                    <span className="inline-block mb-2 text-xs uppercase tracking-widest text-[#00ddff]">
                        Featured
                    </span>
                )}

                <div className="flex items-center flex-1">
                    {!featured && (
                        <div className="w-2 h-2 m-2 rounded-full bg-gradient-to-r from-[#ff00d4] to-[#00ddff] mb-3" />
                    )}
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-[#00ddff] transition">
                        {title}
                    </h3>
                </div>

                <p className="text-sm text-gray-400 mb-3">
                    {issuer} · {date}
                </p>

                {description && (
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {description}
                    </p>
                )}

                {pdf &&
                    <button
                        onClick={() => openPdf(pdf)}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center w-fit mt-2 px-4 py-2 rounded-lg ${PRIMARY_BG_GRADIENT} text-white font-semibold hover:opacity-90 transition`}
                    >
                        <FaEye className="text-xl mr-1 text-white" /> Preview
                    </button>
                }
            </div>
        </div>
    )
}
export default CertificateCard;