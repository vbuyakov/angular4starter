import { A4bsstarterPage } from './app.po';

describe('a4bsstarter App', () => {
  let page: A4bsstarterPage;

  beforeEach(() => {
    page = new A4bsstarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
