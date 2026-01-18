
import Image from 'next/image'
import Link from 'next/link';
import Theme from './theme';


const Navbar = () => {
  return (
    <nav className="flex-between w-full background-light900_dark200 shadow-light-300 fixed z-50 sm:px-12 gap-5 p-6 dark:shadow-none ">
        <Link href="/" className="flex-center gap-2">
            <Image 
                src="/images/site-logo.svg"
                alt="DevFlow Logo"
                width={23}
                height={23}
            />
            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
                Dev<span className='text-primary-500'>Flow</span>
            </p>
        </Link>
        <p>Globle search</p>
        <div className='flex-center gap-4'>
            <Theme />
        </div>
    </nav>
  )
}

export default Navbar