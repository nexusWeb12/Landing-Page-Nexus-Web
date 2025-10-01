import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-production-path',
  imports: [CommonModule],
  templateUrl: './production-path.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductionPathComponent {
  phases = [
    {
      name: 'Inicio',
      color: 'text-[#f85c37]',
      steps: [
        {
          name: 'Planificación de proyecto',
          description: 'Definimos metas, alcance y estrategia para asegurar el éxito.',
        },
        {
          name: 'Obtención de recursos',
          description: 'Reunimos todos los activos y herramientas necesarias para el proyecto.',
        },
      ],
    },
    {
      name: 'Construcción',
      color: 'text-[#ff8250]',
      steps: [
        {
          name: 'Armado de diseño y muestra',
          description: 'Creamos la interfaz y te la presentamos para tu feedback.',
        },
        {
          name: 'Armado del proyecto entero',
          description: 'Construimos el producto final con código limpio y eficiente.',
        },
      ],
    },
    {
      name: 'Entrega',
      color: 'text-[#577596]',
      steps: [
        {
          name: 'Se entrega producto terminado',
          description: 'Te entregamos el proyecto listo para su lanzamiento.',
        },
        {
          name: 'Pulimos y terminamos',
          description: 'Ajustamos los últimos detalles con vos y damos por finalizado el proyecto.',
        },
      ],
    },
  ];
}
