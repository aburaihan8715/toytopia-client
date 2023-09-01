import contactUsImg from "../../../assets/images/contact/contact-us.png";

const ContactUs = () => {
  return (
    <div className="bg-base-200 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="">
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8" data-aos="flip-right">
              <img loading="lazy" className="max-w-full" src={contactUsImg} alt="email" />
            </div>

            <div className="self-end pb-8">
              <div className="">
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
                  <textarea className="textarea textarea-secondary" placeholder="Message"></textarea>
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
