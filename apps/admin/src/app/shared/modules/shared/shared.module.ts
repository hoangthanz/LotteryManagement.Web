

import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { UiModule } from 'libs/ui/src/lib/ui.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlockUIModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
    MatSortModule,
    MatButtonToggleModule,
    MatMenuModule,
    NgScrollbarModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatBadgeModule,
    HttpClientModule,
    UiModule
  ],
  exports: [
    FormsModule,
    BlockUIModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatListModule,
    MatSortModule,
    MatButtonToggleModule,
    MatMenuModule,
    NgScrollbarModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatBadgeModule,
    HttpClientModule,
    UiModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' },
        DatePipe,
        CurrencyPipe,
        DecimalPipe,
      ]
    };
  }
}
