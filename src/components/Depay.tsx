import DePayWidgets from "@depay/widgets";

export function DepayButton() {
  // const handleClick = () => {
  //   console.log("button clicked");
  // };

  const handleClick = async () => {
    // const amount = calculateOrderAmount(TxCount, totalYears, discount);
    const amount = 0.01;

    const DepayReceiver = process.env.NEXT_PUBLIC_DEPAY_RECEIVER_WALLET;

    const options = {
      currency: "USD",
      accept: [
        {
          blockchain: "polygon",
          token: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC
          receiver: DepayReceiver,
          amount,
        },
        {
          blockchain: "polygon",
          token: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", // MATIC'
          receiver: DepayReceiver,
          amount,
        },
      ],
    };

    const { unmount } = await DePayWidgets.Payment(options);
  };
  return (
    <div>
      <button
        className="rounded bg-white px-10 py-2 text-purple-500"
        onClick={handleClick}
      >
        Pay with crypto
      </button>
    </div>
  );
}
