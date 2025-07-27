<template>
  <div class="ui container" style="margin-top: 30px">
    <div class="ui secondary menu">
      <router-link to="/" class="item">GitHub профиль</router-link>
      <router-link to="/notifications" class="item">Уведомления</router-link>
    </div>

    <router-view />
  </div>
</template>
