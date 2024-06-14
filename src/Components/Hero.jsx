import React, { useState } from "react";
import { auth, db } from "../config/firebase";
import "react-toastify/dist/ReactToastify.css";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import Notification from "./Notification";

const Hero = () => {
  const navigate = useNavigate();
  const profile = collection(db, "profile");
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState("");

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });

  async function signInWithGoogle() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setShowNotification(true);
        setMessage("User is Logged In!");
      } else {
        const data = await signInWithPopup(auth, provider);
        const user = data.user;
        await addDoc(profile, {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        });
      }
    });
  }

  async function signInWithGoogle2() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/home");
      } else {
        setShowNotification(true);
        setMessage("Log in first");
      }
    });
  }

  return (
    <>
      <div className="bg-white">
        <div className="bg-white h-[66px] flex items-center border-b-2 shadow-sm fixed w-full top-0">
          <div className="h-[48px] w-[48px] text-center  flex items-center justify-center ml-[10px]">
            <i className="material-icons text-[#5f6368] text-[26px] ">menu</i>
          </div>
          <img
            src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-google-drive-icon-vector-png-image_12256698.png"
            alt=""
            className="h-[120px]"
          />
        </div>
        <div className="my-[80px] mx-[72px] text-center border-b mt-[150px]">
          <h1 className="font-gr text-[65px]">
            Easy and secure access to your content
          </h1>
          <p className="text-[#5f6368] mt-[16px] text-[23px] font-[300] font-gr">
            Store, share, and collaborate on files and folders from your mobile
            device, tablet, or computer
          </p>
          <div className="mt-[36px]" onClick={() => navigate("/ai")}>
            <button className="bg-[#1a73e8] text-white py-[14px] px-[24px] pr-[38px] rounded-[5px] mr-[16px]  text-[18px] relative font-gr">
              Talk to AI
              <img
                src="/assets/sparkler.png"
                alt=""
                className="h-[20px] w-[20px] absolute right-[15px] top-[17px] ml-[8px]"
              />
            </button>

            <button
              className="py-[14px] px-[24px] rounded-[5px] mr-[16px] text-[#1a73e8] border font-gr text-[18px] "
              onClick={signInWithGoogle2}>
              Go to Drive
            </button>
            {showNotification && (
              <Notification
                message={message}
                setShowNotification={setShowNotification}
                showNotification={showNotification}
              />
            )}
          </div>
          <div className="mt-[36px]">
            <span className="text-[#5f6368] font-gr text-[18px]">
              Don't have an account?
            </span>
            <span
              className="text-[#1a73e8] font-gr text-[18px] ml-[8px] p-[14px] hover:bg-[#1a73e813] transition-all delay-75 cursor-pointer rounded-[5px]"
              onClick={signInWithGoogle}>
              Sign up at no cost
            </span>
          </div>
          <img
            src="https://lh3.googleusercontent.com/6MmVl3TEiBeEJCFIIfzO5DIgengYGPCdhEe8M6lXA6_Eh_xsKHDL_K4CLC31dETfiCue1hFOEf30IkIqlbOStvTfYbY_G85oEtJHQqjgz6OSXco8Aw=w0-l80-sg-rj-c0xffffff"
            alt=""
            className="mt-[40px] mb-[80px]"
          />
        </div>
        <div className="mt-[24px] mb-[80px] text-center text-[#5f6368] text-[18px]">
          <h2>See what you can do with Google Drive</h2>
          <span>
            <i className="material-icons text-[40px]">keyboard_arrow_down</i>
          </span>
        </div>
        <div className="flex items-center justify-center mb-[180px]">
          <img
            src="https://lh3.googleusercontent.com/NJb2FyRsLOjbmSf0cCilv3XloxJ1GBvynoI-Wn7lRVDtHzEN_L1iHDmarKxo3qZKSoyudmqe909CJUTyCAtU75WLSrrHAkbEbQpPztDXZhMbmaR7E0SR=w0-l80-sg-rj-c0xffffff"
            alt=""
            className="w-[578px] h-[485px] mr-[60px]"
          />
          <div className="w-[568px] h-[465px] flex flex-col justify-center">
            <h1 className="text-[42px] font-gr">
              Built-in protections against malware, spam, and ransomware
            </h1>
            <p className="mt-[23px] text-[20px] font-[300] text-[#5f6368]">
              Drive can provide encrypted and secure access to your files. Files
              shared with you can be proactively scanned and removed when
              malware, spam, ransomware, or phishing is detected. And Drive is
              cloud-native, which eliminates the need for local files and can
              minimize risk to your devices.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mb-[180px]">
          <div className="w-[468px] h-[550px] flex flex-col justify-center mr-[80px]">
            <h1 className="text-[42px]  font-gr">
              People-first collaboration apps to supercharge teamwork
            </h1>
            <p className="mt-[23px] text-[20px] font-[300] text-[#5f6368]">
              Drive integrates with Docs, Sheets, and Slides, cloud-native
              collaboration apps that enable your team to create content and
              collaborate more effectively in real time.
            </p>
          </div>
          <img
            src="https://lh3.googleusercontent.com/yCtJQGVMT5x-OVFBA4pAG3aUkGM5-KOl9Nb8w5Ah0ipsKP4Vupp0yRyWGOaQOx4ey5FsSxQLh8_KqMViHegT9uHmhb0elqAjXW27UU8zsQmC57wMRQ=w0-l80-sg-rj-c0xffffff"
            alt=""
            className="w-[690px] h-[580px]"
          />
        </div>
        <div className="flex justify-center items-center mb-[180px]">
          <img
            src="https://lh3.googleusercontent.com/KmMK86vU4Q4_etBMCy-VI7O9D08C-xqdXYFxjdxvAKXhLk8AUDcgwCV27ykWNu3H4gCf8QNLEYCJcSQsUjMD0qr6KgF0AbZywYS2kQGcW7p9lipDa4_q=w0-l80-sg-rj-c0xffffff"
            alt=""
            className="w-[600px] h-[390px]"
          />
          <div className="w-[580px] h-[350px] flex flex-col justify-center ml-[60px]">
            <h1 className="text-[42px]  font-gr">
              Integration with the tools and apps your team is already using
            </h1>
            <p className="mt-[23px] text-[20px] font-[300] text-[#5f6368]">
              Drive integrates with and complements your team’s existing
              technology. Collaborate in Microsoft Office files without the need
              to convert file formats, and edit and store over 100 additional
              file types, including PDFs, CAD files, images, and more.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mb-[180px]">
          <div className="w-[590px] h-[350px] flex flex-col justify-center mr-[60px]">
            <h1 className="text-[42px]  font-gr">
              Google’s Search and AI technology helps your team move faster
            </h1>
            <p className="mt-[23px] text-[20px] font-[300] text-[#5f6368]">
              Google’s powerful search capabilities are embedded in Drive and
              offer speed, reliability, and collaboration. And features like
              Drive search chips help your team find files fast by quickly
              surfacing more relevant results.
            </p>
          </div>
          <img
            src="https://lh3.googleusercontent.com/a6eNE5cl4T8gQ_3qBPaKlHJhTuGYoPPCi8G43zuzir5eXbSXmC_PmZHQgMd5dFoV-tsTZs-g6a8mUL_OY_4SH5R_M4ssXq124fNXKpi6pP5LcOLUQwo=w0-l80-sg-rj-c0xffffff"
            alt=""
            className="w-[600px] h-[410px]"
          />
        </div>
        <div className="mx-[72px] h-[490px] bg-[#f8f9fa] text-center">
          <h1 className="text-[50px] mx-[200px] pt-[80px] font-gr">
            Thousands of teams are already using Drive to revolutionize the way
            they work
          </h1>
          <div className="flex items-center justify-center my-[60px] gap-x-[60px]">
            <img
              src="https://kstatic.googleusercontent.com/files/dde2c6d0199759ba1261fd84bf5f2d2d5a46bf1ceb7c8c3b03f247a53c8f0c6c2b6e62f8c2c2192c24a961f2e8c7d4f29dd6b2890e326fb1aa396c9dbdd5f3eb"
              alt=""
            />
            <img
              src="https://kstatic.googleusercontent.com/files/d03551fdf2c8749e3cb46bd9e57f81f1821db06f2f781fb8548069d64383e064809e0244690b29cf93426f3270d5d9d12f2341dae9dcf357d9f88c6e0005f5ad"
              alt=""
            />
            <img
              src="https://kstatic.googleusercontent.com/files/729e1fb4793a8ba1290e61058c17ad0eca27d2022a971e24544e9a82e8346bfd12909939458c874ca23d3c84a246070258587103a9675739036c3985f77b992c"
              alt=""
            />
            <img
              src="https://kstatic.googleusercontent.com/files/08e84da11f0911a81fe26be9c9667a1be1d7b5121c34ed6e730f5fb328215c7273603f3573bbe2d90536f2fc2856c72a6eb6b8fb209cd688721952a81bffbc4a"
              alt=""
            />
          </div>
        </div>
        <div className="mx-[72px] min-w-[1296px] h-[430px] flex overflow-y-hidden shadow-xl hide">
          <div className="h-full  text-center flex flex-col justify-center items-center">
            <img
              src="https://kstatic.googleusercontent.com/files/5a11c2b63159b3919b3be118ace5a7945144ce95d661c7e4bcb3948f3c6ee6d6e86dc70d5b1bcf995734be8ebb3589b8ea44347dfa8a530fc1ab118bfd65eba0"
              alt=""
              className="pt-[80px] h-[190px] w-[130px]"
            />
            <h1 className="py-[24px] w-[1296px] text-[32px] font-gr text-[#202124]">
              “I never worry about finding a document. Everything’s in Drive, I
              can access it anywhere, and that’s been revolutionary.”
            </h1>
            <span className="text-[18px] text-[#1a73e8] pb-[80px]">
              <a href="https://workspace.google.com/intl/en/customers/salesforce/?utm_source=driveforwork&utm_medium=et&utm_content=salesforce&utm_campaign=body">
                Read Story
              </a>
            </span>
          </div>
          <div className="h-full min-w-full text-center flex flex-col justify-center items-center">
            <img
              src="https://kstatic.googleusercontent.com/files/256cb1d892505c508ba4cb72b5f87da519f292af5ae0bfbf37bcf0f8b70bdc92453b6c6019fcb80d2fa1e2de5afd67d4578863228ad3356e6d4a593c568ef478"
              alt=""
              className="pt-[80px] h-[140px] w-[300px]"
            />
            <h1 className="py-[24px] w-[1296px] text-[33px] font-[300] text-[#202124] font-gr">
              “Most of our team members were already familiar with Drive and
              found it very intuitive and easy to use, so change management was
              minimal and we were quickly up and running.”
            </h1>
            <span className="text-[18px] text-[#1a73e8] pb-[80px]">
              <a href="https://workspace.google.com/blog/customer-stories/cardinal-group-relies-on-drive-and-g-suite-to-maximize-collaboration">
                Read Story
              </a>
            </span>
          </div>
          <div className="h-full min-w-full text-center flex flex-col justify-center items-center">
            <img
              src="https://kstatic.googleusercontent.com/files/975eee0a7d86b77c45aeb490139651fee3b52e9007eb782cc600b1ee0281669bb38bb861b551aaa12af3d139053d661d6b96631be0dbb0c937d9f9cb0c18c1f1"
              alt=""
              className="pt-[80px] h-[140px] w-[190px]"
            />
            <h1 className="py-[24px] w-[1296px] text-[32px] font-gr text-[#202124]">
              “Real-time collaboration with Google Docs and Drive is a
              must-have...if we ever tried to move employees off it, it would be
              a torches and pitchforks situation—complete chaos.”
            </h1>
            <span className="text-[18px] text-[#1a73e8] pb-[80px]">
              <a href="https://services.google.com/fh/files/misc/google_drive_customer_story_ibotta.pdf">
                Read Story
              </a>
            </span>
          </div>
          <div className="h-full min-w-full text-center flex flex-col justify-center items-center">
            <img
              src="https://kstatic.googleusercontent.com/files/5c931e9705f5065e5cd665d4878da8eb3e8d90dbcdebb2ce04d37776e6cfba0339ed8357d13e4dd72628a15bc9265012d95e7d0d89d92b4a7d1f87bd966a69c0"
              alt=""
              className="pt-[80px] h-[120px] w-[250px]"
            />
            <h1 className="py-[24px] w-[1296px] text-[32px] font-gr text-[#202124]">
              “Google is revolutionizing collaboration and individual
              productivity through AI. Employees can focus more on creating
              value for our customers and less on mundane tasks.”
            </h1>
            <span className="text-[18px] text-[#1a73e8] pb-[80px]">
              <a href="https://workspace.google.com/intl/en/customers/atb-financial/?utm_source=driveforwork&utm_medium=et&utm_content=atbfinancial&utm_campaign=body">
                Read Story
              </a>
            </span>
          </div>
        </div>
        <div className="mt-[120px]">
          <div className="mx-[72px] text-center">
            <h1
              className="text-[40px] text-[#202124] font-[400]"
              style={{ fontFamily: "gr" }}>
              Drive integrates with the tools your team is already using
            </h1>
            <div className="flex pt-[60px] items-center justify-between">
              <div className="border hover:shadow-2xl">
                <img
                  src="https://kstatic.googleusercontent.com/files/a452529e201b5a2df2ee78aaa26196adb2f3d770ad1b41a7aab87af4b2298415469feced5343d47685651de742548ee68ccb169ac30cd7adb1eddd0c1abce048"
                  alt=""
                />
              </div>
              <div className="border hover:shadow-2xl">
                <img
                  src="https://kstatic.googleusercontent.com/files/60dd2ade31bb7911a43bd12c9e3f2016d6eac9f2c9a9fa1d5236ab7ca36f4d4514e46f01d3988db306c9d26daafb152e5c6de494e94b449804d34e37ee44c7b9"
                  alt=""
                />
              </div>
              <div className="border hover:shadow-2xl">
                <img
                  src="https://kstatic.googleusercontent.com/files/a71fde568bffcc2d8c0ed236d5875634ccad9aadc73b30ed310bdb4355d2de80ae27a51c3597febe87e409eddc8c744327a454e709fd100925e9e5176fa7a3af"
                  alt=""
                />
              </div>
              <div className="border hover:shadow-2xl">
                <img
                  src="https://kstatic.googleusercontent.com/files/c7207b3783c876e2b402ab1a75650368c4a4591cadee2184ffaf923179b3218d4d9a08aff8b80b78e36a47d160a8744f2372cdd51072491155609bf16534c405"
                  alt=""
                />
              </div>
              <div className="border hover:shadow-2xl">
                <img
                  src="https://kstatic.googleusercontent.com/files/ddf9229b8e8e00daa490de51a7227de227f3b13db0b70a50dfff3de5088f643f0402ade09e63203a8e1b7132392d5db233e9a5f6c00fd57b47cebcdfd4853a8f"
                  alt=""
                />
              </div>
              <div className="border hover:shadow-2xl">
                <img
                  src="https://kstatic.googleusercontent.com/files/f9d1c7f501c4888a2f60647d23ce9f1c76377f3f9b910cfb05db4e3bb17621d1dbab0d26f2870996ff296b7bbbd87171b91e288ba0c09aa0623bc6441e9aab6a"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[120px] ">
          <div className="mx-[72px] text-center">
            <h1 className="text-[37px] font-gr text-[#202124]">
              Find the plan that’s right for you
            </h1>
            <p className="mt-[16px] font-gr text-[20px] text-[#5f6368]">
              Google Drive is a part of Google Workspace
            </p>
            <p className="mt-[24px] mb-[16px] text-[20px] font-gr">
              Every plan includes
            </p>
            <div className="flex items-center justify-center">
              <a href="https://workspace.google.com/products/docs/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=docs&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Docs</p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/sheets/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=sheets&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/adf55cdf4c7f8fb38efbf8df6c2792660fbeff2d05be05f2ec8e9c265a179b51c64b9679d8aee00e09cad19ce419d90a2d999b82cea4200abbe78c73e6bfaacf"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Sheets</p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/slides/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=slides&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/deedce50760a1686790a49aaa7fac8d4a5cea4fd0fcdd19baef121569c47473a2398e063d2e68fe017ba73bc9088268d3f2758793bd9eb25a4cbdf62aea0adfc"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Slides</p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/forms/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=forms&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/9f04faac24aed8bf8fb381029de951128d1d36373f89675265a6654d0c47b74b2d83a26b68b834ce2eea3bfe8001966f76895888138f135a81d099fc207c73bb"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Forms</p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/keep/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=keep&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/ddb573245976a21aba0f45d4fe548fdc89318ae8707c25e75e9c3940b6568bd44069b57c08698007f94d19c8d558ca994528710c6a9c3f8b932dd83f391b16e6"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Keep</p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/sites/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=sites&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/ae343be0ecf95ae733f568f2fdf30ddb0a1da74ca00721a5bea239d0949759558b60b9ba5bf902929563695b793f32eb57e4a0ac0d67129836d973b359b2d596"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Sites</p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/drive/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=drive&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/d57b24106c34c7e50ef3d98423b94ddaf35ad2da73a9b9d4d12f52dbb9dd4c08c2957f6255ab8690d5ef0b32cff8287e09577d05e479d263e872160c4c9e8363"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Drive</p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/gmail/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=gmail&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/6d2a2dbaad1a3fe4c323dd6a4688db96e47b423de4175611399a97dc5b64a4ad7490d703aa0af80f28936e842e9d2448b1d74a530a2fe479a306d92281678efa"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Gmail</p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/meet/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=meet&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/2c19e911a3a8404b51c5c92087c9df618f6903c14e4ba28ba4ec1fe577dec6c08e158172897eb0ed31738aac610409999fd2c4376548f1159f375387aadce233"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Meet</p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/calendar/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=calendar&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/e5bae7cd1a971c0ecd82e839e79e9c436d16842cada6dd01a51b81bd8c3722914d7dbb9bfd927abb4de8b11d6a4a7083b861c78ea1b911f357d8e648b2c18beb"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">
                    Calendar
                  </p>
                </div>
              </a>
              <a href="https://workspace.google.com/products/chat/?hl=en&utm_source=driveforwork&utm_medium=et&utm_content=chat&utm_campaign=body">
                <div className="mx-[8px]">
                  <img
                    src="https://kstatic.googleusercontent.com/files/d8fbc7f9d2a241cd0db9b90c08b014d7825f5786b152f9691bdf691d545b6f543787115e9eaaadbc5e7c66cca5f6b7d71ece1acb6765dcdc22dba05bf8ebc8ee"
                    alt=""
                  />
                  <p className="text-[#5f6368] mt-[8px] text-[12px]">Chat</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[100px] text-center">
          <h1 className="text-[37px] font-gr">
            Looking for more storage for your personal account?
          </h1>
          <img
            src="https://fonts.gstatic.com/s/i/productlogos/one/v7/web-48dp/logo_one_color_1x_web_48dp.png"
            alt=""
            className="my-[40px] m-auto"
          />
          <p className="text-[#5f6368] text-[20px] font-gr mb-[40px] px-[255px]">
            Google One is a subscription plan that gives you more storage to use
            across Google Drive, Gmail, and Google Photos. Plus, with Google
            One, you get extra benefits and can share your membership with your
            family.
          </p>
          <a href="http://one.google.com/about">
            <p className="text-[#1a73e8] font-gr text-[17px] pb-[100px] border-b">
              Learn more about Google One
            </p>
          </a>
        </div>
        <div className="py-[120px] relative">
          <h1 className="text-[38px] mb-[36px] font-gr text-center">
            Ready to get started?
          </h1>
          <div className="flex justify-center">
            <button
              className="bg-[#1a73e8] text-white py-[14px] px-[24px] pr-[38px] rounded-[5px] mr-[16px]  text-[18px] relative font-gr"
              onClick={() => navigate("/ai")}>
              Talk to AI
              <img
                src="/assets/sparkler.png"
                alt=""
                className="h-[20px] w-[20px] absolute right-[15px] top-[17px] ml-[8px]"
              />
            </button>
            <button
              className="py-[14px] px-[24px] rounded-[5px] mr-[16px] text-[#1a73e8] border font-gr text-[18px] "
              onClick={signInWithGoogle2}>
              Go to Drive
            </button>
          </div>
          <img
            src="https://lh3.googleusercontent.com/5ENDQP8kSi6cTdflVOyjCg-zrUJPQ1EfxYKiEkWkwrSNp8TaqrBmFVpKfhOOQ4tM9ST5D7956nobaowYGzlhfUqIEklaJTeOhJnlCmRGrYnoHmHAMv4=w1024"
            alt=""
            className="absolute left-[20px] bottom-0 h-[200px] w-[320px]"
          />
        </div>
      </div>
      <div className="bg-[#f8f9fa]">
        <div className="py-[30px] mx-[72px] border-b flex">
          <h1 className="font-gr text-[18px] mr-[50px]">
            Follow our
            <a
              href="https://cloud.google.com/blog/products/workspace"
              className="text-[#1a73e8]">
              {" "}
              Blog
            </a>
          </h1>
          <div className="flex justify-between w-[130px]">
            <a href="https://www.youtube.com/googleworkspace">
              <img
                src="/assets/youtube.png"
                alt=""
                className="h-[28px] w-[28px]"
              />
            </a>
            <a href="https://twitter.com/googledrive">
              <img
                src="/assets/twitter.png"
                alt=""
                className="h-[26px] w-[26px]"
              />
            </a>
            <a href="https://www.facebook.com/googleworkspace">
              <img
                src="/assets/facebook.png"
                alt=""
                className="h-[23px] w-[24px]"
              />
            </a>
          </div>
        </div>
        <div className="flex mx-[72px] pb-[42px] py-[8px] items-center justify-between">
          <div className="flex items-center">
            <a href="">
              <img
                src="/assets/social.png"
                alt=""
                className="w-[85px] h-[80px] mr-[40px]"
              />
            </a>
            <div className="flex w-[440px] justify-between text-[18px] font-gr text-[#5f6368]">
              <a href="https://about.google/">About Google</a>
              <a href="https://about.google/products/">Google products</a>
              <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
              <a href="https://policies.google.com/terms?hl=en">Terms</a>
            </div>
          </div>
          <div className="flex items-center ">
            <img
              src="/assets/question.png"
              alt=""
              className="w-[35px] h-[35px] mr-[40px]"
            />
            <a
              href="https://support.google.com/?hl=en"
              className="text-[18px] font-gr text-[#5f6368]">
              Help
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
