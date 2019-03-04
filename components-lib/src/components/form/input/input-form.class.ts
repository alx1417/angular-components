import { OnOff, OnOffAutocomplete, TrueFalse, ItemInput, InputType } from '../form.interface';
import { ItemBaseClass } from '../item-base.class';

export class ItemInputClass extends ItemBaseClass<string> {
  // Type of the input.
  private _type: InputType = 'text';
  // Placeholder of the input.
  private _placeholder: string = '';
  // Pattern of the input.
  private _pattern: string = '';
  // Autocomplete attribute of the input.
  private _autocomplete: OnOffAutocomplete = 'new-password';
  // Autocorrect attribute of the input.
  private _autocorrect: OnOff = 'off';
  // Autocapitalize attribute of the input.
  private _autocapitalize: OnOff = 'off';
  // Spellcheck attribute of the input.
  private _spellcheck: TrueFalse = 'false';

  /**
   * Create the input item.
   */
  constructor(item: ItemInput) {
    super(item);
    this.setVariables(item);
  }

  /**
   * Set the vars that only apply to the input.
   */
  private setVariables(item: ItemInput): void {
    this.type = item.type;
    this.placeholder = item.placeholder;
    this.pattern = item.pattern;
    this.autocomplete = item.autocomplete;
    this.autocapitalize = item.autocapitalize;
    this.spellcheck = item.spellcheck;
    this.autocorrect = item.autocorrect;
  }

  /*** GETTERS AND SETTERS ***/
  get type(): InputType {
    return this._type;
  }
  set type(value: InputType) {
    this._type = value || this._type;
  }

  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value || this._placeholder;
  }

  get pattern(): string {
    return this._pattern;
  }
  set pattern(value: string) {
    this._pattern = value || this._pattern;
  }

  get autocomplete(): OnOffAutocomplete {
    return this._autocomplete;
  }
  set autocomplete(value: OnOffAutocomplete) {
    this._autocomplete = value || this._autocomplete;
  }

  get autocapitalize(): OnOff {
    return this._autocapitalize;
  }
  set autocapitalize(value: OnOff) {
    this._autocapitalize = value || this._autocapitalize;
  }

  get autocorrect(): OnOff {
    return this._autocorrect;
  }
  set autocorrect(value: OnOff) {
    this._autocorrect = value || this._autocorrect;
  }

  get spellcheck(): TrueFalse {
    return this._spellcheck;
  }
  set spellcheck(value: TrueFalse) {
    this._spellcheck = value || this._spellcheck;
  }
}
