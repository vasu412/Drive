import { useEffect } from "react";

const Notification = ({ message, showNotification, setShowNotification }) => {
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000); // Show for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <>
      <div className={`notify ${showNotification ? "show" : ""}`}>
        <span>{message}</span>
        <span>
          <i
            className="material-icons text-[18px] ml-[10px] mt-[6px] text-[#5F6368] cursor-pointer"
            onClick={() => setShowNotification(false)}>
            close
          </i>
        </span>
      </div>
    </>
  );
};

export default Notification;
