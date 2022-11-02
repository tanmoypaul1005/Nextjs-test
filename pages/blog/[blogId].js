import { useRouter } from 'next/router';
import React from 'react';

const BlogDetail = () => {

    const router=useRouter();

    const blogId=router.query.blogId

    return (
        <div>
            This is Blog Page {blogId}
        </div>
    );
};

export default BlogDetail;