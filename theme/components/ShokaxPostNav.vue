<script setup lang="ts">
import { usePrevNext } from 'valaxy'
import ShokaxPostNavBlock from './ShokaxPostNavBlock.vue'

const [prev, next] = usePrevNext()
</script>

<template>
  <div class="post-nav flex mb-4">
    <div class="item left w-1/2">
      <ShokaxPostNavBlock v-if="prev" type="prev" :item="prev" />
    </div>
    <div class="item right w-1/2">
      <ShokaxPostNavBlock v-if="next" type="next" :item="next" />
    </div>
  </div>
</template>
