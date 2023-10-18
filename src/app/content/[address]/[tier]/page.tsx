import { MetafuseAsset } from "@/components/Card";
import React from "react";

async function getData(account: string, tier: string) {
  const url = `https://gateway.metafuse.me/v1/items/${process.env
    .METAFUSE_PROJECT_ID!}?owner=${account}&filter[Tier]=${tier}`;

  const res = await fetch(url, {
    next: { revalidate: 30, tags: [tier] },
    headers: {
      Authorization: process.env.METAFUSE_API_KEY as string,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jsonResponse = await res.json();
  // Based on the traits within the jsonResponse object - you could fetch other content from a backend to show to the user
  return jsonResponse.items as MetafuseAsset[];
}

export default async function Page({
  params: { address, tier },
}: {
  params: { address: string; tier: string };
}) {
  const data = await getData(address, tier);

  if (data.length) {
    return (
      <div>
        Welcome to your exclusive content for Tier: {tier}
        <video
          className="mx-auto my-auto"
          muted={true}
          controls={true}
          autoPlay={true}
          playsInline={true}
          loop={true}
          height={390}
          width={390}
          src={
            "https://api.metafuse.me/assets/metafuse/NeverGonnaGiveYouUp.mp4"
          }
        />
      </div>
    );
  } else {
    return <div>You do not have access to this content: {tier}</div>;
  }
}
