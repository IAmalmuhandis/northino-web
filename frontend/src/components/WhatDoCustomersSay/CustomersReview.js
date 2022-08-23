import classes from "./_customersReview.module.scss";
import ReviewBox from "./ReviewBox";
import "../../base/_typography.scss";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
const CustomersReview = () => {
  return (
    <div className={classes.section__reviews}>
      <h3 className="heading-secondary--main u-margin-buttom-medium">
        What Do our Customers Say?
      </h3>
      <div className="row">
        <ReviewBox
          boxNo="1"
          name="Zakariyya Yusuf Zakari"
          title="Wow! My life is completely different now"
          review="I have really learnt alot from Northino TV, I like it that you guys
          use Hausa Language and i was able to learn more about the Field of
          Technology and how i can specialise at a specific area in the
          technology field."
        />
        <ReviewBox
          boxNo="2"
          name="Abdulhamid Majia"
          title="Northino TV is the best e-learning platform"
          review="Before i used to find it difficult to learn things on my own, but since i started using the platform i can now learn things very quickly, am also getting motivated with their motivations"
        />
        <ReviewBox
          boxNo="3"
          name="Zarah Ali Garba"
          title="Thank you for taking my business to the next level"
          review="Northino got my business to a professional standard, they really offer their services efficiently and in a professional "
        />
      </div>
    </div>
  );
};
export default CustomersReview;
