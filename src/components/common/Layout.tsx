import { FC } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { LayoutProps } from '../../types/layout.type'


const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout