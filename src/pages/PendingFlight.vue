<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header">
          <div class="back-header-btn">
            <a href="#"><i class="icon-chevron-left"></i></a>
            <h1>Pending flight</h1>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="pending-time-wrap">
        <p>Review your unpaid flight details and pay now</p>
        <div class="pending-time">
          <i class="icon-clock"></i>
          00:30
        </div>
      </div>
      <div class="container">
        <div class="flight-box">
          <div class="flight-logo">
            <img src="/assets/images/biman-logo.svg" alt="Airline Logo" />
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
          <div class="flight-terms"><span>Wednesday, 02 October 2026</span></div>
          <div class="fare-amount">Fare <span>RM 3,256</span></div>
          <div class="flight-price">
            <a href="#" class="cancel-btn">View detail</a>
            <a href="#" class="btn view-details">Pay now</a>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style>
</style>

<script setup>
import { ref } from 'vue'
</script>