import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports: [CommonModule],
  // FIX: Added OnPush change detection strategy for better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  private sanitizer = inject(DomSanitizer);

  projects = [
    {
      title: 'Tienda Online',
      description: 'Una tienda online completa con carrito de compras, pasarela de pago y panel de administración.',
      url: 'https://cuantica-card.com',
    },
    {
      title: 'Landing Page & Tienda Online',
      description: 'Diseño de una landing page atractiva complementada con una robusta tienda online para maximizar la conversión.',
      url: 'https://wegplast.com',
    },
    {
      title: 'Landing Page',
      description: 'Página de aterrizaje moderna y optimizada para la conversión, enfocada en la experiencia de usuario.',
      url: 'https://tobiasgalvez.github.io/LumeStudio/',
    },
    {
      title: 'Juego El Impostor',
      description: 'Un juego de misterio y engaño donde debes encontrar al impostor antes de que sea demasiado tarde.',
      url: 'https://tobiasgalvez.github.io/el-impostor/',
    },
  ];

  getSafeUrl(url: string): SafeResourceUrl {
    if (url === '#') {
      // Use about:blank for placeholders to avoid errors or recursive loading
      return this.sanitizer.bypassSecurityTrustResourceUrl('about:blank');
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}