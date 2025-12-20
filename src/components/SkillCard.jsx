/* Skill Card */
const SkillCard = ({ title, skills }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-[#ff00d4]/40 transform hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <div className="flex flex-wrap gap-3">
                {skills.map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        {s.icon} <span className="text-gray-300">{s.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillCard;