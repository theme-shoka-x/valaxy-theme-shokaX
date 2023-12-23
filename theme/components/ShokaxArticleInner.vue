<script setup lang="ts">
import { useThemeConfig } from 'composables'
import { type Post, useSiteConfig } from 'valaxy'

defineProps<{
  frontmatter: Post
}>()

const siteConfig = useSiteConfig()
const themeConfig = useThemeConfig()
</script>

<template>
  <article itemscope itemtype="http://schema.org/Article" class="post block" :lang="siteConfig.lang">
    <link itemprop="mainEntityOfPage" :href="frontmatter.url">
    <span hidden itemprop="author" itemscope itemtype="http://schema.org/Person">
      <meta itemprop="image" :content="siteConfig.author.avatar">
      <meta itemprop="name" :content="siteConfig.author.name">
      <meta itemprop="description" :content="frontmatter.title">
    </span>
    <span hidden itemprop="publisher" itemscope itemtype="http://schema.org/Organization">
      <meta itemprop="name" :content="frontmatter.title">
    </span>
    <RouterView />
    <slot name="main-footer-before" />
    <footer>
      <ShokaxPostFooter :frontmatter="frontmatter" />
      <ShokaxPostReward v-if="themeConfig.reward" :post="frontmatter" />
      <ShokaxPostCopyright v-if="siteConfig.license.enabled" :frontmatter="frontmatter" />
    </footer>
    <slot name="main-footer-after" />
  </article>
</template>
