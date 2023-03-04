const Footer = () => {
  return (
    <div className="flex justify-center bg-[#050304] px-10 md:px-16 lg:px-24 2xl:px-0">
      <div className="w-[1200px]">
        <div className="flex flex-col-reverse flex-wrap gap-5 pt-16 pb-10 text-white lg:items-center lg:flex-row lg:justify-between text-md">
          <div className="flex flex-col-reverse flex-wrap lg:flex-row gap-8 text-[#C8C9CB]">
            <div>© 2023 lsdprotocol.io</div>
            <div className="flex flex-wrap gap-8">
              <a href="/">Twitter</a>
              <a href="/">Discord</a>
              <a href="/">Medium</a>
              <a href="/">Coinmarketcap</a>
              <a href="/">Coingecko</a>
            </div>
          </div>
          <img className="w-14 h-14" src="/assets/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer