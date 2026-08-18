import { FaEnvelope, FaPhone } from "react-icons/fa";
import { PRIMARY_BG_GRADIENT } from "../utils/Constants"
const ContactCard = ({ email, phone }) => {
    return (
        <div className="max-w-lg mx-auto p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 border border-theme-border bg-theme-card hover:shadow-theme-border/30">
            <p className="mb-6 text-center leading-relaxed text-theme-text-muted">
                Open to connecting with professionals, recruiters, and industry peers.
                Let's discuss how I can contribute to your team.
            </p>
            <div className="space-y-4 break-words break-all">
                <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-lg hover:text-[#00ddff] transition text-theme-text-muted"
                >
                    <FaEnvelope className="text-[#00ddff]" /> {email}
                </a>
                <a
                    href={`tel:${phone}`}
                    className="flex items-center gap-3 text-lg hover:text-[#00ddff] transition text-theme-text-muted"
                >
                    <FaPhone className="text-[#00ddff]" /> {phone}
                </a>
            </div>
            <div className="mt-6 text-center">
                <a
                    href={`mailto:${email}`}
                    className={`shine-button inline-block px-8 py-3 ${PRIMARY_BG_GRADIENT} rounded-full text-white font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl`}
                >
                    Contact Me
                </a>
            </div>
        </div>
    )
}

export default ContactCard;

