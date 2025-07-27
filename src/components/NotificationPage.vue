<template>
  <div>
    <NotificationMessage
      message="Вы вошли в систему"
      type="success"
    />
    <NotificationMessage
      message="Невозможно подключиться к серверу"
      type="error"
    />
  </div>
</template>

<script>
import NotificationMessage from './NotificationMessage.vue'

export default {
  components: {
    NotificationMessage,
  },
}
</script>
