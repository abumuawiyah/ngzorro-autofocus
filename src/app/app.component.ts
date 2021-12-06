import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-input-textarea',
  template: ` <textarea autofocus rows="4" nz-input [(ngModel)]="inputValue"></textarea> `,
})
export class NzDemoInputTextareaComponent {
  inputValue?: string;
}
