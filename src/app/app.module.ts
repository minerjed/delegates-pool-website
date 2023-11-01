import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DelegateDetailsComponent } from './pages/delegate-details/delegate-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadconfigService } from './services/loadconfig.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DelegateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [LoadconfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function appInitializerFn(loadconfigService: LoadconfigService) {
  return (): Promise<any> => {
    return loadconfigService.loadAppConfig();
  };
}