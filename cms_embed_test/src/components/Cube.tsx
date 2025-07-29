import { Canvas } from "@react-three/fiber";
import type { MotionValue } from "motion";
import { useTransform } from "motion/react";
import { useRef } from "react";
import type { Group } from "three";

export function Cube({ scrollProgress }: { scrollProgress: MotionValue }) {
	var rotRef = useRef<Group>(null!);

	useTransform(() => {
		let r = scrollProgress.get();
		if (rotRef.current) {
			rotRef.current.rotation.z = r * 4;
			rotRef.current.position.z = Math.sin(r * 5) * 0.2;
		}
	});

	return (
		<div id="canvas-container" className="w-full h-full">
			<Canvas camera={{ position: [0, 3, 0] }}>
				<group ref={rotRef}>
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
