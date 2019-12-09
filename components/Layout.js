const layoutStyle = {
    margin: 20,
    padding: 20,
    backgroundColor: "white"
};

const Layout = props => (
    <div style={layoutStyle}>
        {props.children}
    </div>
);

export default Layout;