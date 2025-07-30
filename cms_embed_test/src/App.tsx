import { motion, useScroll } from "motion/react";
import { Prose } from "./components/Prose";
import { Cube } from "./components/Cube";
import { useRef } from "react";

function App() {
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
