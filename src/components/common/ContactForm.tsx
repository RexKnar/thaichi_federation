"use client";

import { useEffect, useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic client-side check if someone forgot to fill it, though it's required in HTML
    if (Number(data.captchaAnswer) !== captcha.num1 + captcha.num2) {
      setError("Incorrect captcha answer. Please try again.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          num1: captcha.num1,
          num2: captcha.num2,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        generateCaptcha();
      } else {
        setError(result.error || "Something went wrong. Please try again later.");
        if (result.error?.includes("captcha")) generateCaptcha();
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Unable to connect to the server. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form needs-validation" onSubmit={handleSubmit}>
      <div className="messages">
        {success && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            Your message has been sent successfully. We will get back to you soon!
            <button type="button" className="btn-close" onClick={() => setSuccess(false)} />
          </div>
        )}
        {error && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {error}
            <button type="button" className="btn-close" onClick={() => setError("")} />
          </div>
        )}
      </div>

      <div className="row gx-4">
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input required type="text" name="name" id="form_name" placeholder="Jane" className="form-control" />
            <label htmlFor="form_name">First Name *</label>
            <div className="invalid-feedback"> Please enter your first name. </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input required type="text" name="surname" placeholder="Doe" id="form_lastname" className="form-control" />
            <label htmlFor="form_lastname">Last Name *</label>
            <div className="invalid-feedback"> Please enter your last name. </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              required
              type="email"
              name="email"
              id="form_email"
              className="form-control"
              placeholder="jane.doe@example.com"
            />
            <label htmlFor="form_email">Email *</label>
            <div className="invalid-feedback"> Please provide a valid email address. </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-select-wrapper mb-4">
            <select className="form-select" id="form-select" name="option" defaultValue="" required>
              <option disabled value="">Select an option *</option>
              <option value="Course details and fee structure">Course details and fee structure</option>
              <option value="Enrollment and registration support">Enrollment and registration support</option>
              <option value="Beginner, intermediate, and advanced training">Beginner, intermediate, and advanced training</option>
              <option value="Instructor and master training programs">Instructor and master training programs</option>
              <option value="Seminars, workshops, and retreats">Seminars, workshops, and retreats</option>
              <option value="Private and customized Tai Chi classes">Private and customized Tai Chi classes</option>
              <option value="Federation membership and certification">Federation membership and certification</option>
            </select>
          </div>
        </div>

        <div className="col-12">
          <div className="form-floating mb-4">
            <textarea
              required
              name="message"
              id="form_message"
              className="form-control"
              placeholder="Your message"
              style={{ height: 150 }}
            />
            <label htmlFor="form_message">Message *</label>
            <div className="invalid-feedback"> Please enter your message. </div>
          </div>
        </div>

        <div className="col-12">
          <div className="row align-items-center mb-4">
            <div className="col-auto">
              <span className="fs-lg text-primary fw-bold">
                {captcha.num1} + {captcha.num2} =
              </span>
            </div>
            <div className="col-md-4">
              <div className="form-floating">
                <input
                  required
                  type="number"
                  name="captchaAnswer"
                  id="form_captcha"
                  className="form-control"
                  placeholder="Sum"
                />
                <label htmlFor="form_captcha">Captcha Sum *</label>
              </div>
            </div>
            <div className="col text-muted fs-sm">
              Please solve this simple math problem to prove you are human.
            </div>
          </div>
        </div>

        <div className="col-12 text-center">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary rounded-pill btn-send mb-3 w-100"
          >
            {loading ? "Sending..." : "Send message"}
          </button>
          <p className="text-muted">
            <strong>*</strong> These fields are required.
          </p>
        </div>
      </div>
    </form>
  );
}


