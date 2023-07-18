"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'

const Tabs = () => {

  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')

  console.log("genre: ",genre);

  const tabs = [
    {
      name: "En Popüler",
      url: "popular"
    },
    {
      name: "En Son",
      url: "latest"
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming"
    }
  ]
  return (
    <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-10'>
        {
          tabs.map((tab,i) => (
            <Link className={`cursor-pointer hover:opacity-70 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-500": ""}`} href={`/?genre=${tab.url}`} key={i}>{tab.name}</Link>
          ))
        }
    </div>
  )
}

export default Tabs