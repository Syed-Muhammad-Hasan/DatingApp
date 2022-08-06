import {  Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MatchesComponent } from "./matches/matches.component";
import { MessagesComponent } from "./messages/messages.component";
import { ProfileDetailComponent } from "./profiles/profile-detail/profile-detail.component";
import { ProfilesComponent } from "./profiles/profiles-list/profiles-list.component";
import { AuthGuard } from "./_guards/auth.guard";
import { ProfileDetailResolver } from "./_resolver/profile-details.resolver";
import { ProfileListResolver } from "./_resolver/profile-list.resolver";

export const appRoutes: Routes = [
    {path:"", component: HomeComponent},
    {
        path:'',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[
            {path:"profiles", component: ProfilesComponent, 
            resolve:{users:ProfileListResolver}},
            {path:"profiles/:id", component: ProfileDetailComponent, 
            resolve:{user:ProfileDetailResolver}},
            {path:"matches", component: MatchesComponent},
            {path:"messages", component: MessagesComponent},
        ]
    },
    
    {path:"**", redirectTo:"", pathMatch: "full"}
];


