<template>
  <div class="ui centered card" v-if="user">
    <div class="image">
      <img :src="user.avatar_url" alt="avatar" />
    </div>
    <div class="content">
      <div class="header">{{ user.name || user.login }}</div>
      <div class="meta">
        <span class="date">Зарегистрирован: {{ formatDate(user.created_at) }}</span>
      </div>
      <div class="description">
        {{ user.bio || 'Биография отсутствует' }}
      </div>
    </div>
    <div class="extra content">
      <i class="user icon"></i>
      {{ user.followers }} подписчиков
    </div>
  </div>

  <div class="ui input" style="margin-top: 20px">
    <input
      type="text"
      placeholder="Введите имя пользователя GitHub"
      v-model="username"
      @keyup.enter="fetchUser"
    />
    <button class="ui button primary" @click="fetchUser">Поиск</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'GithubProfile',
  setup() {
    const user = ref(null)
    const username = ref('')

    const fetchUser = async () => {
      if (!username.value) return

      try {
        const response = await fetch(`https://api.github.com/users/${username.value}`)
        if (!response.ok) throw new Error('Пользователь не найден')
        user.value = await response.json()
      } catch (error) {
        alert(error.message)
        user.value = null
      }
    }

    const formatDate = (dateStr) => {
      const date = new Date(dateStr)
      return date.toLocaleDateString('ru-RU')
    }

    return {
      user,
      username,
      fetchUser,
      formatDate,
    }
  },
}
</script>
