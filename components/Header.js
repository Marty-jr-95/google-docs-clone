import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";

const Header = () => {

    const [session] = useSession();
    return (
        <header className="flex items-center w-full sticky top-0 z-50 px-4 py-2 shadow-md bg-white">
            <Button color="gray" buttonType="outline" rounded={true} iconOnly={true} ripple="dark" className="hidden md:inline-flex h-20 w-20 border-0"><Icon name="menu" size="3xl" /></Button>
            <Icon name="description" size="3xl" color="blue" />
            <h1 className="ml-2 text-gray-700">Docs</h1>

            <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="darkgray" />
                <input type="text" placeholder="Search" className="flex-grow px-5 text-base outline-none bg-transparent"/>
            </div>

            <Button color="gray" buttonType="outline" rounded={true} iconOnly={true} ripple="dark" className="ml-5 md:ml-20 h-20 w-20 border-0"><Icon name="apps" size="3xl" /></Button>

            <img loading="lazy" className="cursor-pointer h-12 w-12 rounded-full ml-2"  src={session?.user?.image} onClick={signOut}/>
        </header>
    )
}

export default Header
