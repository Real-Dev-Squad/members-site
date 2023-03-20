import UserProfile from "@/src/components/UserProfile";
import Accordion from "@/src/components/Accordion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
// import styles from "@/styles/Home.module.css";

export default function MemberId() {
  const accordionComponent = (
    <>
      <div className="mt-4">
        <h3 className="text-xl font-normal text-[#041187]">
          Make realdev squad work
        </h3>
        <span className="inline-block mt-2">Make it work</span>
        <br></br>
        <span className="tracking-[0.4px]">
          Estimated Completion: <strong>5 months</strong>
        </span>
      </div>
      <div
        className="flex mt-2 mb-2 align-center text-[#636363]"
      >
        <span className="mr-3"> Checkout this feature in action </span>
        <span className="mr-3 cursor-pointer">
          <FiExternalLink size={20} />
        </span>
        <span className="cursor-pointer">
          <FiGithub size={20} />
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-normal text-[#041187]">
          Make realdev squad work
        </h3>
        <span className="inline-block mt-2">Make it work</span>
        <br></br>
        <span className="tracking-[0.4px]">
          Estimated Completion: <strong>5 months</strong>
        </span>
      </div>

      <div className="flex mt-2 mb-2 align-center text-[#636363]">
        <span className="mr-3"> Checkout this feature in action </span>
        <span className="mr-3 cursor-pointer">
          <FiExternalLink size={20} />
        </span>
        <span className="cursor-pointer">
          <FiGithub size={20} />
        </span>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-normal text-[#041187]">
          Make realdev squad work
        </h3>
        <span className="inline-block mt-2">Make it work</span>
        <br></br>
        <span className="tracking-[0.4px]">
          Estimated Completion: <strong>5 months</strong>
        </span>
      </div>

      <div className="flex mt-2 mb-2 align-center text-[#636363]">
        <span className="mr-3"> Checkout this feature in action </span>
        <span className="mr-3 cursor-pointer">
          <FiExternalLink size={20} />
        </span>
        <span className="cursor-pointer">
          <FiGithub size={20} />
        </span>
      </div>
    </>
  );

  return (
        <div className="flex justify-center gap-24 h-[92vh]">
          <UserProfile />
          <div
            className="mt-10 p-9 "
            style={{
              boxShadow: "0 0 15px -7px rgb(0 0 0 / 65%)",
              height: "fit-content",
            }}
          >
            <Accordion
              id={1}
              title={"Note Worthy Contribution"}
              accordionData={accordionComponent}
            />
            <Accordion
              id={2}
              title={"Active tasks"}
              accordionData={accordionComponent}
            />
            <Accordion
              id={3}
              title={'All contributions'}
              accordionData={accordionComponent}
              /> 
          </div>
        </div>
  );
}
