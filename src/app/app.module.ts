import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

//services
import { PrimaryKeyServiceService } from './primary-key-service.service';
import { FriendPrimaryKeyService } from './friend-primary-key.service';
import { ChatIoServiceService } from './chat-io-service.service';

import { MyProfileEachPostComponent } from './my-profile-each-post/my-profile-each-post.component';
import { EachCommentOfPostsComponent } from './each-comment-of-posts/each-comment-of-posts.component';

import { FriendProfileRequestComponent } from './friend-profile-request/friend-profile-request.component';
import { MessageEachChildComponent } from './message-each-child/message-each-child.component';
import { NotificationCommentsEachChildComponent } from './notification-comments-each-child/notification-comments-each-child.component';
import { RequestsComponent } from './requests/requests.component';
import { MyProfileEachPostRandomComponent } from './my-profile-each-post-random/my-profile-each-post-random.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MyProfileEachPostComponent,
    EachCommentOfPostsComponent,
    FriendProfileRequestComponent,
    MessageEachChildComponent,
    NotificationCommentsEachChildComponent,
    RequestsComponent,
    MyProfileEachPostRandomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PrimaryKeyServiceService, FriendPrimaryKeyService, ChatIoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
