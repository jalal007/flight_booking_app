<template>
  <div>
    <div class="header back-header">
      <div class="back-header-btn">
        <a href="#"><i class="icon-chevron-left"></i></a>
        <h1>Menu</h1>
      </div>
    </div>
    <div class="main-content">
      <ul class="menu-list">
        <li><a href="/profile"><i class="icon-user"></i> Profile</a></li>
        <li><a href="/support"><i class="icon-email"></i> Support</a></li>
        <li><a href="/faq"><i class="icon-question-circle"></i> FAQ</a></li>
      </ul>
    </div>
    <AppBottomMunu/>
  </div>
</template>

<script setup lang="ts">
  import AppBottomMunu from '@components/common/AppBottomMenu.vue'
</script>