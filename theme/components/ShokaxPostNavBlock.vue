<script setup lang="ts">
import type { Post } from 'valaxy'
import { useI18n } from 'vue-i18n'
import { getCover } from '../composables'

const props = defineProps<{
  item: Post
  type: 'next' | 'prev'
}>()

const cover = getCover(props.item)
let lastcat: string
if (typeof props.item.categories === 'object')
  lastcat = props.item.categories[-1]
else if (typeof props.item.categories === 'string')
  lastcat = props.item.categories
const { t } = useI18n()
</script>

<template>
  <a
    :href="item.path"
    class="flex flex-col h-full text-white p-5 bg-cover relative"
    :rel="type"
    itemprop="url"
    :data-background-image="item.cover || cover"
    :title="item.title || item.path || t('post.untitled')"
  >
    <span class="type text-sm self-start"> {{ t(`post.${type}`) }}</span>
    <span v-if="lastcat" class="category text-sm self-start">
      <div class="i-ri-flag-fill" />
      {{ lastcat }}
    </span>
    <h3>
      {{ item.title || item.path || t('post.untitled') }}
    </h3>
  </a>
</template>
