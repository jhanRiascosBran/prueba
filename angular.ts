import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Welcome to Angular!</h1>
    <p>This is a simple Angular component.</p>
  `,
  styles: [
    `
      h1 {
        color: blue;
      }
    `,
  ],
})
export class AppComponent {
  title = "angular-app";
}
