
import profile from '../../assets/profile.png'
import './Header.css'

const Header = () => {
    return (
        <div className='card-container flex justify-between'>
            <h1>Knowledge Cafe React</h1>
            <img src={profile}></img>
        </div>

    );
};

export default Header;