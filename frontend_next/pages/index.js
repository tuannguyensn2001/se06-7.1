import wrapper from '@/store';
import { fetchMe } from '@/features/auth/services';
import { setLogin } from '@/features/auth/slices';
import Header from '@/components/Header';
import Media from '@/components/Media';
import HomeHeader from 'components/HomeHeader';
import HomeFeatures from 'components/HomeFeatures';
import HomeConfiguration from 'components/HomeConfiguration';
import HomeBrands from 'components/HomeBrands';
import HomeCommunity from 'components/HomeCommunity';
import HomeStore from 'components/HomeStore';
import HomeEditor from 'components/HomeEditor';

function Home() {
  return (
    <div>
      <Header isTransparent={true} />
      <HomeHeader />
      <HomeFeatures />
      <HomeConfiguration />
      <HomeBrands />
      <HomeCommunity />
      <HomeStore />
      <HomeEditor />
    </div>
  );
}

export default Home;
