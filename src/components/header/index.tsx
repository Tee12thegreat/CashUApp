import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  background: linear-gradient(to bottom, rgba(0, 0, 128, 0.8), rgba(0, 0, 128, 0) 70%), /* Navy gradient */
  url('/images/background.webp'); /* Background image */
  background-size: cover; /* Ensures the image covers the entire header */
  background-position: center; /* Centers the image */
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Your Venture, thriving beyond imagination
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Finance your business, ideas and build beyond your expectations.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>
  </header>
);

export default Header;
