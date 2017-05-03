import { WifiManagerPage } from './app.po';

describe('wifi-manager App', () => {
  let page: WifiManagerPage;

  beforeEach(() => {
    page = new WifiManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
