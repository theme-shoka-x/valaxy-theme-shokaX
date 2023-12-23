<script lang="ts" setup>
import type { Post } from 'valaxy'
import ShokaxArticleInner from './ShokaxArticleInner.vue'

defineProps<{
  frontmatter: Post
}>()
</script>

<template>
  <main>
    <div class="inner">
      <div class="main">
        <ShokaxArticleInner :frontmatter="frontmatter" />
      </div>
    </div>
  </main>
</template>
