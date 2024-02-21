import { Bag, PencilLine } from "phosphor-react";
import { Container, ContentContainer, DropdownContainer, Header, Logo } from "./style";
import { Link } from "react-router-dom";
import { DropDown } from "../../appLayout/components/Dropdown/Dropdown";
import { useContext, useState } from "react";
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../../context/AuthContext";


const editAccountSchema = z.object({
    fullName: z.string(),
    email: z.string(),
    street: z.string(),
    houseNumber: z.string().max(6, { message: "O número da casa precisa ter, no máximo, 6 digitos" }),
    zipCode: z.string().max(8, { message: "O CEP deve ter 8 digitos" }),
    city: z.string(),
    federalUnit: z.string().max(2, { message: "A sigla do estado deve ter dois caracteres" }),
})

type editAccountInputs = z.infer<typeof editAccountSchema>

export function ProfilePage(){
    
    const { editAccount, info, getUserInfo } = useContext(AuthContext)
    const [editingMode, setEditingMode] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors },
    } = useForm<editAccountInputs>({
        defaultValues: {
            fullName: info?.fullName,
            email: info?.email,
            street: info?.address[0].street,
            houseNumber: info?.address[0].houseNumber,
            zipCode: info?.address[0].zipCode,
            city: info?.address[0].city,
            federalUnit: info?.address[0].federalUnit,
        },
        resolver: zodResolver(editAccountSchema)
    })

    function handleEdit(){
        setEditingMode(!editingMode)
    }
    
    async function handleUpdateAccount(data: editAccountInputs){
        
        const { street, houseNumber, zipCode, city, federalUnit } = data

        await editAccount({
            street,
            houseNumber,
            zipCode,
            city,
            federalUnit
        })
        setEditingMode(!editingMode)
        getUserInfo()
    }

    return(
        <>
        <Header>
            <Link to="/">
            <Logo>
                <span>S</span>
                <Bag size={26} weight="bold"/>
                <span>ORP!</span>
            </Logo>
            </Link>
            <DropdownContainer>
            <DropDown/>
            </DropdownContainer>
        </Header>
        <Container>
            
               <div className="editArea">
               <span className="perfil">Meu Perfil</span> 
                <button className="editButton">
                <PencilLine
                size={22}
                onClick={handleEdit}
                />
                </button>
                
            </div>
            <ContentContainer onSubmit={handleSubmit(handleUpdateAccount)}>
            <label>
            Identificação
            <label>Nome
            <input disabled {...register('fullName')}/>
            </label>

            <label>Email
            <input disabled {...register('email')}/>
            </label>
            </label>

            <label>
            Endereço
            <label>Rua
            <input disabled={!editingMode} {...register('street')} required/>
            </label>

            <label>Número da rua
            <input disabled={!editingMode} {...register('houseNumber')} required/>
            </label>

            <label>Código Postal
            <input disabled={!editingMode} {...register('zipCode')} required/>
            </label>

            <label>Cidade
            <input disabled={!editingMode} {...register('city')} required/>
            </label>

            <label>Estado
            <input disabled={!editingMode} {...register('federalUnit')} required />
            </label>
            </label>

            {errors.houseNumber  || errors.zipCode || errors.federalUnit ? (
                <span>{errors.houseNumber?.message || errors.zipCode?.message || errors.federalUnit?.message}</span>
            )
                : null
        }

            {
                editingMode ?
                <button type="submit" className="sendForm" disabled={isSubmitting}>Salvar</button>
                :
                <></>
            }
            

            </ContentContainer>
        </Container>
        </>
    )

}