import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import TagItemMiddle from './TagItemMiddle'
// Eliminamos la importación de WordCount porque no lo necesitamos para software

export const ArticleInfo = props => {
  const { post } = props
  const { locale } = useGlobal()

  return (
    <section className='mt-2 mb-8 flex flex-col items-center justify-center text-gray-600 dark:text-gray-300'>
      
      {/* 1. Categorías del Software (Centradas y destacadas) */}
      {post.tagItems && post.tagItems.length > 0 && (
        <div className='flex flex-wrap justify-center gap-2 mb-5'>
          {post.tagItems.map(tag => (
            <TagItemMiddle key={tag.name} tag={tag} />
          ))}
        </div>
      )}

      {/* 2. Barra de Especificaciones Técnicas (Ficha de la App) */}
      <div className='flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm bg-gray-50 dark:bg-gray-800 px-6 py-3 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm'>
        {post?.type !== 'Page' && (
          <>
            {/* Fecha de Lanzamiento / Publicación */}
            <SmartLink
              href={`/archive#${post?.publishDate?.substring(0, 7)}`}
              passHref
              className='cursor-pointer flex items-center gap-1.5 hover:text-indigo-500 transition-colors'>
              <i className='fas fa-rocket text-indigo-400' />
              <span className='font-semibold'>Lanzamiento:</span> {post?.publishDay}
            </SmartLink>

            <span className='w-px h-4 bg-gray-300 dark:bg-gray-600 hidden md:block'></span>

            {/* Última Actualización */}
            <span className='flex items-center gap-1.5'>
              <i className='fas fa-sync-alt text-green-500' />
              <span className='font-semibold'>Actualizado:</span> {post.lastEditedDay}
            </span>

            <span className='w-px h-4 bg-gray-300 dark:bg-gray-600 hidden md:block'></span>

            {/* Visitas (actuando como indicador de popularidad) */}
            <span className='hidden busuanzi_container_page_pv flex items-center gap-1.5'>
              <i className='fas fa-fire text-orange-500' />
              <span className='font-semibold'>Interés:</span> <span className='busuanzi_value_page_pv' />
            </span>
          </>
        )}
      </div>
    </section>
  )
}
