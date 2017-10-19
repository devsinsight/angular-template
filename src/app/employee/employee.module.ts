// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { EmployeeComponent } from './employee.component';
import { EmployeeRouting } from 'app/employee/employee.routing';
import { SharedModule } from 'app/shared/shared.module';
import { EmployeeService } from 'app/employee/shared/services/employee.service';
import { LanguageService } from 'app/employee/shared/services/language.service';

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
    ],
    providers: [
        EmployeeService,
        LanguageService
    ],
})
export class EmployeeModule {}
