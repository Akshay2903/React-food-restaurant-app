import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Paneer Masala Dosa',
      description: 'Finest South Indian Dish',
      price: 140,
    },
    {
      id: 'm2',
      name: 'Biryani',
      description: 'A Hyderabadi specialty!',
      price: 100,
    },
    {
      id: 'm3',
      name: 'Makke di Roti with Sarso da Saag',
      description: 'O ho Punjabi',
      price: 120,
    },
    {
      id: 'm4',
      name: 'Chole Bhature',
      description: 'Dilli ka Dil',
      price: 90,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal =>
         <MealItem key ={meal.id}
         id = {meal.id}
         name = {meal.name}
         description = {meal.description}
         price = {meal.price}
         />)

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals;