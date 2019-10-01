import { Component, OnInit, Inject } from '@angular/core'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { PubSubService } from '../../services/pubsub.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Policy } from '../../model/policy'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private pubsub : PubSubService, private modal: MatDialog) {
    this.pubsub.on('showModal', this.showModal.bind(this))
  } 

  ngOnInit() {
  }

  showModal (type: string, data : Object) {
    switch(type) {
      default:
        this.modal.open(DialogOverviewPolicy, {
          data: data
        })
      break
    }
  }

}

@Component({
  selector: 'policy-overview-dialog',
  templateUrl: 'dialog-overview-policy.html',
})
export class DialogOverviewPolicy implements OnInit {

  policyForm : FormGroup
  selectedPolicy: Policy
  policies: Policy[]

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewPolicy>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pubsub : PubSubService) {}

  ngOnInit(): void {
    console.log(this)
    this.policies = this.data.policies
    // this.policyForm = new FormGroup({
    //   'polamountinsured': new FormControl(this.data.polamountinsured, [
    //     Validators.required,
    //     Validators.minLength(4)
    //   ]),
    //   'polemail': new FormControl(this.data.polemail),
    //   'polinceptiondate': new FormControl(this.data.polinceptiondate, Validators.required),
    //   'polinstallmentpayment': new FormControl(this.data.polinstallmentpayment),
    //   'polcliid': new FormControl(this.data.polcliid, Validators.required)
    // });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onPolicySelect ( p : Policy) {
    this.selectedPolicy = p
  }

  onEditClick (data: Object) {
    console.log('onEditClick', data)
    this.pubsub.emit('editUserPolicies', { cliid: this.data.cliid, cliname: this.data.cliname, policies: this.data.policies })
  }
}