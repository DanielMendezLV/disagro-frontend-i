import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() stepNumber!: Number;
  @Input() stepInstruction!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
