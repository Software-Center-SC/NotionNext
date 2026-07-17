import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

const Logo = props => {
  const { siteInfo } = props

  return (
    /
      <div className='flex items-center cursor-pointer space-x-3'>
        logo.png'
          alt='Logo'
          className='h-10 w-auto'
        />

        <div className='text-lg hover:scale-110 transform duration-200'>
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
      </div>
    </SmartLink>
  )
}

export default Logo
