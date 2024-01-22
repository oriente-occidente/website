import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  let path = req.query.redirect || "/";
  // Redirect to the path from the fetched post
  // res.redirect(path);
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `${path}` });
  res.end();
}
