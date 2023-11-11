<script setup lang="ts">
import type { Post } from 'valaxy'
import { formatDate } from 'valaxy'

import { useI18n } from 'vue-i18n'

defineProps<{
  frontmatter: Post
}>()

const { t } = useI18n()
</script>

<template>
  <div class="text-right text-sm text-gray-500">
    <span v-if="frontmatter.updated !== frontmatter.date" class="inline-block mr-2">
      <div class="mr-1 i-ri-calendar-check-fill inline-block" />
      <span>{{ t('post.edited') }}</span>
      <time :title="t('post.modified') + t('symbol.colon') + frontmatter.updated" itemprop="dateModified" :datetime="formatDate(frontmatter.date || '')">
        {{ formatDate(frontmatter.updated || frontmatter.date || '') }}
      </time>
    </span>
  </div>
  <!-- 等待和waline&twikoo进行阅读量重构 -->
</template>
