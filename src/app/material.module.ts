import { NgModule } from '@angular/core';

import {
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
} from '@angular/material';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

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
        MatFormFieldModule
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
        MatFormFieldModule
    ]
})
export class MaterialModule { }