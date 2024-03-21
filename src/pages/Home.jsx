import Hero from '../components/Hero'
import wave from '../assets/wave.svg'

const Home = () => {
  return (
    <main className=" flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
      <Hero />
      <img src={wave} alt="" className='absolute bottom-0 w-full'/>
    </main>
  );
};

export default Home;
