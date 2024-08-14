import PropTypes from "prop-types";
import Navbar from "./Navbar";
import OverView from "./OverView";
import Table from "./Table";
import Footer from "./Footer";

function MainContent(props) {
    return (
        <div className={props.className}>
           <div>
                <Navbar />
           </div>

           <div className="flex flex-col gap-4 p-4 justify-between">
                <OverView />
                <Table />
                <Footer />
           </div>
        </div>
    )
}

export default MainContent;

MainContent.propTypes = {
    className: PropTypes.string
}