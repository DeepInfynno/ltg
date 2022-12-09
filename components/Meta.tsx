import React from "react";
import Head from "next/head";

type metaProps = {
  title: string;
  description: string;
  og_title: string;
  og_description: string;
  og_image: string;
};

const Meta = ({
  title,
  description,
  og_title,
  og_description,
  og_image,
}: metaProps) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta property="og:title" content={og_title} />
        <meta
          property={og_description}
          content="And a social description for our cool page"
        />
        <meta property="og:image" content={og_image} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </div>
  );
};

export default Meta;
