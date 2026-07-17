import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

const Logo = props => {
  const { siteInfo } = props

  return (
    /
      <div className='flex items-center cursor-pointer space-x-3'>

        <img
          src='/logo.png'
          alt='Logo'
          className='h-10 w-auto'
        />

        <div className='text-lg hover        </div>

      </div>
    </SmartLink>
  )
}

export default Logo
