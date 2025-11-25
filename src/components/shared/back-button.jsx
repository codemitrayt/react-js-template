import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

const BackButton = ({ url, title }) => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    if (!url) return navigate(-1)
    else navigate(url)
  }

  return (
    <button
      className="text-active cursor-pointer hover:text-active/80 transition-all space-x-2 text-sm flex items-center justify-center"
      onClick={handleOnClick}
    >
      <ArrowLeft size={15} />
      {title && <span className="hidden md:block">{title}</span>}
    </button>
  )
}

export default BackButton
