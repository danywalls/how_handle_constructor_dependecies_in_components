import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WaitingListComponent } from './components/waiting-list/waiting-list.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { HttpClientModule } from '@angular/common/http';
import { FormWrapperService } from './core/form-wrapper.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    WaitingListComponent,
    NewsletterComponent,
    RecoveryPasswordComponent,
  ],
  providers: [FormWrapperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
