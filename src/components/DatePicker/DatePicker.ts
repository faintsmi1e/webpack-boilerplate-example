import flatpickr from 'flatpickr';
import {
  TemplateElement,
  templateEngine
} from '../../lib/engine';
import './DatePicker.scss';
export class DatePicker {
  container: HTMLElement;

  element: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.element = document.createElement('input');
    this.render();
  }

  // eslint-disable-next-line class-methods-use-this
  template(): TemplateElement {
    return {
      block: 'input',
      cls: 'datepicker'
    };
  }

  render(): void {
    this.container.textContent = '';
    const element = templateEngine(this.template());

    flatpickr(element, {});

    this.container.appendChild(element);
  }
}
