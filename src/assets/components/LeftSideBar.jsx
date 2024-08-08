import PropTypes from "prop-types";
import TopLeftSideBar from "./TopLeftSideBar"; 
import BottomLeftSideBar from "./BottomLeftSideBar";

function RightSideBar(props) {
    return (
        <div className={props.className}>
            <TopLeftSideBar />
            <BottomLeftSideBar />
        </div>
    )
}

export default RightSideBar;

RightSideBar.propTypes = {
    className: PropTypes.string
}