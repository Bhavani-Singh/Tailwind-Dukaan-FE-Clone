import PropTypes from "prop-types";
import Navbar from "./Navbar";

function MainContent(props) {
    return (
        <div className={props.className}>
           <div>
                <Navbar />
           </div>

           <div>

           </div>
        </div>
    )
}

export default MainContent;

MainContent.propTypes = {
    className: PropTypes.string
}