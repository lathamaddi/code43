import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material';
import { Router } from '@angular/router';

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

  ngOnInit() {
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
