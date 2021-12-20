import wrapper from "@/store";
import { fetchMe } from "@/features/auth/services";
import { setLogin } from "@/features/auth/slices";
import Header from "@/components/Header";

function Home() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default Home;
