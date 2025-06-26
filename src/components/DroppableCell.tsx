import type { FormLabel } from "../types";
import { renderFormElement } from "../utils/renderFormElement";
import { useDroppable } from "@dnd-kit/core";

const DroppableCell = ({
	index,
	content,
	previewMode,
}: {
	index: number;
	content: FormLabel | null;
	previewMode: boolean;
}) => {
	const { setNodeRef, isOver } = useDroppable({
		id: `cell-${index}`,
		data: { index },
	});

	return (
		<div
			ref={setNodeRef}
			className={`rounded-md transition-all duration-200 ${
				isOver ? "bg-indigo-50" : "bg-white"
			} ${content ? "" : "border border-gray-300"} ${
				previewMode && !content ? "invisible pointer-events-none" : ""
			}`}
			style={{
				height: 75,
				width: 250,
				padding: "0",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{content ? (
				<div className="w-full h-full flex items-center justify-center">
					{renderFormElement(content)}
				</div>
			) : (
				<span className="text-gray-400 text-sm font-normal">Drop here</span>
			)}
		</div>
	);
};

export default DroppableCell;
