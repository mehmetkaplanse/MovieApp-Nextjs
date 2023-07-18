import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({searchParams}) => {

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}?api_key=006a1f4fb379814b3ef9df9d41b34341&language=en-US&page=1`,
    {next: {revalidate: 10000}})

  const data = await res.json();

  //console.log("data: ",data)

  return (
    <div className='flex justify-center items-center flex-wrap gap-3 mb-5'>
       {
        data?.results?.map((dt,i) => (
          <Movies key={i} dt={dt}/>
        ))
       }
    </div>
  )
}

export default Page