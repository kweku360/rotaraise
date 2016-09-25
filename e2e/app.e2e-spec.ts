import { Rotaraisev1Page } from './app.po';

describe('rotaraisev1 App', function() {
  let page: Rotaraisev1Page;

  beforeEach(() => {
    page = new Rotaraisev1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
