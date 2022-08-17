import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Dum Biryani',
    description: 'Mutton & Chicken Dum Biryani, Serves 1',
    price: 450,
  },
  {
    id: 'm2',
    name: 'Mutton Biryani',
    description: 'Butter Chicken Biryani, Serves 1',
    price: 500,
  },
  {
    id: 'm3',
    name: 'Special Thali',
    description: 'Chicken Dum Biryani Boneless - Serves - 2',
    price: 550,
  },
  {
    id: 'm4',
    name: 'Hyderabadi Laziz',
    description: 'Creamy Chicken Tikka Dum Biryani - Serves 2',
    price: 650,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
