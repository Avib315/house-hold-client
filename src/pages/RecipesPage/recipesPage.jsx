import { NavLink } from 'react-router-dom'
import HeaderTitle from '../../components/HeaderTitle/headerTitle'
import './recipesPage.scss' 

export default function RecipesPage(){
  return (
<div className='RecipesPage'>
<HeaderTitle title={"מתכונים"}/>
<NavLink className={"addNewRecipeBtn"} to={"addNewRecipe"}> הוסף מתכון חדש</NavLink>
</div>
  )
}
