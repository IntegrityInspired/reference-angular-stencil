import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from 'stencil-library/loader';
console.log('imported component-library.module.ts');
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
