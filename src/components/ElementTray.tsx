import DraggableItem from "./DraggableItem";
import type { DragItem } from "../types";

const elements: DragItem[] = [
	{ id: "sign-up", label: "Sign Up" },
	{ id: "first-name", label: "First Name" },
	{ id: "last-name", label: "Last Name" },
	{ id: "email", label: "Email Address" },
	{ id: "phone", label: "Phone Number" },
	{ id: "submit", label: "Submit" },
];

const ElementTray = () => {
	return (
		<div className="w-1/4 bg-gray-50 p-6 border-r border-gray-200 h-screen flex flex-col">
			<h2 className="text-lg font-semibold text-gray-800 mb-4">
				🧩 Element Tray
			</h2>
			<div className="space-y-3">
				{elements.map((el) => (
					<DraggableItem key={el.id} id={el.id} label={el.label} />
				))}
			</div>
		</div>
	);
};

export default ElementTray;
