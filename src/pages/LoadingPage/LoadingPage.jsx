import LoadingAnimation from '../../components/LoadingAnimation/loadingAnimation'
import './LoadingPage.scss'
export default function LoadingPage() {
  return (
    <div className='LoadingPage'>
      <div className="loadingImage"></div>
      <div className='flex-center'>

        <LoadingAnimation />
        <div className='loadingContainer'>
          <h1 className='loader'>דף בטעינה</h1>
          <div className='loaderDotsContainer'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div >
      </div>
    </div>
  )
}
