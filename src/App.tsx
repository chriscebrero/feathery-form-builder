import { useState } from "react";
import { DndContext, type DragEndEvent, DragOverlay } from "@dnd-kit/core";
import ElementTray from "./components/ElementTray";
import Grid from "./components/GridCanvas";
import type { FormLabel } from "./types";

const App = () => {
	const [gridItems, setGridItems] = useState<(FormLabel | null)[]>(
		Array(8).fill(null)
	);
	const [activeDragLabel, setActiveDragLabel] = useState<FormLabel | null>(
		null
	);

	const handleDragEnd = (event: DragEndEvent) => {
		const { over, active } = event;

		if (over && over.data?.current?.index !== undefined) {
			const index = over.data.current.index;
			if (gridItems[index]) return;

			const newGrid = [...gridItems];
			newGrid[index] = active.data?.current?.label || "Dropped";
			setGridItems(newGrid);
		}
	};

	return (
		<DndContext
			onDragStart={(event) => {
				const label = event.active?.data?.current?.label;
				if (label) setActiveDragLabel(label);
			}}
			onDragEnd={handleDragEnd}
			onDragCancel={() => setActiveDragLabel(null)}
		>
			<div className="flex w-screen h-screen overflow-hidden">
				<ElementTray />
				<Grid gridItems={gridItems} />
				<DragOverlay>
					{activeDragLabel ? (
						<div className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 rounded-md shadow-sm cursor-grab active:cursor-grabbing">
							{activeDragLabel}
						</div>
					) : null}
				</DragOverlay>
			</div>
		</DndContext>
	);
};

export default App;
