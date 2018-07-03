import { Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material';
import { Router } from '@angular/router';
declare var google;

@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {

  @ViewChild('gridList')
  private gridList: MatGridList;
  _tile: MatGridTile;
  selTiles: any[] = [];
  hideheader = false;
  reservedPlacements = false;
  paymentAuthorize = false;
  showVenuesOnMap = false;
  geocoder: any;
  address: any[] = [];
  map: google.maps.Map;

  public tiles = [
    { text: 'Pyramid Alehouse. 1', cols: 1, rows: 1, color: 'white', dataindx: 0 },
    { text: 'Pyramid Alehouse. 2', cols: 1, rows: 1, color: 'white', dataindx: 1 },
    { text: 'Pyramid Alehouse. 3', cols: 1, rows: 1, color: 'white', dataindx: 2 },
    { text: 'Pyramid Alehouse. 4', cols: 1, rows: 1, color: 'white', dataindx: 3 },
    { text: 'Pyramid Alehouse. 5', cols: 1, rows: 1, color: 'white', dataindx: 4 },
    { text: 'Pyramid Alehouse. 6', cols: 1, rows: 1, color: 'white', dataindx: 5 },
    { text: 'Pyramid Alehouse. 7', cols: 1, rows: 1, color: 'white', dataindx: 6 },
    { text: 'Pyramid Alehouse. 8', cols: 1, rows: 1, color: 'white', dataindx: 7 },
  ];

  constructor(private router: Router) { }

  showPlacementsMap() {
    document.getElementById("googleMap").style.display = this.showVenuesOnMap ? 'block' : 'none';
    this.geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(47.606, 122.332);
    let mapOptions = {
      zoom: 8,
      center: latlng
    }
    let map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    this.address.push('Pyramid Alehouse Rest. 1201 1st street, Seattle, WA');
    this.address.forEach((addr, indx) => {
      this.geocoder.geocode( { 'address': addr}, function(results, status) {
        if (status == 'OK') {
          map.setCenter(results[0].geometry.location);
          this.marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location,
              title: results[0].formatted_address
          });
          this.marker.addListener('click', (evt: any) => {
            window.alert('Marker\'s Title: ' + evt.Ha.currentTarget.title);
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    });

    
  }

  ngOnInit() {
  }

  onShowVenueMap(evt: any) {
    this.showVenuesOnMap = !this.showVenuesOnMap;
    this.showPlacementsMap();
  }

  onAdCreative(evt: any) {
    this.router.navigateByUrl('advertise/createcampaign/adcreative');
  }

  reservePlacements(evt: any) {
    this.reservedPlacements = true;
  }

  authorizePayment(evt: any) {
    this.paymentAuthorize = true;
  }

  onClose(evt: any, tile: any, indx: any) {
    if (this.reservedPlacements) {
      return;
    }
    this.selTiles.filter((data, tindx) => {
      if (tile.dataindx === data.dataindx) {
        this.selTiles.splice(tindx, 1);
        this.updateGrid(tile.dataindx);
      }
    });
  }

  updateGrid(idx: any) {
    this.gridList._tiles.forEach((tile, tidx) => {
      if (idx === tidx) {
        if (this.tiles[idx].color === 'lightblue') {
          this.tiles[idx].color = 'white';
        }
      }
    });
  }

  selectedCard(evt: any, selTile: any, idx: any) {
    console.log(evt + ' : ' + selTile + ' - ' + idx);
    this.gridList._tiles.forEach((tile, tidx) => {
      if (idx === tidx) {
        if (this.tiles[idx].color === 'lightblue') {
          console.log('invalid!');
        } else {
          this.tiles[idx].color = 'lightblue';
          this.hideheader = true;
          this.selTiles.push(this.tiles[idx]);
        }
      }
    });
  }
}
