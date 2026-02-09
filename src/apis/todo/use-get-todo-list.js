import { useQuery } from '@tanstack/react-query'

import apis from './apis'

const useGetTodoList = ({ params }) => {
  const { refetch, data, isLoading } = useQuery({
    queryKey: ['GET TODO LIST'],
    queryFn: () => apis.getToodList({ params }),
    retry: false,
  })

  return {
    refetch,
    data: data?.data?.todos || [],
    isLoading,
  }
}

export default useGetTodoList
