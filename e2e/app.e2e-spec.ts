import { NetyTest1Page } from './app.po';

describe('nety-test1 App', function() {
  let page: NetyTest1Page;

  beforeEach(() => {
    page = new NetyTest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
