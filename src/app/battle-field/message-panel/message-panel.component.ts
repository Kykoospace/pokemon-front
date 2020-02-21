import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../shared/logic/battle';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss']
})
export class MessagePanelComponent implements OnInit {

  @Input() private messages: Message[];
  @Input() private  date: Date;

  constructor() { }

  ngOnInit() {
    this.date = new Date();
  }

}
