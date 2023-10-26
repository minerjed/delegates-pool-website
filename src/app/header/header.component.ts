import { Component } from '@angular/core';
import { faLock, faWallet, faAddressBook, faGear, faDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor( ) { }

  title = 'xcash';
  faLock = faLock;
  faWallet = faWallet;
  faAddressBook = faAddressBook;
  faGear = faGear;
  faDollar = faDollar;
  websiteName: string = '';

  versionInfo: string = '1.0.0';
  //  make common file for constanants

  async ngOnInit(): Promise<void> {
    this.websiteName = window.location.hostname;

    
  }

}