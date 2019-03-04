import { ValidationRuleEnum, DEFAULT_SEPARATOR_VALIDATION_PARAMETERS } from './validation-builder.class';

// tslint:disable:member-ordering
// @dynamic
export class Validation {
  // Angular validations
  static required = ValidationRuleEnum.required.toString();
  static minLength = (length: number): string => ValidationRuleEnum.minLength + DEFAULT_SEPARATOR_VALIDATION_PARAMETERS + length;
  static maxLength = (length: number): string => ValidationRuleEnum.maxLength + DEFAULT_SEPARATOR_VALIDATION_PARAMETERS + length;
  // Custom validations
  static emailValidator = ValidationRuleEnum.emailValidator.toString();
  static alphaNumeric = ValidationRuleEnum.alphaNumeric.toString();
  static amount = ValidationRuleEnum.amount.toString();
  // Custom group validations
  static groupEquals = (firstElement: string, secondElement: string): string => ValidationRuleEnum.group_equals + DEFAULT_SEPARATOR_VALIDATION_PARAMETERS + firstElement + DEFAULT_SEPARATOR_VALIDATION_PARAMETERS + secondElement;
}
