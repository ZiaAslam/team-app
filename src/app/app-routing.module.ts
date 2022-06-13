import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
// import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'singUp',
    component: SingUpComponent,
  },
  {
    path: 'dashboard',
    // canActivate:[AuthGuard],
    component: DashboardComponent,
    children:[
      {
        path: 'sidebar',
        component: SidebarComponent,
        children: [
          {
            path: 'chatBox',
            component: ChatComponent,
          },
        ],
      },
    ]
   
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
