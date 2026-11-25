import { useEffect, useRef } from 'react'
import Intro from './components/intro/Intro'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { navLinks } from './components/navbar/navLinks'
import { useScreen } from './hooks/useScreen'
import { useLanguage } from './i18n/useLanguage'

const SCREENS = { hero: Hero, about: About, skills: Skills, projects: Projects, experience: Experience, contact: Contact }
const SCREEN_IDS = navLinks.map((link) => link.id)

function App() {
  const { t } = useLanguage()
  const { active, leaving } = useScreen(SCREEN_IDS)
  const isFirstRender = useRef(true)

  // Al cambiar de pantalla, el foco va al título de la nueva (para teclado y lectores de pantalla)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    document.getElementById(`${active}-title`)?.focus({ preventScroll: true })
  }, [active])

  const stateOf = (id) => {
    if (id !== active) return 'hidden'
    return leaving ? 'leaving' : 'active'
  }

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-accent-bright focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-white"
      >
        {t.skip}
      </a>
      <Intro />
      <Navbar active={active} />
      <main id="contenido" tabIndex={-1}>
        {SCREEN_IDS.map((id) => {
          const ScreenComponent = SCREENS[id]
          return <ScreenComponent key={id} state={stateOf(id)} />
        })}
      </main>
      <Footer visible={active === 'contact' && !leaving} />
    </>
  )
}

export default App
