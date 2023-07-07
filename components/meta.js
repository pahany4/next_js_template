import Head from "next/head";

const Meta = ({title, keywords, description, children}) => {

  return (
    <Head>
      <title>{title}</title>
      <meta data-react-helmet="true" name="keywords" content={keywords} />
      <meta data-react-helmet="true" name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {children}
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title: "",
};
