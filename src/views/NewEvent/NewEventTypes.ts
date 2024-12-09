//Interface for input fields
export interface FieldConfig {
    name: string;
    label: string;
    type: string;
    // Custom validation function
    validate?: (value: string) => string | undefined;
    options?: { value: string; label: string }[];
}

//Interface for DynamicForm component props
export interface DynamicFormProps {
    // Form fields configuration
    fields: FieldConfig[];
    // Action on form submission
    onSubmit: (data: Record<string, any>) => void;
}

//Interface for validation rules
export type ValidationRule = {
    required?: boolean | string;
    maxLength?: number;
    minLength?: number;
    max?: number;
    min?: number;
    pattern?: RegExp;
    email?: boolean;
    numeric?: boolean;
    alpha?: boolean;
    alphanumeric?: boolean;
    matches?: (value: string) => boolean | string;
    custom?: (value: string) => string | undefined;
};