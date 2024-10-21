import FmdGoodIcon from '@mui/icons-material/FmdGood';

const Header = () => {
  return (
    <header className="m-12 font-inter flex justify-center align-middle">
      <div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#345678] to-[#308bf2] bg-clip-text text-transparent">Hi, I'm Brian</h1>
        <p className='flex justify-center m-8 text-[#345678] font-bold text-xl'>
        <FmdGoodIcon style={{ color: '#66B3B3' }} /> Seattle, WA
        </p>
        <p className='flex justify-center text-[#345678] font-bold text-xl'>Full Stack Developer</p>
      </div>
    </header>
  );
};

export default Header;
