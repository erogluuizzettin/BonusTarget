import { Component, OnInit } from '@angular/core';
import { NgModule, ElementRef, Input, Renderer2, OnDestroy,ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, AfterContentInit, ContentChildren, QueryList, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'bns-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuItemComponent implements OnDestroy {
  @Input() item: MenuItem;
  @Input() root: boolean;
  @Input() autoZIndex: boolean = true;
  @Input() baseZIndex: number = 0;
  @Input() mobileActive: boolean;
  @Input() autoDisplay: boolean;
  @Input() get parentActive(): boolean {
    return this._parentActive;
  }
  set parentActive(value) {
    if (!this.root) {
      this._parentActive = value;

      if (!value)
        this.activeItem = null;
    }
  }
  @Output() leafClick: EventEmitter<any> = new EventEmitter();

  _parentActive: boolean;
  documentClickListener: any;
  menuHoverActive: boolean = false;
  activeItem: any;

  constructor(public el: ElementRef, public renderer: Renderer2, private cd: ChangeDetectorRef) { }

  onItemClick(event: any, item: any) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }

    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }

    if (item.command) {
      item.command({
        originalEvent: event,
        item: item
      });
    }

    if (item.items) {
      if (this.activeItem && item === this.activeItem) {
        this.activeItem = null;
        this.unbindDocumentClickListener();
      }
      else {
        this.activeItem = item;
        if (this.root) {
          this.bindDocumentClickListener();
        }
      }
    }

    if (!item.items) {
      this.onLeafClick();
    }
  }

  onItemMouseEnter(event: any, item: any) {
    if (item.disabled || this.mobileActive) {
      event.preventDefault();
      return;
    }

    if (this.root) {
      if (this.activeItem || this.autoDisplay) {
        this.activeItem = item;
        this.bindDocumentClickListener();
      }
    }
    else {
      this.activeItem = item;
      this.bindDocumentClickListener();
    }
  }

  onLeafClick() {
    this.activeItem = null;
    if (this.root) {
      this.unbindDocumentClickListener();
    }

    this.leafClick.emit();
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = (event: any) => {
        if (this.el && !this.el.nativeElement.contains(event.target)) {
          this.activeItem = null;
          this.cd.markForCheck();
          this.unbindDocumentClickListener();
        }
      };

      document.addEventListener('click', this.documentClickListener);
    }
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      document.removeEventListener('click', this.documentClickListener);
      this.documentClickListener = null;
    }
  }

  ngOnDestroy() {
    this.unbindDocumentClickListener();
  }

}
