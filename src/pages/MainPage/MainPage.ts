import './MainPage.scss';

export class MainPage {
  container: HTMLElement;

  element: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.element = document.createElement('div');
    this.render();
  }

  render(): void {
    this.container.textContent = '';
    const element = this.element;
    element.classList.add('mainpage');

    this.container.appendChild(element);
  }
}
