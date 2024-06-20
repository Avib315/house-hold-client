import './loadingAnimation.scss' 
import cart from "../../assets/cart.svg"
import wheel from "../../assets/cartWheel.svg"
import milk from "../../assets/milk.svg"
import bread from "../../assets/bread.svg"
import coca from "../../assets/coca-cola.svg"
import clean from "../../assets/clean.svg"
export default function LoadingAnimation(){
  return (
<div className='LoadingAnimation'>
<img src={cart} className='cart' alt="loading-image" />
<img src={wheel} className='wheel' alt="loading-image" />
<img src={wheel} className='wheel' alt="loading-image" />
<img src={milk} className='items milk' alt="loading-image" />
<img src={bread} className='items bread' alt="loading-image" />
<img src={coca} className='items coca' alt="loading-image" />
<img src={clean} className='items clean' alt="loading-image" />
</div>
  )
}
