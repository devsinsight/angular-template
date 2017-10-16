// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// This Module's Components
import { StarComponent } from 'app/shared/star/star.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {

}
