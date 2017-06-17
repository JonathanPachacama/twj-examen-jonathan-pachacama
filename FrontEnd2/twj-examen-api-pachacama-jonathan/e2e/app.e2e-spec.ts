import { TwjExamenApiPachacamaJonathanPage } from './app.po';

describe('twj-examen-api-pachacama-jonathan App', () => {
  let page: TwjExamenApiPachacamaJonathanPage;

  beforeEach(() => {
    page = new TwjExamenApiPachacamaJonathanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
