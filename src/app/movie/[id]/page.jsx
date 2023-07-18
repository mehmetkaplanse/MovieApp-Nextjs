import React from 'react'
import Image from 'next/image'

// getMovie from api
const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=006a1f4fb379814b3ef9df9d41b34341&language=en-US`)
    return await res.json()
}

const Page = async ({params}) => {

    const id = params.id;

    const movieDetail = await getMovie(id)
    const data = movieDetail;

    return (
        <div className='relative p-7 min-h-screen m-5'>
             <Image style={{objectFit: "cover"}} className='rounded-lg' fill src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path || data?.poster.path}`} />
            <div className='absolute'>
                <div className='text-3xl font-bold my-3'>{data?.title}</div>
                <div className='w-1/3'>{data?.overview}</div>
                <div>{data?.release_date} - <span className='bg-amber-600 px-1 text-center rounded-full text-black font-bold text-sm'>{data?.vote_average}</span></div>
                <div className='border w-40 p-1 rounded-md text-center text-lg cursor-pointer mt-3'>Trail</div>
            </div>
        </div>
    )
}

export default Page

//  https://api.themoviedb.org/3/movie/385687?api_key=006a1f4fb379814b3ef9df9d41b34341&language=en-US