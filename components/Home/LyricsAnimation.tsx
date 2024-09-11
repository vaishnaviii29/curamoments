import React, { useState, useEffect, useRef } from 'react';

interface LyricsAnimationProps {
  lyrics: { text: string; timestamp: number }[];
  interval?: number;
}

const LyricsAnimation: React.FC<LyricsAnimationProps> = ({ lyrics, interval = 3000 }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [backgroundSize, setBackgroundSize] = useState('100% 100%');
  const [gradientStops, setGradientStops] = useState('0%, #F18267 13%, #EE84BC 33%, #C6A5EA 100%');
  const [hasAnimatedNextLine, setHasAnimatedNextLine] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const totalDuration = interval * lyrics.length;

    if (scrollRef.current) {
      scrollRef.current.style.transition = `width ${totalDuration}ms linear`;
      scrollRef.current.style.width = '100%';
    }

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setBackgroundSize('150% 150%');
      setGradientStops('0%, #F18267 20%, #EE84BC 50%, #C6A5EA 100%');
      setHasAnimatedNextLine(false);

      setTimeout(() => {
        setBackgroundSize('100% 100%');
        setGradientStops('0%, #F18267 13%, #EE84BC 33%, #C6A5EA 100%');
        setCurrentLineIndex((prevIndex) =>
          prevIndex < lyrics.length - 1 ? prevIndex + 1 : prevIndex
        );
        setIsTransitioning(false);
      }, 1000);
    }, interval);

    return () => clearInterval(timer);
  }, [lyrics, interval]);

  const currentLine = lyrics[currentLineIndex];
  const nextLine = lyrics[currentLineIndex + 1];

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <style jsx>{`
        @keyframes push-up-fade-out {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-50px);
            opacity: 0;
          }
        }

        @keyframes slide-in-from-below {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-push-up-fade-out {
          animation: push-up-fade-out 1s ease-out forwards;
        }

        .animate-slide-in-from-below {
          animation: slide-in-from-below 1s ease-out forwards;
        }

        .hidden {
          opacity: 0;
        }
      `}</style>

      <div
        className="absolute inset-0 z-0"
        style={{
          background: `#C6A5EA`,
          backgroundImage: `radial-gradient(circle, #F0914B 0%, #F18267 0%, #EE84BC 0%, #C6A5EA 100%)`,
          backgroundSize: backgroundSize,
          backgroundPosition: 'center',
          transition: 'background-size 1s ease-out, background-image 1s ease-out',
          zIndex: -1,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #F0914B 0%, #F18267 ${isTransitioning ? '20%' : '13%'}, #EE84BC ${isTransitioning ? '50%' : '33%'}, #C6A5EA 100%)`,
          }}
        />
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
        <div
          className="flex flex-col items-center justify-center"
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)', // Center the stacked lines vertically
            transition: 'transform 1s ease',
          }}
        >
          <div
            className={`flex items-center justify-center text-5xl text-white font-ledger ${
              isTransitioning ? 'animate-push-up-fade-out' : ''
            }`}
            style={{
              textAlign: 'center',
              transition: 'transform 1s ease, opacity 1s ease',
            }}
          >
            {currentLine?.text}
          </div>

          {nextLine && !hasAnimatedNextLine && (
            <div
              className={`flex items-center justify-center text-5xl text-white font-ledger ${
                isTransitioning ? 'animate-slide-in-from-below' : 'hidden'
              }`}
              style={{
                textAlign: 'center',
                transition: 'transform 1s ease, opacity 1s ease',
              }}
              onAnimationEnd={() => setHasAnimatedNextLine(true)}
            >
              {nextLine?.text}
            </div>
          )}
        </div>

        <div className="flex flex-col items-center w-full px-20 mt-auto mb-20">
          <div className="w-full h-2 bg-gray-300">
            <div
              ref={scrollRef}
              className="h-full bg-white"
              style={{ width: '0%' }}
            ></div>
          </div>
          <div className="mt-2 text-left w-full text-white">Loading</div>
        </div>
      </div>
    </div>
  );
};

export default LyricsAnimation;
