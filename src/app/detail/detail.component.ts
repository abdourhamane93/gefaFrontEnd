import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() domaine;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
select(domaine){
  let url = this.domaine._links.activites.href;
  console.log(url);
  this.router.navigateByUrl("/domaine/"+btoa(url));
 }
 getFournisseurs(fournisseurs){
  let url = this.domaine._links.fournisseurs.href;
  console.log(url);
  this.router.navigateByUrl("/domaine/"+btoa(url));
 }
}
