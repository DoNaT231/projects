export const translations = {
  hu: {
    meta: {
      title: "Komoróczy Donát — Portfolio",
      description:
        "Komoróczy Donát portfóliója — Óbudai Egyetem gazdaságinformatika hallgató, webfejlesztői projektekkel és szakmai gyakorlat kereséssel.",
    },
    nav: {
      about: "Rólam",
      projects: "Projektek",
      skills: "Készségek",
      experience: "Tapasztalat",
      contact: "Kapcsolat",
      cta: "Keress meg",
    },
    hero: {
      subtitle: "webfejlesztő portfolio",
      description:
        "Gazdaságinformatika hallgató vagyok az Óbudai Egyetemen — egy félév van hátra a 7 féléves képzésből. Tapasztalt vagyok webes felületek létrehozásában és működtetésében, és szakmai gyakorlatot keresek: bármilyen fejlesztési irány érdekel, szívesen kipróbálnám magam egy szoftverfejlesztő csapatban.",
      viewProjects: "Projektjeim megtekintése",
      contact: "Kapcsolatfelvétel",
      imageAlt: "Komoróczy Donát portfolio bemutatkozó kép",
      cardEyebrow: "Saját & ügyfélprojektek",
      cardText: "Webalkalmazások, vállalkozói oldalak és side projektek",
    },
    about: {
      eyebrow: "Rólam",
      title: "Gazdaságinformatika hallgató, gyakorlati webfejlesztési tapasztalattal.",
      text: "2023 szeptemberében kezdtem az Óbudai Egyetemen a gazdaságinformatika képzést. A tanulmányok mellett valós webes projekteket építek — embereknek és vállalkozásoknak is —, és ezen az oldalon mutatom be a munkáimat.",
      studiesTitle: "Tanulmányok",
      studiesText:
        "Óbudai Egyetem, gazdaságinformatika BSc — 2023 szeptemberi kezdéssel, összesen 7 félév. Jelenleg az utolsó félévem előtt állok, és szakmai gyakorlatot keresek a diploma előtt.",
      projectsTitle: "Webes projektek",
      projectsText:
        "Már készítettem weboldalakat magánszemélyeknek és vállalkozásoknak, emellett saját, „fun” projekteken is dolgozom. React-alapú frontendtől full-stack megoldásokig — a portfóliómban láthatóak az éles és fejlesztés alatt álló munkáim.",
      careerTitle: "Karriercél",
      careerText:
        "Szakmai gyakorlatot keresek fejlesztés irányában, és szívesen kipróbálnám magam egy szoftverfejlesztő csapatban — akár közvetítő vagy Scrum-folyamat résztvevő szerepkörben is. AI eszközként főleg a Cursort használom a mindennapi fejlesztéshez.",
    },
    projects: {
      eyebrow: "Projektek",
      title: "Saját weboldalak és digitális projektek.",
      text: "Valós, élesben futó vagy aktívan fejlesztett projektek — webalkalmazásoktól vállalkozói oldalakig, ahol a frontend, backend és üzleti logika együtt dolgozik.",
      previewAlt: "előnézet",
      viewWebsite: "Weboldal megtekintése →",
      inDevelopment: "Fejlesztés alatt",
      github: "GitHub →",
      githubPrivate: "GitHub · Privát repó",
      items: {
        "workout-tracker": {
          category: "Fitness / Edzésnapló webapp",
          description:
            "Mobilbarát edzésnapló calisthenics és saját testsúlyos edzésekhez. Edzés közben rögzíti a szetteket timerrel, pihenőidőzítővel és tartás számlálóval. Local-first mentés a böngészőben, Firebase szinkron bejelentkezés után — pontszámítás, erőbecslés és Progress statisztikák.",
        },
        smash: {
          category: "Sport / Full-stack webalkalmazás",
          description:
            "A SMASH Strandröplabda Sportegyesület hivatalos oldala és ügyviteli felülete: pályafoglalási naptár szabályokkal, versenynevezés, csütörtöki bajnokság ranglista, admin felület és e-mail értesítések. Élesben: balatonsse.hu.",
        },
        "glass-moss": {
          category: "Vállalkozói weboldal",
          description:
            "Hivatalos vállalkozói weboldal terráriumokhoz és paludáriumokhoz: portfólió-galéria kategóriákkal, kapcsolatfelvételi űrlap, terráriumgondozási útmutató aloldal, GDPR-kompatibilis jogi oldalak és cookie-banner.",
        },
        beatclash: {
          category: "Játék / Realtime multiplayer · Fejlesztés alatt",
          description:
            "Böngészős, valós idejű multiplayer lo-fi beat battle játék. Öt körben építik a játékosok a beatet 16 lépéses sequencerrel, majd meghallgatják és értékelik egymás munkáját. Az alap UI és a realtime backend struktúra kész, a teljes multiplayer flow bővül.",
        },
      },
    },
    skills: {
      eyebrow: "Készségek",
      title: "Technikai eszköztár.",
      text: "A stack, amit a saját és ügyfélprojektekben használok — React-alapú frontendtől Firebase és PostgreSQL backendig, realtime kommunikációtól local-first adatkezelésig.",
      groups: [
        {
          title: "Frontend",
          items: [
            "React",
            "JavaScript",
            "TypeScript",
            "HTML / CSS",
            "Tailwind CSS",
            "React Router",
            "Vite",
            "Reszponzív design",
            "Komponens architektúra",
          ],
        },
        {
          title: "Backend & adat",
          items: [
            "Node.js",
            "Express",
            "REST API",
            "PostgreSQL",
            "Prisma ORM",
            "Firebase Auth",
            "Cloud Firestore",
            "JWT",
            "Socket.IO",
            "Brevo",
          ],
        },
        {
          title: "Üzleti logika & UX",
          items: [
            "Local-first mentés",
            "Feature-alapú struktúra",
            "Repository–service réteg",
            "Szerepkör-alapú jogosultság",
            "SEO & Open Graph",
            "GDPR / cookie kezelés",
            "Landing page",
            "Tartalomstruktúra",
            "Scrum / csapatfolyamatok",
          ],
        },
        {
          title: "Eszközök & deploy",
          items: [
            "Git / GitHub",
            "Cursor",
            "Vite",
            "ESLint",
            "VPS",
            "Nginx",
            "PM2",
            "Formspree",
            "Leaflet",
            "Web Audio API",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Tapasztalat",
      title: "Tanulmányok, projektek és háttér.",
      text: "Formális fejlesztői munkatapasztalatom még nincs — a webes munkát saját és ügyfélprojekteken, valamint az egyetemi képzésen keresztül szerzem. Az egészségügyi háttér csapatmunkára és felelősségvállalásra épít.",
      items: [
        {
          role: "Gazdaságinformatika BSc",
          company: "Óbudai Egyetem",
          period: "2023 szeptember –",
          text: "Gazdaságinformatika alapképzés, 7 félév. 2023 szeptemberében kezdtem, jelenleg egy félév van hátra. A tananyag mellett önállóan és projektalapon fejlesztek webes alkalmazásokat.",
        },
        {
          role: "Önálló webfejlesztés",
          company: "Magánszemélyek & vállalkozások",
          period: "Saját projektek",
          text: "Weboldalak és webalkalmazások készítése ügyfeleknek — többek között sportegyesületi rendszer (pályafoglalás, admin), vállalkozói portfólió-oldal és egyéb digitális felületek. Emellett saját side projektek (edzésnapló, játékfejlesztés).",
        },
        {
          role: "Ápoló",
          company: "Egészségügyi szektor",
          period: "Szakmai gyakorlat",
          text: "Ápolói szakmai gyakorlat — felelősségteljes munkavégzés, csapatmunka és nyomás alatti döntéshozatal. A fejlesztői munkában is hasznosítom a precizitást és a rendszeres, megbízható munkastílust.",
        },
        {
          role: "Vizimentő",
          company: "Strand / vízimentő szolgálat",
          period: "Munkatapasztalat & gyakorlat",
          text: "Vizimentőként dolgoztam és szakmai gyakorlatot is teljesítettem. Gyors reagálás, kommunikáció és felelősségvállalás — olyan soft skillek, amelyek csapatmunkában és ügyfélprojektekben is számítanak.",
        },
      ],
    },
    contact: {
      eyebrow: "Kapcsolat",
      title: "Dolgozzunk együtt, vagy beszéljünk egy lehetőségről.",
      text: "Szakmai gyakorlatot keresek fejlesztés irányában — szívesen beszélnék bármilyen lehetőségről, ahol egy szoftverfejlesztő csapatban tanulhatok és hozzájárulhatok.",
      email: "Email",
      linkedin: "LinkedIn",
      openProfile: "Profil megnyitása",
      github: "GitHub",
      myProjects: "Projektjeim",
      emailSubject: "Kapcsolatfelvétel - Portfolio",
    },
    footer: {
      tagline: "Portfolio és CV weboldal",
    },
  },
  en: {
    meta: {
      title: "Komoróczy Donát — Portfolio",
      description:
        "Portfolio of Komoróczy Donát — Business Informatics student at Óbuda University, with web development projects and open to internships.",
    },
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      subtitle: "web developer portfolio",
      description:
        "I'm a Business Informatics student at Óbuda University — one semester left in the 7-semester programme. I'm experienced in building and operating web interfaces, and I'm looking for an internship: any development direction interests me, and I'd love to try working in a software development team.",
      viewProjects: "View my projects",
      contact: "Get in touch",
      imageAlt: "Komoróczy Donát portfolio intro image",
      cardEyebrow: "Personal & client projects",
      cardText: "Web apps, business websites and side projects",
    },
    about: {
      eyebrow: "About",
      title: "Business Informatics student with hands-on web development experience.",
      text: "I started the Business Informatics programme at Óbuda University in September 2023. Alongside my studies, I build real web projects — for individuals and businesses — and showcase my work on this site.",
      studiesTitle: "Education",
      studiesText:
        "Óbuda University, BSc in Business Informatics — started September 2023, 7 semesters total. I'm currently one semester away from finishing and looking for an internship before graduation.",
      projectsTitle: "Web projects",
      projectsText:
        "I've already built websites for individuals and businesses, and I also work on personal side projects. From React-based frontends to full-stack solutions — my portfolio shows both live and in-progress work.",
      careerTitle: "Career goals",
      careerText:
        "I'm looking for an internship in development and would love to try working in a software team — even as a facilitator or Scrum process participant. I mainly use Cursor as my AI tool for day-to-day development.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Personal websites and digital projects.",
      text: "Real, production-ready or actively developed projects — from web applications to business websites, where frontend, backend and business logic work together.",
      previewAlt: "preview",
      viewWebsite: "View website →",
      inDevelopment: "In development",
      github: "GitHub →",
      githubPrivate: "GitHub · Private repo",
      items: {
        "workout-tracker": {
          category: "Fitness / Workout tracker web app",
          description:
            "Mobile-friendly workout log for calisthenics and bodyweight training. Records sets during workouts with timers, rest countdown and hold tracking. Local-first storage in the browser, Firebase sync after login — load scoring, strength estimates and progress statistics.",
        },
        smash: {
          category: "Sports / Full-stack web application",
          description:
            "Official website and management platform for SMASH Beach Volleyball Club: court booking calendar with rules, tournament registration, Thursday league leaderboard, admin panel and email notifications. Live at balatonsse.hu.",
        },
        "glass-moss": {
          category: "Business website",
          description:
            "Official business website for terrariums and paludariums: portfolio gallery with categories, contact form, terrarium care guide subpage, GDPR-compliant legal pages and cookie banner.",
        },
        beatclash: {
          category: "Game / Realtime multiplayer · In development",
          description:
            "Browser-based realtime multiplayer lo-fi beat battle game. Players build beats over five rounds with a 16-step sequencer, then listen to and rate each other's work. Core UI and realtime backend structure are ready; the full multiplayer flow is still expanding.",
        },
      },
    },
    skills: {
      eyebrow: "Skills",
      title: "Technical toolkit.",
      text: "The stack I use in personal and client projects — from React-based frontends to Firebase and PostgreSQL backends, realtime communication to local-first data handling.",
      groups: [
        {
          title: "Frontend",
          items: [
            "React",
            "JavaScript",
            "TypeScript",
            "HTML / CSS",
            "Tailwind CSS",
            "React Router",
            "Vite",
            "Responsive design",
            "Component architecture",
          ],
        },
        {
          title: "Backend & data",
          items: [
            "Node.js",
            "Express",
            "REST API",
            "PostgreSQL",
            "Prisma ORM",
            "Firebase Auth",
            "Cloud Firestore",
            "JWT",
            "Socket.IO",
            "Brevo",
          ],
        },
        {
          title: "Business logic & UX",
          items: [
            "Local-first storage",
            "Feature-based structure",
            "Repository–service layer",
            "Role-based access",
            "SEO & Open Graph",
            "GDPR / cookie consent",
            "Landing page",
            "Content structure",
            "Scrum / team workflows",
          ],
        },
        {
          title: "Tools & deploy",
          items: [
            "Git / GitHub",
            "Cursor",
            "Vite",
            "ESLint",
            "VPS",
            "Nginx",
            "PM2",
            "Formspree",
            "Leaflet",
            "Web Audio API",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Education, projects and background.",
      text: "I don't have formal developer work experience yet — I gain web skills through personal and client projects, alongside my university studies. My healthcare background builds teamwork and accountability.",
      items: [
        {
          role: "BSc Business Informatics",
          company: "Óbuda University",
          period: "September 2023 –",
          text: "Undergraduate programme in Business Informatics, 7 semesters. Started in September 2023, one semester left. Alongside coursework, I develop web applications independently and through projects.",
        },
        {
          role: "Freelance web development",
          company: "Individuals & businesses",
          period: "Personal projects",
          text: "Building websites and web applications for clients — including a sports club system (court booking, admin), a business portfolio site and other digital interfaces. Plus personal side projects (workout tracker, game development).",
        },
        {
          role: "Nurse",
          company: "Healthcare sector",
          period: "Internship",
          text: "Nursing internship — responsible work, teamwork and decision-making under pressure. I apply the same precision and reliable work ethic in development.",
        },
        {
          role: "Lifeguard",
          company: "Beach / lifeguard service",
          period: "Work experience & internship",
          text: "Worked as a lifeguard and completed an internship. Quick response, communication and accountability — soft skills that matter in teamwork and client projects.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together or talk about an opportunity.",
      text: "I'm looking for a development internship — happy to discuss any opportunity where I can learn and contribute in a software development team.",
      email: "Email",
      linkedin: "LinkedIn",
      openProfile: "Open profile",
      github: "GitHub",
      myProjects: "My projects",
      emailSubject: "Contact - Portfolio",
    },
    footer: {
      tagline: "Portfolio and CV website",
    },
  },
}
