import Movies from '@/components/Movies';
import React from 'react'


const Page = async ({params}) => {

    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=006a1f4fb379814b3ef9df9d41b34341&query=${keyword}&language=en-US`)
    const data = await res.json();

    console.log("keywordData :",data?.results)

    return (
        <div className='m-5 flex items-center flex-wrap gap-3'>
          {
            !data?.results ? 
              <div>Aranılan şey bulunamadı!!!</div> 
              : 
              data?.results?.map((dt,i) => (
                <Movies key={i} dt={dt}/>
              ))
          }
        </div>
      )
      
}

export default Page