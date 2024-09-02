import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { PostComponent } from './post/post.component'; 
import { AboutComponent } from './page/about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { SignupComponent } from './page/signup/signup.component';
import { MypicturesComponent } from './page/mypictures/mypictures.component';
import { Component } from '@angular/core';
import { PublicationComponent } from './page/publication/publication.component';
import { ResetPasswordComponent } from './page/reset-password/reset-password.component';
import { PasswordResetComponent } from './page/password-reset/password-reset.component';
import { PasswordRequestResetComponent } from './page/password-request-reset/password-request-reset.component';
import { AddPictureComponent } from './page/add-picture/add-picture.component';
import { WinningComponent } from './page/winning/winning.component';
import { DonationFormComponent } from './page/donation-form/donation-form.component';
import { GalerieComponent } from './page/galerie/galerie.component';
import { ConfidentialiteComponent } from './page/confidentialite/confidentialite.component';
import { InfoComponent } from './page/info/info.component';


export const routes: Routes = [
    
    {
        path: 'login',
        component: LoginComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: 'passwordreset',
        component: PasswordResetComponent
    },
    {
        path: 'passwordrequestreset',
        component: PasswordRequestResetComponent
    },
    {
        path: 'resetpassword',
        component: ResetPasswordComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'head',
        component: HeaderComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'contact',
        component: ContactComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'signup',
        component: SignupComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: 'addpicture',
        component: AddPictureComponent
    },
    {
        path: 'mypictures',
        component: MypicturesComponent,
        canActivate: [AuthGuard]
    },
     {
        path: 'post',
        component: PostComponent,
        canActivate: [AuthGuard]
     },
    {
    path: 'win',
    component: WinningComponent
    },
    {
        path: 'donation',
        component: DonationFormComponent
    },
    {
        path: 'galerie',
        component: GalerieComponent
    },
     {
        path: 'confidentialite',
        component: ConfidentialiteComponent
     },
     {
        path: 'info',
        component: InfoComponent
     },
    /* {
        path: 'layout',
        component: LayoutComponent,

        children:[
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'about',
                component: AboutComponent,
                canActivate: [AuthGuard]
            } 
        ]
    }, */

   /*  {
        path: 'layout',
        component: LayoutComponent,
        canActivate: [AuthGuard]
    }, */ 
    {
        path: 'publication',
        component: PublicationComponent
    },
    {
        path: '**', redirectTo: 'login', pathMatch: 'full'
    },
];
