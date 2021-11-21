import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <Layout title="About">
      <div>
        <Image
          src="/images/Index_Page.jpg"
          alt=" logos of Products"
          width={200}
          height={200}
          layout="responsive"
        ></Image>
      </div>
    </Layout>
  );
}
