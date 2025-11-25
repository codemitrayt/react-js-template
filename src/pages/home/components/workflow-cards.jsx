import { useNavigate } from 'react-router'

import { cn } from '@/lib'
import { WORKFLOWS } from '@/constants/constants'

const WorkflowCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto py-10">
      {WORKFLOWS.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} />
      ))}
    </div>
  )
}

const WorkflowCard = ({ workflow }) => {
  const navigate = useNavigate()
  return (
    <div
      className={cn(
        'group relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border cursor-pointer'
      )}
      onClick={() => navigate('/auth/sign-in')}
    >
      <div
        className={cn(
          'w-16 h-16 bg-linear-to-r rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300',
          workflow.gradient
        )}
      >
        <workflow.icon className="w-8 h-8 text-white" />
      </div>

      <h3
        className={cn(
          'text-2xl font-bold mb-4 transition-colors duration-300',
          workflow.titleColor
        )}
      >
        {workflow.title}
      </h3>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {workflow.description}
      </p>

      <ul className="space-y-3 mb-8">
        {workflow.features.map((feature, featureIndex) => (
          <li
            key={featureIndex}
            className="flex items-center text-muted-foreground"
          >
            <div
              className={cn(
                'w-2 h-2 bg-linear-to-r rounded-full mr-3',
                workflow.gradient
              )}
            />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={cn(
          'w-full bg-linear-to-r px-6 py-3 text-white rounded-xl font-semibold flex items-center justify-center group-hover:shadow-lg transition-all duration-300 transform shadow-md cursor-pointer',
          workflow.buttonGradient
        )}
      >
        Get Started
      </button>
    </div>
  )
}

export default WorkflowCards
