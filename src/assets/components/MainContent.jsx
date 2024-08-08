import PropTypes from "prop-types";

function MainContent(props) {
    return (
        <div className={props.className}>
            I am main content
        </div>
    )
}

export default MainContent;

MainContent.propTypes = {
    className: PropTypes.string
}