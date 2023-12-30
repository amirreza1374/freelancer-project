import { useState } from "react";
import CheckOTPForm from "./CheckOTPForm";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function AuthContainer() {
  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(data.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const [phoneNumber, setPhoneNumber] = useState("09339669552");

  const [step, setStep] = useState(2);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={sendOtpHandler}
            setStep={setStep}
            phoneNumber={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            onResendOtp={sendOtpHandler}
            phoneNumber={phoneNumber}
            onBack={() => {
              setStep(1);
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="w-full sm:max-w-sm">{renderStep()}</div>
    </div>
  );
}

export default AuthContainer;
