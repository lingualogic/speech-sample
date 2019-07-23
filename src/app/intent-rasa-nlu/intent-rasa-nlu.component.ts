import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Intent } from '../intent/intent';
import { Concept } from '../intent/concept';

@Component({
  selector: 'app-intent-rasa-nlu',
  templateUrl: './intent-rasa-nlu.component.html',
  styleUrls: ['./intent-rasa-nlu.component.css']
})
export class IntentRasaNluComponent implements OnInit {

  @Input() intent: Intent;
  @Input() conceptList: Array<Concept>;

  concept: Concept;
  conceptFlag = false;


  constructor(private ref: ChangeDetectorRef) {
  }


  ngOnInit() {
    if ( this.conceptList.length > 0 ) {
      this.conceptFlag = true;
      this.conceptList = this.intent.conceptList;
      this.concept = this.intent.conceptList[0];
    }
  }


  setConcept(literal: string): void {
    for (const concept of this.conceptList) {
      if ( concept && concept.literal === literal) {
        this.concept = concept;
        break;
      }
    }
    this.ref.detectChanges();
  }

}
