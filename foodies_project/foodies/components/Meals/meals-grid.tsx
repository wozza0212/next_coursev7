import MealItem from './meal-item'
import { MealItemType } from './meal-types'
import styles from './meals-grid.module.css'

const MealsGrid = ({meals} : {meals: MealItemType[]}) => {
    return(
        <ul className={styles.meals}>
            {meals.map(meal => <li key={meal.id}>
                <MealItem {...meal} />
            </li>)}
        </ul>
    )
}

export default MealsGrid