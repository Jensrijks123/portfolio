import NavBar from '../NavBar/NavBar';

const Layout = ({ children }: any) => {
    return (
        <>
            <NavBar title="Portfolio" />
            <main>{children}</main>
        </>
    );
};

export default Layout;
