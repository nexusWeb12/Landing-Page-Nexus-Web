import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  // FIX: Added OnPush change detection strategy for better performance.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  services = [
    {
      title: 'Desarrollo de Landing Page',
      description: 'Creamos landing pages atractivas y optimizadas para la conversión, diseñadas para capturar la atención de tu audiencia.',
      icon: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25',
      color: 'text-[#f85c37]',
      status: 'active'
    },
    {
      title: 'Desarrollo de Tienda Online',
      description: 'Construimos tiendas online robustas y seguras, con todas las funcionalidades para que vendas tus productos al mundo.',
      icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.095-.821l1.923-6.862c.125-.446-.341-.92-1.095-.92H3.366',
      color: 'text-[#ff8250]',
      status: 'active'
    },
    {
      title: 'Desarrollo de Aplicaciones Móviles',
      description: 'Llevamos tu idea al bolsillo de tus usuarios con aplicaciones nativas e híbridas para iOS y Android.',
      icon: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
      color: 'text-[#577596]',
      status: 'active'
    }
  ];
}