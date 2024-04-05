import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const routes: Routes = [
  // Your route configurations here
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

