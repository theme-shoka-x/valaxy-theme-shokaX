<script setup lang="ts">
import { type Post, useSiteConfig } from 'valaxy'
import { defineBreadcrumb, useSchemaOrg } from '@unhead/schema-org'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  post: Post
}>()

const breadcrumb = [
  { name: 'home', url: '/' },
]

if (typeof props.post.categories === 'undefined') {
  // 无分类
}
else if (typeof props.post.categories === 'string') {
  breadcrumb.push({
    name: props.post.categories,
    url: `/categories/${props.post.categories}`, // 占位符
  })
}
else if (Array.isArray(props.post.categories)) {
  props.post.categories.forEach((category) => {
    breadcrumb.push({
      name: category,
      url: `/categories/${category}`, // 占位符
    })
  })
}

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: breadcrumb,
  }),
])

const { t } = useI18n()
const site = useSiteConfig()
const brLength = Object.getOwnPropertyNames(breadcrumb).length
</script>

<template>
  <div v-for="(item, key) in breadcrumb" :key="key" class="breadcrumb flex-wrap items-center mt-5 mb-5 text-sm inline-flex">
    <template v-if="item.name === 'home'">
      <div class="i-ri-home-2-fill ml-0 mr-1.25" />
      <span class="whitespace-pre">
        <a :href="site.url">
          {{ t('menu.home') }}
        </a>
      </span>
    </template>
    <template v-else>
      <span :class="{ current: key === brLength - 1 }" class="whitespace-pre">
        <a :href="item.url">
          <span>
            {{ item.name }}
          </span>
        </a>
      </span>
    </template>
    <div v-if="key !== brLength - 1" class="i-ri-arrow-right-s-line" />
  </div>
</template>

<style scoped lang="scss">
span .current {
  background-color: var(--color-red-a1);
  border-radius: .625rem;
  padding: 0 .625rem;
  transition: all .2s ease-in-out;

  span {
    white-space: normal;
  }

  a {
    color: var(--primary-color);
  }

  &:hover {
    background-color: var(--color-red-a3);
  }
}
</style>
