import "../../Style/Footer.css";
const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="col-1">
          <p> &#169;{new Date().getFullYear()} - Gianfranco De Pace</p>
          <br />
          <p> Made in React.js </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
