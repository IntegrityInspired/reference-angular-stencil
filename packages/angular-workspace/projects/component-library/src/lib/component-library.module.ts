import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from 'stencil-library/loader';
@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    },
  ]
})
export class FoobarComponentLibraryModule {
  constructor() {
    defineCustomElements();
  }
}
