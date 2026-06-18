import { sendContactEmail } from "./app/actions/sendEmail";
async function test() {
  const formData = new FormData();
  formData.append("name", "Test User");
  formData.append("email", "test@example.com");
  formData.append("message", "This is a test message");
  const result = await sendContactEmail(formData);
  console.log(result);
}
test();
