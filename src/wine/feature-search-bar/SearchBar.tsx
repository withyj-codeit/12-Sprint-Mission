import { TextField } from '@/shared/design-system'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const SearchBar = () => {
  const router = useRouter()
  const { pathname, query } = router
  const [wineName, setWineName] = useState<string>()

  useEffect(() => {
    if (wineName === undefined) {
      if (query.name) {
        setWineName(query.name as string)
      }
      return
    }
  
    if (wineName === '') {
      delete query.name
      router.push({
        pathname,
        query: { ...query }
      }, undefined, { scroll: false })
      return
    }
    
    router.push({
      pathname,
      query: { ...query, name: wineName }
    }, undefined, { scroll: false })
  }, [wineName, query.name])

  return (
    <TextField
      placeholder="와인을 검색해 보세요."
      value={wineName || ''}
      onChange={(e) => setWineName(e.target.value)}
    />
  )
}
