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
  isMapInitialized = false;
  address: any[] = [];
  map: any;

  contentstring = [];
  regionlocation = [];
	markers = [];
	iterator = 0;
	areaiterator = 0;
  infowindow = [];
  region;
  icons;
	geocoder = new google.maps.Geocoder();

  public tiles = [
    { text: 'Pyramid Alehouse. 1', cols: 1, rows: 1, color: 'white', dataindx: 0 },
    { text: 'Pyramid Alehouse. 2', cols: 1, rows: 1, color: 'white', dataindx: 1 },
    { text: 'Pyramid Alehouse. 3', cols: 1, rows: 1, color: 'white', dataindx: 2 },
    
  ];

  constructor(private router: Router) { }

  showPlacementsMap() {
    document.getElementById("googleMap").style.display = this.showVenuesOnMap ? 'block' : 'none';
    if (!this.isMapInitialized) {
      this.isMapInitialized = true;
      this.infowindow = [];
      this.markers = [];
      setTimeout(() => {
        this.getAddressValues();
      }, 900);
      this.iterator = 0;
      this.areaiterator = 0;
      const _interval = setInterval(() => {
        if (this.regionlocation.length > 0 && this.regionlocation.length === this.contentstring.length){
          clearInterval(_interval);
          this.region = new google.maps.LatLng(this.regionlocation[this.areaiterator].split(',')[0], this.regionlocation[this.areaiterator].split(',')[1]);
          this.map = new google.maps.Map(document.getElementById('googleMap'), { 
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: this.region,
          });
          this.addressDrop();
        }
      }, 300);
    }
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

  private addressInfo(i) {
		this.infowindow[i] = new google.maps.InfoWindow({
			content: this.contentstring[i - 1]
		});
		this.infowindow[i].content = this.contentstring[i - 1];
		google.maps.event.addListener(this.markers[i - 1], 'click', () => {
			for (var j = 1; j < this.contentstring.length + 1; j++) {
				this.infowindow[j].close();
			}
			this.infowindow[i].open(this.map, this.markers[i - 1]);
		});
	}

  private addMarker() {
    this.address = this.contentstring[this.areaiterator];
	  this.icons = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
		var templat = this.regionlocation[this.areaiterator].split(',')[0];
		var templong = this.regionlocation[this.areaiterator].split(',')[1];
		var temp_latLng = new google.maps.LatLng(templat, templong);
		this.markers.push(new google.maps.Marker(
		{
			position: temp_latLng,
			map: this.map,
			icon: this.icons,
			draggable: false
		}));            
		this.iterator++;
		this.addressInfo(this.iterator);
		this.areaiterator++;
  }

  private addressDrop() {
		for (var i = 0; i < this.contentstring.length; i++) {
			setTimeout(() => {
				this.addMarker();
      }, 800);
    }
    debugger;
  }

  private getAddressValues() {
		this.contentstring[0] = "Walmart, MA";					
		this.contentstring[1] = "Walmart, PA";
		this.contentstring[2] = "Walmart, GA";
		this.contentstring[3] = "Walmart, NJ";
		this.contentstring[4] = "Walmart, VA";
		this.contentstring[5] = "Walmart, CA";
    this.generateRegionLocation();
  }
  
  private generateRegionLocation() {
    this.regionlocation = [];
    this.contentstring.forEach((data, idx) => {
      this.getLatitudeLongitude(this.showResult, data, idx, this.regionlocation);
    });
  }

  private getLatitudeLongitude(callback, address, idx, regionlocation) {
      this.geocoder = new google.maps.Geocoder();
      if (this.geocoder) {
          this.geocoder.geocode({
              'address': address
          }, (results, status) => {
              if (status == google.maps.GeocoderStatus.OK) {
                  callback(results[0], idx, regionlocation);
              }
          });
      }
  }

  private showResult(result, idx, regionlocation) {
    const _result = result.geometry.location.lat() + ',' + result.geometry.location.lng();
    regionlocation[idx] = _result;
  }

}
