import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { EunesButtonModule } from '@eunes/elements/button';
import { EunesDropdownModule } from '@eunes/elements/dropdown';
import { EunesProgressBarModule } from '@eunes/elements/progress-bar';
import { NgBusyModule } from 'ng-busy';
import { MarkdownModule } from 'ngx-markdown';

import { BoardComponent } from './board/board.component';
import { MemoDialogComponent } from './memo-dialog/memo-dialog.component';
import { MemoboardComponent } from './memoboard.component';
import { MemoboardService } from './memoboard.service';
import { MemoboardRoutingModule } from './memoboard-routing.module';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';


@NgModule({
    declarations: [
        MemoboardComponent,
        MemoDialogComponent,
        ProjectDialogComponent,
        BoardComponent
    ],
    imports: [
        DragDropModule,
        CommonModule,
        HttpClientModule,
        FlexLayoutModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
        MatListModule,
        MatInputModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MarkdownModule.forChild(),
        EunesButtonModule,
        EunesProgressBarModule,
        EunesDropdownModule,
        NgBusyModule,
        MemoboardRoutingModule,
    ],
    providers: [MemoboardService]
})
export class MemoboardModule { }
