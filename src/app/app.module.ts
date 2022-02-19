import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WaitingListComponent } from './components/waiting-list/waiting-list.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    WaitingListComponent,
    NewsletterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
