import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-he',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './he.component.html',
  styleUrls: ['./he.component.css']
})
export class HeComponent implements OnDestroy {
  message = '';
  receivedMessage = '';
  private sub: Subscription;

  constructor(private msgService: MessageService) {
    
    this.sub = this.msgService.getMessageForHe().subscribe((msg) => {
      console.log('📥 He received:', msg);
      this.receivedMessage = msg;
    });
  }

  sendMessage() {
    this.msgService.sendMessageFromHe(this.message);
    this.message = '';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
