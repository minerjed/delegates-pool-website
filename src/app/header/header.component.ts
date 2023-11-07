import { Component } from '@angular/core';
import { ConstantsService } from '../services/constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private constantsService: ConstantsService) { }

  title = 'xcash';
  versionInfo: string = '';
  isActive: boolean = false;

  async ngOnInit(): Promise<void> {
    this.versionInfo = this.constantsService.delegatesVersionInfo;
  }

  toggleNavbar() {
    this.isActive = !this.isActive;
  }

  closeNavbar() {
    this.isActive = false;
  }

}