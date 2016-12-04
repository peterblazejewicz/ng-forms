import { browser, element, by } from 'protractor';

export class FormsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('frms-root h1')).getText();
  }
}
