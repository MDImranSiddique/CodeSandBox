import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  count = 0;
  isDisabled = false;

  counter() {
    this.count++;
    this.count === 10 ? (this.isDisabled = true) : (this.isDisabled = false);
  }
}
