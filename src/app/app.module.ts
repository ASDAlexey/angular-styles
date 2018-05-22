import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StyledComponent } from './styled/styled.component';
import { StylishComponent } from './stylish/stylish.component';
import { CssClassComponent } from './css-class/css-class.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    StyledComponent,
    StylishComponent,
    CssClassComponent,
    NgstyleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
