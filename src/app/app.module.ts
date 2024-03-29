import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ServiceExampleComponent } from './service-example/service-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTemplateComponent,
    InputOutputComponent,
    ServiceExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
