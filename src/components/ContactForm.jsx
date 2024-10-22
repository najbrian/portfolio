import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3be513ad-ec88-45d0-928b-cc44efcaa9f8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has sucessfully been sent!",
        icon: "success",
      });
    }
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen font-inter">
        <form
          onSubmit={onSubmit}
          className="xs:max-w-[400px] md:max-w-[600px] mx-auto bg-white rounded-lg p-5"
        >
          <h2 className="xs:text-lg md:text-xl font-bold text-center text-[#345678]">Contact Me</h2>
          <div className="m-5">
            <label className='text-[#345678] xs:text-sm md:text-base'>Full Name</label>
            <input
              className="w-full bg-transparent border-2 rounded-md outline-none p-2 text-[#333] xs:text-sm md:text-base"
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="m-5">
            <label className='text-[#345678] xs:text-sm md:text-base'>Email Address</label>
            <input
              className="w-full bg-transparent border-2 rounded-md outline-none p-2 text-[#333] xs:text-sm md:text-base"
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="m-5">
            <label className='text-[#345678] xs:text-sm md:text-base'>Your Message</label>
            <textarea
              className="w-full h-56 resize-none bg-transparent border-2 rounded-md outline-none p-2 text-[#333] xs:text-sm md:text-base"
              name="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <Button type="submit" variant="contained" sx={{fontSize: { xs: "0.66rem", md: "1rem" }}}>
              Send Message
            </Button>
          </div>
          <div className="flex justify-center m-5 p-1 gap-2">
            <a
              href="https://www.linkedin.com/in/nabrian/"
              target="_blank"
              rel="noopener noreferrer"
              className='xs:text-xs md:text-md lg:text-lg'
            >
              <LinkedInIcon sx={{ color: "#345678",fontSize: { xs: "0.66rem", md: "1.5rem" } }} />
              nabrian
            </a>
            <a
              href="https://github.com/najbrian"
              target="_blank"
              rel="noopener noreferrer"
              className='xs:text-xs md:text-md lg:text-lg'
            >
              <GitHubIcon sx={{ color: "#345678",fontSize: { xs: "0.66rem", md: "1.5rem" } }} />
              najbrian
            </a>
            <a
              href="mailto:najbrian@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className='xs:text-xs md:text-md lg:text-lg'
            >
              <EmailIcon sx={{ color: "#345678",fontSize: { xs: "0.66rem", md: "1.5rem" } }} />
              najbrian@gmail.com
            </a>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
