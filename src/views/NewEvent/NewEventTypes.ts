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
    sections: Section[]; // Cambia de fields a sections.
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

export type Section = {
    title?: string; // Título opcional de la sección.
    columns: number; // Número de columnas en la sección.\n     rows?: number; // (Opcional) número de filas si deseas una configuración más controlada.
    fields: FieldConfig[]; // Lista de campos en esta sección.
  };

