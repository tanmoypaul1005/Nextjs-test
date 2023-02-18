function DetailServerSide({data}) {
    console.log(data)
    return (
        <div>
          {data.map((item,index)=>{
            return (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            )
          })}
        </div>
    );
}

export async function getServerSideProps(ctx){

    const {params}=ctx

    console.log("params",params)
     const res=await fetch(`https://jsonplaceholder.typicode.com/todos`);
     const data =await res.json()
    return {
        props:{
            data:data
        }
    }
}

export default DetailServerSide;