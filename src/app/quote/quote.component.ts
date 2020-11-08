import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quotes('Preston', 'Mutahi Kagwe', 'If we behave normally,Covid-19 disease will treat us upnormally.', new Date('2020/10/4')),
    new Quotes('Alex', 'Barack Obama', 'If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress', new Date('2020/9/2')),
    new Quotes('Luciah', 'Mahatma Gandhi', 'Live as if you were to die tomorrow. Learn as if you were to live forever.', new Date('2020/10/13')),
    
  ]
  
  less: number;
  many: number;
  numCount: number;

  upvote(i) {
    this.quotes[i].upvote++
  }
  downvote(i) {
    this.quotes[i].downvote++
  }
  deleteVote(i) {
    this.quotes.splice(i, 1)
  }
  addQuote(newQoute) {
    this.quotes.push(newQoute);
  }
 
  constructor() { }

  ngOnInit(): void {
  }

getHighestUpVote() {
    this.less = 0
    this.many = 0
    for (this.numCount = 0; this.numCount < this.quotes.length; this.numCount++) {
      this.many = this.quotes[this.numCount].upvote;
      if (this.many > this.less) { this.less = this.many }
    }
    return this.less
  }
}
