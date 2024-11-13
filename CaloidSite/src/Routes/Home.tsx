import Layout from "../components/Layout/Layout";
import RandomPictureContainer from "../components/RandomPictureContainer";
import "../index.css";

const Home = () => {
  const renderHeader = () => {
    return (
      <div className={styles.header}>
        <p>{`Montreal Based Photographer & cinematographer`.toUpperCase()}</p>
        <p>{`Camilo Luna`.toUpperCase()}</p>
      </div>
    );
  };

  const renderFooter = () => {
    return (
      <div className="w-full text-right text-[rgb(204,51,51)] font-bold text-8xl self-end mr-2">
        {`Caloid`.toUpperCase()}
      </div>
    );
  };

  return (
    <Layout>
      <div className="flex flex-col h-full justify-between">
        {renderHeader()}
        <RandomPictureContainer />
        {renderFooter()}
      </div>
    </Layout>
  );
};

const styles = {
  header:
    "w-full flex-col text-[rgb(204,51,51)] font-bold text-xl tracking-tight leading-6 mt-4 ml-4",
};

export default Home;
