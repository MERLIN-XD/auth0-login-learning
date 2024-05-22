export default function Home() {
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="p-5 bg-[#0e0e0eb5] rounded-lg text-white">
            <center><h3>Auth0 - Learning</h3>
              <p>ระบบสมาชิกโดย Auth0</p>
              <hr />
              <br />
              <a href="/api/auth/login" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 p-[10px] px-[152px] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg transition duration-700 text-lg">Login</a>
              <br />
              <br />
              <hr />
              implement by : Keattipoom Chaesomchat
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
