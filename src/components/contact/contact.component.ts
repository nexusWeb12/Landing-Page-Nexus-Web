import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  // FIX: Added OnPush change detection strategy for better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {

}