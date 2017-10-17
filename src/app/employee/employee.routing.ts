import { EmployeeComponent } from 'app/employee/employee.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes = [
    { path: 'employee', component: EmployeeComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRouting {}