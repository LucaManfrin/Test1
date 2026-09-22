import { SITE } from "../site.config";

export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
