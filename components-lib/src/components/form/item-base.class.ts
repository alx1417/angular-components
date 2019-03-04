import { AbstractControl } from '@angular/forms';
// Interfaces
import { FuncSubscribeChanges, ItemBase } from './form.interface';
// Validations
import { ValidationBuilder } from './validations/index';
// Rxjs
import { Subscription } from 'rxjs';

export class ItemBaseClass<T> {
  // Auto-generated id for the item.
  private _id: string;
  // Selector of the item.
  private _key: string;
  // Default value for the input
  private _defaultValue: T;
  // Label of the item.
  private _label: string = '';
  // Disable/enable the item.
  private _disabled: boolean = false;
  // Validators of the item.
  protected _validators: string[] = [];
  // Control of the item.
  private _control: AbstractControl;
  // Classes to append to item.
  private _cssClass: string | string[] = '';
  // Subscriptions to the changes.
  private subscription: Subscription;

  /**
   * Set the base parameters.
   */
  constructor(
    item: ItemBase<T>,
  ) {
    this._id = item.id || 'item-form-id_' + Math.random().toString(36).slice(2); // Random id
    this._key = item.key;
    this._defaultValue = item.defaultValue;
    this.label = item.label;
    this.disabled = item.disabled;
    this.validators = item.validators;
    this.cssClass = item.cssClass;
  }

  /*** GETTERS AND SETTERS ***/
  get id(): string {
    return this._id;
  }

  get key(): string {
    return this._key;
  }

  get defaultValue(): T {
    return this._defaultValue;
  }

  get control(): AbstractControl {
    return this._control;
  }
  set control(value: AbstractControl) {
    this._control = value;
  }

  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value || this._label;
  }

  get disabled(): boolean {
    return this.control && this.control.disabled ? this.control.disabled : this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = typeof value !== 'undefined' ? value : this._disabled;
    if (this.control) {
      if (this._disabled) {
        this.control.disable({ onlySelf: true, emitEvent: false });
      } else {
        this.control.enable({ onlySelf: true, emitEvent: false });
      }
    }
  }

  get validators(): string[] {
    return this._validators;
  }
  set validators(value: string[]) {
    if (this.control) {
      this._validators = value || this._validators;
      this.control.setValidators(ValidationBuilder.buildValidations(this._validators));
      this.control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    }
  }

  get cssClass(): string | string[] {
    return this._cssClass;
  }
  set cssClass(value: string | string[]) {
    if (Array.isArray(value)) {
      value.join(' ');
    }
    this._cssClass = value || this._cssClass;
  }

  get value(): T {
    return this.control ? this.control.value : '';
  }
  set value(value: T) {
    this.control.setValue(value);
    this.control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }
  setValueNoEmit(value: T) {
    this.control.setValue(value, { onlySelf: true, emitEvent: false });
    this.control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
  }

  /*** HELPER METHODS ***/
  /**
   * Return if the item is valid.
   * The disabled items always are valid.
   */
  isValid(): boolean {
    return this.control.status === 'DISABLED' ? true : this.control.valid;
  }
  /**
   * Force the input to show the validation.
   * Return if the item is valid.
   */
  forceValidation(): boolean {
    this.control.markAsTouched();
    this.control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
    return this.isValid();
  }
  /**
   * Clear the item to empty.
   */
  clear(): void {
    this.value = '' as any;
  }
  /**
   * Reset item to set the default value.
   */
  reset(): void {
    if (typeof this.defaultValue === 'boolean' || typeof this.defaultValue === 'number') {
      this.value = this.defaultValue;
    } else {
      this.value = (this.defaultValue || '') as any;
    }
  }
  /**
   * Execute a function when the item change.
   */
  subscribeChanges(func: FuncSubscribeChanges): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.control.valueChanges.subscribe(func);
  }
  /**
   * Remove the subscription of item changes.
   */
  unsubscribeChanges(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = undefined;
  }
}
