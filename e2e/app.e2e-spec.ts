import { FaTestPage } from './app.po';

describe('fa-test App', () => {
  let page: FaTestPage;

  beforeEach(() => {
    page = new FaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
