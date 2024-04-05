import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

const MODALS: { [name: string]: any } = {
  deleteModal: NgModalConfirm,
};

export { MODALS };
