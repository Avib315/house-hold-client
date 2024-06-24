import HeaderTitle from '../../components/HeaderTitle/headerTitle'
import { Input } from '../../components/Input/input'
import './addNewRecipe.scss' 

export default function AddNewRecipe(){
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
  return (
<div className='AddNewRecipe'>
<HeaderTitle title={"מתכון חדש"} /> 
<form  onSubmit={submitHandler}>
<div className='inputContainer'>
    <Input name="name" placeholder="שם המתכון" />
</div>
<div className='inputContainer'>
    <Input name="cookingTime" placeholder="זמן הכנה" />
</div>
<div className='textareaContainer'>
<textarea name="description" placeholder='תיאור'></textarea>
</div>
</form>
</div>
  )
}
