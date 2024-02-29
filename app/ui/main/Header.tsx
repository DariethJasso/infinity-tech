import React from 'react'

export  const Header = () => {
  return (
    <header className='w-full bg-cover bg-center h-[250px] xl:h-[300px]' style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/10/elige-mejor-monitor-cada-tipo-juego_1.jpg?tf=3840x)'}}>
       <div className='h-[250px] flex flex-col justify-center' >
         <h1 className='text-white text-4xl font-extrabold text-center'>INFINITY TECH</h1>
         <p className='text-white font-semibold text-center'>La mejor alternativa Gamer</p>
       </div>
      </header>
  )
}
