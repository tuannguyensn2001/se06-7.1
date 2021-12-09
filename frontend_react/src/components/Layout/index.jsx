import Search from "@/components/Search";
import Footer from "@/components/Footer";

function Layout({ children, isShowSearch }) {
  return (
    <div>
      {isShowSearch && (
        <div>
          <Search />
        </div>
      )}

      <div>{children}</div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  isShowSearch: true,
};

export default Layout;
