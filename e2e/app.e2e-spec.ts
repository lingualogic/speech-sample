import { AppPage } from './app.po';

describe('speech-sample App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Eine Website oder Web-App erweitert um Sprachdienste');
  });
});
