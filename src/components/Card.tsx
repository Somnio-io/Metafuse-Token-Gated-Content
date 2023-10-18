import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface MetafuseAsset {
  createdAt: string;
  currentOwner: string;
  files: string[];
  id: string;
  isPrivate: boolean;
  name: number;
  projectId: string;
  size: number;
  traitHash: string;
  traits: Trait[];
  url: string;
}

interface Trait {
  schedule?: any;
  trait_type: string;
  value: string;
}

function Card({ id, url, traits, name, currentOwner }: MetafuseAsset) {
  const tierOfToken = traits.find((_trait) => _trait.trait_type === "Tier");

  if (!tierOfToken) {
    return <div>You dont have a Pass. Go and Mint one.</div>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-l shadow-md overflow-hidden md:max-w-2xl">
      <Link href={`/content/${currentOwner}/${tierOfToken.value}`}>
        <div className="md:flex bg-slate-300 border-2 border-white">
          <div className="md:flex-shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={url}
              alt={id}
              width={190}
              height={190}
            />
          </div>

          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Token Id: {name}
            </div>
            <ul className="mt-4 space-y-2 ">
              {traits.map((trait, index) => (
                <li
                  key={trait.trait_type + index}
                  className="text-gray-700 text-base"
                >
                  {trait.trait_type}: {trait.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
