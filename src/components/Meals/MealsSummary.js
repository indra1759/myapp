import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
      The word “biryani” comes from the Persian word “birian” which means “fried before cooking.” One could conclude that the biryani originated in Iran (previously known as Persia). Another interesting story traces the origins of the dish to Mumtaz Mahal (1593-1631), Shah Jahan’s queen who inspired the Taj Mahal. It is said that she once visited army barracks and found the army personnel under-nourished. 
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
