/* eslint-disable @next/next/no-img-element */
import { getBlogDetail } from "@/server/blogs";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser"
import detail from "./styles.module.css"
import {BiArrowBack} from "react-icons/bi"
import Link from "next/link";


export const getServerSideProps: GetServerSideProps = async (context) => {
    const route:string[] | string | undefined = context.query.id
    const id = Number(route)
    let blogDetail = await getBlogDetail(id)
    return {
      props: {
        blog: blogDetail
      },
    };
  };


const DetailBlog:NextPage = ({blog}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const create: Date = new Date(blog.createdAt);
          const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "short",
            day: "numeric",
          };
  return <main className="pb-10 px-2 lg:px-0 w-full flex flex-col items-center bg-white dark:bg-zinc-900">
    <Head>
      <title>Blog | {blog.title}</title>
      <meta name="keywords" content="detail" />
    </Head>
    <section className="min-h-screen w-full px-2 lg:max-w-[50%]">
      <Link href="/" className="hidden dark:bg-black lg:flex fixed left-8 top-8 border px-6 py-1 items-center gap-2 hover:bg-sky-600 hover:text-white border-slate-600 rounded-full bg-white "><BiArrowBack />Trở lại</Link>
      <h1 className="text-center my-10 text-[2rem] font-bold">{blog.title}</h1>
      <div className="flex gap-2 items-center">
            <img
              width={52}
              height={52}
              src="https://user-images.githubusercontent.com/107914230/236656206-5cf1538d-578b-43f5-a52b-b8414b72b7bd.png"
              alt="?"
              className="rounded-full"
            />
            <div className="flex w-full flex-col text-neutral-600 group-hover:text-white">
              <h6 className="font-semibold dark:text-white text-[0.9rem] group-hover:text-white">
              Days Bygone VN
              </h6>
              <div className="flex justify-between gap-6 w-full">
                <li className="text-[0.85rem] dark:text-slate-500 font-normal list-none">
                  @crlk
                </li>
                <li className="text-[0.85rem] dark:text-white font-normal">
                 {create.toLocaleDateString("en-US", options)}
                </li>
              </div>
            </div>
      </div>
      <div className={`${detail.html} flex flex-col mt-4`}>
        {parse(blog.bodyHTML)}
      </div>
      <p className="w-full h-[1px] border-2 border-sky-600 border-dashed my-6"></p>
      <Link href="/" className="flex items-center gap-4 hover:text-sky-600"><BiArrowBack className="font-bold" />Go to home</Link>
    </section>
  </main>;
};

export default DetailBlog;
