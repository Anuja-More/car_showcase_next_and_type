"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import SearchManufacturer from "./SearchManufacturer"

const SearchButton = ({otherClasses}: {otherClasses: string}) =>(
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
     src="/magnifying-glass.svg"
      alt="maginifying glass"
      width={40}
      height={40}
      className="object-contain"/>
  </button>
)
const SearchBar = () => {
    const[manufacturer, setManuFacturer] =useState("")
    const router = useRouter()
    const [model, setModel] =useState("")
    const handleSearch = (e : React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      if(manufacturer === "" && model === ""){
        return alert('please fill in the search bar')
      }
      updateSearchParams(model.toLocaleLowerCase(), manufacturer.toLocaleLowerCase())
    }
    const updateSearchParams = (model: string, manufacturer: string) =>{
    const searchParams = new URLSearchParams(window.location.search);
    if(model){
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if(manufacturer){
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.Push(newPathname);
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar_item">
        <SearchManufacturer manufacturer={manufacturer}
         setManufacturer={setManuFacturer}/>
         <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className="searchbar__item">
          <Image src="/modal-icon.png" 
          width={25} height={25}
          className="absolute w-[20px] ml-4"
          alt="car model"/>
           <input type="text" name="model" value={model} 
        onChange={(e)=>setModel(e.target.value)}
        placeholder="tiguan"
        className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden"/>
        </div> 
        <SearchButton otherClasses="sm:hidden"/>
    </form>
  )
}

export default SearchBar