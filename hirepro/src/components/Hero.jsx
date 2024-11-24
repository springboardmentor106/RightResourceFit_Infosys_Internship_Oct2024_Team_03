import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="body-font bg-secondary">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 mb:mb-0">
          <img
            className="object-cover object-center hover:scale-105 hover:transition rounded"
            src="/hero.jpeg"
            alt="hero"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-medium">
            Hirepro <br className="hidden lg:inline-block" />
            Your go to solution for finding jobs
          </h1>
          <p className="mb-8 leading-relaxed md:w-[80%]">
          Hirepro – Your Ultimate Job Search Companion
          Discover your dream job with Hirepro, the smart job-finding app that connects you to endless career opportunities tailored to your skills and aspirations. With personalized job recommendations, resume-building tools, and real-time updates, Hirepro makes landing your next job faster and easier than ever. Whether you're just starting out or looking to take the next big step in your career, Hirepro is here to help you succeed. Start your journey to success today with Hirepro – where your next opportunity is just a tap away!
          </p>
          <div className="flex justify-center gap-4">
            <Link href={"/jobs"}>
              <Button>Browse Jobs</Button>
            </Link>
            <Link href={"/about"}>
              <Button variant="outline">About Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
