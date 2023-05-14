import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";


@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit, OnDestroy {

  private subject: Subject<number>;
  private subscription: Subscription | null = null;

  constructor() {
    this.subject = new Subject<number>();
   setTimeout(() => {
      this.subject.complete();
    }, 10000);
  }

  ngOnInit(): void {
    this.subscription = this.subject
      .subscribe(
        {
          complete: () => {
            const popup = document.getElementById('popup');
            popup!.style.display = 'block';
          },
          error: (error: string) => {
            console.log('ERROR!!! ' + error);
          }
        }
      );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  closePopup() {
    const popup = document.getElementById('popup');
    popup!.style.display = 'none';
  }
}
