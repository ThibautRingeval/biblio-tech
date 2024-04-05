import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MODALS } from '../modals';
import { InjectionToken } from '@angular/core';
import { HttpProviderService } from '../Service/http-provider.service';

export const HTTP_PROVIDER_SERVICE_TOKEN = new InjectionToken<HttpProviderService>('HTTP_PROVIDER_SERVICE_TOKEN');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult = '';
  booksList: any = [];
  
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService,
    @Inject(HTTP_PROVIDER_SERVICE_TOKEN) private httpProvider: HttpProviderService
  ) { }

  ngOnInit(): void {
    this.getAllbooks();
  }

  async getAllbooks() {
    this.httpProvider.getAllbooks().subscribe(
      (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            this.booksList = resultData;
          }
        }
      },
      (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
              this.booksList = [];
            }
          }
        }
      });
  }

  Addbooks() {
    this.router.navigate(['Addbooks']);
  }

  deletebooksConfirmation(books: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then(
        (result) => {
          this.deletebooks(books);
        },
        (reason) => { }
      );
  }

  deletebooks(books: any) {
    this.httpProvider.deletebooksById(books.id).subscribe(
      (data: any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            this.toastr.success(resultData.message);
            this.getAllbooks();
          }
        }
      },
      (error: any) => { }
    );
  }
}

export { HttpProviderService };
