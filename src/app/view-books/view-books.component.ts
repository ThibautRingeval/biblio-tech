import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpProviderService } from "../Service/http-provider.service";
import { WebApiService } from "../Service/web-api.service";

@Component({
  selector: "app-view-books",
  templateUrl: "./view-books.component.html",
  styleUrls: ["./view-books.components.css"]
})

export class ViewbooksComponent implements OnInit {

  booksId: any;
  booksDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.booksId = this.route.snapshot.params["booksId"];      
    this.getbooksDetailById();
  }

  getbooksDetailById() {       
    this.httpProvider.getbooksDetailById(this.booksId).subscribe((data : any) => {      
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.booksDetail = resultData;
        }
      }
    },
    (error :any)=> { }); 
  }

}