import React from 'react'
import { RiLineChartLine, RiHashtag } from 'react-icons/ri'

export const Main = () => {
  return (
    <>
      {/* Section 1 */}
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-8 '>
        <div className='bg-primary-100 shadow-lg  flex flex-col gap-6 p-8 rounded-xl text-gray-300'>
          <RiLineChartLine className='text-5xl' />
          <h4 className='text-2xl'>Earnings</h4>
          <div className=' text-white text-5xl'>
            &euro; 8,350
          </div>
          <span className='text-center py-2 px-3  rounded-full bg-primary-300/80'>
            +10% since last mounth
          </span>
        </div>
        <div className='p-8 gap-4 bg-white drop-shadow-xl rounded-xl flex flex-col justify-between'>
          <div className='flex items-center gap-4 bg-primary-100/10 rounded-xl py-4'>
            <span className='bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl'>98</span>
            <div>
              <h3 className='font-bold'>
                Rank
              </h3>
              <p className='text-gray-500'>In top 30%</p>
            </div>
          </div>
          <div className='flex items-center gap-4 bg-primary-100/10 rounded-xl py-4 mb-4'>
            <span className='bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl'>32</span>
            <div>
              <h3 className='font-bold'>
                Proyects
              </h3>
              <p className='text-gray-500'>8 this month</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <span className='bg-primary-100/30 py-1 px-4 rounded-full text-gray-600 text-sm'>Mobile app</span>
            <span className='bg-primary-100/30 py-1 px-2 rounded-full text-gray-600 text-sm'>Branding</span>
          </div>
        </div>
        <div className='col-span-1 md:col-span-2 flex flex-col justify-between'>
          <h1 className='text-2xl font-bold mb-8'>Your projects</h1>
          <div className='bg-white p-8 rounded-xl drop-shadow-xl'>
            <div className='flex items-center gap-4 mb-8'>
              <img src='https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=740&t=st=1667960070~exp=1667960670~hmac=0d3a615b39969d0d8cb017acb549b3f467a0e290d1689d8e24b14c69342acf58' className='w-14 h-14 object-cover rounded-full' />
              <div>
                <h3 className='font-bold'>Logo desing for Bakery</h3>
                <p className='text-gray-500'>1 day remaining</p>
              </div>
            </div>
            <div className='flex items-center gap-4 mb-3'>
              <img src='https://img.freepik.com/foto-gratis/guapo-exitoso-hombre-negocios-sonriente_176420-19024.jpg?w=740&t=st=1667960185~exp=1667960785~hmac=799040e527ecde6b4be5f223183db100aaf54a3a2d4827ce64feaa0858e26791' className='w-14 h-14 object-cover rounded-full' />
              <div>
                <h3 className='font-bold'>Personal branding project</h3>
                <p className='text-gray-500'>5 day remaining</p>
              </div>
            </div>
            <div className='flex justify-end'>
              <span className='hover:text-primary-100 hover:underline cursor-pointer transition-colors'>See all projects</span>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className='grid grid-cols-1 md:grid-cols:2 lg:grid-cols-2 gap-8'>
        <div>
          <h1 className='text-2xl font-bold mb-6'>Recent invoices</h1>
          <div className='bg-white p-8 rounded-xl drop-shadow-2xl mb-8'>
            <div className='grid grid-cols-4 gap-4 mb-8'>
              <div className='col-span-2 flex gap-2 items-center'>
                <img src='https://img.freepik.com/foto-gratis/vista-frontal-hombre-sonriente-espacio-copia_23-2148548057.jpg?w=826&t=st=1667962124~exp=1667962724~hmac=e51d085a2270da8d10715b966644fb5334fbd621a1c9f3aadd60d8e66a851c69' className='w-14 h-14 object-cover rounded-full' />
                <div>
                  <h3 className='font-bold'>Alexander Williams</h3>
                  <p className='text-gray-500'>JQ Holdings</p>
                </div>
              </div>
              <div>
                <span className='bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium'>Paid</span>
              </div>

              <span className='font-bold'> &euro; 1,200.87 </span>
            </div>
            <div className='grid grid-cols-4 mb-4 gap-4'>
              <div className='col-span-2 flex gap-2 items-center'>
                <img src='https://img.freepik.com/foto-gratis/hombre-guapo-joven-sonriendo-camara-tomados-mano-bolsillos-pie-contra-fondo-amarillo_1258-73436.jpg?w=740&t=st=1667963125~exp=1667963725~hmac=53e1d0fbf00c5951ba2c38464c6974efffc0e7cdabe13d946e5f0b63adf653f2' className='w-14 h-14 object-cover rounded-full' />
                <div>
                  <h3 className='font-bold'>Jhon Philips</h3>
                  <p className='text-gray-500'>Inchor Techs</p>
                </div>
              </div>
              <div>
                <span className='bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium'>Late</span>
              </div>
              <span className='font-bold'> &euro; 12,998.88 </span>
            </div>
          </div>
          <div className='flex itemsc-center justify-between p-8 text-gray-200 bg-primary-900 rounded-xl drop-shadow-xl'>
            <div>
              <RiHashtag className='text-4xl -rotate-12' />
            </div>
            <div>
              <h5 className='text-gray-100 font-bold'>Engage with clients</h5>
              <p>Join slack channel</p>
            </div>
            <button className='bg-primary-100 py-2 px-4 rounded-xl hover:bg-primary-300/100 text-gray-100 transition-colors'>Join now</button>
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-bold mb-6'>Recommended project</h1>
          <div className='bg-white rounded-xl drop-shadow-xl p-8'>
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-3'>
                <img src='https://img.freepik.com/fotos-premium/hombre-caucasico-joven-sobre-pared-azul-aislada-gafas-feliz_1368-76399.jpg?w=740' className='w-14 h-14 object-cover rounded-full' />
                <div className=''>
                  <h3 className='font-bold'>Thomas Martin</h3>
                  <p className='text-gray-500'>Updated 10m ago</p>
                </div>
              </div>
              <button className='bg-primary-100 py-2 px-4 rounded-full hover:bg-primary-300/100 text-gray-100 transition-colors'>Design</button>
            </div>
            <div className='mb-6'>
              <h4 className='font-bold text-lg'>Need a designer to form branding essentials for my business.</h4>
              <p className='text-gray-500 '>Looking for a talented brand designer to create all the branding materials my new startup.</p>
            </div>
            <div className='bg-primary-100/10 p-8 rounded-xl flex justify-between'>
              <div className='flex items-center gap-1'>
                <span className='text-2xl font-bold'>&euro; 8,700</span>
                <span className='text-sm text-gray-500'>/ month</span>
              </div>
              <button className='bg-transparent text-primary-100 border rounded-xl border-primary-100 py-1 px-3'>Full time</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
