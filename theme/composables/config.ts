import { computed } from 'vue'
import type { Post } from 'valaxy'
import { useValaxyConfig } from 'valaxy'
import type { ShokaxTheme } from '../types'

/**
 * getThemeConfig
 */
export function useThemeConfig<ThemeConfig = ShokaxTheme.Config>() {
  const config = useValaxyConfig<ThemeConfig>()
  return computed(() => config!.value.themeConfig)
}

export function getCover(post: Post) {
  const covers = useThemeConfig().value.covers
  if (post.cover)
    return post.cover
  else if (covers.length >= 1)
    return covers[0]
}
