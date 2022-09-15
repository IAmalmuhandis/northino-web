import Navigation from "../layout/Navigation";
import "../layout/_grid.scss";
import "../base/_utilities.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import Footer from "../layout/Footer";
import VideosList from "../components/VideosList/VideosList";
const TVCourseSection = (props) => {
  const header =
    props.course === "interviews"
      ? "Techies Interview"
      : props.course === "learn-with-almuhandis"
      ? "Learn With Almuhandis"
      : props.course === "do-it-yourself"
      ? "Do it Yourself"
      : props.course === "business-management-training"
      ? "Business Management Training"
      : props.course === "motivational-videos"
      ? "Motivational Videos"
      : "";
  const subHeader =
    props.course === "interviews"
      ? "Amazing Techies from our community"
      : props.course === "learn-with-almuhandis"
      ? "The Journey of becoming a Web Developer"
      : props.course === "do-it-yourself"
      ? "Learn how to do things easily"
      : props.course === "business-management-training"
      ? "Learn how to run a successful business"
      : props.course === "motivational-videos"
      ? "You can and you will"
      : "";
  const pageNo =
    props.course === "interviews"
      ? "7"
      : props.course === "learn-with-almuhandis"
      ? "8"
      : props.course === "do-it-yourself"
      ? "9"
      : props.course === "business-management-training"
      ? "10"
      : props.course === "motivational-videos"
      ? "11"
      : "";
  return (
    <div>
      <Navigation />
      <HeroSection pageNo={pageNo} mainHeader={header} subHeader={subHeader} />
      <VideosList course={props.course} />
      <Footer />
    </div>
  );
};
export default TVCourseSection;
