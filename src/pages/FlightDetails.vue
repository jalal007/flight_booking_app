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
      <div class="container pb-5">
        <ion-segment class="flight-details-tab">
          <ion-segment-button value="flight-details" content-id="flight-details">
            <ion-label>Flight Details</ion-label>
          </ion-segment-button>
          <ion-segment-button value="baggage" content-id="baggage">
            <ion-label>Baggage</ion-label>
          </ion-segment-button>
          <ion-segment-button value="fare" content-id="fare">
            <ion-label>Fare</ion-label>
          </ion-segment-button>
          <ion-segment-button value="policy" content-id="policy">
            <ion-label>Policy</ion-label>
          </ion-segment-button>
        </ion-segment>
        <ion-segment-view>
          <ion-segment-content id="flight-details">
            <div class="flight-summary">
              <div class="flight-summary-title">
                <i class="icon-flying-from"></i>
                <h3>KUL - DAC <span>Total Duration: 5h 15m</span></h3>
              </div>
              <div>
                <span>Economy</span>
                <span>1 Stop</span>
              </div>
            </div>
            <div class="flight-schedule-wrap">
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
                      src="../../public/assets/images/emirates-logo.png"
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
                      src="../../public/assets/images/emirates-logo.png"
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
          </ion-segment-content>
          <ion-segment-content id="baggage">
            <div class="flight-summary">
              <div class="flight-summary-title">
                <i class="icon-flying-from"></i>
                <h3>KUL - DAC <span>Total Duration: 5h 15m</span></h3>
              </div>
              <div>
                <span>Economy</span>
                <span>1 Stop</span>
              </div>
            </div>
            <div class="baggage-wrap">
              <div class="baggage-list">
                <strong>Flight</strong>
                <strong>Cabin</strong>
                <strong>Check-In</strong>
              </div>
              <div class="baggage-list">
                <span>Dhaka - Dubai</span>
                <span>7 KG</span>
                <span>20 KG</span>
              </div>
              <div class="baggage-list">
                <span>Dubai - London</span>
                <span>7 KG</span>
                <span>30 KG</span>
              </div>
            </div>
          </ion-segment-content>
          <ion-segment-content id="fare">
            <div class="flight-summary">
              <div class="flight-summary-title">
                <i class="icon-flying-from"></i>
                <h3>KUL - DAC <span>Total Duration: 5h 15m</span></h3>
              </div>
              <div>
                <span>Economy</span>
                <span>1 Stop</span>
              </div>
            </div>
            <div class="baggage-wrap">
              <div class="baggage-list">
                <strong>Fare Summary</strong>
                <strong>Base Fare</strong>
                <strong>Tax</strong>
              </div>
              <div class="baggage-list">
                <span>Adult x 2</span>
                <span>RM 3,206</span>
                <span>RM 50</span>
              </div>
              <div class="baggage-list">
                <span>Child x 1</span>
                <span>RM 1,206</span>
                <span>RM 30</span>
              </div>
              <div class="fare-charge">* No Hidden Cost</div>
            </div>
          </ion-segment-content>
          <ion-segment-content id="policy">
            <div class="flight-summary">
              <div class="flight-summary-title">
                <i class="icon-flying-from"></i>
                <h3>KUL - DAC <span>Total Duration: 5h 15m</span></h3>
              </div>
              <div>
                <span>Economy</span>
                <span>1 Stop</span>
              </div>
            </div>
            <div class="flight-policy">
              <div class="flight-policy-list">
                <strong> Cancellation Policy </strong>
                <p>Cancellation charges may apply depending on airline rules and ticket type.</p>
              </div>
              <div class="flight-policy-list">
                <strong> Reschedule Policy </strong>
                <p>
                  Flight date changes are subject to airline availability and applicable charges.
                </p>
              </div>
              <div class="flight-policy-list">
                <strong> Refund Policy </strong>
                <p>Refund processing time depends on the airline policy and payment method.</p>
              </div>
              <div class="flight-policy-list">
                <p>*The Airline Fee is indicative. All fees mentioned are per passenger.</p>
              </div>
            </div>
          </ion-segment-content>
        </ion-segment-view>
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
</style>
<script setup lang="ts">
import {
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
} from '@ionic/vue'
</script>