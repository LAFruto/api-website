"use client";

// Embla Docs

import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="-rotate-180 bg-blue-50 hover:bg-blue-90 disabled:opacity-40 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      type="button"
      {...restProps}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 16"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-2 stroke-white"
      >
        <path
          d="M1.59814 7.06201C1.04586 7.06201 0.598145 7.50973 0.598145 8.06201C0.598144 8.6143 1.04586 9.06201 1.59814 9.06201L1.59814 7.06201ZM38.7251 8.76912C39.1156 8.3786 39.1156 7.74543 38.7251 7.35491L32.3612 0.990947C31.9706 0.600422 31.3375 0.600422 30.9469 0.990946C30.5564 1.38147 30.5564 2.01464 30.9469 2.40516L36.6038 8.06201L30.9469 13.7189C30.5564 14.1094 30.5564 14.7426 30.9469 15.1331C31.3375 15.5236 31.9706 15.5236 32.3612 15.1331L38.7251 8.76912ZM1.59814 9.06201L38.018 9.06201L38.018 7.06201L1.59814 7.06201L1.59814 9.06201Z"
          fill="#2A2D34"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className=" bg-blue-50 hover:bg-blue-90 disabled:opacity-40 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      type="button"
      {...restProps}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 40 16"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-2 stroke-white"
      >
        <path
          d="M1.59814 7.06201C1.04586 7.06201 0.598145 7.50973 0.598145 8.06201C0.598144 8.6143 1.04586 9.06201 1.59814 9.06201L1.59814 7.06201ZM38.7251 8.76912C39.1156 8.3786 39.1156 7.74543 38.7251 7.35491L32.3612 0.990947C31.9706 0.600422 31.3375 0.600422 30.9469 0.990946C30.5564 1.38147 30.5564 2.01464 30.9469 2.40516L36.6038 8.06201L30.9469 13.7189C30.5564 14.1094 30.5564 14.7426 30.9469 15.1331C31.3375 15.5236 31.9706 15.5236 32.3612 15.1331L38.7251 8.76912ZM1.59814 9.06201L38.018 9.06201L38.018 7.06201L1.59814 7.06201L1.59814 9.06201Z"
          fill="#2A2D34"
        />
      </svg>
      {children}
    </button>
  );
};
