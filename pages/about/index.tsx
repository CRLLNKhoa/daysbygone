/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { useTheme } from "next-themes";

const About = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <p className="flex items-center menu" onClick={() => setTheme("light")}>
          Giao diện sáng
        </p>
      );
    } else {
      return (
        <p className="flex items-center menu" onClick={() => setTheme("dark")}>
          Giao diện tối
        </p>
      );
    }
  };
  return (
    <main className=" min-h-screen w-full flex flex-col items-center bg-white dark:bg-zinc-900">
      <Head>
        <title>Lương Nguyễn Khoa</title>
        <meta name="keywords" content="home" />
      </Head>
      <section className="grid grid-cols-3 gap-4 lg:w-[1070px] mt-10 relative">
        <div className="px-12 relative col-span-3 lg:col-span-1 after:content-[''] after:h-[540px] after:absolute after:w-[1px] after:bg-gradient-to-b after:from-[#ccc6c6]  after:to-[#fff] after:bg-[red] after:top-[0px] after:bottom-[0px] after:right-[-10px] after:ml-0.5">
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
            <Link href="/" className="menu">
              Bài viết
            </Link>
            <Link href="/about" className="menu menu-active">
              Giới thiệu
            </Link>
            <Link href="/contact" className="menu">
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
          <h1 className="text-[24px] font-semibold">
            Giới thiệu về Days Bygone
          </h1>
          <div className="flex flex-col gap-4">
            <p>
              👋 Khi chơi <b>Days Bygone</b>, bạn sẽ bảo vệ lâu đài của mình trước
              những đợt tấn công của kẻ địch. Số lượng kẻ địch cùng tốc độ tấn
              công ngày càng tăng dần. Càng về thời gian cuối của trò chơi, các
              đợt tấn công càng trở nên dữ dội, người chơi cần thao tác thật
              chính xác nếu không muốn thua cuộc.
            </p>
            <img
              className="w-full h-[600px] rounded-lg"
              src="https://user-images.githubusercontent.com/107914230/236656578-f73cc43c-e71d-4401-9cc7-7756f44d4943.png"
              alt="?"
            />
            <p>
              🙌 Hoàn thành mỗi chặng của thử thách, người chơi sẽ nhận về phần thưởng giá trị. Những phần thưởng này sẽ giúp bạn nâng cấp sức mạnh và cải thiện chỉ số của bản thân. Ngoài ra, chúng còn có thể nâng cấp hàng phòng ngự bằng cách mở khóa vũ khí hay thu thập kỹ năng mới.
            </p>
            <p><b>Days Bygone </b>cung cấp cho người chơi một cơ chế hỗ trợ, đó là tự động ngắm bắn. Hệ thống vũ khí và phép thuật trong game cũng phong phú và đa dạng không kém. Trò chơi có tới hơn 15 phép thuật và 20 loại vũ khí khác nhau. Bên cạnh đó là hơn 20 anh hùng cùng 25 kỹ năng hỗ trợ người dùng.</p>
            <h1 className="font-bold text-[20px]">Tìm hiểu chi tiết về trò chơi</h1>
            <p><b>Days Bygone</b> có hai chế độ chơi khác nhau cho người dùng chọn lựa. Chế độ thứ nhất là phòng thủ ngục tối, khi vượt qua những thử thách ở đây bạn sẽ nhận về các chìa khóa để mở kho báu. Chế độ thứ hai là phiêu lưu, đây sẽ là cuộc hành trình khám phá vô cùng thú vị của mọi người.</p>
            <img
              className="w-full h-[600px] rounded-lg"
              src="https://user-images.githubusercontent.com/107914230/236656660-166e2b19-88ba-4238-a588-4806c8445fab.png"
              alt="?"
            />
            <p>Khi tham gia trò chơi, bạn hoàn toàn có thể thành lập những tổ đội bằng cách rủ bạn bè, người thân hay những người chơi từ khắp nơi trên toàn thế giới. Mọi người trong tổ đội có thể giúp đỡ và cùng nhau đối đầu với các thử thách khác nhau. Khi đã có một đội hình mạnh mẽ, hãy cạnh tranh với những đội nhóm khác trên bảng xếp hạng.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
