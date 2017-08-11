import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { headerComponent } from './header/header.component';
import { contentAreaComponent } from './contentArea/contentArea.component';

import { aboutComponent } from './about/about.component';
import { contactComponent } from './contact/contact.component';
import { projectsComponent } from './projects/projects.component';
import { skillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    contentAreaComponent,
    aboutComponent,
    contactComponent,
    projectsComponent,
    skillsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: contentAreaComponent
      },
      {
        path: 'projects',
        component: projectsComponent
      },
      {
        path: 'skills',
        component: skillsComponent
      }
    ]),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
