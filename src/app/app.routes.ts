import { RouterModule, Routes } from '@angular/router'

const ROUTES:Routes = [
  { path: '**', pathMatch: 'full', redirectTo: '' },
]

export const APP_ROUTES = RouterModule.forRoot(ROUTES)