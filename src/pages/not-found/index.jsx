import { useNavigate } from 'react-router'
import { Home, Search, ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center h-full justify-center p-4">
      <div className="text-center space-y-6">
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-primary">
            404
          </h1>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold">
            Oops! Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the
            digital void. Let's get you back on track!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button
            size="lg"
            onClick={() => navigate('/')}
            className="w-full sm:w-fit"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-fit"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
