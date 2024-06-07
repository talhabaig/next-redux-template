"use client";
import React, { useState } from "react";
import { getImagePath } from './utils.js';
import { FeedReadMore } from "../components/common/readMore";
const projectArr = [
  {
    img: getImagePath("pos.webp"),
    heading: "dreams pos",
    description:
      "We are excited to present our Point of Sale (POS) system project, a robust and user-friendly solution designed to streamline and enhance the retail experience.",
  },
  {
    img: getImagePath("Emboldadmin1.webp"),
    heading: "embold",
    description:
      "We had the privilege of creating a dynamic website for prominent influencers. This website is a vibrant reflection of the influencer's personal brand and online presence.",
  },
  {
    img: getImagePath("IBAclient1.webp"),
    heading: "iba",
    description:
      "We designed a comprehensive healthcare management system that streamlined patient records, appointment scheduling, and billing processes.",
  },
  {
    img: getImagePath("aukomodashboard.webp"),
    heading: "aokumo",
    description:
      "Visit our digital sanctuary, where creativity meets innovation in an AI-driven symphony. Dive into a realm where every pixel tells a story, crafted by our GPT-inspired platform.",
  },
  {
    img: getImagePath("IBA1.webp"),
    heading: "iba admin",
    description:
      "My team and I designed a comprehensive healthcare management system that streamlined patient records, appointment scheduling, and billing processes.",
  },
  {
    img: getImagePath("autoprosperhomepage.webp"),
    heading: "autoprosper",
    description:
      "Step into the future of car shopping with Autoprosper, where cutting-edge AI algorithms match you with your dream vehicle.",
  },
  {
    img: getImagePath("otrdashboard.webp"),
    heading: "otr",
    description:
      "Join the revolution in industrial analytics with OTR, where our platform harnesses the wealth of data generated by working machinery to drive operational excellence.",
  },
  {
    img: getImagePath("LEC1.webp"),
    heading: "lec",
    description:
      "We played a pivotal role in developing an interactive e-learning platform, integrating features such as video streaming, quizzes, and progress tracking.",
  },
  {
    img: getImagePath("Lummoshop1.webp"),
    heading: "lummoshop",
    description:
      "We spearheaded the development of a robust e-commerce platform from scratch, incorporating user-friendly interfaces and secure payment gateways.",
  },
  {
    img: getImagePath("Artnoion.webp"),
    heading: "artonion",
    description:
      "Your gateway to a world of endless creativity, where imagination knows no bounds and every design tells a unique story.",
  },
  {
    img: getImagePath("Next-Bank-Landing-Page.png"),
    heading: "next bank",
    description:
      "Explore a world of possibilities with Next Bank, where our AI-powered solutions anticipate your needs, streamline your finances, and pave the way for a brighter financial future",
  },
  {
    img: getImagePath("Profileavnak.webp"),
    heading: "avank",
    description:
      "At Avank Our user-friendly interface makes managing your money effortless, whether you're saving for the future.",
  },
  {
    img: getImagePath("wevozregister.webp"),
    heading: "wevos",
    description:
      "At Wevoz, we understand that time is precious. That's why our admin panel is engineered for efficiency, allowing you to accomplish tasks with ease and focus.",
  },
  {
    img: getImagePath("rootpointerhome.webp"),
    heading: "rootpointers",
    description:
      "RootPointers delivers comprehensive IT solutions, providing a hassle-free experience from start to deployment and beyond.",
  },
  {
    img: getImagePath("pollyahome.webp"),
    heading: "pollya",
    description:
      "Pollya: Your trusted companion in the ever-evolving world of news, delivering timely updates and insightful analysis with a commitment to accuracy and integrity.",
  },
  {
    img: getImagePath("norswap1.webp"),
    heading: "norswap",
    description:
      "We thrilled to present a recent collaboration where I developed a cutting-edge cryptocurrency website for a valued client.",
  },
];

function OurPortfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(projectArr.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentProjects = projectArr.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getVisiblePages = () => {
    const pageNumbers = [];
    if (totalPages <= 8) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 8; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage > totalPages - 4) {
        for (let i = totalPages - 7; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - 3; i <= currentPage + 4; i++) {
          pageNumbers.push(i);
        }
      }
    }
    return pageNumbers;
  };

  return (
    <div className="bg-[#BEF3FF] p-[2rem] xl:p-[4rem] xl:px-[5rem]">
      <div className="flex flex-col md:justify-between md:flex-row md:flex-wrap">
        {currentProjects.map((project, index) => (
          <div
            key={index}
            className="md:basis-full 2xl:basis-[48.5%] flex flex-col gap-5 pb-[3rem] md:pb-[5rem] md:flex-row md:items-center"
          >
            <div className="bg-[#94c0ff] p-4 shadow-[0_0_40px_#94c0ff] basis-1/2 rounded-[9.99px] flex justify-center items-center">
              <div className="cursor-pointer">
                <img
                  className="h-full w-full object-cover"
                  src={project.img}
                  alt={project.heading}
                />
              </div>
            </div>
            <div className="basis-1/2 flex flex-col gap-2 md:gap-1 2xl:gap-3">
              <span className="text-[30px] xl:text-[32px] 2xl:text-[35px] font-semibold text-[#0693EB] leading-[50px] md:leading-[50px] 2xl:leading-[50px] uppercase">
                {project.heading}
              </span>
              <div className="text-[#454545] font-work-sans leading-[23px] md:leading-[20px] lg:leading-[22px] xl:leading-[26.62px] font-light text-[20px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] mb-2 xl:mb-0">
                <FeedReadMore maxLength={140}>
                  {project.description}
                </FeedReadMore>
              </div>
              {/* <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-[#0693EB] font-work-sans text-[19px] lg:text-[16px] xl:text-[19px] font-semibold leading-[22.54px] lg:leading-[18px] xl:leading-[22.54px] tracking-[4%]">
                  View more
                </span>
                <img
                  src="../icons/right.svg"
                  className="lg:h-[18px] lg:w-[18px] 2xl:h-auto xl:w-auto"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center md:p-4 items-center mt-8">
        <div className="bg-[#E0F3FF] rounded-[16px] flex items-center p-1 md:p-3 border-[1px] border-[#0693EB]">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-2 md:px-3 py-1 mx-1 text-[#0693EB] disabled:opacity-50"
          >
            <img src="../icons/left-pagination.svg" className="" alt="" />
          </button>
          {getVisiblePages().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`flex items-center justify-center mx-1 md:mx-4 xl:mx-6 h-[28px] w-[28px] rounded-[50%] ${
                currentPage === page
                  ? "bg-[#0693EB] text-white"
                  : "text-[#000] w-[14px] h-[13px]"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-2 md:px-3 py-1 mx-1 text-[#0693EB] disabled:opacity-50"
          >
            <img src="../icons/right-pagination.svg" className="" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurPortfolio;