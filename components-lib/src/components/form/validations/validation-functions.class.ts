import { FormControl, FormGroup } from '@angular/forms';

interface GroupValidationResult {
  [key: string]: {
    isGroupValidator: boolean,
    showErrorOn?: string[],
    showErrorOnCheckboxList?: string,
    replaceData: any,
    validateOn: string[],
  };
}

/**
 * Class with the static methods to validate the controls and the validation builder.
 */
// @dynamic
export class ValidationFunctions {
  /**
   * Checks for a valid email
   */
  static emailValidator(control: FormControl): any {
    return control.value === '' || control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) ? 0 :
      { 'invalidEmailAddress': true };
  }
  /**
   * Only allow latin letters and numbers.
   */
  static alphaNumeric(control: FormControl): any {
    return control.value.match(/^[a-zA-Z0-9]*$/) ? 0 :
      { 'alphaNumeric': true };
  }
  /**
   * Only allow numbers or numbers with decimal
   */
  static amount(control: FormControl): any {
    return control.value === '' || control.value.match(/^-?\d+(\.\d+)?$/) ? 0 :
      { 'amount': true };
  }

  /* GROUP VALIDATIONS */
  /**
   * Compares the value of two form controls
   */
  static group_equals(base: string, compareWith: string): any {
    return (g: FormGroup): GroupValidationResult | number => {
      return g.value[base] === g.value[compareWith] ? 0 :
        {
          'equalsControlValues': {
            'isGroupValidator': true,
            'showErrorOn': [compareWith],
            'replaceData': {},
            'validateOn': [base, compareWith],
          },
        };
    };
  }
}
