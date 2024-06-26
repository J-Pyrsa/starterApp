import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ActionSheetController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  email = "john.doe@mail.com";
  name = "Erwin";
  surname = "Palma"

  edit_profile_form!: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private navController: NavController,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }
  
  async updateProfilePicture() {

    const actionSheet = await this.actionSheetController.create({
      header: 'Choose existing picture or take new',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Choose from gallery',
          icon: 'images',
          handler: () => {
            // Put in logic ...
          }
        },
        {
          text: 'Take picture',
          icon: 'camera',
          handler: () => {
            // Put in logic ...
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel'
        }]
    });
    await actionSheet.present();
  }

  // Submit form
  submit() {
    console.log("submit")

    this.submit_attempt = true;

    // If form valid
   // if (this.edit_profile_form.valid) {
    if (true) {

      // Save form ...

      // Display success message and go back
      this.toastService.presentToast('Success', 'Profile saved', 'top', 'success', 2000);
      this.navController.back();

    } else {

      // Display error message
      this.toastService.presentToast('Error', 'Please fill in all required fields', 'top', 'danger', 2000);
    }
  }

}
