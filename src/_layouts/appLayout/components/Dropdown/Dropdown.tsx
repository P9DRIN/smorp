import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Button } from './DropdownStyle'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import './style.css'
import { Scroll, SignOut, UserList } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function DropDown(){
    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button className='classe'><HamburgerMenuIcon width={32} height={32}/></Button>
            </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
            <DropdownMenu.Content className="dropdownContent">
                <Link to='/profile'>
                <DropdownMenu.Item className='dropdownItem'>
                    <UserList className='svg'/>Perfil
                </DropdownMenu.Item>
                </Link>
                <Link to='/orders'>
                <DropdownMenu.Item className='dropdownItem'>
                    <Scroll className='svg'/>Pedidos
                </DropdownMenu.Item>
                </Link>
                <Link to='/auth'>
                <DropdownMenu.Item className="dropdownItem">
                    <SignOut className='svg'/>Logout
                </DropdownMenu.Item>
                </Link>
            </DropdownMenu.Content>
        </DropdownMenu.Portal>

        </DropdownMenu.Root>
    )
}