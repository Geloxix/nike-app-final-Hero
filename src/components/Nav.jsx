import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="#">
                    <img 
                        src="neki.png"
                        alt='Logo'
                        width={130}
                        height={29}
                    />
                </a>
                <ul className='flex-1 flex items-center justify-center gap-16 max-lg:hidden'>
                    {
                        navLinks.map((item) => (
                            <li key={item.label}>
                                <a 
                                    href={item.href}
                                    className='font-monserrat leading-normal text-lg text-slate-gray'
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className='hidden max-lg:block'>
                    <img 
                        src={hamburger} 
                        alt="hamburger" 
                        width={25}
                        height={25}
                        className='cursor-pointer'
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav;