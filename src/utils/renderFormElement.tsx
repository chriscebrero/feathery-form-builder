import type { FormLabel } from "../types";

export function renderFormElement(label: FormLabel) {
	switch (label) {
		case "Sign Up":
			return (
				<h1 className="text-lg font-bold text-gray-800 text-center w-full mb-0 leading-none">
					Sign Up
				</h1>
			);

		case "First Name":
		case "Last Name":
		case "Email Address":
		case "Phone Number":
			return (
				<input
					type="text"
					placeholder={label}
					className="w-full h-full px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none"
				/>
			);

		case "Submit":
			return (
				<button
					type="button"
					className="w-full h-full px-4 py-2 bg-blue-500 text-white font-bold text-sm rounded-md hover:bg-blue-600 transition"
				>
					SUBMIT
				</button>
			);

		default:
			return <span className="text-xs text-gray-400">{label}</span>;
	}
}
