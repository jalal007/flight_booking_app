<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header">
          <div class="back-header-btn">
            <a href="#"><i class="icon-chevron-left"></i></a>
            <h1>Travelers detail</h1>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container pb-16">
        <ion-accordion-group value="Passenger_1">
          <ion-accordion value="Passenger_1">
            <ion-item slot="header" color="light">
              <ion-label>Passenger 1</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
              <div class="traveler-content">
                <form>
                  <div class="form-group section-header">
                    <h3>Personal Information</h3>
                    <p>As mentioned on your passport or government-issued ID</p>
                  </div>
                  <div class="form-group">
                    <label class="form-label"> Select Title </label>
                    <ion-radio-group value="mr">
                      <div class="radio-wrap">
                        <label>
                          <ion-radio value="mr"></ion-radio>
                          MR.
                        </label>
                        <label>
                          <ion-radio value="mrs"></ion-radio>
                          MRS.
                        </label>
                        <label>
                          <ion-radio value="ms"></ion-radio>
                          MS.
                        </label>
                      </div>
                    </ion-radio-group>
                  </div>

                  <div class="form-group">
                    <label class="form-label"> Given Name / First Name </label>
                    <div class="form-input">
                      <i class="icon-user" slot="start"></i>
                      <ion-input
                        fill="outline"
                        placeholder="Given Name / First Name"
                        value=""
                      ></ion-input>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label"> Surname / Last Name </label>
                    <div class="form-input">
                      <i class="icon-user" slot="start"></i>
                      <ion-input fill="outline" placeholder="Surname / Last Name" value="">
                      </ion-input>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label"> Date of Birth </label>
                    <div class="form-input">
                      <i class="icon-calander" slot="start"></i>
                      <ion-datetime-button datetime="dob"> </ion-datetime-button>
                      <ion-modal :keep-contents-mounted="true">
                        <ion-datetime id="dob" presentation="date"> </ion-datetime>
                      </ion-modal>
                    </div>
                  </div>

                  <div class="form-group section-header">
                    <h3>Passport Details</h3>
                    <p>
                      Your passport must be valid for at least 6 months from your date of entry.
                    </p>
                  </div>

                  <div class="form-group">
                    <label class="form-label"> Passport Number </label>
                    <div class="form-input">
                      <i class="icon-passport" slot="start"></i>
                      <ion-input fill="outline" placeholder="Passport Number" value=""> </ion-input>
                    </div>
                  </div>

                  <div class="form-group">
                    <label class="form-label"> Date of Expiry </label>
                    <div class="form-input">
                      <i class="icon-calander" slot="start"></i>
                      <ion-datetime-button datetime="expiry"> </ion-datetime-button>
                      <ion-modal :keep-contents-mounted="true">
                        <ion-datetime id="expiry" presentation="date"> </ion-datetime>
                      </ion-modal>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="form-label"> Passport Issuing Country </label>
                    <div class="form-input">
                      <i class="icon-globe" slot="start"></i>
                      <ion-select fill="outline" placeholder="Select Country">
                        <ion-select-option value="bangladesh"> Bangladesh </ion-select-option>
                        <ion-select-option value="india"> India </ion-select-option>
                        <ion-select-option value="uae"> UAE </ion-select-option>
                        <ion-select-option value="uk"> United Kingdom </ion-select-option>
                      </ion-select>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </ion-accordion>
          <ion-accordion value="Passenger_2">
            <ion-item slot="header" color="light">
              <ion-label>Passenger 2</ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">Second Content</div>
          </ion-accordion>
        </ion-accordion-group>
      </div>
      <div class="flight-price-wrap">
        <div class="flight-price">
          <h3>RM 3,256 <span>for 1 Traveler</span></h3>
          <div class="btn view-details">Next</div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style>
ion-radio::part(container) {
  width: 24px;
  height: 24px;
  border-radius: 50px;
  border: 2px solid #ddd;
}

ion-radio::part(mark) {
  background: none;
  transition: none;
  transform: none;
  border-radius: 0;
}

ion-radio.radio-checked::part(container) {
  background: #3b71fe;
  border-color: transparent;
}

ion-radio.radio-checked::part(mark) {
  width: 6px;
  height: 10px;
  border-width: 0px 2px 2px 0px;
  border-style: solid;
  border-color: #fff;
  transform: rotate(45deg);
}

.radio-wrap {
  display: flex;
  gap: 20px;
}

.radio-wrap label {
  display: flex;
  align-items: center;
  gap: 8px;
}
ion-item {
  --border-width: 0;
  --inner-border-width: 0;
}
</style>

<script setup lang="ts">
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonInput,
  IonRadio,
  IonRadioGroup,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonSelect,
  IonSelectOption,
} from '@ionic/vue'
</script>