import type { MotionValue } from "motion";
import { AnimatePresence, motion, useTransform } from "motion/react";
import { useState } from "react";

export function Prose({ scrollProgress }: { scrollProgress: MotionValue }) {
	const [currentFrame, setCurrentFrame] = useState(0);
	const frames = ["Frame A", "Frame B", "Frame C"];

	const frameAnimation = {
		initial: {
			transform: "translateY(20px)",
			opacity: 0,
		},
		animate: {
			transform: "translateY(0px)",
			opacity: 1,
		},
	};

	useTransform(() => {
		if (Math.floor(scrollProgress.get() * frames.length) !== currentFrame) {
			setCurrentFrame(Math.floor(scrollProgress.get() * frames.length));
		}
	});

	return (
		<div className="h-30">
			<AnimatePresence>
				{frames.map((frame, i) => (
					<motion.div
						animate={
							currentFrame === i
								? frameAnimation.animate
								: frameAnimation.initial
						}
						className="text-8xl absolute"
					>
						{frame}
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	);
}
