<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header">
          <div class="back-header-btn">
            <a href="#"><i class="icon-chevron-left"></i></a>
            <h1>Flights</h1>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="filter-wrap">
          <div class="filter-dropdown">
            <div class="filter-dropdown-btn" id="cheapest-option">Cheapest Option</div>
            <ion-popover trigger="cheapest-option" side="bottom" alignment="end">
              <ion-content class="ion-padding">
                <ion-list class="cheapest-list">
                  <ion-item>
                    <ion-label>Flight Time</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Flight Stop</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Airlines</ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-label>Fastest Option</ion-label>
                  </ion-item>
                </ion-list>
              </ion-content>
            </ion-popover>
          </div>

          <div class="filter" @click="openModal('advanceFilter')">
            <i class="icon-filter"></i>
          </div>
        </div>

        <!-- Flight List -->
        <div class="flight-list">

          <div class="flight-box">
            <div class="flight-logo">
              <img src="../../public/assets/images/biman-logo.svg" alt="Airline Logo" />
              <span>Biman Bangladesh Airlines</span>
            </div>
            <div class="flight-info">
              <div class="flight-box-heading">
                <h4>DAC <span>10:30 AM</span></h4>
                <div class="flight-duration">4h 15m, Non-Stop</div>
                <h4 class="text-right">KUL <span>02:45 PM</span></h4>
              </div>
            </div>
            <div class="flight-baggage">
              <i class="icon-baggage"></i>
              <span> Baggage: Cabin 7kg, Check-In 30kg </span>
            </div>
            <div class="flight-terms"><span>Refundable</span> *No Hidden Cost</div>
            <div class="flight-price">
              <h3>BDT 45,000</h3>
              <a href="/flight-details" class="btn view-details">View Details</a>
            </div>
          </div>

          <div class="flight-box">
            <div class="flight-logo">
              <img src="../../public/assets/images/emirates-logo.png" alt="Emirates Logo" />
              <span>Emirates</span>
            </div>
            <div class="flight-info">
              <div class="flight-box-heading">
                <h4>DAC <span>10:30 AM</span></h4>
                <div class="flight-duration">4h 15m, Non-Stop</div>
                <h4 class="text-right">KUL <span>02:45 PM</span></h4>
              </div>
            </div>
            <div class="flight-baggage">
              <i class="icon-baggage"></i>
              <span> Baggage: Cabin 7kg, Check-In 30kg </span>
            </div>
            <div class="flight-terms"><span>Refundable</span> *No Hidden Cost</div>
            <div class="flight-price">
              <h3>BDT 45,000</h3>
              <a href="/flight-details" class="btn view-details">View Details</a>
            </div>
          </div>
        </div>

        <div class="no-ticket">
          <div class="no-flight">
            <img src="../../public/assets/images/no-flight.svg" alt="" />
            <p>No flight tickets are available right now according to your selected route</p>
            <button class="btn">Search again</button>
          </div>
        </div>
      </div>

      <ion-modal :is-open="activeModal === 'advanceFilter'" @didDismiss="closeModal">
        <div class="header back-header">
          <div class="back-header-btn">
            <h1>Advance filter</h1>
          </div>
          <ion-buttons slot="end" class="close-btn">
            <ion-button @click="closeModal('advanceFilter')">Cancel</ion-button>
          </ion-buttons>
        </div>
        <div class="filter-content">
          <div class="price-range">
            <h3 class="filter-title m-0">Price Range</h3>
            <ion-range aria-label="Custom range" :value="50" :pin="true"></ion-range>
          </div>
          <div class="choose-airlines">
            <h3 class="filter-title">Filter option</h3>
            <ion-list>
              <ion-item>
                <ion-checkbox label-placement="end">Flight Time</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end">Flight Stop</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end">Airlines</ion-checkbox>
              </ion-item>
            </ion-list>
          </div>
          <div class="choose-airlines">
            <h3 class="filter-title">Airlines</h3>
            <ion-list>
              <ion-item>
                <ion-checkbox label-placement="end">Malindo Air</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end">Biman Bangladesh Airlines</ion-checkbox>
              </ion-item>
              <ion-item>
                <ion-checkbox label-placement="end">US Bangla</ion-checkbox>
              </ion-item>
            </ion-list>
          </div>
          <div class="choose-class">
            <h3 class="filter-title">Class</h3>
            <ion-radio-group value="strawberries">
              <ion-list>
                <ion-item>
                  <ion-radio value="economy" label-placement="end" justify="start"
                    >Economy</ion-radio
                  >
                </ion-item>
                <ion-item>
                  <ion-radio value="premium_economy" label-placement="end" justify="start"
                    >Premium Economy</ion-radio
                  >
                </ion-item>
                <ion-item>
                  <ion-radio value="business_class" label-placement="end" justify="start"
                    >Business Class</ion-radio
                  >
                </ion-item>
              </ion-list>
            </ion-radio-group>
          </div>
          <div class="reset-filter">
            <i class="icon-close-fill"></i>
            <span>Reset Filter</span>
          </div>
          <button class="btn">Done</button>
        </div>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<style>
ion-range {
  --bar-background: #e6e8ec;
  --bar-background-active: #3b71fe;
  --bar-height: 6px;
  --bar-border-radius: 8px;
  --knob-background: #3b71fe;
  --knob-size: 30px;
  --pin-background: #141416;
  --pin-color: #fff;
}
ion-checkbox {
  --size: 24px;
  --checkbox-background-checked: #3b71fe;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #3b71fe;
}
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
</style>

<script setup>
import { ref } from 'vue'
import {
  IonPage,
  IonButton,
  IonContent,
  IonPopover,
  IonItem,
  IonLabel,
  IonList,
  IonRange,
  IonCheckbox,
} from '@ionic/vue'

const showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const activeModal = ref(null)
const openModal = (name) => {
  activeModal.value = name
}
const closeModal = () => {
  activeModal.value = null
}
</script>