import { TwjExamenPachacamaJonathanPage } from './app.po';

describe('twj-examen-pachacama-jonathan App', () => {
  let page: TwjExamenPachacamaJonathanPage;

  beforeEach(() => {
    page = new TwjExamenPachacamaJonathanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
