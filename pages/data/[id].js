export async function getStaticPaths() {

  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  const data =await res.json()
     
  const paths=data.map((data)=>{
    return{params: { id: `${data.id}` }} 
  })
    return {
      paths:paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {

    const {params}=context

    console.log("params",params)
     const res=await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
     const data =await res.json()

    return {
      // Passed to the page component as props
      props: { post: {data} },
    }
  }
  
  export default function DataDetail({ post }) {
    console.log(post)
  return <div>{post.data.name}</div>
  }