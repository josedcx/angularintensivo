import { Component, Injectable, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeService } from '@app/_services';

@Component({
  selector: 'app-list-anime',
  templateUrl: './list-anime.component.html',
  styleUrls: ['./list-anime.component.scss']
})

@Injectable()
export class ListAnimeComponent implements OnInit {
  public animeSubscription: Subscription = new Subscription;
  public listAnime: any;
  public year: number = 2021;
  public season: string = 'winter';
  constructor(
    private _animeWS: AnimeService
    ) { }
    ngOnInit(){
      this.getAllAnime(this.year, this.season);
    }

    getAllAnime(year: number, season: string) {
      this.animeSubscription = this._animeWS.getBySeason(year, season)
      .subscribe((responseAnime) => {
        this.listAnime = (responseAnime as any).anime.slice(0,15);
      });
    }
}
