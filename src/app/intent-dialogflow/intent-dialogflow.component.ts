import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Intent } from '../intent/intent';
import { Concept } from '../intent/concept';

@Component({
  selector: 'app-intent-dialogflow',
  templateUrl: './intent-dialogflow.component.html',
  styleUrls: ['./intent-dialogflow.component.css']
})
export class IntentDialogflowComponent implements OnInit {

  @Input() intent: Intent;
  @Input() conceptList: Array<Concept>;

  concept: Concept;
  conceptFlag = false;

  constructor(private ref: ChangeDetectorRef) {
   }

  ngOnInit() {
    if ( this.conceptList.length > 0 ) {
      this.conceptFlag = true;
      this.conceptList = this.conceptList;
      this.concept = this.conceptList[0];
    }
  }

  setConcept(literal: string): void {
    for (const concept of this.conceptList) {
      if (concept.literal === literal) {
        this.concept = concept;
        break;
      }
    }
    this.ref.detectChanges();
  }

}
