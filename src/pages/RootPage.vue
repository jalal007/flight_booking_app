<template>
  <ion-page>
    <ion-header style="background: #3B71FE;">
      <ion-toolbar>
        <div class="header">
          <div class="back-header-btn">
            <h1>Flight Booking</h1>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="home-content">
        <FlightSearchForm />

        <div class="logo-area">
          <img
            class="skyhome-logo"
            src="/assets/images/skyhome-logo.png"
            alt="Skyhome"
          />
          <p>
            Technology Partner
            <img src="/assets/images/sohoj-logo.svg" alt="sohoj" />
          </p>
        </div>
      </div>
    </ion-content>
    <AppBottomMunu />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonFooter, IonHeader, IonTitle, IonToolbar } from '@ionic/vue'

import FlightSearchForm from '@components/common/FlightSearcForm.vue'
import AppBottomMunu from '@components/common/AppBottomMenu.vue'
</script>

<style scoped>
</style>