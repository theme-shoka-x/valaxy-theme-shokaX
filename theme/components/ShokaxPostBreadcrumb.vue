<script setup lang="ts">
import type { Post } from 'valaxy'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

defineProps<{
  post: Post
}>()

const { t } = useI18n()
const blank = ref('')
</script>

<template v-if="typeof post.categories === 'object'">
  <div class="breadcrumb" itemListElement itemscope itemtype="https://schema.org/BreadcrumbList">
    <div class="i-ri-home-4-fill" />
    <span>
      <RouterLink to="/">
        {{ t('menu.home') }}
      </RouterLink>
    </span>
  </div>
  <div class="i-ri-arrow-right-s-line" />
  <span
    v-for="(item, index) in post.categories" :key="item" :class="{ current: index === Number(post.categories?.length) - 1 }"
    itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"
  >
    <RouterLink :to="blank">
      <span itemprop="name">
        {{ item }}
        <meta itemprop="position" :content="String(index)">
      </span>
    </RouterLink>
    <div v-if="index > 1 && index !== Number(post.categories?.length) - 1" class="i-ri-arrow-right-s-line" />
  </span>
</template>
