"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ACTIVITIES } from "@/constants";

const Activity = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activity, setActivity] = useState<{
    image: string;
    title: string;
    tags: string[];
    url: string;
    text: string;
  } | null>(null);

  useEffect(() => {
    const idFromPath = pathname.split("/").pop(); // Extract id from pathname
    const idFromQuery = searchParams.get("id"); // Extract id from query params if needed
    const id = idFromPath || idFromQuery;

    if (id) {
      const foundActivity = ACTIVITIES.find((activity) => activity.url === id);
      if (foundActivity) {
        setActivity(foundActivity);
      }
    }
  }, [pathname, searchParams]);

  if (!activity) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-container padding-container">
      <div className="activity-detail">
        <Image
          src={activity.image}
          alt={activity.title}
          width={600}
          height={400}
          className="activity-image"
        />
        <h1>{activity.title}</h1>
        <div className="tags">
          {activity.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p>{activity.text}</p>
      </div>
    </div>
  );
};

export default Activity;
