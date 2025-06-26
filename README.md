# 🧩 Feathery Visual Form Builder

This is my submission for the Feathery Frontend Coding Challenge. It’s a visual form builder built with **React**, **TypeScript**, **Tailwind CSS**, and **@dnd-kit/core** for drag-and-drop functionality.

Users can drag predefined form elements from a tray and drop them into a fixed grid layout to visually construct a simple form.

---

## 📸 Preview

![screenshot](./screenshot.png)

---

## ✨ Features

- Drag-and-drop interface using `@dnd-kit/core`
- Fixed 4×2 CSS grid layout (4 rows × 2 columns)
- Visual hover highlight on droppable cells
- Form elements:
  - Sign Up header
  - First Name, Last Name, Email Address, Phone Number inputs
  - Submit button
- Elements persist in memory until refresh
- See elements while dragging
- Preview Mode

---

## 🧱 Tech Stack

- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🧲 @dnd-kit/core for drag-and-drop behavior
- 🧠 Custom types, modular file structure, and state handled via React hooks

---

## 🧠 Architecture & Design Choices

### 🧲 `@dnd-kit` for Drag and Drop
I chose due to its low-level control and flexibility. `@dnd-kit` allows arbitrary grid-based drop zones and independent draggable items.

### 🎨 Tailwind CSS
I chose for rapid UI development with consistent spacing, responsive design, and quick styling. This allowed for faster development without managing multiple CSS files or stylesheets.

### 🔁 `useState` for grid state
Easy to use for 8-cell local state.

---

## 🚧 Limitations

- Elements cannot be reordered once placed
- Only one element per cell (no column/row span support)
- No keyboard accessibility for drag/drop
- Not mobile-optimized
- No persistence beyond page refresh

---

## 🧪 Running Locally

1. Clone the repo

```bash
git clone https://github.com/chriscebrero/form-builder.git
cd form-builder
