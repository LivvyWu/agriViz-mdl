import { AgriVizMdlPage } from './app.po';

describe('agri-viz-mdl App', () => {
  let page: AgriVizMdlPage;

  beforeEach(() => {
    page = new AgriVizMdlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
