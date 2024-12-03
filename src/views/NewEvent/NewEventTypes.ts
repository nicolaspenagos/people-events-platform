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
  fields: FieldConfig[];
  onSubmit: (data: any) => void;
  gridConfig?: {
    columns: number; // Número de columnas en el grid
    sections?: Array<{ title: string; range: [number, number] }>; // Rango de campos por sección
  };
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