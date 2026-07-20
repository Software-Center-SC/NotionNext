import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'

/**
 * 文章背景图 (Cabecera del Artículo / Ficha de Software)
 */
export default function PostHero({ post, siteInfo }) {
  const headerImage = post?.pageCoverThumbnail
    ? post?.pageCoverThumbnail
    : siteInfo?.pageCover
  const title = post?.title

  // 1. Detectar si tiene las etiquetas "Top" o "Nuevo" en la columna 'tags'
  const isTop = post?.tags?.includes('Top') || post?.tagItems?.some(tag => tag.name?.toLowerCase() === 'top')
  const isNuevo = post?.tags?.includes('Nuevo') || post?.tagItems?.some(tag => tag.name?.toLowerCase() === 'nuevo')

  return (
    <div
      id='header'
      // Añadido overflow-hidden para que la cinta no se salga del borde
      className='flex h-96 justify-center align-middle items-center w-full relative bg-black overflow-hidden'>
      
      {/* 2. CINTA (RIBBON) ESQUINERA SUPERIOR DERECHA */}
      {(isTop || isNuevo) && (
        <div className='absolute top-0 right-0 w-32 h-32 z-20 pointer-events-none'>
          <div className={`absolute top-6 -right-8 w-40 text-center transform rotate-45 font-bold py-1 shadow-lg text-sm tracking-wider uppercase ${
              isTop ? 'bg-yellow-500 text-yellow-900' : 'bg-red-500 text-white'
            }`}>
            {isTop ? 'TOP' : 'NUEVO'}
          </div>
        </div>
      )}

      {/* Contenedor central (Logo arriba + Título abajo) */}
      <div
        data-wow-delay='.1s'
        className='wow fadeInUp z-10 flex flex-col items-center justify-center w-full px-4'>
        
        {/* LOGO SUPERPUESTO GIGANTE (Ficha Técnica) */}
        {siteConfig('POST_TITLE_ICON') && post?.pageIcon && (
          <div className='w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-hexo-black-gray shadow-2xl rounded-2xl mb-5 relative overflow-hidden border border-white/20 dark:border-gray-800 flex-shrink-0'>
            
            {/* La jaula de centrado infalible (ajustada a tamaño Hero) */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center [&_.notion-icon]:!m-0 [&_.notion-icon]:!block [&_.notion-icon]:!w-full [&_.notion-icon]:!h-full [&_img]:!m-0 [&_img]:!w-full [&_img]:!h-full [&_img]:!object-contain text-6xl leading-none'>
              <NotionIcon icon={post?.pageIcon} />
            </div>

          </div>
        )}

        {/* TÍTULO DEL SOFTWARE */}
        <h1 className='leading-snug font-bold xs:text-4xl sm:text-4xl md:text-5xl md:leading-snug text-4xl shadow-text-md text-center text-white'>
          {title}
        </h1>
      </div>

      {/* IMAGEN DE FONDO (GUI del programa oscurecida) */}
      <LazyImage
        alt={title}
        src={headerImage}
        className='pointer-events-none select-none w-full h-full object-cover opacity-40 absolute'
        placeholder='blur'
        blurDataURL={siteConfig('IMG_LAZY_LOAD_PLACEHOLDER')}
      />
    </div>
  )
}
