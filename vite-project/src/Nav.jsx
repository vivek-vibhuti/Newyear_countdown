import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
    return (
        <div className="flex justify-between items-center bg-purple-500 text-white font-extrabold p-2">
            <div className="flex space-x-8 bg-purple-500 text-2xl ">
                <a className="p-2 bg-purple-500" href="http://" target="_blank" rel="noopener noreferrer" aria-label="Home">home</a>
                <a className="p-2 bg-purple-500" href="http://" target="_blank" rel="noopener noreferrer" aria-label="View">view</a>
                <a className="p-2 bg-purple-500" href="http://" target="_blank" rel="noopener noreferrer" aria-label="Pricing">pricing</a>
                <a className="p-2 bg-purple-500" href="http://" target="_blank" rel="noopener noreferrer" aria-label="Resource">resource</a>
                <a className="p-2 bg-purple-500" href="http://" target="_blank" rel="noopener noreferrer" aria-label="Review">review</a>
            </div>
            <FontAwesomeIcon icon={faBars} className="text-white p-2 cursor-pointer " aria-label="Menu" />
        </div>
    );
};
