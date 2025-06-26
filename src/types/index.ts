export type FormLabel =
	| "Sign Up"
	| "First Name"
	| "Last Name"
	| "Email Address"
	| "Phone Number"
	| "Submit";

export interface DragItem {
	id: string;
	label: FormLabel;
}
export type GridItems = (FormLabel | null)[];
