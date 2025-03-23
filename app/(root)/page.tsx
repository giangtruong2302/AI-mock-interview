import { Button } from "@/components/ui/button";
import { dummyDataInterview } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import InterviewCard from "../components/interview-card";

export default function Home() {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview Ready with AI-Powered Practice & Feedback</h2>
          <p>Practice on real interview question and get instant feedback</p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          className="max-sm:hidden"
          width={400}
          height={400}
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interview</h2>
        <div className="interviews-section">
          <p>You haven&apos;t taken any interview yet</p>
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        <div className="interviews-section">
          {dummyDataInterview.map((interview) => {
            return <InterviewCard key={interview.id} interview={interview} />;
          })}
        </div>
      </section>
    </>
  );
}
