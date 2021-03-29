import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'directives-pipes',
        loadChildren: () => 
        import('./modules/directives-pipes/home-task.module').then(module => module.HomeTaskModule)
    },
    {
        path: 'add-user-form',
        loadChildren: () =>
            import('./modules/add-user-form/add-user-form.module').then(module => module.AddUserFormModule)
    },
    {
        path: 'service-task',
        loadChildren: () =>
            import('./modules/service-task/service-task.module').then(module => module.ServiceTaskModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
