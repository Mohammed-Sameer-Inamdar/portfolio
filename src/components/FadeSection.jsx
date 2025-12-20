import { useEffect, useRef, useState } from "react";

/* ===================
    Scroll Animation Hook
   =================== */
function useScrollAnimation() {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return [ref, visible];
}

/* FadeSection wrapper */
const FadeSection = ({ id, children }) => {
    const [ref, visible] = useScrollAnimation();
    return (
        <section id={id} ref={ref} className={`px-6 md:px-20 py-12 transition-all duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {children}
        </section>
    );
}
export default FadeSection;