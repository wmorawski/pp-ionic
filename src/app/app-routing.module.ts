import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                loadChildren: './pages/auth/login/login.module#LoginPageModule',
            },
            {
                path: 'register',
                loadChildren: './pages/auth/register/register.module#RegisterPageModule',
            },
        ],
    },

    {
        path: 'calendar',
        loadChildren: './pages/calendar/calendar.module#CalendarPageModule',
        canActivate: [AuthGuard],
    },
    {
        path: 'parties',
        loadChildren: './pages/parties/parties.module#PartiesPageModule',
        canActivate: [AuthGuard],
    },
    { path: 'chats', loadChildren: './pages/chats/chats.module#ChatsPageModule', canActivate: [AuthGuard] },
    {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfilePageModule',
        canActivate: [AuthGuard],
    },
    { path: 'more', loadChildren: './pages/more/more.module#MorePageModule', canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
