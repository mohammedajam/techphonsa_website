# Production deployment

This site is ready for Vercel. It is a static React/Vite site: no database, server, or runtime environment variables are required.

## One-time approval setup

1. Commit and push this repository to the GitHub repository that the organisation has approved.
2. In [Vercel](https://vercel.com/new), choose **Continue with GitHub**, import that repository, and approve the requested access.
3. Keep the detected settings: build command `npm run build`, output directory `dist`, and install command `npm ci`.
4. Click **Deploy**. Vercel will give you a preview URL immediately. Add the approved custom domain in **Project → Settings → Domains** when it is available.
5. In GitHub, make `main` the protected production branch and require the **Production checks** workflow before merging.

After setup, every push to `main` publishes production automatically. Pull requests receive a Vercel preview URL and run the build/lint checks.

## Single-command manual release

After the project has been linked to Vercel once, run this from the project folder:

```powershell
.\scripts\deploy.ps1
```

It stops if linting or the production build fails, and only then runs `vercel --prod`. The first manual run may ask you to sign in/link the Vercel project; later runs publish in one command.

## Approval-day checklist

- Confirm `techphonsa@gmail.com` is the intended recipient for contact-form submissions. FormSubmit may send a one-time activation email after the first live submission.
- Confirm the final domain and DNS access are approved.
- Open the Vercel preview on a phone and desktop; submit one test enquiry.
- Do not put passwords, API keys, or domain credentials in this repository.
