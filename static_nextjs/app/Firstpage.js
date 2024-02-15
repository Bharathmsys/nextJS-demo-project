import React from 'react'
import Image from "next/image";
import Ai from '../public/Ai.png'
import datascience from '../public/data science.png'

const Firstpage = () => {
  return (
    <div className='img'>
      {/* <Image src={techimg} className="img"/> */}
      <div>
      <h4 className='title'>World's Leading Machine<br/> Learning Company</h4>
      <p className='des'>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry.Lorem Ipsum has been the industry's standard dummy text<br/> ever since the 1500s, when an unknown printer took a galley of type <br/>  and scrambled it to make a type specimen book. It has survived not <br/>  only five centuries, but also the leap into electronic typesetting, <br/> remaining essentially unchanged.</p>
      <button className='button'>Learn More</button>
      <button className='button'>Contact Us</button>
      </div>
      <div className='container-2'>
      <div className='con-2'>
        <Image src={datascience} width="70"/>
        <h1>Data Science</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        </p>
      </div>
      <div className='con-2'>
      <Image src={Ai} width="90"/>
        <h1>Data Engineer</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        </p>
      </div>
      <div className='con-2'>
      <Image src={Ai} width="90"/>
        <h1>Machine Learning</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        </p>
      </div>
      </div>
    </div>
  )
}

export default Firstpage
