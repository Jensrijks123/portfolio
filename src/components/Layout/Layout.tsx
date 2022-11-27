import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
    return (
        <div style={{ border: 2, padding: 2, borderColor: 'black', borderStyle: 'dashed', margin: 5, width: 500, height: 500 }}>
            <Outlet />
        </div>
    );
};

export default Layout;
