import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule,
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
  ],
})
export class AppComponent {
  title = 'amplify-with-standalone';
}
