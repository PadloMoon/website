import env from "react-dotenv";
import emailjs from "@emailjs/browser";

export async function sendRegistrationEmail(
  player: string,
  transactionHash: string
): Promise<boolean> {
  const templateParams = {
    from_name: player,
    transaction_hash: transactionHash,
  };
  const res = await emailjs.send(
    env.POKER_BOT_SERVICE_ID,
    env.POKER_BOT_TEMPLATE_ID,
    templateParams,
    env.POKER_BOT_USER_ID
  );
  console.log("res", res);
  if (res) {
    return true;
  }
  return false;
}
