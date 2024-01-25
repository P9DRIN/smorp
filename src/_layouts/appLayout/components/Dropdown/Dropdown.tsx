import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Button } from './DropdownStyle'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import './style.css'
import { SignOut } from 'phosphor-react'

export function DropDown(){
    return(
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button className='classe'><HamburgerMenuIcon width={32} height={32}/></Button>
            </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
            <DropdownMenu.Content className="dropdownContent">
                <DropdownMenu.Item className="dropdownItem">
                    <SignOut className='svg'/>Logout
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Portal>

        </DropdownMenu.Root>
    )
}