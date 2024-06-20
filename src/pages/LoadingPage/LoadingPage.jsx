import LoadingAnimation from '../../components/LoadingAnimation/loadingAnimation'
import './LoadingPage.scss'
export default function LoadingPage() {
  return (
    <div className='LoadingPage'>
        <LoadingAnimation />
      <div className='loadingContainer'>
      <h1 className='loader'>דף בטעינה</h1>
      <div className='loaderDotsContainer'>
        <div></div>
        <div></div>
        <div></div>
      </div >
      </div>
    </div>
  )
}
