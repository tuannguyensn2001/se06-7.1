import wrapper from '@/store';
import { fetchMe } from '@/features/auth/services';
import { setLogin } from '@/features/auth/slices';
import Header from '@/components/Header';
import Media from '@/components/Media';
import HomeHeader from 'components/HomeHeader';
import HomeFeatures from 'components/HomeFeatures/HomeFeatures';

function Home() {
  return (
    <div>
      <Header />
      <HomeHeader />
      <HomeFeatures />
    </div>
  );
}

export default Home;
