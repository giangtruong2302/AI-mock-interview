import { Button } from "@/components/ui/button";
import { getRandomInterviewCover } from "@/public/utils";
import { Feedback, Interview } from "@/types";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DisplayTechLogo from "./display-tech-logo";
type Props = {
  interview: Interview;
};
const InterviewCard = ({ interview }: Props) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(interview.type)
    ? "Mixed"
    : interview.type;
  const formatedDate = dayjs(feedback?.createdAt || interview.createdAt).format(
    "MMM DD, YYYY"
  );

  return (
    <div className="w-[360px] card-border max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 py-2 px-4 w-fit rounded-bl-lg bg-light-400">
            <p className="badge-text">{normalizedType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />
          <h3 className="mt-5 capitalize">{interview.role} Interview</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                alt="calendar"
                width={22}
                height={22}
              />
              <p>{formatedDate}</p>
            </div>
            <div className="flex flex-row gap-2">
              <Image src="/star.svg" alt="star" width={22} height={22} />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>
          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment ||
              "You haven't taken this interview yet. Take it now to improve your skills."}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <p>Tech icons</p>
            <DisplayTechLogo techstack={interview.techstack} />
          </div>
          <Button className="btn-primary">
            <Link
              href={
                feedback
                  ? `/interview/${interview.id}/feedback`
                  : `/interview/${interview.id}`
              }
            >
              {feedback ? "View Feedback" : "Start Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
