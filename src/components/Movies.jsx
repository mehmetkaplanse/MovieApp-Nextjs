"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Movies = ({dt}) => {

    const router = useRouter();

    
    return (
        <div onClick={() => router.push(`/movie/${dt?.id}`)} className='min-w-[400px] relative imageContainer cursor-pointer'>
            <Image style={{objectFit: "cover"}} width={400} height={250} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster.path}`} />
            <div className='absolute bottom-0 p-2 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
                <div className='text-lg font-bold hover:text-amber-600'>{dt?.title}</div>
                <div>{dt?.release_date} - {dt?.vote_average}</div>
            </div>
        </div>
    )
}

export default Movies