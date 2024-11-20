export interface EventsState {
  upcoming: Event[];
  past: Event[];
}

export interface Event {
  name: string;
  timestamp: string;
  location: string;
}

//Interface for input fields
export interface FieldConfig {
  name: string; 
  label: string;
  type: string; 
  // Custom validation function
  validate?: (value: string) => string | undefined; 
}

//Interface for DynamicForm component props
export interface DynamicFormProps {
  // Form fields configuration
  fields: FieldConfig[];
  // Action on form submission
  onSubmit: (data: Record<string, any>) => void; 
}