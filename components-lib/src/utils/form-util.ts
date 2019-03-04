import { Injectable } from '@angular/core';
import { FormItem, Form } from '@components/components/form';


@Injectable({
  providedIn: 'root',
})
export class FormUtil {
  /**
   * Object to save the form data of snapshots.
   * The snapshot are indexed by idForm.
   */
  private formSnapshots: {[idForm: string]: any} = {};

  /**
   * Restore the saved form data.
   */
  restoreSnapshot(form: Form): void {
    const id: string = form.id;
    if (this.formSnapshots[id] === undefined) {
      console.warn('FORM UTIL: You not have data to restore in the form ' + id);
      return;
    }
    const values = this.formSnapshots[id];
    Object.keys(values).forEach((key) => {
      const item: FormItem = form[key];
      if (item) {
        item.value = values[key];
      }
    });
  }

  /**
   * Save the data of the form.
   */
  createSnapshot(form: Form): void {
    const id: string = form.id;
    this.formSnapshots[id] = form.getValues();
  }

  /**
   * Remove the data of specific form
   */
  removeSnapshot(form: Form);
  removeSnapshot(id: string);
  removeSnapshot(param1: Form | string): void {
    if (param1 instanceof Form) {
      delete this.formSnapshots[param1.id];
    } else {
      delete this.formSnapshots[param1];
    }
  }
}
