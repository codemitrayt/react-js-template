import { Building2 } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="text-center pt-12 pb-12 px-4">
      <div className="flex items-center justify-center mb-2">
        <div className="w-12 h-12 bg-active rounded-lg flex items-center justify-center mr-4">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-4xl font-bold">HEFT</h1>
      </div>
      <div className="inline-flex items-center px-3 py-1 bg-active/10 dark:bg-active/25 text-active rounded-full text-xs sm:text-sm font-medium mb-4">
        AI-Powered Construction Intelligence
      </div>
      <h2 className="text-2xl sm:text-5xl font-bold mb-4">
        Choose Your <span className="text-active">Workflow</span>
      </h2>
      <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">
        Select the AI assistant that best fits your needs. From crane selection
        to safety compliance, we've got you covered with expert guidance.
      </p>
    </div>
  )
}

export default HeroSection
