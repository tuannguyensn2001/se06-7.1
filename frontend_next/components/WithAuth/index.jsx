import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function WithAuth(Component) {
  return (props) => {
    const { isAuth } = useSelector((state) => state.auth);

    const router = useRouter();

    const [ready, setReady] = useState(false);

    useEffect(() => {
      if (!isAuth) {
        router.push('/login').then((r) => setReady(true));
      } else setReady(true);
    }, []);

    return <>{ready && <Component {...props} />}</>;
  };
}

export default WithAuth;
