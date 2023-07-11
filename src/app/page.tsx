import Image from 'next/image'
import Navbar from '../components/Navbar'
import bgImage from '../assets/pexels-chevanon-photography-324028.jpg';

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className='absolute w-full h-full max-h-[763px]'>
        <Image src={bgImage} fill alt="koffie" priority quality={100}/>
      </div>
    </main>
  )
}
