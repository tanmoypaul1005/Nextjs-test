import { Router } from "next/router";
import Card from "../components/card/Card";

function DetailServerSide({ data }) {
    console.log(data)
    return (
        <div className="flex flex-wrap justify-between">
            {
                <div>
                    <div>{data?.title}</div>
                    <div>{data?.body}</div>
                </div>
            }
        </div>
    );
}

export async function getServerSideProps(context) {
    const id = context.query

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${[id?.news_id]}`);
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}

export default DetailServerSide;