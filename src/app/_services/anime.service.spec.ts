import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { Anime } from '@app/_models';
import { AnimeService } from './anime.service';

describe('AnimeService', () => {
  let httpTestingController: HttpTestingController;
  let animeServices: AnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

  });

  it('#getData return expected data', (done) => {
    const expectedData: Anime[] = [{
      "mal_id": 40028,
      "url": "https://myanimelist.net/anime/40028/Shingeki_no_Kyojin__The_Final_Season",
      "title": "Shingeki no Kyojin: The Final Season",
      "image_url": "https://cdn.myanimelist.net/images/anime/1000/110531.jpg",
      "synopsis": "Gabii Braun and Falco Grice have been training their entire lives to inherit one of the seven titans under Marley's control and aid their nation in eradicating the Eldians on Paradis. However, just as all seems well for the two cadets, their peace is suddenly shaken by the arrival of Eren Yeager and the remaining members of the Survey Corps.\r\n\r\nHaving finally reached the Yeager family basement and learned about the dark history surrounding the titans, the Survey Corps has at long last found the answer they so desperately fought to uncover. With the truth now in their hands, the group set out for the world beyond the walls.\r\n\r\nIn Shingeki no Kyojin: The Final Season, two utterly different worlds collide as each party pursues its own agenda in the long-awaited conclusion to Paradis' fight for freedom.\r\n\r\n[Written by MAL Rewrite]",
      "type": "TV",
      "airing_start": new Date("2021-01-09T15:30:00+00:00"),
      "episodes": 16,
      "members": 1269451,
      "genres": [
        {
          "mal_id": 1,
          "type": "anime",
          "name": "Action",
          "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
          "mal_id": 8,
          "type": "anime",
          "name": "Drama",
          "url": "https://myanimelist.net/anime/genre/8/Drama"
        },
        {
          "mal_id": 10,
          "type": "anime",
          "name": "Fantasy",
          "url": "https://myanimelist.net/anime/genre/10/Fantasy"
        },
        {
          "mal_id": 7,
          "type": "anime",
          "name": "Mystery",
          "url": "https://myanimelist.net/anime/genre/7/Mystery"
        }
      ],
      "source": "Manga",
      "producers": [
        {
          "mal_id": 569,
          "type": "anime",
          "name": "MAPPA",
          "url": "https://myanimelist.net/anime/producer/569/MAPPA"
        }
      ],
      "score": 8.93,
      "licensors": [],
      "r18": false,
      "kids": false,
      "continuing": false
    },
    {
      "mal_id": 42897,
      "url": "https://myanimelist.net/anime/42897/Horimiya",
      "title": "Horimiya",
      "image_url": "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
      "synopsis": "On the surface, the thought of Kyouko Hori and Izumi Miyamura getting along would be the last thing in people's minds. After all, Hori has a perfect combination of beauty and brains, while Miyamura appears meek and distant to his fellow classmates. However, a fateful meeting between the two lays both of their hidden selves bare. Even though she is popular at school, Hori has little time to socialize with her friends due to housework. On the other hand, Miyamura lives under the noses of his peers, his body bearing secret tattoos and piercings that make him look like a gentle delinquent.\r\n\r\nHaving opposite personalities yet sharing odd similarities, the two quickly become friends and often spend time together in Hori's home. As they both emerge from their shells, they share with each other a side of themselves concealed from the outside world.\r\n\r\n[Written by MAL Rewrite]",
      "type": "TV",
      "airing_start": new Date("2021-01-09T15:30:00+00:00"),
      "episodes": 13,
      "members": 776599,
      "genres": [
        {
          "mal_id": 4,
          "type": "anime",
          "name": "Comedy",
          "url": "https://myanimelist.net/anime/genre/4/Comedy"
        },
        {
          "mal_id": 22,
          "type": "anime",
          "name": "Romance",
          "url": "https://myanimelist.net/anime/genre/22/Romance"
        },
        {
          "mal_id": 36,
          "type": "anime",
          "name": "Slice of Life",
          "url": "https://myanimelist.net/anime/genre/36/Slice_of_Life"
        }
      ],
      "source": "Manga",
      "producers": [
        {
          "mal_id": 1835,
          "type": "anime",
          "name": "CloverWorks",
          "url": "https://myanimelist.net/anime/producer/1835/CloverWorks"
        }
      ],
      "score": 8.21,
      "licensors": [],
      "r18": false,
      "kids": false,
      "continuing": false
    },
    ];

    animeServices
      .getBySeason(2021, 'winter')
      .subscribe(data => {
        expect(data)
          .toEqual(expectedData);
        done();
      });

  });
});
