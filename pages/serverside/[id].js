function DetailServerSide({data}) {
    return (
        <div>
           <h2>{data.name}</h2>
        </div>
    );
}

export async function getServerSideProps(ctx){

    const {params}=ctx

    console.log("params",params)
     const res=await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
     const data =await res.json()
    return {
        props:{
            data:data
        }
    }
}

export default DetailServerSide;