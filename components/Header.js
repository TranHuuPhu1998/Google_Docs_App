
import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import { signOut, useSession } from 'next-auth/client'

const Header = () => {
    
    const [session] = useSession();

    return (
        <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white"> 
            <Button 
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="h-20 w-20 border-0"
            >
                <Icon name="menu" size="3xl"/>
            </Button>
            <Icon name="description" size="5xl" color="blue"/>
            <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>
            <div className="mx-5 md:mx-20 flex flex-grow items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-blue-600 focus-within:shadow-md">
                <Icon name='search' size="3xl" color="gray"/>
                <input 
                type="text"
                placeholder="Search"
                className="w-full bg-gray-100 outline-none bg-transparent px-5"/>
            </div>

            <Button 
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="ml-5 md:ml-20 h-20 w-20 border-0"
            >
                <Icon name="apps" size="3xl" color="gray"/>
            </Button>

            <img 
                onClick={signOut}
                loading="lazy" 
                className="sx:hidden md:inline-flex cursor-pointre h-12 w-12 rounded-full ml-2" 
                src={session?.user?.image} alt="avatar" />
        </div>
    )
}


export default Header
