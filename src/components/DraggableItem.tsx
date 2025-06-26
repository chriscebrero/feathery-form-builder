import { useDraggable } from "@dnd-kit/core";

const DraggableItem = ({ id, label }: { id: string; label: string }) => {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id,
		data: { label },
	});

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 rounded-md shadow-sm cursor-grab active:cursor-grabbing transition-all duration-150"
		>
			{label}
		</div>
	);
};

export default DraggableItem;
