import React, { useState } from "react";
import TextField from "./TextField";
import Dropdown from "./Dropdown";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import TextArea from "./TextArea";

const DynamicForm = () => {
  const [formFields, setFormFields] = useState([]);

  const addField = (type) => {
    let newField;

    if (type === "radio") {
      newField = {
        type,
        label: "",
        options: [{ label: "", value: "" }],
        value: "",
      };
    } else if (type === "checkbox") {
      newField = { type, label: "", value: false };
    } else if (type === "textarea") {
      newField = { type, label: "", value: "" };
    } else {
      newField = { type, label: "", value: "" };
    }

    setFormFields([...formFields, newField]);
  };

  const removeField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const addOption = (index) => {
    const updatedFields = [...formFields];
    updatedFields[index].options.push({ label: "", value: "" });
    setFormFields(updatedFields);
  };

  const removeOption = (fieldIndex, optionIndex) => {
    const updatedFields = [...formFields];
    updatedFields[fieldIndex].options.splice(optionIndex, 1);
    setFormFields(updatedFields);
  };

  const updateField = (index, key, value) => {
    const updatedFields = [...formFields];
    updatedFields[index][key] = value;
    setFormFields(updatedFields);
  };

  const updateOption = (fieldIndex, optionIndex, key, value) => {
    const updatedFields = [...formFields];
    updatedFields[fieldIndex].options[optionIndex][key] = value;
    setFormFields(updatedFields);
  };

  const renderField = (field, index) => {
    switch (field.type) {
      case "text":
        return (
          <TextField
            key={index}
            label={field.label}
            value={field.value}
            onChange={(value) => updateField(index, "value", value)}
          />
        );
      case "dropdown":
        return (
          <Dropdown
            key={index}
            label={field.label}
            options={field.options || []}
            value={field.value}
            onChange={(value) => updateField(index, "value", value)}
          />
        );
      case "radio":
        return (
          <Radio
            key={index}
            label={field.label}
            options={field.options || []}
            value={field.value}
            onChange={(value) => updateField(index, "value", value)}
            addOption={() => addOption(index)}
            removeOption={(optionIndex) => removeOption(index, optionIndex)}
            updateOption={(optionIndex, key, value) =>
              updateOption(index, optionIndex, key, value)
            }
          />
        );
      case "checkbox":
        return (
          <Checkbox
            key={index}
            label={field.label}
            checked={field.value}
            onChange={(value) => updateField(index, "value", value)}
          />
        );
      case "textarea":
        return (
          <TextArea
            key={index}
            label={field.label}
            value={field.value}
            onChange={(value) => updateField(index, "value", value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="dynamic-form">
      {formFields.map((field, index) => (
        <div key={index} className="form-field">
          {renderField(field, index)}
          <button className="remove-button" onClick={() => removeField(index)}>
            Remove Field
          </button>
        </div>
      ))}
      <div className="form-actions">
        <button className="add-button" onClick={() => addField("text")}>
          Add Textbox
        </button>
        <button className="add-button" onClick={() => addField("dropdown")}>
          Add Dropdown
        </button>
        <button className="add-button" onClick={() => addField("radio")}>
          Add Radio
        </button>
        <button className="add-button" onClick={() => addField("checkbox")}>
          Add Checkbox
        </button>
        <button className="add-button" onClick={() => addField("textarea")}>
          Add TextArea
        </button>
      </div>
    </div>
  );
};

export default DynamicForm;