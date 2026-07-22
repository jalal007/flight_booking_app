<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header">
          <div class="back-header-btn">
            <a href="#"><i class="icon-chevron-left"></i></a>
            <h1>Payments</h1>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="container pb-16">
        <div class="payment-banner">
          <img src="/assets/images/payment-banner.svg" alt="" />
        </div>
        <div class="payment-header">
          <h3>Payment method</h3>
          <p>Select any payment method to pay</p>
        </div>
        <ion-radio-group>
          <div class="payment-wrapper">
            <div class="payment-card">
              <div class="payment-item">
                <div class="payment-left">
                  <img src="/assets/images/sohoj-logo.svg" alt="" />
                  <span>Sohoj point</span>
                </div>
                <ion-radio value="sohoj" mode="md"></ion-radio>
              </div>
            </div>
            <p class="charge-text">2% charge will be added as per terms and conditions</p>
          </div>

          <div class="payment-wrapper">
            <div class="payment-card">
              <div class="payment-item">
                <div class="payment-left">
                  <img src="/assets/images/tng-logo.svg" alt="" />
                  <span>TouchGo</span>
                </div>
                <ion-radio value="touchgo" mode="md"></ion-radio>
              </div>
            </div>
            <p class="charge-text">2.5% charge will be added as per terms and conditions</p>
          </div>
          <div class="payment-wrapper">
            <div class="payment-card">
              <div class="payment-item">
                <div class="payment-left">
                  <img src="/assets/images/visa-logo.svg" alt="" />
                  <span>Debit/Credit Card</span>
                </div>
                <ion-radio value="card" mode="md"></ion-radio>
              </div>
            </div>
            <p class="charge-text">2.5% charge will be added as per terms and conditions</p>
          </div>
        </ion-radio-group>

        <div class="terms-wrapper">
          <ion-checkbox></ion-checkbox>
          <div class="terms-text">
            I am agreeing to the <a href="#"> Terms & Conditions </a> of Sohoj Ticketing
          </div>
        </div>
      </div>
      <div class="flight-price-wrap">
        <div class="flight-price">
          <h3><span>You are paying</span> RM 3,256</h3>
          <div class="btn view-details">Pay Now</div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style>
.payment-wrapper {
  margin-bottom: 16px;
}

.payment-card {
  border: 1px solid #C6C6C8;
  border-radius: 14px;
  padding: 14px;
  background: #fff;
  cursor: pointer;
  transition: 0.3s;
}

.payment-card.active {
  border-color: #3b82f6;
}

.payment-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.payment-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.payment-left img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.payment-left span {
  font-size: 16px;
  font-weight: 600;
  color: #23262F;
}

.charge-text {
  font-size: 12px;
  color: #ACACAC;
  margin: 6px 14px 0;
}

ion-radio {
  --color: #d4d4d4;
  --color-checked: #3b82f6;
}
ion-checkbox {
  --size: 24px;
  --checkbox-background-checked: #3b71fe;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #3b71fe;
}

</style>

<script setup lang="ts">
</script>