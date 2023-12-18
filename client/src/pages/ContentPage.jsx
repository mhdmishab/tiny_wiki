import React from 'react'
import { useSelector } from 'react-redux'

function ContentPage() {
    const {pageContent }=useSelector((state)=>state.wiki);
    console.log()
    const htmlContent=pageContent?.content
  return (
    <div className='m-10'>
        <h1 className='w-full flex justify-center font-bold text-2xl mb-3'>{pageContent?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}

export default ContentPage