import { Component, contentChild, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'lib-page-layout',
  imports: [NgTemplateOutlet],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css',
})
export class PageLayoutComponent {
  readonly title = contentChild<TemplateRef<unknown>>('title');

  readonly actions = contentChild<TemplateRef<unknown>>('actions');

  readonly content = contentChild<TemplateRef<unknown>>('content');
}
