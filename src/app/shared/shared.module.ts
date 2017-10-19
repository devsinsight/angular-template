// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// This Module's Components
import { StarComponent } from 'app/shared/star/star.component';
import { BsDatepickerModule, RatingModule  } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        BsDatepickerModule.forRoot(),
        RatingModule.forRoot(),
        ButtonsModule.forRoot()
    ],
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent,
        CommonModule,
        FormsModule,
        BsDatepickerModule,
        RatingModule,
        ButtonsModule
    ]
})
export class SharedModule {

}
