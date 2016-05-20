// import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';

// enableProdMode();

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
]).then(success => console.log(`Bootstrap success`))
.catch(error => console.log(error));
