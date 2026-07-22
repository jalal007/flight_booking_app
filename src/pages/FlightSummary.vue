<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <div class="header">
          <div class="back-header-btn">
            <a href="#"><i class="icon-chevron-left"></i></a>
            <h1>Flight Details</h1>
          </div>
        </div>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-accordion-group class="flight-summary-wrap">
        <ion-accordion value="flight-summary">
          <ion-item slot="header" color="light">
            <ion-label>Flight summary</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <FlightInfo />
          </div>
        </ion-accordion>

        <ion-accordion value="fare-details">
          <ion-item slot="header" color="light">
            <ion-label>Fare details</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <div class="fare-details">
              <strong class="fare-heading"> Passenger: Adult x 1 </strong>
              <div class="fare-item">
                <span>Base Fare</span>
                <span>RM 20,000</span>
              </div>
              <div class="fare-item">
                <span>Tax</span>
                <span>RM 3,000</span>
              </div>
              <div class="fare-item">
                <span>Coupon</span>
                <span class="green">-RM 100</span>
              </div>
              <div class="fare-item mt">
                <span> Processing Fee </span>
                <span> RM 500 </span>
              </div>
              <div class="fare-item">
                <span> Sub Total </span>
                <span> RM 35,000 </span>
              </div>
              <div class="fare-item">
                <span class="green"> Discount </span>
                <span class="green"> - RM 1,000 </span>
              </div>
              <div class="fare-item total">
                <strong> You Pay </strong>
                <strong> RM 34,000 </strong>
              </div>
            </div>
          </div>
        </ion-accordion>

        <ion-accordion value="baggage">
          <ion-item slot="header" color="light">
            <ion-label>Baggage</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <div class="fare-item">
              <span>Cabin</span>
              <span>7.0KG</span>
            </div>
            <div class="fare-item">
              <span>Check-in</span>
              <span>30.0 KG</span>
            </div>
          </div>
        </ion-accordion>

        <ion-accordion value="Flight-duration">
          <ion-item slot="header" color="light">
            <ion-label>Flight duration and details</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <div class="flight-schedule">
              <div class="flight-schedule-list">
                <div>
                  <strong>10:30 AM</strong>
                  <span>15 July 2026</span>
                </div>
                <div class="pointer"></div>
                <div>
                  <strong>DAC</strong>
                </div>
              </div>
              <div class="flight-schedule-info">
                <div>
                  <p class="total-time"><i class="icon-clock"></i> 5h 15m</p>
                </div>
                <div>
                  <img
                    class="logo"
                    src="/assets/images/emirates-logo.png"
                    alt="flight"
                  />
                  <p>Boeing 737</p>
                  <p>Flight No: BG123</p>
                  <p>Aircraft: Boeing 320</p>
                </div>
              </div>
              <div class="flight-schedule-list">
                <div>
                  <strong>03:45 PM</strong>
                  <span>15 July 2026</span>
                </div>
                <div class="pointer"></div>
                <div>
                  <strong>DXB</strong>
                </div>
              </div>
              <div class="flight-schedule-info">
                <div>
                  <span>Layover</span>
                  <span>2h 30m</span>
                </div>
                <div class="layover"><i class="icon-layover"></i></div>
              </div>
              <div class="flight-schedule-list">
                <div>
                  <strong>10:30 AM</strong>
                  <span>15 July 2026</span>
                </div>
                <div class="pointer"></div>
                <div>
                  <strong>DAC</strong>
                </div>
              </div>
              <div class="flight-schedule-info">
                <div>
                  <p class="total-time"><i class="icon-clock"></i> 5h 15m</p>
                </div>
                <div>
                  <img
                    class="logo"
                    src="/assets/images/emirates-logo.png"
                    alt="flight"
                  />
                  <p>Boeing 737</p>
                  <p>Flight No: BG123</p>
                  <p>Aircraft: Boeing 320</p>
                </div>
              </div>
              <div class="flight-schedule-list">
                <div>
                  <strong>03:45 PM</strong>
                  <span>15 July 2026</span>
                </div>
                <div class="pointer"></div>
                <div>
                  <strong>DXB</strong>
                </div>
              </div>
            </div>
          </div>
        </ion-accordion>

        <ion-accordion value="passenger-details">
          <ion-item slot="header" color="light">
            <ion-label>Passenger details</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <div class="passenger-card">
              <div class="info-group">
                <span class="label">Title</span>
                <span class="value">Mr.</span>
              </div>

              <div class="info-group">
                <span class="label">Given name/First name</span>
                <span class="value">Atatur</span>
              </div>

              <div class="info-group">
                <span class="label">Surname/Last name</span>
                <span class="value">Rahman</span>
              </div>

              <hr class="divider" />

              <div class="info-group">
                <span class="label">Passport number</span>
                <span class="value">A152365984</span>
              </div>

              <div class="info-group">
                <span class="label">Date of expiry</span>
                <span class="value">07/08/2028</span>
              </div>

              <div class="info-group">
                <span class="label">Passport country</span>
                <span class="value">Bangladesh</span>
              </div>

              <div class="info-group">
                <span class="label">Date of birth</span>
                <span class="value">12/12/1982</span>
              </div>
            </div>
          </div>
        </ion-accordion>

        <ion-accordion value="contact-details">
          <ion-item slot="header" color="light">
            <ion-label>Contact details</ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <div class="info-group">
                <span class="label">Email</span>
                <span class="value">ataur.rahman2021@gmail.com</span>
              </div>
              <div class="info-group">
                <span class="label">Mobile number</span>
                <span class="value">+60323919006</span>
              </div>
          </div>
        </ion-accordion>
      </ion-accordion-group>
    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import FlightInfo from '@components/common/FlightInfo.vue'
</script>

<style>

.info-group {
  margin-bottom: 22px;
}

.label {
  display: block;
  font-size: 14px;
  color: #7d8697;
  margin-bottom: 6px;
}

.value {
  display: block;
  font-size: 18px;
  font-weight: 500;
  color: #222;
}

.divider {
  border: none;
  border-top: 1px solid #e4e6eb;
  margin: 28px 0;
}
</style>