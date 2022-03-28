import { MainPage } from './pages/MainPage/MainPage';
import './index.scss';
import { DatePicker } from './components/DatePicker/DatePicker';

const app = document.querySelector<HTMLDivElement>('.app');
// eslint-disable-next-line no-console
console.log(app);
if (app) {
  const mainPage = new MainPage(app);
  const datePicker = new DatePicker(app);
}
