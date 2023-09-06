import contactUsImg from "../../assets/images/contact/contact-us.png";

const ContactUs = () => {
  return (
    <div className="bg-base-200 py-14">
      <div className="px-2 sm:px-10">
        <div className="border rounded">
          <div className="grid sm:grid-cols-2 gap-10">
            <div className="py-10">
              <img loading="lazy" className="max-w-full p-10" src={contactUsImg} alt="email" />
            </div>

            <div className="">
              <div className="max-w-sm mx-auto py-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl inline-block underline underline-offset-8 uppercase font-semibold text-secondary">contact us</h2>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered input-secondary" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" placeholder="password" className="input input-bordered  input-secondary" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea className="textarea textarea-secondary" placeholder="Message" rows="6"></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-accent text-white">submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
