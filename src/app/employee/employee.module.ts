// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { EmployeeComponent } from './employee.component';
import { EmployeeRouting } from 'app/employee/employee.routing';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        EmployeeRouting
    ],
    declarations: [
        EmployeeComponent,
    ],
    exports: [
        EmployeeComponent,
    ]
})
export class EmployeeModule {

}
