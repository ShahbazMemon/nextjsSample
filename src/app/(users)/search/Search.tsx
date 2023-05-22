"use client"
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    setSearch("");
    console.log("Search >>", search);
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type = "text"
        value = {search}
        placeholder='Enter the search type'
        onChange={(e)=> setSearch(e.target.value)}
      />
      <button type='submit'>
        Search
      </button>
    </form>
  )
}

export default Search;