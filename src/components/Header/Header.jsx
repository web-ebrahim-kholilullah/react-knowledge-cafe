import './Header.css'
import profile from '../../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between p-4 m-4 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold'>Knowledge-Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;