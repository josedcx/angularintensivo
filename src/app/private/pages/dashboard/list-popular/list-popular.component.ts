import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeService } from '@app/_services'
import { ITopanime } from '@models/anime';

@Component({
  selector: 'app-list-popular',
  templateUrl: './list-popular.component.html',
})
export class ListPopularComponent implements OnInit{
  public animeSubscription: Subscription = new Subscription;
  public listTopAnime: ITopanime[] = [];
  public topUpcoming: any;

  constructor(
    private _animeWS: AnimeService) {
  }

  ngOnInit() {
    this.getTopAnime();
  }

  getTopAnime() {
    this.animeSubscription = this._animeWS.getTop(1, 'bypopularity')
      .subscribe((responseTop: ITopanime[]) => {
        this.listTopAnime = (responseTop as any).top.slice(0, 10);
      });

    this.animeSubscription = this._animeWS.getTop(1, 'upcoming')
      .subscribe((responseUpcoming) => {
        this.topUpcoming = (responseUpcoming as any).top.slice(0, 10);
      })
  }


}
