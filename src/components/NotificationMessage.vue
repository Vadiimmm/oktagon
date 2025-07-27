<template>
  <div v-if="visible" :class="['ui', type, 'message']">
    <i class="close icon" @click="close"></i>
    <div class="header">{{ headerText }}</div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'NotificationMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'info', 
      validator: (value) =>
        ['info', 'success', 'error', 'warning'].includes(value),
    },
  },
  setup(props) {
    const visible = ref(true)

    const close = () => {
      visible.value = false
    }

    const headerText = computed(() => {
      switch (props.type) {
        case 'success':
          return 'Успешно!'
        case 'error':
          return 'Ошибка!'
        case 'warning':
          return 'Предупреждение!'
        default:
          return 'Информация'
      }
    })

    return { visible, close, headerText }
  },
}
</script>
