
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule],
  // FIX: Added OnPush change detection strategy for better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  activeSection = input<string>('home');
  navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'services', label: 'Servicios' },
    { id: 'contact', label: 'Contacto' },
  ];

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}