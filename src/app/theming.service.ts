import { Injectable } from '@angular/core';
export const themes = {
  darkTheme: {
    'primary-color': '#455363',
    'background-color': '#1f2935',
    'text-color': '#fff'
  },
  lightTheme: {
    'primary-color': '#fff',
    'background-color': '#e5e5e5',
    'text-color': '#2d2d2d'
  },
  cascoTheme: {
    'primary-color': '#f16820',
    'background-color': '#1a3264',
    'text-color': '#e8e2da'
  },
  tealTheme: {
    'primary-color': '#ff4081',
    'background-color': '#00796b',
    'text-color': '#ffffff'
  }
};
@Injectable({
  providedIn: 'root'
})
export class ThemingService {
  changeTheme(themeVal: string) {
    this.setTheme(themes[themeVal]);
  }
  private setTheme(themeVal: {}) {
    Object.keys(themeVal).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, themeVal[k])
    );
  }
}
