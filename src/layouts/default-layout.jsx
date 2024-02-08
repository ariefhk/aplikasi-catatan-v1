import PropTypes from "prop-types";

const DefaultLayout = ({ children }) => {
    return <main className="overflow-hidden h-screen w-screen">{children}</main>;
};

export default DefaultLayout;

DefaultLayout.propTypes = {
    children: PropTypes.node,
};
