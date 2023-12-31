export const fetchCache = "force-no-store";

import Card, { MetafuseAsset } from "@/components/Card";
import React from "react";

async function getData(account: string) {
  const url = `https://gateway.metafuse.me/v1/items/${process.env
    .METAFUSE_PROJECT_ID!}?owner=${account}`;
  const res = await fetch(url, {
    headers: {
      Authorization: process.env.METAFUSE_API_KEY as string,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const _res = await res.json();
  return _res.items as MetafuseAsset[];
}

export default async function Page({
  params: { address },
}: {
  params: { address: string };
}) {
  const data = await getData(address);

  return (
    <main>
      <div>
        {data.length ? (
          data.map((item) => {
            return <Card key={item.id + item.traitHash} {...item} />;
          })
        ) : (
          <div>
            No Passes Found, mint one on Base Goerli{" "}
            <a
              className="text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://token-gate-example.metafuse.me/"
            >
              Here
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
