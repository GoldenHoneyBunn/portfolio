# IT & Cybersecurity Portfolio — Privacy-Hardened

A curated GitHub Pages portfolio for `goldenhoneybunn/HoneyBunn.github.io`.

## Publishing

Upload **the contents** of this package (not the outer ZIP) to the root of your repository. GitHub Pages: Settings → Pages → Deploy from a branch → main → / (root). All internal paths are relative, so they work under `/HoneyBunn.github.io/`.

## What is included

- Three featured training-lab case studies, each with documented scope, evidence and security lessons
- Four shorter notes covering Python, SQL, incident response and risk analysis
- Curated screenshot and lightweight video-poster assets. The original PPTX files, raw password hashes, complete files containing lab credentials, and large MP4 recordings are **not included**.

## Add your four lab videos

The source MP4 recordings are not included because the four total ~250 MB and may expose credentials or other details on screen. Host **reviewed/sanitized** copies separately (e.g. YouTube Unlisted). After you obtain a URL, replace the `.video-cover` element in the matching case-study page with an iframe such as:

```html
<iframe title="Lab demonstration" src="https://www.youtube-nocookie.com/embed/VIDEO_ID" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;aspect-ratio:16/9;border:0;border-radius:10px"></iframe>
```

Reference files:
- `Troubleshooting Network Issues.mp4` → `projects/secure-network.html`
- `Career Simulation 3 Recording.mp4` → `projects/windows-security-lab.html`
- `Creating Hashed Password files.mp4` → `projects/linux-security-assessment.html`
- `Logging in with new password on Windows.mp4` → optional related clip under the Windows lab, after review

## Before you publish

1. Verify image and video content for sensitive data, and remove any screenshots you do not have permission to share.
2. The public contact email is `htbunn2@gmail.com`. Add the actual LinkedIn URL, privacy-reviewed résumé and Hack The Box public profile links if desired.
3. Confirm all descriptions reflect the work personally performed in training and not merely assigned tasks.
4. Optional: link credential verification pages.

## Notes

The portfolio explicitly identifies training scenarios. The supplied `Project_1_Creating_a_secure_Network.pdf` included hard-coded lab usernames and passwords, which have **not** been included in the public package.


## Privacy and security review (before publishing)

- The HTML pages do not include the owner's full name, physical location, personal phone number, or private personal email. The designated public contact email `htbunn2@gmail.com` is intentionally visible. The visible GitHub account URL still identifies the GitHub username.
- No original training handouts, credential lists, hash dumps, full MP4 files, or unreviewed PPTX presentations are bundled.
- Video poster images were replaced to avoid showing webcam footage. The thumbnail assets have been re-encoded to remove source metadata.
- This site is static HTML/CSS/JS with no backend, analytics, cookies, or contact form. HTTPS is provided through GitHub Pages.
- Before uploading a future recording or document, inspect **all frames/slides** for real credentials, access tokens, browser autofill, faces, names, account identifiers, employer details, or other sensitive data. Lab-only credentials should still be omitted wherever practicable.
- GitHub repository URLs and commit history can disclose your GitHub username and public commit author/email. Review your GitHub profile, public email settings, and commit-email privacy before pushing. Use GitHub's noreply commit email.
- If earlier versions containing personal information were already committed, overwriting files does **not** delete past Git history, cached copies, search snippets, or archived pages.
- GitHub Pages is public by design; do not publish any secret, even in files that are not linked from the homepage.
- No client-side change can guarantee privacy or protect information made public previously.
