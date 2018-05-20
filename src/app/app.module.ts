import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyledComponent } from './styled/styled.component';
import { StylishComponent } from './stylish/stylish.component';

@NgModule({
  declarations: [
    AppComponent,
    StyledComponent,
    StylishComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
