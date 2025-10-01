
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // FIX: Added OnPush change detection strategy for better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}