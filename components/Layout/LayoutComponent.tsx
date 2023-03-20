import Navbar from './Navbar'


type Props = {
    children? : JSX.Element
}

const LayoutComponent = ({children}:Props) => {
  return (
    <div className='min-w-screen'>
      <Navbar/>
      <main>
        <>{children}</>
      </main>
    </div>
  )
}

export default LayoutComponent
