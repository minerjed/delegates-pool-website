import { Component } from '@angular/core';
import { faLock, faCircleInfo, faAddressBook, faGear, faDollar } from '@fortawesome/free-solid-svg-icons';
import { ConstantsService } from '../services/constants.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private constantsService: ConstantsService) { }

  title = 'xcash';
  faLock = faLock;
  faCircleInfo = faCircleInfo;
  faAddressBook = faAddressBook;
  faGear = faGear;
  faDollar = faDollar;
  websiteName: string = '';
  versionInfo: string = '';

  async ngOnInit(): Promise<void> {
    this.websiteName = window.location.hostname.toUpperCase();
    this.versionInfo = this.constantsService.delegatesVersionInfo;
  }

}