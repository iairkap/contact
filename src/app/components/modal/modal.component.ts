import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL_MODULES = [MatLabel, MatFormField, MatInput, MatDialogModule];

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './modal.component.html',
  styles: ``,
})
export class ModalComponent {}
