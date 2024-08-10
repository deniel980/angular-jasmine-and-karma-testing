import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should have a defined title', () => {
    let component = new AppComponent();
    expect(component.title).toBeDefined;
  });
});
