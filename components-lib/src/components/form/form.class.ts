import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
// Interfaces
import { FormItemList, FormItem, FuncSubscribeChanges, CreateFormOptions, DefaultValue } from './form.interface';
// Item classes
import { ItemInputClass } from './input/input-form.class';
// Validations
import { ValidationBuilder } from './validations/index';
// Rxjs
import { Subscription } from 'rxjs';

export class Form {
  // Angular Form.
  group: FormGroup;
  // Id for identify the form.
  id: string;
  // Indexed list of items
  items: FormItemList;
  // Subscription for the form changes.
  private subscription: Subscription;

  /**
   * Save form constructor data.
   */
  constructor(formOptions: CreateFormOptions) {
    this.id = formOptions.idForm;
    this.group = this.createGroup(formOptions.items, formOptions.groupValidator);
    this.items = this.createOptions(formOptions.items);
  }
  /**
   * Get item Input
   */
  getInput(name: string): ItemInputClass {
    if (!(this.getItem(name) instanceof ItemInputClass)) {
      throw new Error('This key ' + name + ' is not an Input');
    }
    return <ItemInputClass>this.getItem(name);
  }

  /**
   * Disable entire form or list of items.
   */
  disable(itemKeys?: string[]): void {
    if (!Array.isArray(itemKeys) || itemKeys.length === 0) {
      itemKeys = Object.keys(this.items);
    }
    itemKeys.forEach((key: string) => {
      const item = this.getItem(key);
      if (item) {
        item.disabled = true;
      }
    });
  }
  /**
   * Enable entire form or list of items
   */
  enable(itemKeys?: string[]): void {
    if (!Array.isArray(itemKeys) || itemKeys.length === 0) {
      itemKeys = Object.keys(this.items);
    }
    itemKeys.forEach((key: string) => {
      const item = this.getItem(key);
      if (item) {
        item.disabled = false;
      }
    });
  }

  /**
   * Give back a boolean with the validation state of the complete form or array of items is/are valid.
   * All disabled items are valid.
   */
  isValid(itemKeys?: string[]): boolean {
    this.group.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    if (!Array.isArray(itemKeys) || itemKeys.length === 0) {
      itemKeys = Object.keys(this.items);
    }
    return itemKeys.findIndex(key => {
      const item = this.getItem(key);
      return item ? !item.isValid() : false;
    }) === -1;
  }

