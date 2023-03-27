import Navbar from './Navbar/Navbar'


type Props = {
    children? : JSX.Element
}

const LayoutComponent = ({children}:Props) => {
  return (
    <div className='min-w-screen'>
      <Navbar/>
      <main>
        <div>{children}</div>
      </main>
    </div>
  )
}

export default LayoutComponent
