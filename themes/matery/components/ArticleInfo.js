import SmartLink from '@/components/SmartLink'
import { useGlobal } from '@/lib/global'
import TagItemMiddle from './TagItemMiddle'

export const ArticleInfo = props => {
  const { post } = props
  const { locale } = useGlobal()

  // Capturamos las propiedades tanto si vienen directas como si están en el sistema de Notion
  const categoria = post?.category || post?.Category
  const plataforma = post?.Plataforma || post?.plataforma || post?.properties?.Plataforma?.value
  const precio = post?.Precio || post?.precio || post?.properties?.Precio?.value
  const version = post?.Versión || post?.version || post?.Version || post?.properties?.Versión?.value

  // Lógica de fecha estandarizada: Prioriza tu columna 'date' de Notion (Igual que en la portada)
  const dateObj = new Date(post?.date?.start_date || post?.lastEditedDay)
  const formattedDate = dateObj.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replaceAll('/', '.')

  return (
    <section className='mt-8 mb-8 flex justify-center'>
      {/* Contenedor principal de la tabla (Estilo Tarjeta) */}
      <div className='w-full max-w-2xl bg-white dark:bg-hexo-black-gray rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-2 md:p-6'>
        
        <div className='flex flex-col divide-y divide-gray-100 dark:divide-gray-800'>
          
          {/* 1. FILA: CATEGORÍA */}
          {categoria && (
            <div className='py-4 px-2 flex items-center justify-between'>
              <div className='flex items-center text-gray-500 dark:text-gray-400'>
                <i className='fas fa-layer-group w-6 text-center mr-2'></i>
                <span className='font-medium text-sm md:text-base'>Categoría</span>
              </div>
              <div>
                <SmartLink
                  href={`/category/${categoria}`}
                  className='px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300 hover:underline'>
                  {categoria}
                </SmartLink>
              </div>
            </div>
          )}

          {/* 2. FILA: PLATAFORMA */}
          {plataforma && (
            <div className='py-4 px-2 flex items-center justify-between'>
              <div className='flex items-center text-gray-500 dark:text-gray-400'>
                <i className='fas fa-desktop w-6 text-center mr-2'></i>
                <span className='font-medium text-sm md:text-base'>Plataforma</span>
              </div>
              <div className='flex flex-wrap gap-2 justify-end'>
                {Array.isArray(plataforma) ? (
                  plataforma.map((plat, idx) => (
                    <span key={idx} className='px-3 py-1 text-xs md:text-sm font-medium rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'>
                      {typeof plat === 'object' ? plat.name : plat}
                    </span>
                  ))
                ) : (
                  <span className='px-3 py-1 text-xs md:text-sm font-medium rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'>
                    {plataforma}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* 3. FILA: PRECIO */}
          {precio && (
            <div className='py-4 px-2 flex items-center justify-between'>
              <div className='flex items-center text-gray-500 dark:text-gray-400'>
                <i className='fas fa-tag w-6 text-center mr-2'></i>
                <span className='font-medium text-sm md:text-base'>Precio</span>
              </div>
              <div>
                <span className='px-4 py-1 text-xs md:text-sm font-bold rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400'>
                  {typeof precio === 'object' ? precio.name || precio.string : precio}
                </span>
              </div>
            </div>
          )}

          {/* 4. FILA: VERSIÓN Y FECHA (Actualizada) */}
          {version && (
            <div className='py-4 px-2 flex items-center justify-between'>
              <div className='flex items-center text-gray-500 dark:text-gray-400'>
                <i className='fas fa-code-branch w-6 text-center mr-2'></i>
                <span className='font-medium text-sm md:text-base'>Versión</span>
              </div>
              <div className='text-right'>
                <div className='text-gray-900 dark:text-gray-100 font-semibold text-sm md:text-base'>
                  {typeof version === 'object' ? version.name || version.string : version}
                </div>
                <div className='text-gray-400 text-xs mt-1'>
                  {/* Aquí inyectamos la variable estandarizada */}
                  Actualizado: {formattedDate}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
