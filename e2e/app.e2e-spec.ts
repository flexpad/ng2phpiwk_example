import { NgphpiwkPage } from './app.po';

describe('ngphpiwk App', function() {
  let page: NgphpiwkPage;

  beforeEach(() => {
    page = new NgphpiwkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
