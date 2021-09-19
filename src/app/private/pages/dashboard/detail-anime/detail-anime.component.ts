import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimeService } from '@app/_services';

@Component({
  selector: 'app-detail-anime',
  templateUrl: './detail-anime.component.html',
  styleUrls: ['./detail-anime.component.scss']
})
export class DetailAnimeComponent implements OnInit {
  public animeSubscription: Subscription = new Subscription;
  public idAnime:any;
  public detailInfo:any;
  public listCharacters: any;

  constructor(
    private _animeWS: AnimeService,
    private activatedRoute: ActivatedRoute ) {
    this.activatedRoute.params.subscribe(params => {
      this.idAnime = params['id'];
    });
  }

  ngOnInit(): void {
    this.getDetailAnime();
    this.getCharacters();
  }

  getDetailAnime(){
    this.animeSubscription = this._animeWS.getDetailAnime(this.idAnime)
    .subscribe((responseAnime) => {
      this.detailInfo = responseAnime;
    });
  }


  getCharacters(){
    this.animeSubscription = this._animeWS.getCharactersStaff(this.idAnime)
    .subscribe((responseCharacters) => {
      this.listCharacters = (responseCharacters as any).characters;

    })
  }
}