  /**
   * Get values of the specific items or all form.
   */
  getValues(itemKeys?: string[]): any {
    if (!Array.isArray(itemKeys) || itemKeys.length === 0) {
      itemKeys = Object.keys(this.items);
    }
    const tempValues: any = {};
    itemKeys.forEach((key: string) => {
      const item = this.getItem(key);
      if (item) {
        tempValues[key] = item.value;
      }
    });
    return tempValues;
  }
  /**
   * Reset the form and set the default values
   */
  reset(itemKeys?: string[], applyToDisabled: boolean = true): void {
    if (!Array.isArray(itemKeys) || itemKeys.length === 0) {
      itemKeys = Object.keys(this.items);
    }
    itemKeys.forEach((key: string) => {
      const item = this.getItem(key);
      if (applyToDisabled || !item.disabled) {
        item.reset();
      }
    });
  }
  /**
   * Set to empty values all items of the form.
   */
  clear(itemKeys: string[] = [], applyToDisabled: boolean = true): void {
    if (itemKeys.length === 0) {
      itemKeys = Object.keys(this.items);
    }
    itemKeys.forEach((key: string) => {
      const item = this.getItem(key);
      if (applyToDisabled || !item.disabled) {
        item.clear();
      }
    });
  }
  /**
   * Set the validators to the form
   */
  setValidators(validators: string[]): void {
    this.group.setValidators(ValidationBuilder.buildValidations(validators));
    this.group.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    // this.formUtil.applyGroupValidatorsToElements(this, validators);
  }
  /**
   * Force the validations of a list of inputs or full form.
   */
  forceValidation(itemKeys?: string[]): void {
    if (!Array.isArray(itemKeys) || itemKeys.length === 0) {
      itemKeys = Object.keys(this.items);
    }
    itemKeys.forEach((key: string) => {
      const item: FormItem = this.getItem(key);
      item.forceValidation();
    });
  }
  /**
   * Execute a function when the form change.
   */
  subscribeChanges(func: FuncSubscribeChanges): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.group.valueChanges.subscribe(func);
  }
  /**
   * Remove the subscription of form changes.
   */
  unsubscribeChanges(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = undefined;
  }
  /**
   * Focus first error form.
   */
  // focusError(): void {
  //   const foundedKey: string = Object.keys(this.items).find((key: string) => {
  //     return document.querySelector('#' + this.getItem(key).id) !== null;
  //   });
  //   if (foundedKey) { // Check if exist (may be the form no have items).
  //     let element = document.querySelector('#' + this.getItem(foundedKey).id);
  //     if (element) { // Check if found the item.
  //       // Scroll to find the label of the father of the form, in the case that this term in the html tag
  //       let securityCounter: number = 0; // Avoid the while not finish.
  //       do {
  //         element = element.parentElement;
  //         securityCounter++;
  //       } while (element.tagName !== 'FORM' && element.tagName !== 'HTML' && securityCounter < 100);
  //       // Check if I found the form tag
  //       if (element.tagName === 'FORM') {
  //         let tagInvalid: HTMLElement = element.querySelector('cmp-error-form>.error-form-wrapper>.error-form-text') as HTMLElement;
  //         // Focus on the first error
  //         if (tagInvalid) {
  //           // Focus in component (if supported) using .ng-invalid class. IMPORTANT: 4rt "parentElement" (tagInvalid) has .ng-invalid too
  //           let focusElement: HTMLElement = tagInvalid.parentElement.parentElement.parentElement.querySelector('.ng-invalid') as HTMLElement;
  //           CommonUtil.setFocus(focusElement);
  //           // Call parents: error-form-wrapper, cmp-error-form, div-component and cmp-form-item.
  //           tagInvalid = tagInvalid.parentElement.parentElement.parentElement.parentElement;
  //           CommonUtil.scrollTopAnimated(CommonUtil.getTopPosition(tagInvalid) - FORM_SECURITY_MARGIN_TOP);
  //         }
  //       }
  //     }
  //   }
  // }

  /**
   * Add control to the form.
   */
  addControl(items: FormItem[]): void {
    items.forEach((item: FormItem) => {
      this.group.addControl(item.key, new FormControl(this.formatValue(item), ValidationBuilder.buildValidations(item.validators)));
    });
    Object.assign(this.items, this.createOptions(items));
  }
  /**
   * Remove control from the form.
   */
  removeControl(keyItems: string[]) {
    keyItems.forEach((key: string) => {
      this.group.removeControl(key);
      delete this.items[key];
    });
  }
  /**
   * Get the generic item form
   */
  private getItem(name: string): FormItem {
    return this.checkItemExist(name) ? this.items[name] : undefined;
  }
  /**
   * Internal method for alert if an item name not exist
   */
  private checkItemExist(name: string): boolean {
    if (!this.items[name]) {
      throw new Error('FORM ERROR: The name of item "' + name + '" not exist.');
    }
    return true;
  }
  /**
   * Construct the FormControls and FormGroup.
   */
  private createGroup(items: FormItem[], groupValidation: string[]): FormGroup {
    const groupData: { [key: string]: AbstractControl } = {};
    items.forEach((item: FormItem) => {
      groupData[item.key] = new FormControl(this.formatValue(item), ValidationBuilder.buildValidations(item.validators));
    });
    let validators = ValidationBuilder.buildValidations(groupValidation);
    if (!Array.isArray(validators) || validators.length === 0) {
      validators = undefined;
    } else {
      if (validators.length === 1) {
        validators = validators[0];
      } else {
        validators = Validators.compose(validators);
      }
    }
    return new FormGroup(groupData, validators);
  }
  /**
   * Save the items and add the every control.
   */
  private createOptions(items: FormItem[]): FormItemList {
    const itemList: FormItemList = {};
    items.forEach((item: FormItem) => {
      itemList[item.key] = item;
      itemList[item.key].control = this.group.get(item.key);
      // set value after init control, special case for select item
      // if (item instanceof ItemSelectClass && item.list.length > 0) {
      //   item.value = item.defaultValue;
      // }
    });
    return itemList;
  }
  /**
   * Internal function to set the value on FormControl creation.
   */
  private formatValue(item: FormItem): Object {
    const defaultValue: DefaultValue = this.getDefaultValue(item);
    // We need a special structure if We want to set the disabled state.
    return item.disabled ? { value: defaultValue, disabled: item.disabled } : defaultValue;
  }
  /**
   * Get the default of the item.
   */
  private getDefaultValue(item: FormItem): DefaultValue {
    if (typeof item.defaultValue === 'boolean' || typeof item.defaultValue === 'number') {
      return item.defaultValue;
    } else {
      return item.defaultValue || '';
    }
  }
}
