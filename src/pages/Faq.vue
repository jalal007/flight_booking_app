<template>
  <div>
    <div class="header back-header">
      <div class="back-header-btn">
        <a href="#"><i class="icon-chevron-left"></i></a>
        <h1>FAQ</h1>
      </div>
    </div>
    <div class="main-content faq-wrap">
      <ion-accordion-group>
        <ion-accordion value="first">
          <ion-item slot="header" color="light">
            <ion-label>How does it work?</ion-label>
          </ion-item>
          <div class="faq-content" slot="content">
            Simply select your preferred flight, enter traveler details, and complete the payment.
            Your booking is confirmed only after full payment.
          </div>
        </ion-accordion>
        <ion-accordion value="second">
          <ion-item slot="header" color="light">
            <ion-label>How can i cancel ticket from app?</ion-label>
          </ion-item>
          <div class="faq-content" slot="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, ab autem possimus ipsa omnis tempora quam magnam dolor. Alias doloremque dolor tenetur consequatur ducimus blanditiis dolore atque quibusdam similique laboriosam.</div>
        </ion-accordion>
        <ion-accordion value="third">
          <ion-item slot="header" color="light">
            <ion-label>How can I add extra baggage?</ion-label>
          </ion-item>
          <div class="faq-content" slot="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem debitis vero laudantium repellendus quisquam obcaecati optio repellat id beatae. Optio fugiat voluptatum quis. Necessitatibus ipsa voluptates totam. Dolorum, tenetur quibusdam.</div>
        </ion-accordion>
      </ion-accordion-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue'
</script>