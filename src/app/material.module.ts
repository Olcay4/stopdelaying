import { NgModule } from '@angular/core';

import {
    MatIconModule,
    MatCardModule
} from '@angular/material';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatExpansionModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatInputModule,
        MatFormFieldModule,
        MatListModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }