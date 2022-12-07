import React from 'react';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul>
                <li><a id="logo" href="/">Logo</a></li>
                <div>
                    <button>Sign up</button>
                    <button>Log in</button>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;
