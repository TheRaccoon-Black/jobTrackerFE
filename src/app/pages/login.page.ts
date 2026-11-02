import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatInputModule, MatButtonModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <mat-card class="w-full max-w-md p-6 shadow-lg rounded-2xl">
        <div class="text-center mb-6">
          <h1 class="text-2xl font-bold text-gray-800">JobTracker</h1>
          <p class="text-gray-500">Masuk ke akun Anda</p>
        </div>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email" placeholder="budi@example.com">
          </mat-form-field>

          <mat-form-field appearance="outline" class="w-full">
            <mat-label>Password</mat-label>
            <input matInput type="password" formControlName="password">
          </mat-form-field>

          <button mat-flat-button color="primary" type="submit" class="w-full py-5 text-lg" [disabled]="loginForm.invalid">
            Masuk
          </button>
        </form>
      </mat-card>
    </div>
  `
})
export class LoginPage {
  private fb = inject(FormBuilder);
  
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Data form:', this.loginForm.value);
    }
  }
}