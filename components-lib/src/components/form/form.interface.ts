import { FormGroup } from '@angular/forms';
// Item classes
import { ItemInputClass } from './input/input-form.class';

// Generic Types
export type OnOff = 'on' | 'off';
export type OnOffAutocomplete = OnOff | 'new-password';
export type TrueFalse = 'true' | 'false';
export type InputType = 'text' | 'number' | 'tel' | 'password'; // etc. Can include custom types

// Form Types
export type FormItem = ItemInputClass;
export type DefaultValue = string | number | boolean | Object;

// Form Interfaces
export interface FormItemList {
  [key: string]: FormItem;
}
export interface FormInterface {
  idForm: string;
  group: FormGroup;
  items: FormItemList;
}
export interface CreateFormOptions {
  idForm: string;
  items: FormItem[];
  groupValidator?: string[];
}
export type FuncSubscribeChanges = (value: any) => void;

// Item interfaces
export interface ItemBase<T> {
  id?: string;
  key: string;
  defaultValue?: T;
  label?: string;
  disabled?: boolean;
  validators?: string[];
  cssClass?: string | string[];
}
export interface ItemInput extends ItemBase<string> {
  type?: InputType;
  placeholder?: string;
  pattern?: string;
  autocomplete?: OnOffAutocomplete;
  autocapitalize?: OnOff;
  autocorrect?: OnOff;
  spellcheck?: TrueFalse;
}
