import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import navRoutes from './routes'

const Navigation = () => {
    return (
        <div>
            <Navbar color="light" expand="md" light style={{ margin: '10px' }}>
                <NavbarBrand href="/">Home</NavbarBrand>
                <Collapse navbar>
                    <Nav className="me-auto" navbar>
                        {navRoutes.map(({ link, name }) => (
                            <NavItem
                                key={link}
                                style={{ margin: '0 10px', listStyle: 'none' }}
                            >
                                <NavLink
                                    to={link}
                                    style={{
                                        textDecoration: 'none',
                                        fontsize: '1.25rem !important',
                                    }}
                                >
                                    {name}
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
