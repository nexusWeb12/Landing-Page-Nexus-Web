import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild,
  afterNextRender,
} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductionPathComponent } from './components/production-path/production-path.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    ProductionPathComponent,
  ],
  templateUrl: './app.component.html',
  host: {
    '(window:scroll)': 'onWindowScroll()',
    '(document:mousemove)': 'onMouseMove($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  activeSection = signal('home');
  cursorGlow = viewChild<ElementRef<HTMLDivElement>>('cursorGlow');

  // ViewChild references as class properties
  private homeRef = viewChild.required<ElementRef<HTMLElement>>('home');
  private projectsRef = viewChild.required<ElementRef<HTMLElement>>('projects');
  private servicesRef = viewChild.required<ElementRef<HTMLElement>>('services');
  private processRef = viewChild.required<ElementRef<HTMLElement>>('process');
  private contactRef = viewChild.required<ElementRef<HTMLElement>>('contact');

  private get sectionRefs() {
    return {
      home: this.homeRef,
      projects: this.projectsRef,
      services: this.servicesRef,
      process: this.processRef,
      contact: this.contactRef,
    };
  }

  private sections: { id: string; el: HTMLElement }[] = [];

  constructor() {
    afterNextRender(() => {
      this.sections = Object.entries(this.sectionRefs).map(([id, refSignal]) => ({
        id,
        el: refSignal().nativeElement,
      }));
      this.onWindowScroll(); // Initial check
    });
  }

  onWindowScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    let currentSectionId = 'home';
    for (const section of this.sections) {
      if (section.el.offsetTop <= scrollPosition) {
        currentSectionId = section.id;
      }
    }

    if (this.activeSection() !== currentSectionId) {
      this.activeSection.set(currentSectionId);
    }
  }

  onMouseMove(event: MouseEvent): void {
    const glowEl = this.cursorGlow()?.nativeElement;
    if (glowEl) {
      // Use transform for better performance
      glowEl.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
    }
  }
}