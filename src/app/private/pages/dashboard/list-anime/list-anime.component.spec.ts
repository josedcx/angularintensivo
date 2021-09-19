
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '@environments/environment';
import { AnimeService } from '@app/_services';
import { ListAnimeComponent } from './list-anime.component';
import { HttpXhrBackend } from '@angular/common/http';

describe('ListAnimeComponent', () => {
  let component: ListAnimeComponent;
  let fixture: ComponentFixture<ListAnimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListAnimeComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: environment , useValue: environment.apiUrl},
        { provide: HttpXhrBackend },
        AnimeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
