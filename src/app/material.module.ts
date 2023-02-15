import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import{MatTableModule} from '@angular/material/table';

const modules = [
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatSortModule,
    MatTableModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        modules,
      
        
    ],

    exports: [
        CommonModule,
        modules,
        
    ]
})

export class MaterialModule { }