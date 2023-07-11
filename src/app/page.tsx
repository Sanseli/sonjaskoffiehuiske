import Image from 'next/image'
import Navbar from '../components/Navbar'
import bgImage from '../assets/pexels-chevanon-photography-324028.jpg';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className='absolute w-full h-full max-h-[85vh] overflow-hidden'>
        <Image src={bgImage} alt="koffie"  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', justifyContent: 'center' }}/>
      </div>
    </main>
  )
}
