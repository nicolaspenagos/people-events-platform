import { ValidationRule } from "./NewEventTypes";

export const createValidator = (rules: ValidationRule) => {
    return (value: string): string | undefined => {
      // Required validation
      if (rules.required && !value) {
        return typeof rules.required === "string" ? rules.required : "This field is required";
      }
  
      // Email validation
      if (rules.email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Invalid email format";
        }
      }
  
      // MaxLength validation
      if (rules.maxLength && value.length > rules.maxLength) {
        return `Must be at most ${rules.maxLength} characters`;
      }
  
      // MinLength validation
      if (rules.minLength && value.length < rules.minLength) {
        return `Must be at least ${rules.minLength} characters`;
      }
  
      // Max value validation
      const numericValue = parseFloat(value);
      if (rules.max !== undefined && numericValue > rules.max) {
        return `Must be less than or equal to ${rules.max}`;
      }
  
      // Min value validation
      if (rules.min !== undefined && numericValue < rules.min) {
        return `Must be greater than or equal to ${rules.min}`;
      }
  
      // Pattern validation
      if (rules.pattern && !rules.pattern.test(value)) {
        return "Invalid format";
      }
  
      // Numeric validation
      if (rules.numeric && isNaN(Number(value))) {
        return "Must be a number";
      }
  
      // Alpha validation
      if (rules.alpha && !/^[A-Za-z]+$/.test(value)) {
        return "Must contain only letters";
      }
  
      // Alphanumeric validation
      if (rules.alphanumeric && !/^[A-Za-z0-9]+$/.test(value)) {
        return "Must contain only letters and numbers";
      }
  
      // Matches validation
      if (rules.matches) {
        const matchError = rules.matches(value);
        if (matchError) return typeof matchError === "string" ? matchError : "Fields do not match";
      }
  
      // Custom validation
      if (rules.custom) {
        const customError = rules.custom(value);
        if (customError) return customError;
      }
  
      return undefined;
    };
  };