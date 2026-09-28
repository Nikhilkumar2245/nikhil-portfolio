# Nikhil Kumar — Portfolio Frontend

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Quick editing

### Personal information
Open `src/main.jsx` and edit the `profile` object.

### Add a project
Add another object to the `projects` array:

```js
{
  number: "03",
  title: "Your Project",
  category: "Web Development",
  description: "What you built and why.",
  tech: ["React", "Node.js"],
  image: "/projects/your-project.webp",
  live: "https://your-live-site.com",
  github: "https://github.com/your-repo"
}
```

Put the project image inside:

`public/projects/`

### Skills
Edit the `skills` object.

### Experience
Edit the `experience` array.

### Resume
Put your PDF at:

`public/resume.pdf`

### Deploy
Build:

```bash
npm run build
```

Then deploy the project to Vercel, Netlify, or another static hosting service.
