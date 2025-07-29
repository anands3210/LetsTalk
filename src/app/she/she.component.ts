import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-she',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './she.component.html',
  styleUrls: ['./she.component.css']
})
export class SheComponent implements OnDestroy {
  message = '';
  receivedMessage = '';
  private sub: Subscription;

  constructor(private msgService: MessageService) {

    this.sub = this.msgService.getMessageForShe().subscribe((msg) => {
      console.log('📥 She received:', msg);
      this.receivedMessage = msg;
    });
  }

  sendMessage() {
    this.msgService.sendMessageFromShe(this.message);
    this.message = '';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
