<template>
  <div>
    <div class="header back-header">
      <div class="back-header-btn">
        <a href="#"><i class="icon-chevron-left"></i></a>
        <h1>Flights</h1>
      </div>
    </div>
    <div class="main-content">
      <div class="no-flight">
        <img src="../../public/assets/images/no-flight.svg" alt="">
        <p>No flight tickets are available right now according to your selected route</p>
        <button class="btn">Search again</button>
      </div>
    </div>
    <AppBottomMunu />
  </div>
</template>

<script setup lang="ts">
import AppBottomMunu from '@components/common/AppBottomMenu.vue'
</script>