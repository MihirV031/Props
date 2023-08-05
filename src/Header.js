/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css';
function Header(props) {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logo">
                            <img src={props.logo} alt="" />
                        </div>
                        <ul className="trushil">
                            {props.upermenu.map((upermenu) => (
                                <li><a href="#">{upermenu.menu} <span>{upermenu.icon}</span></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
