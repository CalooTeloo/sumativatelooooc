// src/app/Components/view/view.component.ts
import { Component, ViewChild } from '@angular/core';
import { VisualizadorComponent } from '../visualizador/visualizador.component';
import { FirstBtnComponent } from '../Botones/first-btn/first-btn.component';
import { CommonModule } from '@angular/common';
import { SecondBtnComponent } from '../Botones/second-btn/second-btn.component';
import { AceptarBtnComponent } from '../Botones/aceptar-btn/aceptar-btn.component';
import { CancelarBtnComponent } from '../Botones/cancelar-btn/cancelar-btn.component';
import { EmailComponent } from '../Inputs/email/email.component';
import { PasswordComponent } from '../Inputs/password/password.component';
import { TextComponent } from '../Inputs/text/text.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  imports: [VisualizadorComponent, FirstBtnComponent, SecondBtnComponent, AceptarBtnComponent, CancelarBtnComponent, EmailComponent, PasswordComponent, TextComponent, CommonModule, FormsModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  @ViewChild(VisualizadorComponent) visualizador!: VisualizadorComponent; // Referencia al VisualizadorComponent
  showVisualizer = false;
  email: string = '';
  password: string = '';
  text: string = '';
  customColor: string = '#ff0000'; // Color personalizado por defecto
  animationsEnabled: boolean = true; // Estado de animaciones


  handleColorChange() {
    this.showVisualizer = true;
    this.visualizador.changeColor(this.animationsEnabled ? this.customColor : undefined);
  }

  updateColor() {
    this.visualizador.currentColor = this.customColor; // Actualiza el color en el visualizador
  }

  toggleAnimations() {
    this.visualizador.animationsEnabled = this.animationsEnabled; // Actualiza el estado de animaciones
  }

  handleShapeChange() {
    this.visualizador.toggleShape(); // Llama al método toggleShape del Visualizador
  }

  handleAccepted() {
    this.visualizador.showMessage('Aceptado con éxito'); // Muestra el mensaje en el Visualizador
  }

  handleCanceled() {
    this.visualizador.showMessage('Cancelado con éxito'); // Muestra el mensaje de cancelación en el Visualizador
  }

  handleEmailChange(email: string) {
    this.visualizador.displayEmail(email);
  }

  handlePasswordChange(password: string) {
    this.visualizador.displayPassword(password);
  }

  handleTextChange(text: string) {
    this.visualizador.displayText(text);
  }
}  
