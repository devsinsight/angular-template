import { Component } from '@angular/core';
import { Employee } from 'app/employee/shared/models/employee';

@Component({
    moduleId: module.id,
    selector: 'app-employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.scss']
})
export class EmployeeComponent {
    languages = ['English', 'Spanish', 'Other'];
    model = new Employee('', '', true, '', '');
    hasPrimaryLanguageError = false;

    validatePrimaryLanguage(event: string): void {
        this.hasPrimaryLanguageError = this.model.primaryLanguage === '';
    }
}
