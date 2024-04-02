import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyHttpInterceptor } from './services/myHttpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    NgTemplateComponent,
    InputOutputComponent,
    ServiceExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
