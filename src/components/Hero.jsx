import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero -mt-16">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold">Welcome to ByteBlaze</h1>
      <p className="py-6">Byte Blaze is a multifaceted technology entity that encompasses several projects and services within the software development and tech consulting space.</p>
      <div className='space-x-6'>
      <Link to={'/blogs'} class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
<span class="relative text-black group-hover:text-white">Read Blogs</span>
</Link>
      <Link to={'/bookmarks'} class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
<span class="relative text-black group-hover:text-white">Bookmarks</span>
</Link>
      </div>
    </div>
  </div>
</div> 
    );
};

export default Hero;