"use client";

import GoodbyeSlide from "@/components/slides/goodbye-slide";
import Slide1 from "@/components/slides/slide-1";
import Slide10 from "@/components/slides/slide-10";
import Slide2 from "@/components/slides/slide-2";
import Slide4 from "@/components/slides/slide-4";
import Slide5 from "@/components/slides/slide-5";
import Slide6 from "@/components/slides/slide-6";
import Slide7 from "@/components/slides/slide-7";
import Slide8 from "@/components/slides/slide-8";
import Slide9 from "@/components/slides/slide-9";
import WelcomeSlide from "@/components/slides/welcome-slide";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Database, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 11;
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (currentSlide < totalSlides - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 0 && slideNumber < totalSlides) {
      setCurrentSlide(slideNumber);
    }
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <WelcomeSlide />;
      case 1:
        return <Slide1 />;
      case 2:
        return <Slide2 />;
      case 3:
        return <Slide4 />;
      case 4:
        return <Slide5 />;
      case 5:
        return <Slide6 />;
      case 6:
        return <Slide7 />;
      case 7:
        return <Slide8 />;
      case 8:
        return <Slide9 />;
      case 9:
        return <Slide10 />;
      case 10:
        return <GoodbyeSlide />;
      default:
        return <WelcomeSlide />;
    }
  };

  // Avoid hydration mismatch by only rendering after mounting
  if (!mounted) return null;

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-gray-950">
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5 text-blue-500" />
          <h1 className="text-xl font-bold">SQL Injection: Attack & Defense</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Slide {currentSlide + 1} of {totalSlides}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-hidden overflow-y-scroll">
        {renderSlide()}
      </main>

      <footer className="border-t bg-white dark:bg-gray-950 p-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>

          <div className="flex space-x-1">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full ${
                  currentSlide === index
                    ? "bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
          >
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
}
