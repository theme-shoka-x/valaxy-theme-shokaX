<script setup lang="ts">
import type { Post } from 'valaxy'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { RewardAccounts } from 'types'
import { useThemeConfig } from '../composables'

defineProps<{
  post: Post
}>()
const toggled = ref(false)
const { t } = useI18n()
const themeConfig = useThemeConfig()
const accounts: RewardAccounts[] = themeConfig.reward.accounts

const toggleQR = function (event: Event) {
  event.preventDefault()
  toggled.value = !toggled.value
}
</script>

<template v-if="post.reward">
  <div id="reward" class="mx-auto mt-5 mb-5 p-2 pt-2 pb-2 text-center">
    <button class="bg-[color:var(--primary-color)] text-gray-1 border-0 rounded-md cursor-pointer leading-2 px-3 py-0" @click="toggleQR">
      <div class="i-ri-heart-pulse-fill" />
      {{ t('reward.donate') }}
    </button>
    <p class="text-sm text-gray-500 m-0">
      {{ t('reward.text') }}
    </p>
    <Transition name="fade">
      <div v-if="toggled" id="qr">
        <div>
          <img v-for="item in accounts" :key="item.name" :src="item.image" :alt="item.name" loading="lazy">
          <!-- 需要修复一下i18n问题，先保证不报错 -->
          <p>{{ t('reward.text') }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
