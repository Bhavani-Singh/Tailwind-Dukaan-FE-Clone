import PropTypes from "prop-types";
import TopLeftSideBar from "./TopLeftSideBar"; 
import BottomLeftSideBar from "./BottomLeftSideBar";

function LeftSideBar(props) {
    return (
        <div className={props.className}>
            <TopLeftSideBar />
            <BottomLeftSideBar />
        </div>
    )
}

export default LeftSideBar;

LeftSideBar.propTypes = {
    className: PropTypes.string
}