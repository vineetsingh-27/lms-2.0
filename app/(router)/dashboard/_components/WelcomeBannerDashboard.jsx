import Image from 'next/image'

function WelcomeBannerDashboard({user}) {
  return (
    <div className='bg-purple-100 rounded-sm p-5 flex gap-5 items-center'>
        <Image src={'/panda.jpg'}
        alt='panda'
        width={150}
        height={150}/>
        <div>
    <h2 className='text-[32px] font-light'>Welcome Back,</h2>
    <span className='font-bold text-primary'>{user?.fullName}</span>
    <h2 className='text-[16px] font-light text-slate-500'>Let's Begin Learning where you left off,
    Keep it up and improve your progress</h2>
    </div>
    </div>
  )
}

export default WelcomeBannerDashboard
