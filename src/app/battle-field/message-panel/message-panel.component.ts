import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.scss']
})
export class MessagePanelComponent implements OnInit {

  @Input() private messages: string[];

  constructor() { }

  ngOnInit() { }

}
