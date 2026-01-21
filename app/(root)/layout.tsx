import Navbar from '@/components/navigation/navbar'
import{ ReactNode } from 'react'

const Rootlayout = ({children} : {children: ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Rootlayout