import contactUsImg from "../../assets/images/contact/contact-us.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current[0].value || !form.current[1].value || !form.current[2].value) {
      return toast.error("Name, email and message should not be empty");
    }

    emailjs.sendForm("service_3ligvku", "template_uabfux9", form.current, "iF2sH_wv3oxbN5Gx4").then(
      (result) => {
        toast.success("Send message success!");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    form.current.reset();
  };

  return (
    <div className="bg-base-200 py-14">
      <div className="px-2 sm:px-10">
        <div className="border rounded">
          <div className="grid sm:grid-cols-2 gap-10">
            <div data-aos="flip-right" className="py-10">
              <img loading="lazy" className="max-w-full p-10" src={contactUsImg} alt="email" />
            </div>

            <div className="">
              <form ref={form} onSubmit={sendEmail} className="max-w-sm mx-auto py-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl inline-block underline underline-offset-8 uppercase font-semibold text-error">contact us</h2>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input name="user_name" type="text" placeholder="your name" className="input input-bordered input-error rounded" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input name="user_email" type="email" placeholder="your email" className="input input-bordered input-error rounded" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea name="user_message" className="textarea textarea-error rounded" placeholder="Message" rows="6"></textarea>
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-accent text-white rounded">
                    submit
                  </button>
                  <Toaster position="top-center" reverseOrder={false} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
