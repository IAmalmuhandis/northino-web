import classes from "./_ourReports.module.scss";
import "../../base/_typography.scss";
import "../../base/_utilities.scss";
import "../../layout/_grid.scss";
import ReportBox from "./ReportBox";
const OurReports = () => {
  return (
    <div className={classes.section__ourReport}>
      <h2 className={"heading-secondary " + classes.section__ourReport__header}>
        Our Report
      </h2>
      <div className="row">
        <div className="col-1-of-3">
          <ReportBox heading="Available Courses" details="15" />
        </div>
        <div className="col-1-of-3">
          <ReportBox heading="Our Tutors" details="1500" />
        </div>
        <div className="col-1-of-3">
          <ReportBox heading="Total Subscribers" details="1850" />
        </div>
      </div>
    </div>
  );
};
export default OurReports;
