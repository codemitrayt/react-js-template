import { useEffect } from 'react'

const usePageTitle = ({ title }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title
    }
  }, [title])
}

export default usePageTitle
