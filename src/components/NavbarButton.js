import React from 'react';

function NavbarButton(props) {
    return (
        <li className={`flex items-center p-2 rounded-md text-sm gap-x-2 text-emerald-600 sm:px-4 sm:py-2 px-2 py-1 hover:bg-emerald-600 hover:text-gray-200 transition duration-300 font-semibold`}>
            <a href={props.url} className="flex items-center">{props.children}</a>
        </li>
    );
}

export default NavbarButton;

