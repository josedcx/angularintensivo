import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Anime } from '@models/index';
import { ITopanime } from '@models/anime';

@Injectable({ providedIn: 'root' })
export class AnimeService {
    constructor(private http: HttpClient) { }

    getBySeason(year: number, season: string) {
        return this.http.get<Anime>(`${environment.apiUrl}/season/${year}/${season}`);
    }

    getTop(page: number, subtype:string){
      return this.http.get<ITopanime[]>(`${environment.apiUrl}/top/anime/${page}/${subtype}`)
}

    getDetailAnime(id: number){
      return this.http.get<any>(`${environment.apiUrl}/anime/${id}`)
    }

    getCharactersStaff(id: number){
      return this.http.get<any>(`${environment.apiUrl}/anime/${id}/characters_staff`)}

}
