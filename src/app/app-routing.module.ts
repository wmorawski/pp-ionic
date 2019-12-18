import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
            },
            {
                path: 'register',
                loadChildren: () => import('./pages/auth/register/register.module').then((m) => m.RegisterPageModule),
            },
        ],
    },

    {
        path: 'calendar',
        loadChildren: () => import('./pages/calendar/calendar.module').then((m) => m.CalendarPageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'parties',
        loadChildren: () => import('./pages/parties/parties.module').then((m) => m.PartiesPageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'chats',
        loadChildren: () => import('./pages/chats/chats.module').then((m) => m.ChatsPageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
        canActivate: [AuthGuard],
    },
    {
        path: 'more',
        loadChildren: () => import('./pages/more/more.module').then((m) => m.MorePageModule),
        canActivate: [AuthGuard],
    },  { path: 'parties-view-cart', loadChildren: './pages/parties/pages/view/pages/parties-view-cart/parties-view-cart.module#PartiesViewCartPageModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
