<template>
  <div class="flight-search-tab">
    <ion-segment>
      <ion-segment-button value="one-way" content-id="one-way">
        <ion-label>One-way</ion-label>
      </ion-segment-button>
      <ion-segment-button value="round-trip" content-id="round-trip">
        <ion-label>Round-trip</ion-label>
      </ion-segment-button>
      <ion-segment-button value="multi-city" content-id="multi-city">
        <ion-label>Multi-city</ion-label>
      </ion-segment-button>
    </ion-segment>

    <ion-segment-view>
      <ion-segment-content id="one-way">
        <div class="form-area">
          <ion-item @click="openModal('flayingFrom')">
            <i class="icon-flying-from" slot="start"></i>
            <ion-input
              label="Flying from"
              label-placement="floating"
              fill="outline"
              placeholder="Flying from"
            />
          </ion-item>

          <ion-item @click="openModal('goingTo')">
            <i class="icon-flying-to" slot="start"></i>
            <ion-input
              label="Going to"
              label-placement="floating"
              fill="outline"
              placeholder="Going to"
            />
          </ion-item>

          <ion-item @click="openModal('departureDate')">
            <i class="icon-calander" slot="start"></i>
            <ion-input
              label="Departure date"
              label-placement="floating"
              fill="outline"
              placeholder="Departure date"
            />
          </ion-item>

          <ion-item @click="openModal('addTravelers')">
            <i class="icon-user" slot="start"></i>
            <ion-input
              label="Add Travelers"
              label-placement="floating"
              fill="outline"
              placeholder="Add Travelers"
            />
          </ion-item>
          <ion-button expand="block" class="search-btn" router-link="/flight-list"> Search Flights </ion-button>
        </div>
      </ion-segment-content>
      <ion-segment-content id="round-trip">
        <div class="form-area">
          <ion-item @click="openModal('flayingFrom')">
            <i class="icon-flying-from" slot="start"></i>
            <ion-input
              label="Flying from"
              label-placement="floating"
              fill="outline"
              placeholder="Flying from"
            />
          </ion-item>

          <ion-item @click="openModal('goingTo')">
            <i class="icon-flying-to" slot="start"></i>
            <ion-input
              label="Going to"
              label-placement="floating"
              fill="outline"
              placeholder="Going to"
            />
          </ion-item>

          <ion-item @click="openModal('departureDate')">
            <i class="icon-calander" slot="start"></i>
            <ion-input
              label="Departure date"
              label-placement="floating"
              fill="outline"
              placeholder="Departure date"
            />
          </ion-item>

           <ion-item @click="openModal('returnDate')">
            <i class="icon-calander" slot="start"></i>
            <ion-input
              label="Return date"
              label-placement="floating"
              fill="outline"
              placeholder="Return date"
            />
          </ion-item>

          <ion-item @click="openModal('addTravelers')">
            <i class="icon-user" slot="start"></i>
            <ion-input
              label="Add Travelers"
              label-placement="floating"
              fill="outline"
              placeholder="Add Travelers"
            />
          </ion-item>
          <ion-button expand="block" class="search-btn" router-link="/flight-list"> Search Flights </ion-button>
        </div> 
      </ion-segment-content>
      <ion-segment-content id="multi-city">
        <div class="form-area">Multi city</div>
      </ion-segment-content>
    </ion-segment-view>

    <ion-modal :is-open="activeModal === 'flayingFrom'" @didDismiss="closeModal">
      <div class="header back-header">
        <div class="back-header-btn">
          <a href="#"><i class="icon-chevron-left"></i></a>
          <h1>Flying from</h1>
        </div>
        <ion-buttons slot="end" class="close-btn">
          <ion-button @click="closeModal('flayingFrom')">Cancel</ion-button>
        </ion-buttons>
      </div>
      <div class="main-content">
        <ion-searchbar placeholder="Enter Countery or airport" class="search-box"></ion-searchbar>
        <div class="search-suggestion">
          <div class="search-suggestion-item">
            <i class="icon icon-flying-from"></i>
            <div class="search-suggestion-name">
              <p class="bold">Kuala Lumpur</p>
              <p>Kuala Lumpur Intl. Airport</p>
            </div>
          </div>
          <div class="search-suggestion-item">
            <i class="icon icon-flying-from"></i>
            <div class="search-suggestion-name">
              <p class="bold">Penang</p>
              <p>Penang (PEN - Penang Intl.)</p>
            </div>
          </div>
        </div>
      </div>
    </ion-modal>

    <ion-modal :is-open="activeModal === 'goingTo'" @didDismiss="closeModal">
      <div class="header back-header">
        <div class="back-header-btn">
          <a href="#"><i class="icon-chevron-left"></i></a>
          <h1>Going to</h1>
        </div>
        <ion-buttons slot="end" class="close-btn">
          <ion-button @click="closeModal('goingTo')">Cancel</ion-button>
        </ion-buttons>
      </div>
      <div class="main-content">
        <ion-searchbar placeholder="Enter Countery or airport" class="search-box"></ion-searchbar>
        <div class="search-suggestion">
          <div class="search-suggestion-item">
            <i class="icon icon-flying-from"></i>
            <div class="search-suggestion-name">
              <p class="bold">Kuala Lumpur</p>
              <p>Kuala Lumpur Intl. Airport</p>
            </div>
          </div>
          <div class="search-suggestion-item">
            <i class="icon icon-flying-from"></i>
            <div class="search-suggestion-name">
              <p class="bold">Penang</p>
              <p>Penang (PEN - Penang Intl.)</p>
            </div>
          </div>
        </div>
      </div>
    </ion-modal>

    <ion-modal :is-open="activeModal === 'departureDate'" @didDismiss="closeModal">
      <div class="header back-header">
        <div class="back-header-btn">
          <a href="#"><i class="icon-chevron-left"></i></a>
          <h1>Departure date</h1>
        </div>
        <ion-buttons slot="end" class="close-btn">
          <ion-button @click="closeModal('departureDate')">Cancel</ion-button>
        </ion-buttons>
      </div>
      <div class="main-content">
        <ion-datetime presentation="date"></ion-datetime>
      </div>
    </ion-modal>

    <ion-modal :is-open="activeModal === 'returnDate'" @didDismiss="closeModal">
      <div class="header back-header">
        <div class="back-header-btn">
          <a href="#"><i class="icon-chevron-left"></i></a>
          <h1>Return date</h1>
        </div>
        <ion-buttons slot="end" class="close-btn">
          <ion-button @click="closeModal('returnDate')">Cancel</ion-button>
        </ion-buttons>
      </div>
      <div class="main-content">
        <ion-datetime locale="es-ES"></ion-datetime>
      </div>
    </ion-modal>

    <ion-modal :is-open="activeModal === 'addTravelers'" @didDismiss="closeModal">
      <div class="header back-header">
        <div class="back-header-btn">
          <a href="#"><i class="icon-chevron-left"></i></a>
          <h1>Add travelers</h1>
        </div>
        <ion-buttons slot="end" class="close-btn">
          <ion-button @click="closeModal('addTravelers')">Cancel</ion-button>
        </ion-buttons>
      </div>
      <div class="main-content">
        <div class="travellers">
          <div class="travellers-list">
            <div class="travellers-list-name">
              <span class="bold">Adults</span>
              <span>12 years & above</span>
            </div>
            <div class="travellers-number">
              <i class="icon-minus counter-btn"> </i>
              <input
                class="form-control"
                type="number"
                value="1"
              />
              <i class="icon-plus counter-btn"> </i>
            </div>
          </div>
          <div class="travellers-list">
            <div class="travellers-list-name">
              <span class="bold">Children</span>
              <span>12 years & above</span>
            </div>
            <div class="travellers-number">
              <i class="icon-minus counter-btn"> </i>
              <input
                class="form-control"
                type="number"
                value="1"
              />
              <i class="icon-plus counter-btn"> </i>
            </div>
          </div>
          <div class="travellers-list">
            <div class="travellers-list-name">
              <span class="bold">Kids</span>
              <span>From 2 to under 5</span>
            </div>
            <div class="travellers-number">
              <i class="icon-minus counter-btn"> </i>
              <input
                class="form-control"
                type="number"
                value="1"
              />
              <i class="icon-plus counter-btn"> </i>
            </div>
          </div>
        </div>
      </div>
    </ion-modal>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { OverlayEventDetail } from '@ionic/core/components'
import {
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonButtons,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonSearchbar,
  IonDatetime,
} from '@ionic/vue'

const activeModal = ref(null)

const openModal = (name) => {
  activeModal.value = name
}

const closeModal = () => {
  activeModal.value = null
}

</script>

<style scoped>
.form-area {
  margin-top: 20px;
}

ion-item {
  --border-radius: 12px;
  --padding-start: 16px;
  margin-bottom: 14px;
  border: 1px solid #ddd;
  border-radius: 12px;
   --border-width: 0;
  --inner-border-width: 0;
}

.search-btn {
  margin-top: 30px;
  height: 50px;
}

.logo-area {
  text-align: center;
  margin-top: 50px;
}

.logo-area img {
  width: 180px;
}
ion-segment-view {
  height: auto;
}
</style>