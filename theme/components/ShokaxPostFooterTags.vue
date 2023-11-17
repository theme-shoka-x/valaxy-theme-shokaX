<script setup lang="ts">
import type { Post } from 'valaxy'

defineProps<{
  post: Post
}>()
</script>

<template>
  <div v-if="post.tags" class="tags text-left mt-3 text-sm">
    <RouterLink v-for="tag in post.tags" :key="tag" :to="`/tags/${tag}/`">
      <div class="i-ri-price-tag-3-line" />
      {{ tag }}
    </RouterLink>
  </div>
</template>
