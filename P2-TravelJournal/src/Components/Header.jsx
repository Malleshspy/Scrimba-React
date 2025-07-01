import globeImage from '../assets/globe.png';
export default function Header(){
  return(
    <>
    <header>
      <img className='global-img'src={globeImage} alt="global-img" />
      <h1>My Travel Journal..</h1>
    </header>
      
    </>
  )
}