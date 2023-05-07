/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "next-themes";

const Contact = () => {
    const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
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
        <title>Blog by @crlk | About me</title>
        <meta name="keywords" content="home" />
      </Head>
      <section className="grid grid-cols-3 gap-4 lg:w-[1070px] mt-10 relative">
        <div className="px-12 col-span-3 lg:col-span-1 after:content-[''] after:h-[540px] after:absolute after:w-[1px] after:bg-gradient-to-b after:from-[#ccc6c6]  after:to-[#fff] after:bg-[red] after:top-[0px] after:bottom-[0px] after:right-[-10px] after:ml-0.5">
          <img
            className="rounded-full w-[75px]"
            alt="?"
            src="https://avatars.githubusercontent.com/u/107914230?s=400&u=c7f55b844a5124595f076fe16c053bb109157f22&v=4"
          />
          <h1 className="font-semibold my-4 text-[18px]">Crlk.Dev</h1>
          <span className="text-neutral-500 text-[16px]">
            Creator of Jest Preview. Open source enthusiast, lifelong learner.
          </span>
          <div className="flex flex-col gap-1 mt-6">
            <Link href="/" className="menu">
              Bài viết
            </Link>
            <Link href="/about" className="menu">
              Giới thiệu
            </Link>
            <Link href="/contact" className="menu menu-active">
              Contact me
            </Link>
            {renderThemeChanger()}
            <Link href="/api" className="menu">
              API code by me
            </Link>
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
        <div className="lg:col-span-2 pb-10 col-span-3 pl-10 py-2 flex flex-col bg-white dark:bg-zinc-900 gap-8">
          <h1 className="text-[24px] font-semibold">Contact me</h1>
          <div className="flex flex-col gap-4">
            <p>
              I love to chat about DX, open source, frontend development, React,
              devtools, Testing, running and more. Following are some of useful
              links you can find me there:
            </p>
            <ul className="list-decimal ml-6">
                <li>GitHub: <a target="_blank" href="https://github.com/CRLLNKhoa" className="text-sky-600 hover:text-orange-600">github.com/CRLLNKhoa</a></li>
                <li>Email: <a className="text-sky-600 hover:text-orange-600" href="">lnkhoa1205@gmail.com</a></li>
            </ul>
            <img src="https://user-images.githubusercontent.com/107914230/235478999-76c5704d-3251-4fc3-933a-51d7c7319df4.gif" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
