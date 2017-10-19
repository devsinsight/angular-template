import { EmployeeService } from './shared/services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/employee/shared/models/employee';
import { NgForm } from '@angular/forms';
import { LanguageService } from 'app/employee/shared/services/language.service';

@Component({
    moduleId: module.id,
    selector: 'app-employee',
    templateUrl: 'employee.component.html',
    styleUrls: ['employee.component.scss']
})
export class EmployeeComponent implements OnInit {

    languages = ['English', 'Spanish', 'Other'];
    model = new Employee('', '', true, 'w2', '', null);
    hasPrimaryLanguageError = false;

    constructor(private service: EmployeeService, private languageService: LanguageService) {}

    ngOnInit(): void {
        this.languageService.getLanguages()
            .subscribe( languages => this.languages = languages)
    }

    save(form: NgForm) {
        this.service.save(this.model)
        .subscribe(data => console.log(data))
    }

    validatePrimaryLanguage(event: string): void {
        this.hasPrimaryLanguageError = this.model.primary_language === '';
    }

}
