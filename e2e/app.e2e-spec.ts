import { RspPage } from './app.po';

describe('rsp App', () => {
  let page: RspPage;

  beforeEach(() => {
    page = new RspPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
