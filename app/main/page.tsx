'use server'
import { Image, Navbar } from '@nextui-org/react'
import React, { Suspense } from 'react'
import Carousel from '../ui/main/Carousel'
import { Header } from '../ui/main/Header'
import CardCominSoon from '../ui/main/CardCominSoon'
import {Divider} from "@nextui-org/react";
import { Mapa } from '../ui/main/Mapa'
import { fetchSoon } from '../lib/data'
import SkeletonProducts from '../ui/skeletons/skeletonProducts'

export default async function Home()
 {
  const soons  = await fetchSoon();
  const coming =[
    {
      id:"1",
      img:'https://imgmedia.larepublica.pe/640x371/larepublica/original/2021/09/18/6145370ad577fe0c493a6fa3.webp'
    },
    {
      id:"2",
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-OPuk9uz9XFaxE_P21OUjoRciyq70KD3cg&usqp=CAU'
    },
    {
      id:"3",
      img:'https://www.mastekhw.com/wp-content/uploads/2021/10/HyperX-Starter-Streaming-PAck.jpg'
    }
  ]
  return (
    <div className='px-2 py-1 h-[100%]'>
      
      <section className='flex flex-col pt-4 sm:flex-row sm:gap-2 xl:px-[100px] xl:gap-10  xl:justify-between'>
        <div className='sm:w-[50%] xl:w-[700px]'>
          <Carousel/>
        </div>
        <div className='sm:w-[50%] pt-4  xl:w-[700px]'>
          <h1 className='text-3xl font-bold pb-3'>SOBRE NOSOTROS</h1>
          <p className='text-md text-justify font-medium sm:text-sm md:text-[20px]'>
          En <b>Infinity Tech</b> nos especializamos en ofrecerte los mejores periféricos para llevar tu experiencia de juego al siguiente nivel. Desde teclados y ratones con iluminación RGB hasta auriculares con sonido envolvente, tenemos todo lo que necesitas para dominar el campo de batalla virtual. Nuestros productos están diseñados para brindarte precisión, comodidad y estilo mientras te sumerges en tus juegos favoritos. Descubre la diferencia con GamerGear y eleva tu juego a nuevas alturas
          </p>
        </div>
        <div className='flex flex-col justify-center sm:hidden 2xl:w-[800px] 2xl:flex 2xl:flex-row 2xl:gap-4'>
          <Image  
          isBlurred
         
          src="https://imgs.search.brave.com/gWvOTZezHyW4OemRApZuwFtGaYPczp6sKRLOZbx8nkQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvZ2FtaW5nLW1v/ZHMtYngydXc2Y2ox/NHRwam04di5qcGc"
          alt="NextUI Album Cover"
          className="m-5 2xl:h-[200px] 2xl:w-[300px]"/>
          <Image  
          isBlurred
          
          src="https://imgs.search.brave.com/TyeOcub3NFbSvL6IEKJrl4QJW3bV3fvN7kQ7vdj2bJ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaGFsby1pbmZp/bml0ZS1waWN0dXJl/cy13dWhpZHJveTdr/MzhmbnoyLmpwZw"
          alt="NextUI Album Cover"
          className="m-5 2xl:h-[200px] 2xl:w-[300px] "/>
        </div>

      </section>
      <Divider className='my-3'/>
      <section>
        <h1 className='text-3xl font-bold pb-3 text-center'>Proximos Lanzamientos</h1>
        <div className='flex flex-wrap gap-4 h-[100%] flex-beetween justify-center'>
          {
            soons.map((item) => (

                <CardCominSoon key={item.id} img={item.image} name={item.name}/>
              
            ))
          }
        </div>
      </section>
      <Divider className='my-3'/>
      <section>
        
      </section>
    </div>
  )
}
