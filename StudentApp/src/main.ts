import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // ✅ Your standalone root component
import { appConfig } from './app/app.config'; // ✅ Your config with routing or providers

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
