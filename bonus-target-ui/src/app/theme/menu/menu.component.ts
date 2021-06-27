import { MenuItemComponent } from './menu-item/menu-item.component';
import { Component, OnInit } from '@angular/core';
import { NgModule, ElementRef, Input, Renderer2, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, AfterContentInit, ContentChildren, QueryList, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomHandler } from 'primeng/dom';
import { MenuItem, PrimeTemplate } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'bns-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements AfterContentInit, OnDestroy {
  @Input() model: MenuItem;
  @Input() style: any;
  @Input() styleClass: string;
  @Input() autoZIndex: boolean = true;
  @Input() baseZIndex: number = 0;
  @Input() autoDisplay: boolean;
  @ContentChildren(PrimeTemplate) templates: QueryList<any>;
  @ViewChild('menubutton') menubutton: ElementRef;
  @ViewChild('rootmenu') rootmenu: MenuItemComponent;

  startTemplate: TemplateRef<any>;
  endTemplate: TemplateRef<any>;
  mobileActive: boolean;
  outsideClickListener: any;

  constructor(public el: ElementRef, public renderer: Renderer2, public cd: ChangeDetectorRef) { }

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'start':
          this.startTemplate = item.template;
          break;

        case 'end':
          this.endTemplate = item.template;
          break;
      }
    });
  }

  toggle(event: any) {
    this.mobileActive = !this.mobileActive;
    let rootmenu = DomHandler.findSingle(this.el.nativeElement, ".p-menubar-root-list")
    rootmenu.style.zIndex = String(DomHandler.generateZIndex());
    this.bindOutsideClickListener();
    event.preventDefault();
  }

  bindOutsideClickListener() {
    if (!this.outsideClickListener) {
      this.outsideClickListener = (event: any) => {
        if (this.mobileActive && this.rootmenu.el.nativeElement !== event.target && !this.rootmenu.el.nativeElement.contains(event.target)
          && this.menubutton.nativeElement !== event.target && !this.menubutton.nativeElement.contains(event.target)) {
          this.mobileActive = false;
          this.cd.markForCheck();
        }
      };
      document.addEventListener('click', this.outsideClickListener);
    }
  }

  onLeafClick() {
    this.mobileActive = false;
    this.unbindOutsideClickListener();
  }

  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener('click', this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }

  ngOnDestroy() {
    this.unbindOutsideClickListener();
  }
}
