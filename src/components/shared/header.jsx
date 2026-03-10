// import { useNavigate } from 'react-router'

// import { Logo, ThemeToggle } from '@/components'
// import { Button } from '@/components/ui/button'

// const Header = () => {
//   const navigate = useNavigate()
//   return (
//     <nav className="h-14 border-b flex items-center">
//       <div className="cotainer mx-auto w-full px-4 flex items-center justify-between">
//         <Logo />
//         <div className="flex gap-2 items-center justify-center">
//           <Button
//             onClick={() => navigate('/auth/sign-in')}
//             variant="outline"
//             size="sm"
//           >
//             Get Started
//           </Button>
//           <ThemeToggle />
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Header



import { Logo, ThemeToggle } from '@/components'
import { Button } from '@/components/ui/button'

const Header = () => {

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="h-16 border-b bg-white flex items-center fixed w-full z-50">
      <div className="container mx-auto w-full px-6 flex items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-8 text-black text-sm font-medium">

          <span
            className="cursor-pointer"
            onClick={() => scrollToSection("capabilities")}
          >
            Capabilities
          </span>

          <span
            className="cursor-pointer"
            onClick={() => scrollToSection("case-studies")}
          >
            Case Studies
          </span>

          <span
            className="cursor-pointer"
            onClick={() => scrollToSection("how-we-work")}
          >
            How We Work
          </span>

          <span
            className="cursor-pointer"
            onClick={() => scrollToSection("team")}
          >
            Team
          </span>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90"
          >
            Start a Conversation
          </Button>

          <ThemeToggle />

        </div>
      </div>
    </nav>
  )
}

export default Header