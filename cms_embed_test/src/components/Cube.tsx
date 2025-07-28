import { Canvas } from "@react-three/fiber";
import type { MotionValue } from "motion";
import { useTransform } from "motion/react";
import { useState } from "react";

export function Cube({ scrollProgress }: { scrollProgress: MotionValue }) {
	const [rotation, setRotation] = useState(0.0);

	useTransform(() => {
		if (rotation !== scrollProgress.get()) {
			setRotation(scrollProgress.get());
		}
	});

	return (
		<div id="canvas-container" className="w-full h-full">
			<Canvas camera={{ position: [0, 3, 0] }}>
				<group
					rotation={[0, 0, rotation * 4]}
					position={[0, 0, Math.sin(rotation * 5) * 0.2]}
				>
					<mesh
						rotation={[
							Math.PI * 0.25,
							Math.PI * 0.25,
							Math.PI * 0.25,
						]}
					>
						<boxGeometry />
						<meshNormalMaterial />
					</mesh>
				</group>
			</Canvas>
		</div>
	);
}
