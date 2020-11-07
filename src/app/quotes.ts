export class Quotes {
    public upvote: number;
    public downvote: number;
    constructor(public name: string, public author: string, public quoteDescription: string, public date: Date) {
        this.upvote = 0;
        this.downvote = 0;

    }
}

