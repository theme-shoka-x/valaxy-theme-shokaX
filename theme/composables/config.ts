import { computed } from 'vue'
import type { Post } from 'valaxy'
import { useConfig } from 'valaxy'
import type { ThemeConfig } from '../types'

/**
 * getThemeConfig
 */
export function useThemeConfig<T = ThemeConfig>(): any {
  const config = useConfig<T>()
  return computed(() => config!.value.themeConfig)
}

export function getCover(post: Post) {
  const covers = useConfig<ThemeConfig>().value.themeConfig.covers
  if (post.cover)
    return post.cover
  else if (covers.length >= 1)
    return covers[0]
}
