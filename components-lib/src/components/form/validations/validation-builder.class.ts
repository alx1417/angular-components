import { ValidationFunctions } from './validation-functions.class';
import { Validators } from '@angular/forms';

export const DEFAULT_SEPARATOR_VALIDATION_PARAMETERS: string = ':';

// Enum with all validations. The names of the enum should be the same that the names of the functions of Validators and ValidationFunctions.
export enum ValidationRuleEnum {
  // Angular native validations
  required,
  minLength,
  maxLength,
  // Custom validations
  emailValidator,
  alphaNumeric,
  amount,
  // Custom group validations
  group_equals,
}

// List of angular validations.
const ANGULAR_VALIDATIONS_LIST = [
  ValidationRuleEnum.required,
  ValidationRuleEnum.minLength,
  ValidationRuleEnum.maxLength,
];
// List of custom validations.
const CUSTOM_VALIDATIONS_LIST = [
  // Item validations
  ValidationRuleEnum.emailValidator,
  ValidationRuleEnum.alphaNumeric,
  ValidationRuleEnum.amount,
  // Group validations
  ValidationRuleEnum.group_equals,
];

// @dynamic
export class ValidationBuilder {
  /**
   * Parse a string[] to angular format validations.
   */
  static buildValidations(validations: string[] = []): any {
    let validationArr: string[];
    const validationFuncs: any[] = [];
    validations.forEach((value: string) => {
      validationArr = value.toString().split(DEFAULT_SEPARATOR_VALIDATION_PARAMETERS);
      // If is an angular validator call the Validator @angular/forms functions.
      ANGULAR_VALIDATIONS_LIST.find((val: number) => {
        const validator = val.toString();
        if (validator === validationArr[0]) {
          if (validationArr.length > 1) { // With parameters
            validationFuncs.push(Validators[(<any>ValidationRuleEnum)[validator]].apply(this, validationArr.slice(1)));
          } else {
            validationFuncs.push(Validators[(<any>ValidationRuleEnum)[validator]]);
          }
          return true;
        }
        return false;
      });
      // If is a custom validator call the ValidationFunctions.
      CUSTOM_VALIDATIONS_LIST.find((val: number) => {
        const validator = val.toString();
        if (validator === validationArr[0]) {
          if (validationArr.length > 1) { // With parameters
            validationFuncs.push(ValidationFunctions[ValidationRuleEnum[validator]].apply(this, validationArr.slice(1)));
          } else {
            validationFuncs.push(ValidationFunctions[ValidationRuleEnum[validator]]);
          }
          return true;
        }
        return false;
      });
    });
    return validationFuncs.length === 1 ? validationFuncs[0] : validationFuncs;
  }
}
