import React from "react";
import bannerimage from "../assets/banner.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex">
      <div id="image" className="flex-none">
        <img src={bannerimage} alt="banner" className="h-screen" />
      </div>
      <div id="text" className="flex-1 p-8">
        <h1 className="text-center text-4xl font-bold mb-8">
          Welcome to QuizId
        </h1>
        <p className="text-justify text-lg my-16 ">
          Empower Your Mind, Elevate Your Knowledge with QuizId! Dive into a
          world of endless learning and discovery. Explore captivating quizzes
          tailored to your interests, whether it's trivia, academics, or
          personal growth. Join a vibrant community of learners and challenge
          yourself to new heights. From fun-filled quizzes to thought-provoking
          assessments, QuizId offers something for everyone. Fuel your
          curiosity, sharpen your skills, and unlock your potential. With
          QuizId, knowledge is not just a destination but a thrilling journey.
          Start your quest for wisdom today and let QuizId be your trusted
          companion in the pursuit of enlightenment.
        </p>
        <div className="flex justify-center mt-20">
          <Link to="/login">
            <button className="text-xl py-2 px-4 rounded-lg bg-[#9ce5f0] border border-gray-700 hover:bg-teal-400">
              Let's Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
