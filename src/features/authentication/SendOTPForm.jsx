
import TextField from "../../ui/TextField";

import Loading from "../../ui/Loading";

function SendOTPForm({ onSubmit, isSendingOtp, register }) {
  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-4">
        <TextField
          label="شماره موبایل"
          name="phoneNumber"
          register={register}
        />
        <div className="">
          {isSendingOtp ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
