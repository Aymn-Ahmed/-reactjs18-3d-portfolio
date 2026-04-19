type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    whatsapp: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    architecture: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Ayman Ahmed — Full Stack Developer",
    fullName: "Ayman Ahmed Al-Rjwy",
    email: "aymnahmedalrjwy@gmail.com",
    phone: "+966 540716434",
    linkedin: "https://linkedin.com/in/aymen-alrjwy",
    github: "https://github.com/Aymn-Ahmed",
    whatsapp: "https://wa.me/966540716434",
  },
  hero: {
    name: "Ayman Ahmed",
    p: ["Full Stack Developer specialized in", "React.js, ASP.NET Core, and SQL Server"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a motivated Full Stack Developer with strong expertise in building 
      modern web applications using React.js and robust backend systems with ASP.NET Core. 
      I specialize in creating efficient, scalable, and user-friendly solutions with a 
      focus on clean code and layered architecture. Let's work together to bring your 
      complex business requirements to life!`,
    },
    experience: {
      p: "Engineering Solutions",
      h2: "Project Experience.",
    },
    architecture: {
      p: "Technical Depth",
      h2: "Modular Systems.",
      content: `I specialize in building complex Enterprise systems using Modular Monolith
      architectures. By decoupling systems into independent modules like Identity,
      Billing, and Invoices, I ensure that the software is scalable, maintainable,
      and strictly follows Domain-Driven Design (DDD) principles.`,
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My technical portfolio",
      h2: "Key Systems.",
      content: `The following projects demonstrate my ability to handle complex logic 
    and architectural designs. From desktop license management to simulation systems, 
    each project reflects my commitment to data integrity, performance, and user experience.`,
    },
  },
};
