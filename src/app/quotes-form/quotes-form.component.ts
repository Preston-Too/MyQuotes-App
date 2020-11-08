import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  name: string;
  author: string;
  quote: string;
  quoteDescription: string;
  newQuote: any;
  date: Date;
  @Output() emitNewQuote = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.date = new Date(this.date);
    this.newQuote = new Quotes(this.name, this.author, this.quoteDescription, this.date)
    this.name = '';
    this.author = '';
    this.quoteDescription = '';
    this.emitNewQuote.emit(this.newQuote)

  }
}
