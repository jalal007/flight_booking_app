<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header back-header">
          <div class="back-header-btn">
            <a href="#"><i class="icon-chevron-left"></i></a>
            <h1>Profile</h1>
          </div>
          <a href="#"><i class="icon-edit"></i></a>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container">
        <div class="profile">
          <div class="profile-img">
            <img src="/assets/images/user-avatar.png" alt="profile" />
            <div class="profile-capture">
              <label><input type="file" /> <i class="icon-camera"></i></label>
            </div>
          </div>
          <h3>Moasharraf Hossain Rahman</h3>
        </div>
        <div class="profile-info">
          <div class="profile-info-item">
            <i class="icon-user-circle"></i>
            <h4><span>Name</span> Moasharraf Hossain Rahman</h4>
          </div>
          <div class="profile-info-item">
            <i class="icon-email"></i>
            <h4><span>Email</span> moasharraf.hossain1988@gmail.com</h4>
          </div>
          <div class="profile-info-item">
            <i class="icon-phone"></i>
            <h4><span>Phone number</span> 608234567900</h4>
          </div>
          <div class="profile-info-item">
            <i class="icon-home"></i>
            <h4>
              <span>Address</span> Unit 26-3, Tower A, The Vertical Business Suites Bangsar South
              City, No 8 Jalan Kerinchi, 59200 KL
            </h4>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
</script>