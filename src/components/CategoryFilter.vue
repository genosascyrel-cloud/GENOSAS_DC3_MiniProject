<template>
  <div class="categories">
    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('update:modelValue', category)"
      :class="{ active: modelValue === category }"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])

const categories = [
  'All',
  'Nature',
  'Beach',
  'Adventure',
  'Wildlife',
  'Historical'
]
</script>

<style scoped>
.categories {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 20px 0;
}

button {
  padding: 10px 18px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

button.active {
  background: #176b4d;
  color: white;
}
</style>    