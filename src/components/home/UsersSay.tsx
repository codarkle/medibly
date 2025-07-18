"use client";

import React from "react";
import Image from "next/image";

type UserReview = {
  name: string;
  role: string;
  location: string;
  imageSrc: string;
  review: string;
  rating: number; // number of full stars
  halfStar?: boolean; // if true, show a half star
};

const users: UserReview[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Dermatologist",
    location: "New York",
    imageSrc: "/images/users/woman1.jpg",
    review:
      "Medibly's monthly dashboards help me understand my clinic's finances at a glance. No spreadsheets, no confusion — just clear insights.",
    rating: 4,
    halfStar: true,
  },
  {
    name: "Dr. Michael Rodriguez",
    role: "Plastic Surgeon",
    location: "Los Angeles",
    imageSrc: "/images/users/man1.jpg",
    review:
      "Since using Medibly, I've been able to track profits and reduce unnecessary expenses with ease. It's like having a CFO in my pocket.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Clinic Administrator",
    location: "Atlanta",
    imageSrc: "/images/users/man2.jpg",
    review:
      "Medibly streamlines financial reporting for all our doctors. Uploading data is simple, and the visual reports are a game-changer for monthly reviews.",
    rating: 5,
  },
];


// Star rating component
const StarRating: React.FC<{ rating: number; halfStar?: boolean }> = ({
  rating,
  halfStar,
}) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <Image
        key={`star-${i}`}
        src="/icons/users/review.svg"
        alt="Review"
        width={18}
        height={16}
        className="object-cover"
      />
    );
  }
  if (halfStar) {
    stars.push(
      <Image
        key="half-star"
        src="/icons/users/half_review.svg"
        alt="Half Review"
        width={20}
        height={16}
        className="object-cover"
      />
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
};

const UserCard: React.FC<{ user: UserReview }> = ({ user }) => {
  return (
    <div className="w-[350px] h-[248px] bg-white rounded-[12px] m-6 shadow-[0_4px_6px_0_rgba(0,0,0,0.1)]">
      <div className="relative mt-6 ml-6 h-[48px]">
        <div className="absolute top-0 left-0 w-[48px] h-[48px] rounded-full overflow-hidden">
          <Image
            src={user.imageSrc}
            alt={user.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="absolute top-[2px] left-[64px]">
          <span className="block text-[16px] font-bold text-[#1f2937] whitespace-nowrap">
            {user.name}
          </span>
          <span className="block text-[14px] font-normal text-[#4b5563] whitespace-nowrap">
            {user.role}, {user.location}
          </span>
        </div>
      </div>

      <div className="relative mt-4 ml-6 h-[96px] text-[#4b5563] text-[16px] font-normal leading-[19.364px] pr-2">
            {user.review}
      </div>

      <div className="relative mt-4 ml-6 h-[24px] flex items-center">
        <StarRating rating={user.rating} halfStar={user.halfStar} />
      </div>
    </div>
  );
};

export default function UsersSay() {
  return (
    <section id="waitlist" className="bg-[#f9fafb] my-16">
      <h2 className="flex justify-center items-start text-[30px] font-bold text-[#1f2937] text-center whitespace-nowrap">
        What Our Users Say
      </h2>
      <p className="flex justify-center items-start text-[20px] font-normal mt-3 mb-5 text-[#4b5563] text-center">
        Join these industry professionals already using Medibly
      </p>
      <div className="flex flex-wrap justify-center">
        {users.map((user) => (
          <UserCard key={user.name} user={user} />
        ))}
      </div>
    </section>
  );
}
