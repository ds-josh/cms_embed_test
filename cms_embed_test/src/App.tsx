import { motion, useScroll } from "motion/react";
import { Prose } from "./components/Prose";
import { Cube } from "./components/Cube";
import { useEffect, useRef } from "react";

function App() {
    // Remove this useEffect and you'll be back at previous situation.
    useEffect(() => {
        // Override overflow styles
        const html = document.documentElement;
        const body = document.body;

        // Store original styles
        const originalHtmlOverflowY = html.style.overflowY;
        const originalBodyOverflow = body.style.overflow;
        const originalBodyOverflowX = body.style.overflowX;

        // Apply new styles
        html.style.overflowY = "unset";
        body.style.overflow = "unset";
        body.style.overflowX = "hidden";

        // Cleanup function to restore original styles
        return () => {
            html.style.overflowY = originalHtmlOverflowY;
            body.style.overflow = originalBodyOverflow;
            body.style.overflowX = originalBodyOverflowX;
        };
    }, []);

    const scrollRef = useRef(null!);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"],
    });

    return (
        <div ref={scrollRef} className="w-full h-[300vh] top-0">
            <motion.div className="w-full h-[100vh] border-1 border-pink-300 sticky top-0 flex">
                <div className="flex-1 h-screen flex items-center justify-center">
                    <Prose scrollProgress={scrollYProgress} />
                </div>
                <div className="flex-1 h-screen">
                    <Cube scrollProgress={scrollYProgress} />
                </div>
            </motion.div>
        </div>
    );
}

export default App;
