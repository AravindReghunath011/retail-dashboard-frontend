/* eslint-disable react/prop-types */

const RegisterEmployee = ({onClick}) => {
  return (
    <div onClick={onClick} className='flex   '>
      <div className='border border-black p-5 w-80 h-48 rounded-3xl  '>
        <img 
        className='h-10 w-10 mb-3'
        src="src/assets/black.svg" alt="" />
        <span className='text-2xl font-semibold  text-gray-800'>Register New Employee</span>
        <div className=' h-14 w-14 ml-48 mt-3 border border-black rounded-2xl p-2'>
          <img 
          className='h-10 w-10'
          src="src/assets/plus.svg" alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default RegisterEmployee