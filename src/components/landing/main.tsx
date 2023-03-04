const Item = ({name = ''}) => {
  return(
    <div className='border border-[#4B4B4F] rounded-xl px-3 py-1 text-white text-md'>
      {name}
    </div>
  )
}

const Header = () => {
  return(
    <div className="bg-[#050505] flex flex-row justify-between items-center py-7 px-10">
      <img className="w-14 h-14" src='/assets/logo.png' alt='logo' />
      <div className="flex flex-row gap-1">
        <Item name="Home" />
        <Item name="Chart" />
        <Item name="Contract" />
        <Item name="Stake" />
      </div>
      <div className="flex flex-row gap-1">
        <div className="rounded-xl bg-[#6761D7] text-white py-1 px-3">
          Buy LSD
        </div>
        <Item name='Connect' />
      </div>
    </div>
  )
} 

const Main = () => {
  return(
    <div className="h-screen">
      <Header />
      <div>

      </div>
    </div>
  )
}

export default Main;