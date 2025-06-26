import { useState } from "react";
import type { FormLabel } from "../types";
import DroppableCell from "./DroppableCell";

interface GridProps {
	gridItems: (FormLabel | null)[];
}

const Grid = ({ gridItems }: GridProps) => {
	const [previewMode, setPreviewMode] = useState(false);
	return (
		<div className="w-3/4 h-screen p-6 overflow-auto flex flex-col">
			<div className="w-full mb-4">
				<h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-2">
					📝 Form Builder
				</h2>
				<div className="flex justify-center">
					<button
						onClick={() => setPreviewMode(!previewMode)}
						className={`px-4 py-2 rounded-md text-sm font-medium transition ${
							previewMode
								? "bg-blue-600 text-white hover:bg-blue-700"
								: "bg-gray-200 text-gray-800 hover:bg-gray-300"
						}`}
					>
						{previewMode ? "Exit Preview" : "Preview"}
					</button>
				</div>
			</div>

			<div className="grid grid-cols-[250px_250px] grid-rows-[75px_75px_75px_75px] bg-white shadow-md p-4 gap-4 rounded-lg border border-black mx-auto">
				{gridItems.map((item, index) => (
					<DroppableCell
						key={index}
						index={index}
						content={item}
						previewMode={previewMode}
					/>
				))}
			</div>
		</div>
	);
};

export default Grid;
