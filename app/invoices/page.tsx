"use client"

import { Header } from '@/components/header/header'
import { FaSearch } from "react-icons/fa";
import * as React from "react"
import { EditOuvrier } from '@/components/ouvrier/edit-ouvrier';
import {DataRowOuvrier} from '@/components/ouvrier/data';
import { SibebarGestion } from '@/components/sidebar/sidebar-gestion';
import { EditFactureAccueil } from '@/components/invoice/accueil/edit-invoice';
import { DataRowInvoices } from '@/components/invoice/accueil/data';
import { Button } from '@/components/ui/button';

const page = () => {
    
  return (
    <div className=''>
    <div className="flex h-32">
          <SibebarGestion/>
          <Header/> 
    </div>
    <div className=' m-5 border border-cyan-400 p-7 rounded-md shadow-md'>
        <h1 className='text-3xl m-4'>Mes Factures</h1>
        <div className='m-4 flex justify-end items-center gap-2'>
            <a href="/incoices/invoice"><Button className='bg-cyan-400 hover:text-white text-2xl text-black p-1 hover:bg-cyan-500'>Parametre Facture</Button></a>
            <div className='flex gap-2 rounded-md border-cyan-600 border-2 items-center px-2 py-1'>
                <FaSearch className='text-gray-200'/>
                <input type="text" placeholder='Recherche.............' className='bg-cyan-300 w-2/5  text-black outline-none placeholder:text-gray-200'/>
            </div>
            <EditFactureAccueil/>
        </div>
        <div className='border border-cyan-400 rounded-md m-4 no-scrollbar'>
            <table className='cursor-pointer w-full'>
                <thead className='bg-cyan-400 border-b-4 border-cyan-800'>
                    <tr>
                        <th className=' text-center w-auto px-4 py-1'>Societe</th>
                        <th className=' text-center w-auto px-4 py-1'>N°facture</th>
                        <th className=' text-center w-auto px-4 py-1'>Email</th>
                        <th className=' text-center w-auto px-4 py-1'>Montant TTC</th>
                        <th className=' text-center w-auto px-4 py-1'>Echeance</th>
                        <th className=' text-center w-auto px-4 py-1'>Action</th>
                    </tr>
                </thead>
                <DataRowInvoices />
                <DataRowInvoices />
                <DataRowInvoices />
                <DataRowInvoices />
                <DataRowInvoices />
                <DataRowInvoices />
                <DataRowInvoices />
                <DataRowInvoices />
                <DataRowInvoices />
                <DataRowInvoices />
            </table>
        </div>
    </div>
    </div>
  )
}

export default page