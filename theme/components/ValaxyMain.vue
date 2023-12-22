<script lang="ts" setup>
import type { PageData, Post } from 'valaxy'
import { useSiteConfig } from 'valaxy'
import { useThemeConfig } from 'composables/config'
import ShokaxPostFooterTags from './ShokaxPostFooterTags.vue'
import ShokaxPostFooter from './ShokaxPostFooter.vue'
import ShokaxPostReward from './ShokaxPostReward.vue'
import ShokaxPostCopyright from './ShokaxPostCopyright.vue'

defineProps<{
  frontmatter: Post
  data?: PageData
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
      <ShokaxPostFooterTags :post="frontmatter" />
    </div>
    <slot name="main-footer-before" />
    <footer>
      <ShokaxPostFooter :frontmatter="frontmatter" />
      <ShokaxPostReward v-if="themeConfig.reward" :post="frontmatter" />
      <ShokaxPostCopyright v-if="siteConfig.license.enabled" :frontmatter="frontmatter" />
    </footer>
    <slot name="main-footer-after" />
  </article>
</template>
