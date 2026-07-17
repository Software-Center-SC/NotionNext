import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

const Logo = props => {
  const { siteInfo } = props

  return (
    <SmartLinkiv className='flex items-center cursor-pointer space-x-3'>
        /logo.png='Logo'
          className='h-10 w-auto'
        />

        <div className='text-lg p-1.5 rounded dark:border-white hover:scale-110 transform duration-200'>
          {siteInfo?.title || siteConfig('TITLE')}
        </div>
      </div>
    </SmartLink>
  )
}

export default Logo
