import { Component } from '@angular/core';
import { faLock, faCircleInfo, faAddressBook, faGear, faDollar } from '@fortawesome/free-solid-svg-icons';
import { ConstantsService } from '../services/constants.service';
import { XcashDelegatesService } from 'src/app/services/xcash-delegates.service';
import { httpReturn } from 'src/app/models/http-Return';
import { LoadconfigService } from 'src/app/services/loadconfig.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private xcashdelegatesService: XcashDelegatesService,
    private constantsService: ConstantsService,
    private loadconfigService: LoadconfigService) { }

  title = 'xcash';
  faLock = faLock;
  faCircleInfo = faCircleInfo;
  faAddressBook = faAddressBook;
  faGear = faGear;
  faDollar = faDollar;
  websiteName: string = '';
  versionInfo: string = '';
  online: string = '';
  texttype: string = '';
  isActive: boolean = false;

  async ngOnInit(): Promise<void> {
    this.websiteName = window.location.hostname.toUpperCase();
    this.versionInfo = this.constantsService.delegatesVersionInfo;
    const config = this.loadconfigService.getConfig();
    let websiteName = config.websiteName;
    if (websiteName) {
      const wsurl = 'https://api.xcash.live/v1/xcash/dpops/unauthorized/delegates/' + websiteName;
      const response: httpReturn = await this.xcashdelegatesService.getDelegates(wsurl);
      if (response.status) {
        if (response.data.online) {
          this.online = 'On-Line';
          this.texttype = 'has-text-success has-text-weight-semibold';
        } else {
          this.online = 'Off-Line';
          this.texttype = 'has-text-danger has-text-weight-semibold';
        }
      } else {
        this.online = 'Unknown';
        this.texttype = 'has-text-danger has-text-weight-semibold';
      }
    }
  }

  toggleNavbar() {
    this.isActive = !this.isActive;
  }

  closeNavbar() {
    this.isActive = false;
  }

}