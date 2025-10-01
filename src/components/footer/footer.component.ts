
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  // FIX: Added OnPush change detection strategy for better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}