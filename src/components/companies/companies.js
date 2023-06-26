import blackrock from "../../assets/blackrock-logo.png";
import charlesschwab from "../../assets/charlesschwab-logo.png";
import goldman from "../../assets/goldman-logo.png";
import kpmg from "../../assets/kpmg-logo.png";
import citi from "../../assets/citi-logo.png";

const Companies = () => {
  return (
    <>
      <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-white">
          Read by employees at
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={blackrock}
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={charlesschwab}
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={goldman}
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={kpmg}
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src={citi}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </>
  );
};

export default Companies;
