<template>
  <div>
    <div class="header back-header">
      <div class="back-header-btn">
        <a href="#"><i class="icon-chevron-left"></i></a>
        <h1>History</h1>
      </div>
    </div>
    <div class="main-content">
      <ul class="history-list">
        <li>
          <a href="/active-flight"><i class="icon-airplane-circle"></i> Active Flight</a>
        </li>
        <li>
          <a href="/pending-flight"><i class="icon-airplane-circle"></i> Pending Flight</a>
        </li>
        <li>
          <a href="#"><i class="icon-airplane-circle"></i> Cancel Flight</a>
        </li>
        <li>
          <a href="#"><i class="icon-airplane-circle"></i> Saved Flight</a>
        </li>
      </ul>
      <div class="last-login">
        <span>Last Login: 4:07pm, 07 October 2024</span>
      </div>
    </div>
    <AppBottomMunu />
  </div>
</template>

<script setup lang="ts">
import AppBottomMunu from '@components/common/AppBottomMenu.vue'
</script>