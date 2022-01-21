import Search from "@/components/Search";
import Footer from "@/components/Footer";
import styles from "./style.module.scss";

function Layout({ children, isShowSearch }) {
  return (
    <div>
      {isShowSearch && (
        <div>
          <Search />
        </div>
      )}

      <div className={styles.main}>{children}</div>

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
