import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Section = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold font-inter">{title}</h1>
        <a
          href="https://www.linkedin.com/in/nabrian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      {children}
    </section>
  );
};

export default Section;
