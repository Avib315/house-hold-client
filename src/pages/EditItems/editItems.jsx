import { NavLink } from 'react-router-dom'
import HeaderTitle from '../../components/HeaderTitle/headerTitle'
import './editItems.scss' 

export default function EditItems(){
  return (
<div className='EditItems'>
<HeaderTitle title={"ערוך מוצרים"}/>
<div className='main'> </div>
<NavLink to="/new-items"> הוסף מוצרים</NavLink>
</div>
  )
}
