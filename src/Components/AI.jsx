import React, { useEffect, useState } from "react";
import run from "../config/ai";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const AI = () => {
  const [submit, setSubmit] = useState(false);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);

  const profile = collection(db, "profile");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const data = e.target[0].value;
    setInput(data);
    e.target[0].value = "";
    const response = await run(data);
    setText(response);
  };

  useEffect(() => {
    async function prof() {
      const data = await getDocs(profile);
      const filtereData = data.docs.map((docs) => ({
        ...docs.data(),
        id: docs.id,
      }));
      console.log(data);
      setUser(filtereData[0]);
    }
    prof();
  }, []);

  return (
    <div className="flex h-[100vh] w-[100vw]">
      <div className="min-w-[68px] h-full flex flex-col bg-[#1e1f20] text-[#e3e3e3] items-center justify-around">
        <div className="h-[48px] w-[48px] rounded-full text-center">
          <i className="material-symbols-outlined text-[25px] ">menu</i>
        </div>
      </div>
      <div className="text-[#e3e3e3] bg-[#131314]  w-full">
        <div className="w-[1355px] ml-[16px] mt-[12px] mb-[10px] py-[6px] flex justify-between items-center h-[58px]">
          <p className="font-gr text-[20px] px-[8px] text-[#e3e3e3]">Gemini</p>
          {user && (
            <div className="h-[30px] w-[30px] m-[12px] flex items-center bg-white justify-center rounded-full cursor-pointer">
              <img
                src={user?.photoURL}
                className="rounded-full  w-[40px]"></img>
            </div>
          )}
        </div>
        <div className="w-[1360px] h-[690px] px-[20px] pt-[16px] flex flex-col justify-between items-center">
          {!submit ? (
            <div className="w-[830px] h-[424px] flex flex-col justify-between ">
              <div className="mt-[10px] mb-[38px] text-[54px] ml-[10px]">
                <p className="text h-[70px]">
                  Hello, {user && user?.displayName}
                </p>
                <p className="text-[#444746] font-[500]">
                  How can I help you today?
                </p>
              </div>
              <div className="flex pr-[20px] gap-[10px] overflow-visible justify-start">
                <div className="h-[200px] min-w-[200px] max-w-[200px] bg-[#1e1f20] rounded-2xl relative hover:bg-[#e4e4e921]">
                  <p className="p-[16px]">
                    What's the time it takes to walk to several landmarks
                  </p>
                  <div className="m-[16px] h-[40px] w-[40px] rounded-full bg-[#131314] text-center pt-[8px] absolute right-0 bottom-0">
                    <i className="material-symbols-outlined text-[25px] ">
                      location_on
                    </i>
                  </div>
                </div>
                <div className="h-[200px] w-[200px] bg-[#1e1f20] rounded-2xl relative hover:bg-[#e4e4e921]">
                  <p className="p-[16px]">
                    Create a travel itinerary for a city
                  </p>
                  <div className="m-[16px] h-[40px] w-[40px] rounded-full bg-[#131314] text-center pt-[8px] absolute right-0 bottom-0">
                    <i className="material-symbols-outlined text-[25px] ">
                      explore
                    </i>
                  </div>
                </div>
                <div className="h-[200px] w-[200px] bg-[#1e1f20] rounded-2xl relative hover:bg-[#e4e4e921]">
                  <p className="p-[16px]">
                    Settle a debate: how should you store bread?
                  </p>
                  <div className="m-[16px] h-[40px] w-[40px] rounded-full bg-[#131314] text-center pt-[8px] absolute right-0 bottom-0">
                    <i className="material-symbols-outlined text-[25px] ">
                      lightbulb
                    </i>
                  </div>
                </div>
                <div className="h-[200px] w-[200px] bg-[#1e1f20] rounded-2xl relative hover:bg-[#e4e4e921]">
                  <p className="p-[16px]">
                    Help me understand American football
                  </p>
                  <div className="m-[16px] h-[40px] w-[40px] rounded-full bg-[#131314] text-center pt-[8px] absolute right-0 bottom-0">
                    <i className="material-symbols-outlined text-[25px] ">
                      lightbulb
                    </i>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-[712px] h-[560px]  overflow-scroll hide">
              <div className="py-[8px] flex justify-start">
                <div className="m-[12px] mr-[20px] min-w-[32px] max-w-[32px] cursor-pointer">
                  <img
                    src={user.photoURL}
                    className="rounded-full w-full"
                    alt=""
                  />
                </div>
                <div className=" h-fit">
                  <p>{input}</p>
                </div>
              </div>
              <div className="pr-[44px] pb-[40px] ">
                <div className="h-[48px]"></div>
                <div className="flex justify-start">
                  <div className="min-w-[52px]">
                    <img
                      src={user.photoURL}
                      className="rounded-full h-[40px] min-w-[40px] mx-[10px]"
                      alt=""
                    />
                  </div>
                  <div>
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div>
            <div className="text-center absolute bottom-1 left-[332px]">
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Enter a prompt here"
                  className="w-[814px] h-[65px] pr-[100px] rounded-[40px] py-[16px] px-[22px] bg-[#1e1f20] outline-none"
                />
                <div className="h-[40px] w-[40px] flex items-center justify-center  hover:bg-[#e4e4e93a] rounded-full  transition-all delay-75 cursor-pointer absolute right-[24px] top-[12px] ">
                  <i className="material-symbols-outlined text-[25px] ">mic</i>
                </div>
              </form>
              <p className="my-[12px] text-[12px] text-[#c4c7c5]">
                {" "}
                Gemini may display inaccurate info, including about people, so
                double-check its responses.{" "}
                <a
                  href="https://support.google.com/gemini/answer/13594961?visit_id=638538883725953827-2952576005&p=privacy_notice&rd=1#privacy_notice"
                  target="blank"
                  className="underline">
                  {" "}
                  Your privacy & Gemini Apps{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
