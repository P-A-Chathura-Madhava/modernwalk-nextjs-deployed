import SubHeading from "../components/atoms/HomePage/SubHeading";
import CategoriesRaw from "../components/molecules/HomePage/CategoriesRaw";

function HomeSection({ ...props }) {
  const { productState } = props;

  return (
    <section className="container mx-auto mt-2 px-60 font-poppins">
      <SubHeading {...{ title: "Flash Sale" }} />
      <div className="mt-7"></div>
      <SubHeading {...{ title: "Categories" }} />
      <CategoriesRaw />
    </section>
  );
}

export default HomeSection;
