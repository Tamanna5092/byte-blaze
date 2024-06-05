import React from 'react';
import { useLoaderData } from 'react-router-dom';
import placeholderImage from '../assets/404.jpg';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const Content = () => {
    const blog = useLoaderData()
    const {cover_image, body_html, tags, title, url} = blog;
    return (
        <div className="mx-auto group border-2 p-4 hover:no-underline focus:no-underline">
            <img role="presentation" className="object-cover w-full rounded bg-gray-500" src={cover_image || placeholderImage} />
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
			{
				tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
			}
		</div>
         <div className='space-y-4'>
            <a href={url} target='_blank' className="text-2xl font-semibold hover:underline focus:underline">{title}</a>
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
         </div>
        </div>
    );
};

export default Content;