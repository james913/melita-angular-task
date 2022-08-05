import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Modules */
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { StyleClassModule } from 'primeng/styleclass';
import { ChipsModule } from 'primeng/chips';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { TabMenuModule } from 'primeng/tabmenu'
import { BlockUIModule } from 'primeng/blockui'
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
import { GMapModule } from 'primeng/gmap';
import { MenuModule } from 'primeng/menu';
import { RatingModule } from 'primeng/rating';
import { KnobModule } from 'primeng/knob';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    StyleClassModule,
    ChipsModule,
    ChipModule,
    DialogModule,
    ConfirmDialogModule,
    TagModule,
    TabMenuModule,
    BlockUIModule,
    TooltipModule,
    TableModule,
    GMapModule,
    MenuModule,
    RatingModule,
    KnobModule,
    DividerModule,
    CarouselModule,
    PanelMenuModule,
    CheckboxModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    ToolbarModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule
  ],
  exports: [
    ButtonModule,
    RippleModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    StyleClassModule,
    ChipsModule,
    ChipModule,
    DialogModule,
    ConfirmDialogModule,
    TagModule,
    TabMenuModule,
    BlockUIModule,
    TooltipModule,
    TableModule,
    GMapModule,
    MenuModule,
    RatingModule,
    KnobModule,
    DividerModule,
    CarouselModule,
    PanelMenuModule,
    CheckboxModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    InputSwitchModule,
    InputTextModule,
    InputTextareaModule,
    ToolbarModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    MultiSelectModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class PrimeNgModule { }
