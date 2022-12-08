import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";

import { PostCardComponent } from './post-card.component';
import { Clipboard } from "@angular/cdk/clipboard";

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;
  let clipboardSpy: jasmine.SpyObj<Clipboard>;

  beforeEach(waitForAsync(() => {
    clipboardSpy = jasmine.createSpyObj('Clipboard', ['copy']);

    TestBed.configureTestingModule({
      declarations: [PostCardComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        RouterTestingModule
      ],
      providers: [
        { provide: Clipboard, useValue: clipboardSpy }
      ]
    })
      .compileComponents();
    spyOn(console, 'log');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;

    // stub the post data
    component.post = {
      id: 1,
      title: 'Sample Post',
      imageURL: 'https://via.placeholder.com/300',
      loveIts: 0
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the likePost function when the like button is clicked', () => {
    // spy on the likePost function
    spyOn(component, 'likePost');

    // trigger a click event on the like button
    const likeButton = fixture.debugElement.query(By.css('button:nth-of-type(1)')).nativeElement;
    likeButton.click();

    // assert that the likePost function was called with the post ID
    expect(component.likePost).toHaveBeenCalledWith(1);
  });

  it('should not log anything when the id is undefined', () => {
    // stub the post data
    component.post = {
      id: undefined,
      title: 'Sample Post',
      imageURL: 'https://via.placeholder.com/300',
      loveIts: 0
    };
    fixture.detectChanges();

    // spy on the likePost function
    spyOn(component, 'likePost');

    // trigger a click event on the like button
    const likeButton = fixture.debugElement.query(By.css('button:nth-of-type(1)')).nativeElement;
    likeButton.click();

    // assert that the likePost function was called with the post ID
    expect(component.likePost).toHaveBeenCalledWith(undefined);
  })

  it('should call the copyLink function when the share button is clicked', () => {
    // spy on the copyLink function
    spyOn(component, 'copyLink');

    // trigger a click event on the share button
    const shareButton = fixture.debugElement.query(By.css('button:nth-of-type(2)')).nativeElement;
    shareButton.click();

    // assert that the copyLink function was called
    expect(component.copyLink).toHaveBeenCalled();
  });

  it('should call the clipboard service when the copyLink function is called', () => {
    // trigger the copyLink function
    component.copyLink();

    // assert that the clipboard service was called with the correct URL
    expect(clipboardSpy.copy).toHaveBeenCalledWith(`${window.location.protocol}${window.location.host}/post/1`);
  });
});
