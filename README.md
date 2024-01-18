# Dynamic Form React App

This React application demonstrates the creation of a dynamic form where users can add and remove various types of form fields dynamically. The form supports textboxes, dropdowns, radio buttons, checkboxes, and text areas.

## Table of Contents

- [Components](#components)
  - [Checkbox](#checkbox)
  - [Dropdown](#dropdown)
  - [Radio](#radio)
  - [TextArea](#textarea)
  - [TextField](#textfield)
  - [DynamicForm](#dynamicform)
  - [CandidateForm](#candidateform)
- [Usage](#usage)
- [Installation](#installation)

## Components

### Checkbox

The `Checkbox` component renders a checkbox input with an associated label.

Props:
- `label`: Text to be displayed next to the checkbox.
- `checked`: Boolean representing whether the checkbox is checked.
- `onChange`: Callback function invoked when the checkbox state changes.

### Dropdown

The `Dropdown` component renders a dropdown select input with options.

Props:
- `label`: Text to be displayed above the dropdown.
- `options`: An array of objects representing dropdown options.
- `value`: Currently selected option.
- `onChange`: Callback function invoked when the dropdown selection changes.

### Radio

The `Radio` component renders a set of radio buttons with an associated label.

Props:
- `label`: Text to be displayed above the radio buttons.
- `options`: An array of objects representing radio button options.
- `selectedValue`: The value of the currently selected radio button.
- `onChange`: Callback function invoked when a radio button is selected.
- `addOption`, `removeOption`, `updateOption`: Functions for dynamic manipulation of radio button options.

### TextArea

The `TextArea` component renders a textarea input with an associated label.

Props:
- `label`: Text to be displayed above the textarea.
- `value`: Content of the textarea.
- `onChange`: Callback function invoked when the textarea content changes.

### TextField

The `TextField` component renders a text input with an associated label.

Props:
- `label`: Text to be displayed above the text input.
- `value`: Content of the text input.
- `onChange`: Callback function invoked when the text input content changes.

### DynamicForm

The `DynamicForm` component manages dynamic rendering of form fields based on user interaction. It includes functions for adding, removing, and updating form fields dynamically.

### CandidateForm

The `CandidateForm` component serves as a wrapper for the `DynamicForm` component, providing a basic structure with a header and title.

## Usage

To use this application, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and visit `http://localhost:3000` to view the application.

## Installation

```bash
git clone https://github.com/kashinathjadhav/Dynamic_Form_Generator.git
cd dynamic-form-react
npm install
npm start
```