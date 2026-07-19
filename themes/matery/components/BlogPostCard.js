import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import TwikooCommentCount from '@/components/TwikooCommentCount'
import { siteConfig } from '@/lib/config'
import { formatDateFmt } from '@/lib/utils/formatDate'
import SmartLink from '@/components/SmartLink'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'

/**
 * 博客列表：文章卡牌
 * @param {*} param0
 * @returns
 */
const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview =
    siteConfig('MATERY_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  // matery 主题默认强制显示图片
  if (post && !post.pageCoverThumbnail) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }
  const showPageCover =
    siteConfig('MATERY_POST_LIST_COVER', null, CONFIG) &&
    post?.pageCoverThumbnail
  const delay = (index % 3) * 300

  return (
    <div
      data-aos='zoom-in'
      data-aos-duration='500'
      data-aos-delay={delay}
      data-aos-once='true'
      data-aos-anchor-placement='top-bottom'
      className='w-full mb-4 overflow-hidden shadow-md border dark:border-black rounded-xl bg-white dark:bg-hexo-black-gray flex flex-col h-full'>
      
      {/* Contenedor principal de la tarjeta */}
      <header className='group flex flex-col h-full justify-between'>
        
        {/* 头部图片 (Fondo de la interfaz del software) */}
        {showPageCover && (
          <SmartLink href={post?.href} passHref legacyBehavior>
            <div className='flex w-full h-40 md:h-48 relative duration-200 rounded-t-xl cursor-pointer transform overflow-hidden bg-gray-100 dark:bg-gray-800'>
              <LazyImage
                src={post?.pageCoverThumbnail}
                alt={post.title}
                className='h-full w-full group-hover:scale-105 group-hover:brightness-90 rounded-t-xl transform object-cover duration-500'
              />
            </div>
          </SmartLink>
        )}

        {/* Área inferior blanca de texto e iconos */}
        <main className='flex flex-col flex-grow relative'>
          
          {/* LOGO SUPERPUESTO (Efecto App Store / macOS) */}
          {siteConfig('POST_TITLE_ICON') && (
            <div className='flex justify-center -mt-10 relative z-10'>
              <SmartLink href={post?.href} passHref legacyBehavior>
                <div className='w-20 h-20 bg-white dark:bg-hexo-black-gray shadow-lg rounded-2xl flex items-center justify-center cursor-pointer transition-transform duration-300 group-hover:-translate-y-1 border border-gray-100 dark:border-gray-800'>
                  <div className='text-4xl flex-shrink-0'>
                    <NotionIcon icon={post.pageIcon} />
                  </div>
                </div>
              </SmartLink>
            </div>
          )}

          <div className='p-3 md:p-4 pt-3 flex flex-col flex-grow w-full text-gray-700 dark:text-gray-300'>
            
            {/* Título centrado debajo del logo */}
            <SmartLink href={post?.href} passHref legacyBehavior>
              <h2 className='text-center w-full text-gray-900 dark:text-gray-100 text-sm md:text-base font-bold line-clamp-2 leading-tight mb-2 cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400'>
                {post.title}
              </h2>
            </SmartLink>

            {/* Resumen */}
            {(!showPreview || showSummary) && post.summary && (
              <p className='text-center hidden md:block replace my-1 text-sm font-light leading-5 line-clamp-2 text-gray-600 dark:text-gray-400'>
                {post.summary}
              </p>
            )}

            {/* Fecha y Categoría (Tu contenido actual intacto) */}
            <div className='text-gray-500 dark:text-gray-400 justify-between flex mt-auto pt-3 items-end'>
              <div>
                <span className='font-light text-xs leading-4 mr-1 md:mr-3 flex items-center'>
                  <i className='far fa-clock mr-1' />
                  {new Date(post.date?.start_date || post.lastEditedDay)
                    .toLocaleDateString('es-ES')
                    .replaceAll('/', '.')}
                </span>
                <TwikooCommentCount
                  post={post}
                  className='hover:underline cursor-pointer text-xs'
                />
              </div>
              <SmartLink
                href={`/category/${post.category}`}
                passHref
                className='cursor-pointer font-medium text-xs hover:underline hover:text-indigo-600 dark:hover:text-indigo-400 transform whitespace-nowrap bg-indigo-50 text-indigo-500 dark:bg-indigo-900/30 dark:text-indigo-300 px-3 py-1 rounded-full'>
                <i className='mr-1 far fa-folder' />
                {post.category}
              </SmartLink>
            </div>
          </div>

          {/* Tags */}
          {post?.tagItems && post?.tagItems.length > 0 && (
            <>
              <hr className='border-gray-100 dark:border-gray-800' />
              <div className='text-gray-400 justify-between flex px-4 py-3'>
                <div className='md:flex-nowrap flex-wrap md:justify-start inline-block'>
                  <div>
                    {post.tagItems.map(tag => (
                      <TagItemMini key={tag.name} tag={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </header>
    </div>
  )
}

export default BlogPostCard