export async function submitter({ campaignId, contactDeets, testimonial }) {
  const type = "submission";
  const path = window.location.pathname;
  const site = "decrim";

  const body = { type, site, path, campaignId, testimonial, contactDeets };

  try {
    const res = await fetch("https://scot4decrim.vercel.app/api/submission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      path: path,
      site: site
    });

    if (res.ok) {
 
      // optionally log server response (if any)
      const data = await res.json().catch(() => null);
    } else {
      console.warn(
        `⚠️ Submission failed: ${res.status} ${res.statusText}`,
        await res.text()
      );
    }
  } catch (e) {
    console.error("❌ submitter_error", e);
  }
}
