/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import Head from "next/head";
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getBlogs } from "@/server/blogs";
import { BlogPost } from "@/types/blog";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs: BlogPost[] = await getBlogs();
  const tags: string[] = [];
  for (const blog of blogs) {
    for (const tag of blog.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    }
  }
  return {
    props: {
      blogData: blogs,
      tags: tags,
    },
  };
};

const Home: NextPage = ({
  blogData,
  tags,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [filterWord, setFilterWord] = useState<string[]>([]);
  const [selectedInx, setSelectedInx] = useState<number[]>([]);
  const filteredBlog: BlogPost[] = useMemo(() => {
    return filterWord.length > 0
      ? blogData.filter((blog: BlogPost) => {
          return filterWord.every((filter) => blog.tags.includes(filter))
        })
      : blogData;
  }, [filterWord]);

  const filterLabel = (tag: any, index: number) => {
    if (selectedInx.includes(index)) {
      setSelectedInx(selectedInx.filter((id) => id !== index));
      setFilterWord(filterWord.filter((filter) => filter !== tag.innerText));
    } else {
      setSelectedInx([...selectedInx, index]);
      setFilterWord([...filterWord, tag.innerText]);
    }
  };
  const { systemTheme, theme, setTheme } = useTheme();
  const [q,setQ] = useState(false)
  useEffect(() => {
    setQ(true)
  }, []);
  const renderThemeChanger = () => {
    if(!q)return null
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <p className="flex items-center menu" onClick={() => setTheme("light")}>Giao diện sáng</p>
      );
    } else {
      return (
        <p className="flex items-center menu" onClick={() => setTheme("dark")}>Giao diện tối</p>
      );
    }
  };
  return (
    <main className=" min-h-screen w-full flex flex-col items-center bg-white dark:bg-zinc-900">
      <Head>
        <title>Blog | Home</title>
        <meta name="keywords" content="home" />
      </Head>
      <section className="grid grid-cols-3 gap-4 lg:w-[1070px] mt-10 relative">
        <div className="lg:h-[1000px] lg:sticky lg:top-10  px-12 col-span-3 lg:col-span-1 after:content-[''] after:h-[540px] after:absolute after:w-[1px] after:bg-gradient-to-b after:from-[#ccc6c6]  after:to-[#fff] after:bg-[red] after:top-[0px] after:bottom-[0px] after:right-[-10px] after:ml-0.5">
        <img
            className="rounded-full w-[75px]"
            alt="?"
            src="https://user-images.githubusercontent.com/107914230/236656206-5cf1538d-578b-43f5-a52b-b8414b72b7bd.png"
          />
          <h1 className="font-semibold my-4 text-[18px]">Days Bygone VN</h1>
          <span className="text-neutral-500 text-[16px]">
          Bạn sẽ bảo vệ lâu đài của mình trước những đợt tấn công của kẻ địch.
          </span>
          <div className="flex flex-col gap-1 mt-6">
          <Link href="/" className="menu menu-active">Bài viết</Link>
          <div className="flex flex-col">
            <h1 className="font-thin text-[12px]">Lọc theo từ khóa:</h1>
            <div className="flex flex-wrap gap-2 mt-2 mb-2">
            {tags.map((tag: string, idx: number) => {
            return (
              <button
                className={`${
                  selectedInx.includes(idx)
                    ? 'label-selected hover:bg-sky-400 uppercase transition-all text-[12px] duration-300'
                    : 'label hover:bg-sky-400 transition-all uppercase duration-300 text-[12px]'
                }`}
                key={idx}
                onClick={(e) => filterLabel(e.target, idx)}
              >
                {tag}
              </button>
            )
          })}
            </div>
          </div>
          <Link href="/about" className="menu">Giới thiệu</Link>
          <Link href="/contact" className="menu">Contact me</Link>
          {renderThemeChanger()}
          </div>
          <div className="mt-10 w-full">
            <h1 className="text-[24px] font-semibold mb-4">Subscribe</h1>
            <label className="text-[16px]" htmlFor="email">
              Your Email:
            </label>
            <input
              placeholder="example@gmail.com"
              type="text"
              className="border border-sky-600 outline-none px-2 py-1 w-full rounded-sm"
            />
            <button className="bg-green-600 px-4 hover:bg-green-800 transition-all duration-300 py-[2px] text-[18px] rounded-[4px] text-white mt-2">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4 text-[20px] mt-[40px]">
            <a
              href=""
              className="border rounded-full p-2 hover:text-sky-600 transition-all duration-300"
            >
              <AiFillGithub />
            </a>
            <a
              href=""
              className="border rounded-full p-2 hover:text-sky-600 transition-all duration-300"
            >
              <AiFillFacebook />
            </a>
            <a
              href=""
              className="border rounded-full p-2 hover:text-sky-600 transition-all duration-300"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 pb-10 col-span-3 lg:pl-10 px-2 lg:pr-0 py-2 flex flex-col bg-white dark:bg-zinc-900 gap-8">
          {filteredBlog.length > 0 ? (
            filteredBlog.map((blog: BlogPost,index) => {
              const create: Date = new Date(blog.createdAt);
              const options: Intl.DateTimeFormatOptions = {
                year: "numeric",
                month: "short",
                day: "numeric",
              };
              return (
                <div
                  key={blog.id}
                  className="flex flex-col justify-start items-start"
                >
                  <div className="flex items-center justify-start gap-8 select-none">
                    <span className="text-[13px] font-semibold">
                      {create.toLocaleDateString("en-US", options)}
                    </span>
                    <div className="flex gap-4">
                      {blog.tags.map((tag, index) => {
                        return (
                          <span
                            key={index}
                            className="text-[13px] text-orange-500 font-[500] uppercase"
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <Link href={`${blog.url}`} className=" font-[500] underline-offset-8 hover:underline text-[27px] cursor-pointer ">
                    {blog.title}
                  </Link>
                  <p className="py-4 text-[16px]">
                  {blog.bodyText.slice(0, 160) + "..."}
                  </p>
                  <div className="flex w-full justify-between items-center">
                    <Link href={`${blog.url}`} className="cursor-pointer text-sky-500 hover:underline underline-offset-4">
                      Đọc bài viết
                    </Link>
                    <p className="text-[12px]">No: {index+1}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="dark:text-white text-sky-600">
              Không tồn tại bài viết đúng theo yêu cầu của bạn!
            </h1>
          )}
        </div>
      </section>
    </main>
  );
};

export default Home;
