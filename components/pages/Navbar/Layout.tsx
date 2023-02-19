import Navbar from './Navbar'
type Props = {
    children? : JSX.Element
}
 function Layout({children}:Props) {
  return (
    <div>
      <Navbar/>
       {children}
    </div>
  )
}

export default Layout