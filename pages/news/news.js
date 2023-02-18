import Card from "../components/card/Card";

function DetailServerSide({ data }) {
    console.log(data)
    return (
        <div className="flex flex-wrap justify-between">
            {
                data?.map((item, index) => (
                    <div className="" key={index}><div><Card item={item?.title} description={item?.description} image={item?.urlToImage} /></div></div>
                ))
            }
        </div>
    );
}

export async function getServerSideProps(ctx) {

    const { params } = ctx

    const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-01-18&sortBy=publishedAt&apiKey=84308ac2e07c46d09d41d301b2b8f5f8`);
    const data = await res.json()
    return {
        props: {
            data: data?.articles
        }
    }
}

export default DetailServerSide;