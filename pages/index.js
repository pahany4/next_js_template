import Meta from "../components/meta";
import {getContent} from "../utils/getContent";

export default function Home({data}) {

  return (
    <>
      <Meta
        title={data?.seo_title || ""}
        description={data?.seo_description || ""}
        keywords={data?.seo_keywords || ""}
      >
        {data.og_tags.map((tag, i) => (
          <meta key={i} property={tag.property} content={tag.content}/>
        ))}
        <meta property={"og:type"} content={"website"}/>
        <meta property={"og:locale"} content={"ru_RU"}/>
        <meta property={"og:url"} content={"https://example.com"}/>
        <meta property={"og:site_name"} content={""}/>
      </Meta>
      {/*<h1 className={"visually-hidden"}>Главная страница</h1>*/}
      {/*<h1>Главная страница</h1>*/}

      <main>

      </main>

    </>
  );
}

export const getStaticProps = async () => {

  const {data} = await getContent({path_file: "/content/main/index.md"});

  return {
    props: {
      data,
    }
  };

};