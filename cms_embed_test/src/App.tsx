import { useScroll } from "motion/react";
import { Prose } from "./components/Prose";
import { Cube } from "./components/Cube";

function App() {
	const { scrollYProgress } = useScroll();

	return (
		<div className="w-full h-[300vh] bg-white">
			<div className="w-1/2 h-screen fixed flex items-center justify-center">
				<Prose scrollProgress={scrollYProgress} />
			</div>
			<div className="w-1/2 h-screen fixed left-1/2">
				<Cube scrollProgress={scrollYProgress} />
			</div>
		</div>
	);
}

export default App;
