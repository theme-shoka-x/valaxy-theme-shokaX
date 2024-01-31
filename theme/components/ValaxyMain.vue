<script lang="ts" setup>
import type { PageData, Post } from 'valaxy'

defineProps<{
  frontmatter: Post
  data?: PageData
}>()
</script>

<template>
  <slot name="main-header" />
  <div class="body md" itemprop="articleBody">
    <!-- photos 部分 TODO -->
    <!-- summary 部分 TODO -->
    <Transition appear>
      <ValaxyMd :frontmatter="frontmatter">
        <slot name="main-content-md" />
        <slot />
      </ValaxyMd>
    </Transition>

    <slot name="main-content-after" />
  </div>
</template>
