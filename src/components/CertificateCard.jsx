import { FaEye } from "react-icons/fa";
import { PRIMARY_BG_GRADIENT } from "../utils/Constants";

const CertificateCard = ({featured,title,issuer,date,description,pdf, openPdf,type }) => {
    console.log('type',type);
    return (
        <div
            className={`group relative rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-2 ${featured ? "bg-gradient-to-r from-[#ff00d4] to-[#00ddff] scale-105 shadow-2xl" : "bg-theme-border hover:from-[#00ddff]/40 hover:to-[#ff00d4]/40"}`}
        >
            <div
                className={`h-full rounded-2xl p-6 transition-all duration-300 flex flex-col flex-1 justify-between bg-theme-card`}
            >
                {featured && (
                    <span className="inline-block mb-2 text-xs uppercase tracking-widest text-[#00ddff] animate-pulse-soft">
                        Featured
                    </span>
                )}

                <div className="flex items-center flex-1">
                    {!featured && (
                        <div className="w-2 h-2 m-2 rounded-full bg-gradient-to-r from-[#ff00d4] to-[#00ddff] mb-3" />
                    )}
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-[#00ddff] transition text-theme-text">
                        {title}
                    </h3>
                </div>

                <p className="text-sm text-theme-text-muted mb-3">
                    {issuer} · {date}
                </p>

                {description && (
                    <p className="text-theme-text-muted text-sm leading-relaxed">
                        {description}
                    </p>
                )}

                {pdf &&
                    <button
                        onClick={() => openPdf(pdf)}
                        target="_blank"
                        rel="noreferrer"
                        className={`shine-button flex items-center w-fit mt-2 px-4 py-2 rounded-lg ${PRIMARY_BG_GRADIENT} text-white font-semibold hover:opacity-90 transition`}
                    >
                        <FaEye className="text-xl mr-1 text-white" /> Preview
                    </button>
                }
            </div>
        </div>
    )
}
export default CertificateCard;

