'use client'
import { Divider } from "@nextui-org/react"
import Footer from "../ui/main/Footer"
import NavBar from "../ui/main/NavBar"
import { Header } from "../ui/main/Header"

export default function Layout({children}:{
    children: React.ReactNode
}) {
    return (
        <div className="">
            <NavBar/>
            <Header/>
            {children}
            <Divider className='my-3'/>

            <Footer/>
        </div>
    )
}