import { useEffect } from "react";
import Card from "../components/card/Card";
import useNewsStore, { getAllNews } from "../../store/newsStore";

function DetailServerSide({ data }) {
    //console.log(data)

    const { newsData } = useNewsStore();
    console.log("data", newsData);
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        await getAllNews()
    }

    return (
        <div className="flex flex-wrap justify-between">
            {
                data?.map((item, index) => (
                    <div className="mb-[20px] cursor-pointer" key={index}><div>
                        <Card
                            item={item?.title}
                            description={item?.body}
                            image={item?.urlToImage}
                        /></div>
                    </div>
                ))
            }
        </div>
    );
}

export async function getServerSideProps(ctx) {

    const { params } = ctx

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await res.json()
    return {
        props: {
            data: data
        }
    }
}

export default DetailServerSide;