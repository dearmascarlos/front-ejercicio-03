import React from 'react'
import Logo from '../../public/images/Vector.svg'


const SignUp = () => {

  return (
    <div className='h-full flex-1'>
      <Logo 
        className='relative z-10 scale-125 ml-12 mt-8'
      />
      <div 
        style={{
          height: '1100px',
          backgroundImage: `url("./images/bgNetflix.jpg")`,
          filter:'brightness(0.4)'
        }} 
        className='absolute z-0 inset-0 bg-black/50'
      >
      </div>
      <div 
        className='relative m-auto bg-black/60 rounded w-[500px] h-[600px] z-10 mt-8 mb-20 flex flex-col p-20'
      >
        <div className='text-white text-3xl mb-8'>Iniciar sesion</div>
        <div className='flex flex-col gap-3'>
          <input 
            className='bg-neutral-700 h-14 rounded py-2 px-4' 
            placeholder='Correo electrónico'
          />
          <input 
            className='bg-neutral-700 h-14 rounded py-2 px-4' 
            placeholder='Contraseña'
          />
          <button className='bg-red-600 text-white font-semibold h-14 rounded mt-9 '>Iniciar sesión</button>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
            <input 
              type='checkbox'
              className='w-5 h-5 checked:accent-neutral-700'
            /><span className='text-white text-sm font-extralight ml-2'>Recuerdame</span>
            </div>
            <span className='text-white text-sm font-extralight'>¿Necesitas ayuda?</span>
          </div>
          <div className='mt-10'>
            <span className='text-neutral-600 mr-2'>¿Todavía sin Netflix?</span><button className='text-white font-light mb-4 hover:underline'>Suscríbete ya</button><br/>
            <span className='text-neutral-600 text-xs'>Esta página utiliza Google reCAPTCHA para garantizar que no eres robot.</span><span className='text-blue-500 text-xs'>Mas información.</span>
          </div>
        </div>
      </div>

      <footer className='absolute bg-black/80 w-full h-[320px] z-10'>

      </footer>
    </div>
  )
}

export default SignUp