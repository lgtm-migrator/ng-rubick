import { Component } from '@angular/core'

import { ModalService } from 'core/modal/modal.service'

import { MyModalComponent } from './my-modal.component'

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private modal: ModalService) {}

  showModal() {
    const modalRef = this.modal.open(MyModalComponent, {
      inputs: {
        msg: 'Dashboard Modal!',
      },
    })

    setTimeout(() => {
      modalRef.destroy()
    }, 2000)
  }
}
