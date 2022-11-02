import Link from "next/link";

function index({data}) {
    console.log("data",data)
    return (
        <div>
          {data.map((item,index)=>(
                    <div key={item.id}>
                    <Link href={`/data/${item.id}`}passHref >{item.name}</Link><br></br>
                   </div> 
          ))}
        </div>
    );
}

export async function getServerSideProps(ctx){

    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data =await res.json()
 
    return {
        props:{
            data:data
        }
    }
}

export default index;