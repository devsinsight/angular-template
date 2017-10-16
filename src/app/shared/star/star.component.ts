import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stars',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.scss']
})
export class StarComponent implements OnChanges {

    @Input() rating: number;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick() {
        this.notify.emit('star width: ' + this.starWidth)
    }
}
