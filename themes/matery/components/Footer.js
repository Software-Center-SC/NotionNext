import { siteConfig } from '@/lib/config'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const copyrightDate = (function () {
    if (
      Number.isInteger(siteConfig('SINCE')) &&
      siteConfig('SINCE') < currentYear
    ) {
      return siteConfig('SINCE') + '-' + currentYear
    }
    return currentYear
  })()

  return (
    <footer className='relative z-10 w-full bg-white dark:bg-hexo-black-gray border-t dark:border-black py-8 mt-8'>
      <div className='text-center text-gray-500 dark:text-gray-400 text-sm'>
        {/* Copyright */}
        <p>
          &copy; {copyrightDate} {siteConfig('AUTHOR') || title}. Todos los derechos reservados.
        </p>
        
        {/* Enlaces básicos de navegación */}
        <div className='mt-2 space-x-4'>
          <a href="/" className='hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'>
            Inicio
          </a>
          <a href="/archive" className='hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'>
            Archivo
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
