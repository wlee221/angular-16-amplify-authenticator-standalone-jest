import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import awsconfig from './aws-exports.js';
import { Amplify } from 'aws-amplify';
Amplify.configure(awsconfig);

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule)],
}).catch((err) => console.error(err));
