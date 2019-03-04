import { Component, ElementRef, OnInit } from '@angular/core';
import { ItemInputClass, Form } from '@components/components/form';


@Component({
  selector: 'view-form',
  templateUrl: './form.view.html',
})
export class FormView implements OnInit {
  title: string = 'Form View';
  form: Form;

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new Form({
      idForm: 'testForm',
      items: [
        new ItemInputClass({
          key: 'testInput1',
          label: 'Test input 1',
        }),
      ],
    });
  }
}
