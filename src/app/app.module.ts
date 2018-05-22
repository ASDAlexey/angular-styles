import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StyledComponent } from './styled/styled.component';
import { StylishComponent } from './stylish/stylish.component';
import { CssClassComponent } from './css-class/css-class.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { SanitizedComponent } from './sanitized/sanitized.component';
import { HostStylingComponent } from './host-styling/host-styling.component';
import { HostcontextStylingComponent } from './hostcontext-styling/hostcontext-styling.component';
import { ChildComponent } from './child/child.component';
import { StyledDirective } from './styled.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyledComponent,
    StylishComponent,
    CssClassComponent,
    NgstyleComponent,
    SanitizedComponent,
    HostStylingComponent,
    HostcontextStylingComponent,
    ChildComponent,
    StyledDirective,
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
