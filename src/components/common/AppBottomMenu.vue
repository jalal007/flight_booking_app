<template>
  <ion-footer class="custom-footer">
    <ion-toolbar>
      <div class="bottom-nav">
        <a href="/" class="nav-item">
          <i class="icon-home1"></i>
          <span>Home</span>
        </a>

        <a href="/history" class="nav-item">
          <i class="icon-file"></i>
          <span>History</span>
        </a>

        <a href="/help" class="nav-item">
          <i class="icon-chat"></i>
          <span>Help</span>
        </a>

        <a href="/menu" class="nav-item">
          <i class="icon-user-circle"></i>
          <span>Menu</span>
        </a>
      </div>
    </ion-toolbar>
  </ion-footer>
</template>

<script setup lang="ts">
import {
  IonFooter,
  IonToolbar
} from '@ionic/vue'
</script>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.active {
  color: #3f6df6;
}
</style>