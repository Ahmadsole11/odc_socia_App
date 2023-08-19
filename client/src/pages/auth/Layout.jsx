
// eslint-disable-next-line react/prop-types
function Layout({children}) {
  return (
    <div className="grid grid-cols-2 bg-[url('./assets/imgs/bgr.jpeg')] min-h-screen bg-cover bg-no-repeat opacity-100">
        <div className='flex justify-center items-center text-white font-bold'>
            <img src="" alt="" />
            <h1 className='text-2xl space-y-11'>Bienvenue sur mon reseau social</h1>
        </div>
        <div className='flex justify-center items-center'>
            <div className="">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout