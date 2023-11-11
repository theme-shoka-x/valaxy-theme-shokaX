<script setup lang="ts">
import { useThemeConfig } from '../composables'

const themeConfig = useThemeConfig()
</script>

<template>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#222">

  <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">

  <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico">

  <meta http-equiv="Cache-Control" content="no-transform">
  <meta http-equiv="Cache-Control" content="no-siteapp">

  <link v-if="themeConfig.feed.rss" rel="alternate" type="application/rss+xml" :title="themeConfig.title" href="/rss.xml">
  <link v-if="themeConfig.feed.atom" rel="alternate" type="application/atom+xml" :title="themeConfig.title" href="/atom.xml">
</template>
