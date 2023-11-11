<script setup lang="ts">
import { useFrontmatter, useFullUrl } from 'valaxy'
import { useI18n } from 'vue-i18n'
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
const { t } = useI18n()
const frontmatter = useFrontmatter()
const postURL = useFullUrl()
</script>

<template>
  <div v-if="frontmatter.copyright" id="copyright" class="bg-gray-200 p-4 relative text-xs rounded-md text-gray-600">
    <ul>
      <li class="author">
        <div class="i-ri-account-circle-fill" />
        <strong>
          {{ t("post.copyright.author") + t('symbol.colon') }}
        </strong>
        {{ frontmatter.author || themeConfig.author }}
        <div class="i-ri-at-line" />
        {{ frontmatter.title }}
      </li>
      <li class="link">
        <div class="i-ri-link" />
        <strong>
          {{ t('post.copyright.link') + t('symbol.colon') }}
        </strong>
        <a :href="postURL"> {{ frontmatter.title }}</a>
      </li>
      <li class="license">
        <div class="i-ri-arrow-go-forward-line" />
        <strong>
          {{ t('post.copyright.license') + t('symbol.colon') }}
        </strong>
        <!-- cc协议部分未完成 -->
        <a v-if="frontmatter.copyright === true">
          {{ t('post.copyright.license_content') }}
        </a>
        <a v-else>
          {{ t('post.copyright.nocopy') }}
        </a>
      </li>
    </ul>
  </div>
</template>
