import Head from "next/head";

export const HeadTag = (props) => {
  const { title } = props;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || "COINSON"}</title>
      </Head>
    </>
  );
};
