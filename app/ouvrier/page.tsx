"use client"

import { Header } from '@/components/header/header'
import { FaSearch } from "react-icons/fa";
import * as React from "react"
import { EditOuvrier } from '@/components/ouvrier/edit-ouvrier';
import {DataRowOuvrier} from '@/components/ouvrier/data';
import { SibebarGestion } from '@/components/sidebar/sidebar-gestion';

const page = () => {
    
  return (
    <div className=''>
    <div className="flex h-32">
          <SibebarGestion/>
          <Header/> 
    </div>
    <div className=' m-5 border border-cyan-400 p-7 rounded-md shadow-md'>
        <h1 className='text-3xl m-4'>Mes Ouvriers</h1>
        <div className='m-4 flex justify-end items-center gap-2'>
            <div className='flex gap-2 rounded-md border-cyan-600 border-2 items-center px-2 py-1'>
                <FaSearch className='text-gray-200'/>
                <input type="text" placeholder='Recherche.............' className='bg-cyan-300 w-2/5  text-black outline-none placeholder:text-gray-200'/>
            </div>
            <EditOuvrier/>
        </div>
        <div className='border border-cyan-400 rounded-md m-4 no-scrollbar'>
            <table className='cursor-pointer w-full'>
                <thead className='bg-cyan-400 border-b-4 border-cyan-800'>
                    <tr>
                        <th className=' text-center w-auto px-4 py-1'>Nom</th>
                        <th className=' text-center w-auto px-4 py-1'>Prenom</th>
                        <th className=' text-center w-auto px-4 py-1'>Telephone</th>
                        <th className=' text-center w-auto px-4 py-1'>Rue</th>
                        <th className=' text-center w-auto px-4 py-1'>Code Postal</th>
                        <th className=' text-center w-auto px-4 py-1'>Ville</th>
                        <th className=' text-center w-auto px-4 py-1'>Poste</th>
                        <th className=' text-center w-auto px-4 py-1'>Prix Journalier</th>
                        <th className=' text-center w-auto px-4 py-1'>Action</th>
                    </tr>
                </thead>
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
                <DataRowOuvrier />
            </table>
        </div>
    </div>
    </div>
  )
}

export default page