import React from 'react'

export const Mapa = () => {
  return (
    <div className='flex justify-center sm:w-[300px] md:w-[500px]'>
        <iframe className='w-full sm:w-[600px] h-[250px] sm:h-[350px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232.03863814266091!2d-104.88744854461402!3d21.483492101580016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737441b433dcf%3A0xebdd6de9fa852d3a!2sPlaza%20Balagan!5e0!3m2!1ses-419!2smx!4v1708972747116!5m2!1ses-419!2smx"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
