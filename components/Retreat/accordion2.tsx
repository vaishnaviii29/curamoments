import React, { useState, ReactNode } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="">
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 ${
            isOpen ? 'rounded-t-xl' : 'border-b border-gray-200 dark:border-gray-700'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="accordion-body"
        >
          <span className="flex items-center font-semibold font-spartan text-black text-left w-full">
            {title}
          </span>
          <FiChevronDown
            className={`w-8 h-8 transform ${
              isOpen ? 'rotate-180' : ''
            } transition-transform duration-200`}
          />
        </button>
      </h2>
      {isOpen && (
        <div className="p-5 border-b border-gray-200 dark:border-gray-700 text-left">
          {children}
        </div>
      )}
    </div>
  );
};

const Accordion: React.FC = () => {
  return (
    <div id="accordion-open">
      <AccordionItem title="Lorem Ipsum is simply dummy text of the printing and typesetting industry?" defaultOpen={true}>
        <p className="mb-2 text-[#181818] font-spartan dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </AccordionItem>

      <AccordionItem title="Lorem Ipsum is simply dummy text of the printing and typesetting industry?">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </AccordionItem>

      <AccordionItem title="Lorem Ipsum is simply dummy text of the printing and typesetting industry?">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </AccordionItem>

      <AccordionItem title="Lorem Ipsum is simply dummy text of the printing and typesetting industry?">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </AccordionItem>

      <AccordionItem title="Lorem Ipsum is simply dummy text of the printing and typesetting industry?">
        <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </AccordionItem>
    </div>
  );
};

export default Accordion;
